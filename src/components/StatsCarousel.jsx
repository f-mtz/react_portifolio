
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Code, Coffee } from "lucide-react";

const stats = [
  {
    number: 357,
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: 123,
    label: "Finished Projects",
    icon: Code,
  },
  {
    number: 637,
    label: "Working Hours",
    icon: Coffee,
  },
];

const Counter = ({ number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  React.useEffect(() => {
    const animation = animate(count, number, {
      duration: 1.5,
      ease: "easeOut"
    });

    return animation.stop;
  }, [count, number]);

  return (
    <motion.span
      className="text-5xl md:text-6xl font-bold text-accent"
    >
      {rounded}
    </motion.span>
  );
};

export default function StatsCarousel() {
  return (
    <div className="w-full bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <Counter number={stat.number} />
              <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
