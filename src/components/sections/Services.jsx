"use client";

import { motion } from "framer-motion";
import { Building2, Contact2, Landmark, Laptop, FileCheck, XCircle } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Открытие бизнеса в ОАЭ",
    description:
      "Полное сопровождение регистрации компании: подбор юрисдикции, подготовка документов, взаимодействие с госорганами.",
  },
  {
    icon: Contact2,
    title: "Визовые услуги",
    description:
      "Оформление резидентских виз, виз для инвесторов и инфлюенсеров. Помощь с Emirates ID и медицинским страхованием.",
  },
  {
    icon: Landmark,
    title: "Free Zone",
    description:
      "Регистрация компании в свободной экономической зоне ОАЭ с 100% иностранным владением и налоговыми льготами.",
  },
  {
    icon: Laptop,
    title: "E-Trader License",
    description:
      "Самый простой способ легально вести онлайн-бизнес в ОАЭ. Быстрое оформление для резидентов и нерезидентов.",
  },
  {
    icon: FileCheck,
    title: "Легализация документов",
    description:
      "Перевод, нотариальное заверение, апостиль и легализация документов для переезда и ведения бизнеса в ОАЭ.",
  },
  {
    icon: XCircle,
    title: "Ликвидация компании",
    description:
      "Грамотное закрытие бизнеса в ОАЭ с минимизацией рисков. Разрешение споров, расчёты с кредиторами, отмена лицензий.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-white mb-3 drop-shadow-md">
            Наши услуги
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-balance text-shadow-lg">
            Всё для вашего бизнеса в ОАЭ
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-white text-shadow">
            Полный комплекс консалтинговых услуг — от регистрации компании до получения резидентской визы
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative rounded-2xl glass-card p-6 overflow-hidden"
            >
              <div className="relative inline-flex items-center justify-center rounded-xl bg-white/10 p-3 mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="relative font-serif text-lg font-semibold text-white drop-shadow-sm mb-2">
                {service.title}
              </h3>
              <p className="relative text-white leading-relaxed text-sm drop-shadow-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
