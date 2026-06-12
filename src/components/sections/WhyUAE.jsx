"use client";

import { motion } from "framer-motion";
import { Check, Landmark, Wallet, Globe, Shield } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "0% подоходного налога",
    description: "Для физических лиц — полное отсутствие подоходного налога.",
  },
  {
    icon: Check,
    title: "0% налог на дивиденды",
    description: "Вывод прибыли без дополнительной фискальной нагрузки.",
  },
  {
    icon: Landmark,
    title: "9% корпоративный налог",
    description: "Только с прибыли свыше установленного лимита. До этого — 0%.",
  },
  {
    icon: Globe,
    title: "Нет валютного контроля",
    description: "Свободное перемещение капитала между странами без ограничений.",
  },
  {
    icon: Shield,
    title: "Стабильная банковская система",
    description: "Надёжные банки ОАЭ с мультивалютными счетами и онлайн-сервисами.",
  },
];

export default function WhyUAE() {
  return (
    <section id="why-uae" className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-white mb-3 drop-shadow-md">
              Преимущества юрисдикции
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-balance text-shadow-lg">
              Почему бизнес в ОАЭ — это выгодно?
            </h2>
            <p className="mt-6 text-lg text-white leading-relaxed text-shadow">
              ОАЭ — это не просто «низкие налоги». Это возможность быстрее накапливать
              капитал и масштабировать бизнес без лишней фискальной нагрузки.
              Грамотно выстроенная структура может увеличить вашу чистую прибыль
              без роста оборота.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/971528383246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/20"
              >
                Рассчитать выгоду
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex gap-5 rounded-2xl glass-card p-5"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2.5">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white drop-shadow-sm mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white leading-relaxed drop-shadow-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
