import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../../lib/motion.js';

export default function FadeInUp({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}) {
  const MotionComponent = motion[Component] ?? motion.div;
  return (
    <MotionComponent
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ ...fadeInUp.visible.transition, delay }}
    >
      {children}
    </MotionComponent>
  );
}
