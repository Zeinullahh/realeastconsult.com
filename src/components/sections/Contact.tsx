"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-gold-dark mb-3">
              Свяжитесь с нами
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-dark text-balance">
              Готовы начать?
            </h2>
            <p className="mt-6 text-lg text-dark/60 leading-relaxed">
              Запишитесь на консультацию и узнайте, как передать рутину профессионалам,
              чтобы ваш бизнес в ОАЭ работал без сбоев. Разберём вашу ситуацию и рассчитаем выгоду.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="https://wa.me/971528383246"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm border border-gold/5 transition-all hover:shadow-md hover:border-gold/20"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-green-500/10 p-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">WhatsApp</p>
                  <p className="text-lg font-medium text-dark group-hover:text-gold-dark transition-colors">
                    +971 52 838 3246
                  </p>
                </div>
              </a>

              <a
                href="tel:+971581051108"
                className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm border border-gold/5 transition-all hover:shadow-md hover:border-gold/20"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-gold/10 p-3">
                  <Phone className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">Телефон</p>
                  <p className="text-lg font-medium text-dark group-hover:text-gold-dark transition-colors">
                    +971 58 105 1108
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@realeastconsult.com"
                className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm border border-gold/5 transition-all hover:shadow-md hover:border-gold/20"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-teal/10 p-3">
                  <Mail className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">Email</p>
                  <p className="text-lg font-medium text-dark group-hover:text-gold-dark transition-colors">
                    info@realeastconsult.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm border border-gold/5">
                <div className="inline-flex items-center justify-center rounded-full bg-terracotta/10 p-3">
                  <MapPin className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <p className="text-sm text-dark/50">Локация</p>
                  <p className="text-lg font-medium text-dark">
                    Дубай, ОАЭ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl bg-dark p-8 sm:p-10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                Выберите удобный способ связи
              </h3>
              <p className="text-white/50 mb-8">
                Напишите нам напрямую — мы ответим в ближайшее время и ответим на все вопросы.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/971528383246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-5 transition-all hover:bg-white/10 hover:border-green-500/30"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-green-500/15 p-3">
                    <MessageCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Написать в</p>
                    <p className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                      WhatsApp
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/realeast.consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-5 transition-all hover:bg-white/10 hover:border-pink-500/30"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-pink-500/15 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-400"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Написать в</p>
                    <p className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                      Instagram
                    </p>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="tel:+971581051108"
                    className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-xs text-white/50">Телефон</p>
                      <p className="text-sm font-medium text-white">+971 58 105 1108</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@realeastconsult.com"
                    className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10"
                  >
                    <Mail className="w-5 h-5 text-teal" />
                    <div>
                      <p className="text-xs text-white/50">Email</p>
                      <p className="text-sm font-medium text-white">info@realeastconsult.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
