"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-sm font-medium tracking-wide text-white drop-shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Консалтинговые услуги в ОАЭ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-4xl font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance text-shadow-lg"
        >
          Ваш проводник в{" "}
          <span className="text-white drop-shadow-lg">
            бизнес-среду ОАЭ
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white sm:text-xl text-shadow"
        >
          Пока вы развиваете компанию и заключаете сделки, мы решаем все вопросы
          с документами и госструктурами. Без бюрократии и бесконечных процессов.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8"
        >
          <div className="glass-dark rounded-2xl px-6 py-4 flex flex-col items-center min-w-[110px]">
            <span className="text-2xl font-serif font-semibold text-white drop-shadow-md">0%</span>
            <span className="text-sm text-white drop-shadow">подоходный налог</span>
          </div>
          <div className="glass-dark rounded-2xl px-6 py-4 flex flex-col items-center min-w-[110px]">
            <span className="text-2xl font-serif font-semibold text-white drop-shadow-md">100+</span>
            <span className="text-sm text-white drop-shadow">открытых компаний</span>
          </div>
          <div className="glass-dark rounded-2xl px-6 py-4 flex flex-col items-center min-w-[110px]">
            <span className="text-2xl font-serif font-semibold text-white drop-shadow-md">24/7</span>
            <span className="text-sm text-white drop-shadow">поддержка</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
