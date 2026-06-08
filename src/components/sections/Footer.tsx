"use client";

import { MessageCircle, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Услуги",
    links: [
      { label: "Открытие бизнеса", href: "#services" },
      { label: "Визовые услуги", href: "#services" },
      { label: "Free Zone", href: "#services" },
      { label: "E-Trader License", href: "#services" },
      { label: "Легализация", href: "#services" },
      { label: "Ликвидация", href: "#services" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Почему ОАЭ", href: "#why-uae" },
      { label: "Партнёрам", href: "#referral" },
      { label: "Контакты", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,124,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/logo.jpg"
                alt="Realeast Consulting"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold text-white">Realeast</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold -mt-0.5">Consulting</span>
              </div>
            </a>
            <p className="max-w-sm text-white/50 leading-relaxed mb-6">
              Ваш проводник в бизнес-среду ОАЭ. Полный спектр консалтинговых услуг
              по регистрации и сопровождению бизнеса в Объединённых Арабских Эмиратах.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/971528383246"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 text-white/70 hover:text-green-400 hover:border-green-500/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/realeast.consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 text-white/70 hover:text-pink-400 hover:border-pink-500/30 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Realeast Consulting. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+971581051108"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              +971 58 105 1108
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
