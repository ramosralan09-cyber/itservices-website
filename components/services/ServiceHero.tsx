'use client';

import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  intro: string;
}

export function ServiceHero({ title, intro }: ServiceHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-navy via-charcoal to-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
