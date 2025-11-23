
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  text: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, text }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString() + text;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, text]);
  
  const displayText = from > 0 ? `${from.toLocaleString()}${text}` : text;

  return <p ref={nodeRef} className="text-4xl md:text-5xl font-bold neon-text text-glow h-14 flex items-center justify-center">{displayText}</p>;
};


const METRICS_DATA = [
  { value: 30, text: 'M+', label: 'Marketing Media Addressed' },
  { value: 6, text: '+ Yrs', label: 'Experience' },
  { value: null, text: 'GenAI', label: 'Hackathon Winner' },
  { value: null, text: 'Published', label: 'Research' },
];

const Metrics: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-[#0C0F1D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {METRICS_DATA.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative text-center p-6 bg-gray-500/5 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-300 hover:border-[#88FF55]/50 hover:bg-gray-500/10"
            >
              {metric.value ? (
                <AnimatedCounter from={0} to={metric.value} text={metric.text} />
              ) : (
                 <p className="text-3xl md:text-4xl font-bold neon-text text-glow h-14 flex items-center justify-center">{metric.text}</p>
              )}
              <p className="mt-2 text-gray-400">{metric.label}</p>
              {index < METRICS_DATA.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-px h-16 bg-gradient-to-b from-transparent via-[#88FF55]/50 to-transparent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
