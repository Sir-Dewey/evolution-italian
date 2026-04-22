import { useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { eras, Era } from "@/data/eras";

const TimelineCurve = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // SPACING FIX: Increased nodeSpacing from 200 to 320 to accommodate text
  const viewBoxWidth = 700;
  const nodeSpacing = 320;
  const viewBoxHeight = eras.length * nodeSpacing + 150;

  // Stock photos placed at midpoints between every 2nd era (between eras 1-2, 3-4, 5-6, 7-8, 9-10, 11-12)
  const stockPhotos = [
    "/photos/stock1.jpg",
    "/photos/stock2.jpg",
    "/photos/stock3.jpg",
    "/photos/stock4.webp",
    "/photos/stock5.jpg",
    "/photos/stock6.jpg",
  ];
  const stockImgWidth = 580;
  const stockImgHeight = 140;
  const stockImgX = (viewBoxWidth - stockImgWidth) / 2; // centered: 60
  const stockPositions = [1, 3, 5, 7, 9, 11].map((eraIndex, i) => {
    const y1 = 100 + eraIndex * nodeSpacing;
    const y2 = 100 + (eraIndex + 1) * nodeSpacing;
    const midY = (y1 + y2) / 2;
    return { src: stockPhotos[i], y: midY - stockImgHeight / 2 };
  });

  // Generate alternating positions for the S-curve
  const eraPositions = eras.map((_, i) => ({
    x: i % 2 === 0 ? 350 : 350 + (i % 4 === 1 ? 140 : -140),
    y: 100 + i * nodeSpacing,
  }));

  // Build smooth S-curve path
  const buildPath = () => {
    let d = `M ${eraPositions[0].x} 20`;
    d += ` C ${eraPositions[0].x} 50, ${eraPositions[0].x} 70, ${eraPositions[0].x} ${eraPositions[0].y}`;
    for (let i = 0; i < eraPositions.length - 1; i++) {
      const curr = eraPositions[i];
      const next = eraPositions[i + 1];
      const midY = (curr.y + next.y) / 2;
      d += ` C ${curr.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
    }
    const last = eraPositions[eraPositions.length - 1];
    d += ` L ${last.x} ${viewBoxHeight}`;
    return d;
  };

  const pathD = buildPath();

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-12">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        {/* Clip paths for stock photo rounded corners */}
        <defs>
          {stockPositions.map((img, i) => (
            <clipPath key={`clip-${i}`} id={`stockClip-${i}`}>
              <rect x={stockImgX} y={img.y} width={stockImgWidth} height={stockImgHeight} rx="8" ry="8" />
            </clipPath>
          ))}
        </defs>

        {/* Stock photos as atmospheric dividers between eras */}
        {stockPositions.map((img, i) => (
          <image
            key={`stock-${i}`}
            href={img.src}
            x={stockImgX}
            y={img.y}
            width={stockImgWidth}
            height={stockImgHeight}
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#stockClip-${i})`}
            opacity="0.3"
          />
        ))}

        {/* Background path (dim) */}
        <path
          d={pathD}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Animated glowing path that draws on scroll */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: smoothProgress }}
          opacity="0.6"
        />

        {/* Era markers and integrated text */}
        {eras.map((era, i) => {
          const pos = eraPositions[i];
          const isLeft = pos.x <= 350;

          return (
            <TimelineNode
              key={era.id}
              era={era}
              index={i}
              pos={pos}
              isLeft={isLeft}
              scrollProgress={smoothProgress}
              totalEras={eras.length}
              // Moving from Timeline to an Era moves "forward" (direction: 1)
              onClick={() => navigate(`/era/${era.id}`, { state: { direction: 1 } })}
            />
          );
        })}
      </svg>
    </div>
  );
};

/** Individual timeline node with localized hover state for maximum performance */
function TimelineNode({
  era,
  index,
  pos,
  isLeft,
  scrollProgress,
  totalEras,
  onClick,
}: {
  era: Era;
  index: number;
  pos: { x: number; y: number };
  isLeft: boolean;
  scrollProgress: MotionValue<number>;
  totalEras: number;
  onClick: () => void;
}) {
  // PERFORMANCE FIX: Local hover state. Only this specific node re-renders when hovered!
  const [isHovered, setIsHovered] = useState(false);

  // Appearance threshold based on scroll
  const threshold = index / totalEras;
  const fadeEnd = threshold + 0.04;
  const opacity = useTransform(scrollProgress, [threshold, fadeEnd], [0, 1]);
  
  // Slide in from the left or right
  const slideOffset = isLeft ? -20 : 20;
  const translateX = useTransform(scrollProgress, [threshold, fadeEnd], [slideOffset, 0]);

  // Text box dimensions
  const boxWidth = 280;
  const boxHeight = 250;
  const boxX = isLeft ? pos.x - boxWidth - 30 : pos.x + 30;
  // Center the text block vertically with the node
  const boxY = pos.y - 60; 

  return (
    <motion.g
      className="cursor-pointer group"
      style={{ opacity }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Outer glow circle - Now uses Framer Motion for hardware-accelerated smooth scaling */}
      <motion.circle
        cx={pos.x}
        cy={pos.y}
        r="22"
        fill="hsl(var(--accent))"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.25 : 0,
          scale: isHovered ? 1 : 0.8 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {/* Main dot */}
      <motion.circle
        cx={pos.x}
        cy={pos.y}
        r="8"
        animate={{ fill: isHovered ? "hsl(var(--accent))" : "hsl(var(--foreground))" }}
        transition={{ duration: 0.3 }}
      />
      {/* Inner dot */}
      <circle
        cx={pos.x}
        cy={pos.y}
        r="3"
        fill="hsl(var(--background))"
      />

      {/* HTML text rendered inside the SVG */}
      <foreignObject
        x={boxX}
        y={boxY}
        width={boxWidth}
        height={boxHeight}
        style={{ overflow: "visible" }}
      >
        <motion.div
          style={{ x: translateX }}
          className={`flex flex-col h-full w-full ${
            isLeft ? "items-end text-right" : "items-start text-left"
          }`}
        >
          {/* Year */}
          <motion.h3
            animate={{ 
              color: isHovered ? "hsl(var(--accent))" : "hsl(var(--foreground))",
              textShadow: isHovered ? "0 0 15px hsl(var(--accent) / 0.5)" : "none"
            }}
            transition={{ duration: 0.3 }}
            className="font-display text-3xl font-bold"
          >
            {era.year}
          </motion.h3>
          
          {/* Title */}
          <motion.h4
            animate={{ color: isHovered ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
            transition={{ duration: 0.3 }}
            className="font-display text-xs tracking-[0.15em] uppercase mt-1 mb-3"
          >
            {era.title}
          </motion.h4>
          
          {/* Preview Text */}
          <motion.p
            animate={{ 
              color: isHovered ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
              opacity: isHovered ? 1 : 0.6
            }}
            transition={{ duration: 0.3 }}
            className="font-body text-sm leading-relaxed"
          >
            {era.preview}
          </motion.p>
        </motion.div>
      </foreignObject>
    </motion.g>
  );
}

export default TimelineCurve;