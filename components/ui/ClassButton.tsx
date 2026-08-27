
import { motion } from "motion/react";

const RADIUS = "0.5rem";

export default function ClassButton({ children, active, onClick, isFirst, isLast }: { children: React.ReactNode; active: boolean; onClick: () => void; isFirst: boolean; isLast: boolean; }) {
  return (
    <button onClick={onClick} className={`relative px-4 py-2 text-center cursor-pointer transition-colors duration-200 ${active ? "text-ink" : "text-ink-muted"}`}>
      {active && (
        <motion.div
          layoutId="class-pill"
          className="absolute inset-0 bg-surface-hover"
          style={{
            borderTopLeftRadius: isFirst ? RADIUS : 0,
            borderTopRightRadius: isLast ? RADIUS : 0,
          }}
          transition={{ type: "spring", duration: 0.25, bounce: 0 }}
        />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
