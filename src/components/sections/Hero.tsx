"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-teal-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,124,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,107,107,0.15),transparent_50%)]" />
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,124,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,124,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm font-medium tracking-wide text-gold-light">
            Консалтинговые услуги в ОАЭ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-4xl font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          Ваш проводник в{" "}
          <span className="text-gold">бизнес-среду ОАЭ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          Пока вы развиваете компанию и заключаете сделки, мы решаем все вопросы 
          с документами и госструктурами. Без бюрократии и бесконечных процессов.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/971528383246"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Написать в WhatsApp
          </a>
          <a
            href="tel:+971581051108"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
          >
            <Phone className="w-5 h-5" />
            +971 58 105 1108
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 text-white/50 text-sm"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif font-semibold text-gold">0%</span>
            <span>подоходный налог</span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-serif font-semibold text-gold">100+</span>
            <span>открытых компаний</span>
          </div>
          <div className="h-10 w-px bg-white/10 hidden sm:block" />
          <div className="flex flex-col items-center hidden sm:flex">
            <span className="text-2xl font-serif font-semibold text-gold">24/7</span>
            <span>поддержка</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
