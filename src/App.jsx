import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, MessageCircle, Ruler, Truck } from "lucide-react";

const TELEGRAM_URL = "https://t.me/omni1x";
const CHANNEL_URL = "https://t.me/manyoriginal";
const DROP_OPTIONS = {
  premium: { price: "15€" },
  basic: { price: "6€" },
};
const LOGO_PATH = "M 441 0 L 438 3 L 430 39 L 422 57 L 413 66 L 400 73 L 374 79 L 367 83 L 369 87 L 391 91 L 407 96 L 415 101 L 425 112 L 429 122 L 430 135 L 428 147 L 421 167 L 401 200 L 389 215 L 375 229 L 349 248 L 331 255 L 322 254 L 295 238 L 280 231 L 257 224 L 239 221 L 176 221 L 151 225 L 121 233 L 110 229 L 94 214 L 72 187 L 55 160 L 42 134 L 32 109 L 21 74 L 13 40 L 10 20 L 7 21 L 3 55 L 3 138 L 6 179 L 6 244 L 1 306 L 1 362 L 4 388 L 9 411 L 16 432 L 26 453 L 36 469 L 59 496 L 80 514 L 100 528 L 135 546 L 161 555 L 179 559 L 194 561 L 234 561 L 265 556 L 301 543 L 324 531 L 341 520 L 362 503 L 378 487 L 403 454 L 420 422 L 426 407 L 435 379 L 445 333 L 454 257 L 454 142 L 457 117 L 462 107 L 472 98 L 484 93 L 512 88 L 518 85 L 518 83 L 514 80 L 480 72 L 469 66 L 461 59 L 454 46 L 447 21 L 445 8 Z M 300 561 L 282 562 L 247 572 L 219 576 L 192 575 L 175 571 L 169 571 L 168 620 L 171 649 L 179 684 L 184 694 L 190 699 L 194 699 L 203 689 L 254 593 L 256 593 L 249 620 L 234 660 L 218 692 L 200 721 L 190 743 L 190 765 L 192 769 L 200 777 L 208 781 L 215 783 L 232 784 L 252 779 L 260 774 L 274 760 L 287 738 L 296 714 L 301 694 L 306 665 L 309 635 L 308 577 L 306 568 L 304 564 Z M 141 560 L 130 561 L 122 568 L 108 595 L 91 645 L 86 665 L 81 699 L 81 730 L 84 745 L 89 756 L 100 768 L 105 771 L 123 776 L 142 775 L 157 769 L 165 761 L 169 753 L 170 734 L 161 684 L 157 648 L 156 613 L 159 567 L 149 562 Z M 390 367 L 391 376 L 387 391 L 379 412 L 368 434 L 347 464 L 328 483 L 304 500 L 279 511 L 262 515 L 244 515 L 238 512 L 238 497 L 250 467 L 267 441 L 290 416 L 320 392 L 354 373 L 380 364 L 385 364 Z M 35 342 L 42 341 L 53 345 L 75 359 L 106 388 L 128 416 L 145 447 L 154 475 L 156 486 L 156 501 L 155 505 L 151 509 L 138 509 L 112 498 L 100 490 L 85 477 L 66 455 L 55 438 L 47 422 L 36 390 L 31 358 L 31 350 Z M 358 652 L 343 647 L 328 647 L 324 650 L 319 678 L 308 722 L 298 750 L 290 766 L 302 769 L 329 769 L 345 766 L 364 757 L 376 744 L 381 734 L 385 719 L 385 694 L 381 679 L 376 669 L 364 656 Z M 58 628 L 42 632 L 33 637 L 23 647 L 18 655 L 11 678 L 11 709 L 17 731 L 26 744 L 35 751 L 48 756 L 66 757 L 73 755 L 67 721 L 68 686 L 74 656 L 82 631 L 69 628 Z";

const copy = {
  en: {
    drop: "Drop 001",
    register: "Register",
    channel: "Channel",
    heroLine: "first drop / logo tee",
    viewDrop: "View Drop 001",
    reserve: "Register",
    firstDrop: "first drop",
    dropTitle: "MANY Logo Tee",
    dropText: "White tee with the MANY logo. Minimal front print, small first drop, direct reservation through Telegram.",
    price: "Price",
    status: "Status",
    statusValue: "registration open",
    payment: "Payment",
    paymentValue: "after DM",
    qualityTitle: "Choose quality",
    premiumName: "Better quality",
    premiumDesc: "Better blank, nicer fit, stronger feel. Best option for the real drop.",
    basicName: "Simple quality",
    basicDesc: "Cheaper blank, simple everyday version. Good if you want the design for less.",
    selected: "selected",
    selectedOption: "Selected option",
    galleryTitle: "Product photos",
    galleryNote: "Photo slots are ready. Replace them with real tee photos when you have them.",
    photoFront: "Front",
    photoFit: "Fit pic",
    photoDetail: "Logo detail",
    howTitle: "How to order",
    howSteps: ["Choose quality", "Pick your size", "Send request in Telegram"],
    sizeTitle: "Size guide",
    sizeNote: "Approximate tee measurements. Final fit can be confirmed in Telegram.",
    size: "Size",
    chest: "Chest",
    length: "Length",
    deliveryTitle: "Pickup / shipping",
    deliveryText: "Pickup or shipping is confirmed personally in Telegram after registration.",
    registerForDrop: "Register for drop",
    askTelegram: "Ask in Telegram",
    reserveTitle: "Reserve your tee",
    reserveText: "Leave your size, contact and quality option. The request will be copied, then Telegram opens. Paste the message and send it to confirm your place in the drop.",
    name: "Name",
    namePlaceholder: "Your name",
    contact: "Telegram / Instagram / phone",
    contactPlaceholder: "@username",
    note: "Note",
    notePlaceholder: "Example: white tee, logo on front",
    submit: "Copy request & open Telegram",
    copied: "Request copied. Paste it in Telegram and send it to @omni1x.",
    notCopied: "No online payment yet. Reservation is confirmed personally in Telegram.",
    footer: "Telegram: @omni1x",
    mockup: "temporary mockup",
    messageIntro: "MANY DROP 001 REGISTRATION",
    messageWant: "I want to reserve MANY logo tee.",
    upcomingLabel: "upcoming",
    upcomingTitle: "Drop 002",
    upcomingName: "Next MANY piece",
    upcomingText: "The second drop is not open yet. This block is only a small preview so people know something new is coming after Drop 001.",
    upcomingStatus: "coming soon",
    channelTitle: "Підпишись на канал дропів",
    channelText: "Усі новини, інформація про наявність і майбутні релізи будуть у Telegram-каналі MANY.",
    openChannel: "Відкрити канал",
    channelTitle: "Follow the drop channel",
    channelText: "All drop news, restock info and future releases will be posted in the MANY Telegram channel.",
    openChannel: "Open channel",
  },
  uk: {
    drop: "Дроп 001",
    register: "Реєстрація",
    channel: "Канал",
    heroLine: "перший дроп / футболка з логотипом",
    viewDrop: "Дивитись Дроп 001",
    reserve: "Зареєструватись",
    firstDrop: "перший дроп",
    dropTitle: "Футболка MANY Logo",
    dropText: "Біла футболка з логотипом MANY. Мінімальний принт спереду, маленький перший дроп, бронювання напряму через Telegram.",
    price: "Ціна",
    status: "Статус",
    statusValue: "реєстрація відкрита",
    payment: "Оплата",
    paymentValue: "після повідомлення",
    qualityTitle: "Обери якість",
    premiumName: "Краща якість",
    premiumDesc: "Краща футболка, приємніша посадка, щільніше відчуття. Основний варіант для дропу.",
    basicName: "Простіша якість",
    basicDesc: "Дешевша футболка, проста версія на кожен день. Добре, якщо хочеш дизайн дешевше.",
    selected: "обрано",
    selectedOption: "Обраний варіант",
    galleryTitle: "Фото товару",
    galleryNote: "Місця під фото вже готові. Коли матимеш реальні фото футболки — просто заміниш placeholder-и.",
    photoFront: "Спереду",
    photoFit: "На людині",
    photoDetail: "Деталь логотипу",
    howTitle: "Як замовити",
    howSteps: ["Обери якість", "Вибери розмір", "Надішли заявку в Telegram"],
    sizeTitle: "Розмірна сітка",
    sizeNote: "Приблизні заміри футболки. Фінальну посадку можна уточнити в Telegram.",
    size: "Розмір",
    chest: "Ширина",
    length: "Довжина",
    deliveryTitle: "Самовивіз / доставка",
    deliveryText: "Самовивіз або доставка узгоджується особисто в Telegram після реєстрації.",
    registerForDrop: "Зареєструватись",
    askTelegram: "Запитати в Telegram",
    reserveTitle: "Забронюй футболку",
    reserveText: "Залиш розмір, контакт і варіант якості. Заявка скопіюється, потім відкриється Telegram. Встав повідомлення та надішли його, щоб підтвердити місце у дропі.",
    name: "Імʼя",
    namePlaceholder: "Твоє імʼя",
    contact: "Telegram / Instagram / телефон",
    contactPlaceholder: "@username",
    note: "Коментар",
    notePlaceholder: "Наприклад: біла футболка, логотип спереду",
    submit: "Скопіювати заявку і відкрити Telegram",
    copied: "Заявку скопійовано. Встав її в Telegram і надішли @omni1x.",
    notCopied: "Онлайн-оплати поки немає. Бронювання підтверджується особисто в Telegram.",
    footer: "Telegram: @omni1x",
    mockup: "тимчасовий макет",
    messageIntro: "MANY DROP 001 REGISTRATION",
    messageWant: "Хочу забронювати футболку MANY logo tee.",
    upcomingLabel: "скоро",
    upcomingTitle: "Дроп 002",
    upcomingName: "Наступна річ MANY",
    upcomingText: "Другий дроп ще не відкритий. Це лише маленький preview, щоб люди бачили, що після Drop 001 буде щось нове.",
    upcomingStatus: "coming soon",
  },
};

const sizes = [
  { size: "S", chest: "50 cm", length: "68 cm" },
  { size: "M", chest: "53 cm", length: "71 cm" },
  { size: "L", chest: "56 cm", length: "74 cm" },
  { size: "XL", chest: "59 cm", length: "77 cm" },
  { size: "XXL", chest: "62 cm", length: "80 cm" },
];

function openTelegram() {
  window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
}

function openChannel() {
  window.open(CHANNEL_URL, "_blank", "noopener,noreferrer");
}

function LogoMark({ className = "" }) {
  return (
    <svg viewBox="0 0 519 785" aria-label="MANY logo" className={`block fill-current ${className}`} role="img">
      <path d={LOGO_PATH} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

function LanguageToggle({ lang, setLang }) {
  return (
    <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
      {["en", "uk"].map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLang(item)}
          className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] transition ${lang === item ? "bg-white text-black" : "text-zinc-500 hover:text-white"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function Header({ lang, setLang, t }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-black uppercase tracking-[-0.06em]">MANY</a>
        <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 sm:flex">
          <a href="#drop" className="transition hover:text-white">{t.drop}</a>
          <a href="#register" className="transition hover:text-white">{t.register}</a>
          <button type="button" onClick={openChannel} className="transition hover:text-white">{t.channel}</button>
        </nav>
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}

function TelegramButton({ children, variant = "light", className = "" }) {
  const light = variant === "light";
  return (
    <button
      type="button"
      onClick={openTelegram}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-black uppercase tracking-[0.14em] transition hover:scale-[1.02] ${light ? "border-white bg-white text-black hover:bg-zinc-200" : "border-white/15 bg-black text-white hover:bg-zinc-900"} ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

function TeeMockup({ t, selectedQuality }) {
  const selectedPrice = DROP_OPTIONS[selectedQuality].price;
  return (
    <div className="relative mx-auto flex min-h-[430px] w-full max-w-md items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <div className="absolute left-5 top-5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">drop 001</div>
      <div className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">{selectedPrice}</div>
      <div className="relative h-[350px] w-[270px]">
        <div className="absolute left-[-38px] top-16 h-28 w-20 rotate-[18deg] rounded-[2rem] border border-zinc-300 bg-zinc-100" />
        <div className="absolute right-[-38px] top-16 h-28 w-20 rotate-[-18deg] rounded-[2rem] border border-zinc-300 bg-zinc-100" />
        <div className="absolute left-6 right-6 top-0 z-10 h-12 rounded-b-full bg-[#050505]" />
        <div className="absolute inset-x-0 top-8 h-[315px] rounded-t-[4rem] rounded-b-[2.2rem] border border-zinc-300 bg-zinc-100 shadow-2xl" />
        <div className="absolute left-1/2 top-28 z-20 flex -translate-x-1/2 flex-col items-center text-black">
          <LogoMark className="h-28 w-24" />
          <div className="mt-3 text-[10px] font-black uppercase tracking-[0.35em]">MANY</div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black/45">{t.mockup}</div>
      </div>
    </div>
  );
}

function ProductGallery({ t }) {
  const photos = [t.photoFront, t.photoFit, t.photoDetail];

  return (
    <div className="mt-8">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">{t.galleryTitle}</div>
        <div className="text-xs text-zinc-600">{t.galleryNote}</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo} className="flex min-h-32 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-center text-[10px] font-black uppercase tracking-[0.22em] text-zinc-600">
            {photo}
          </div>
        ))}
      </div>
    </div>
  );
}

function QualitySelector({ t, selectedQuality, setSelectedQuality }) {
  const options = [
    { id: "premium", name: t.premiumName, desc: t.premiumDesc, price: DROP_OPTIONS.premium.price },
    { id: "basic", name: t.basicName, desc: t.basicDesc, price: DROP_OPTIONS.basic.price },
  ];
  return (
    <div className="mt-8">
      <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">{t.qualityTitle}</div>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const active = selectedQuality === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedQuality(option.id)}
              className={`rounded-2xl border p-4 text-left transition hover:border-white/35 ${active ? "border-white bg-white text-black" : "border-white/10 bg-black/40 text-white"}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-black uppercase tracking-[-0.04em]">{option.name}</div>
                  <p className={`mt-2 text-sm leading-6 ${active ? "text-black/60" : "text-zinc-500"}`}>{option.desc}</p>
                </div>
                <div className="whitespace-nowrap text-xl font-black tracking-[-0.06em]">{option.price}</div>
              </div>
              {active && <div className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-black/50">{t.selected}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function OrderBasics({ t }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5" />
            <h3 className="text-2xl font-black uppercase tracking-[-0.06em]">{t.howTitle}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.howSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">0{index + 1}</div>
                <div className="text-sm font-black uppercase tracking-[-0.02em] text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <Truck className="h-5 w-5" />
            <h3 className="text-2xl font-black uppercase tracking-[-0.06em]">{t.deliveryTitle}</h3>
          </div>
          <p className="text-sm leading-7 text-zinc-400">{t.deliveryText}</p>
        </div>
      </div>
    </section>
  );
}

function SizeGuide({ t }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <Ruler className="h-5 w-5" />
              <h3 className="text-2xl font-black uppercase tracking-[-0.06em]">{t.sizeTitle}</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-500">{t.sizeNote}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-white/[0.04] text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              <tr>
                <th className="px-4 py-3 font-black">{t.size}</th>
                <th className="px-4 py-3 font-black">{t.chest}</th>
                <th className="px-4 py-3 font-black">{t.length}</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((row) => (
                <tr key={row.size} className="border-t border-white/10 text-zinc-300">
                  <td className="px-4 py-3 font-black text-white">{row.size}</td>
                  <td className="px-4 py-3">{row.chest}</td>
                  <td className="px-4 py-3">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function UpcomingDrop({ t }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-[0.55fr_1.45fr] sm:items-center">
          <div className="flex min-h-40 items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/50 text-white/25">
            <div className="text-center">
              <LogoMark className="mx-auto h-16 w-14" />
              <div className="mt-3 text-[10px] font-black uppercase tracking-[0.26em]">{t.upcomingStatus}</div>
            </div>
          </div>
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{t.upcomingLabel}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{t.upcomingTitle}</span>
            </div>
            <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.07em] sm:text-5xl">{t.upcomingName}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">{t.upcomingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelCTA({ t }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white text-black p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h3 className="text-3xl font-black uppercase tracking-[-0.07em]">{t.channelTitle}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-black/60">{t.channelText}</p>
        </div>
        <button
          type="button"
          onClick={openChannel}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:scale-[1.02] hover:bg-zinc-900"
        >
          {t.openChannel} <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function DropRegisterForm({ t, selectedQuality }) {
  const [form, setForm] = useState({ name: "", size: "M", contact: "", note: "" });
  const [copied, setCopied] = useState(false);
  const selectedQualityName = selectedQuality === "premium" ? t.premiumName : t.basicName;
  const selectedQualityPrice = DROP_OPTIONS[selectedQuality].price;

  const plainMessage = useMemo(() => {
    return `${t.messageIntro}

Name: ${form.name || "-"}
Size: ${form.size}
Quality: ${selectedQualityName} / ${selectedQualityPrice}
Contact: ${form.contact || "-"}
Note: ${form.note || "-"}

${t.messageWant}`;
  }, [form, t, selectedQualityName, selectedQualityPrice]);

  async function registerDrop(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(plainMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    openTelegram();
  }

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <form onSubmit={registerDrop} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
      <div className="mb-6">
        <h3 className="text-3xl font-black uppercase tracking-[-0.07em]">{t.reserveTitle}</h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">{t.reserveText}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">{t.name}</span>
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder={t.namePlaceholder} className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/40" />
        </label>
        <label className="block">
          <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">{t.size}</span>
          <select value={form.size} onChange={(e) => update("size", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-white/40">
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </label>
      </div>

      <div className="mt-3 rounded-2xl border border-white/10 bg-black px-4 py-3">
        <div className="text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">{t.selectedOption}</div>
        <div className="mt-1 text-sm font-black uppercase tracking-[-0.03em] text-white">{selectedQualityName} / {selectedQualityPrice}</div>
      </div>

      <label className="mt-3 block">
        <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">{t.contact}</span>
        <input required value={form.contact} onChange={(e) => update("contact", e.target.value)} placeholder={t.contactPlaceholder} className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/40" />
      </label>

      <label className="mt-3 block">
        <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">{t.note}</span>
        <textarea value={form.note} onChange={(e) => update("note", e.target.value)} placeholder={t.notePlaceholder} rows={3} className="w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/40" />
      </label>

      <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.01] hover:bg-zinc-200">
        {t.submit} <MessageCircle className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-6 text-zinc-500">{copied ? t.copied : t.notCopied}</p>
    </form>
  );
}

export default function ManyLandingPage() {
  const [lang, setLang] = useState("en");
  const [selectedQuality, setSelectedQuality] = useState("premium");
  const t = copy[lang];
  const selectedPrice = DROP_OPTIONS[selectedQuality].price;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-15%,rgba(255,255,255,0.12),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.035),transparent_24%)]" />
      <Header lang={lang} setLang={setLang} t={t} />

      <section id="top" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="flex flex-col items-center">
          <LogoMark className="mb-7 h-44 w-36 text-white sm:h-56 sm:w-48 lg:h-64 lg:w-56" />
          <h1 className="text-[22vw] font-black uppercase leading-[0.75] tracking-[-0.13em] sm:text-9xl lg:text-[11rem]">MANY</h1>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-zinc-500">{t.heroLine}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#drop" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02] hover:bg-zinc-200">{t.viewDrop}</a>
            <a href="#register" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/10">{t.reserve}</a>
          </div>
        </motion.div>
      </section>

      <section id="drop" className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">{t.firstDrop}</p>
          <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.08em] sm:text-7xl">Drop 001</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <TeeMockup t={t} selectedQuality={selectedQuality} />
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">MANY logo tee</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{selectedPrice}</span>
              </div>
              <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.08em] sm:text-6xl">{t.dropTitle}</h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300">{t.dropText}</p>
              <ProductGallery t={t} />
              <QualitySelector t={t} selectedQuality={selectedQuality} setSelectedQuality={setSelectedQuality} />
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[[t.price, selectedPrice], [t.status, t.statusValue], [t.payment, t.paymentValue]].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{label}</div>
                    <div className="mt-2 text-base font-black uppercase tracking-[-0.04em] text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#register" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02] hover:bg-zinc-200">{t.registerForDrop} <CheckCircle2 className="h-4 w-4" /></a>
              <TelegramButton variant="dark">{t.askTelegram}</TelegramButton>
            </div>
          </div>
        </div>
      </section>

      <OrderBasics t={t} />
      <SizeGuide t={t} />
      <UpcomingDrop t={t} />
      <ChannelCTA t={t} />

      <section id="register" className="relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <DropRegisterForm t={t} selectedQuality={selectedQuality} />
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 MANY</span>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <button type="button" onClick={openTelegram} className="text-left transition hover:text-white">{t.footer}</button>
            <button type="button" onClick={openChannel} className="text-left transition hover:text-white">{t.channel}: @manyoriginal</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
