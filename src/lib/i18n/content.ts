import type { Locale } from "./LocaleProvider";

export type Bi = Record<Locale, string>;

/* ---------- nav ---------- */

export const NAV: { href: string; label: Bi }[] = [
  { href: "#how", label: { ru: "Как работает", en: "How it works" } },
  { href: "#pricing", label: { ru: "Тарифы", en: "Pricing" } },
  { href: "#faq", label: { ru: "Вопросы", en: "FAQ" } },
  { href: "#contacts", label: { ru: "Контакты", en: "Contact" } },
];

/* ---------- channels ("Работает в") ---------- */

export const CHANNELS: { id: "crm" | "telegram" | "vk" | "max" | "instagram"; name: Bi }[] = [
  { id: "crm", name: { ru: "CRM", en: "CRM" } },
  { id: "telegram", name: { ru: "Telegram", en: "Telegram" } },
  { id: "vk", name: { ru: "ВКонтакте", en: "VK" } },
  { id: "max", name: { ru: "MAX", en: "MAX" } },
  { id: "instagram", name: { ru: "Instagram", en: "Instagram" } },
];

/* ---------- stats ---------- */

export const STATS: { v: Bi; l: Bi }[] = [
  { v: { ru: "3 дня", en: "3 days" }, l: { ru: "от брифа до запуска под ключ", en: "from brief to full launch" } },
  { v: { ru: "~3 сек", en: "~3 sec" }, l: { ru: "среднее время первого ответа", en: "average first-response time" } },
  { v: { ru: "24 / 7", en: "24 / 7" }, l: { ru: "на связи без выходных и больничных", en: "always on, no days off or sick leave" } },
  { v: { ru: "до 80%", en: "up to 80%" }, l: { ru: "обращений бот закрывает сам", en: "of inquiries handled by the bot alone" } },
];

/* ---------- problems (content untouched, EN added only) ---------- */

export const PROBLEMS: { n: string; t: Bi; d: Bi }[] = [
  { n: "01",
    t: { ru: "Заявки приходят ночью", en: "Leads come in at night" },
    d: { ru: "Клиент написал в 23:00 – менеджер увидит утром. К тому времени он уже купил у конкурента.",
         en: "A client messages at 11 PM – the manager sees it in the morning. By then they've already bought from a competitor." } },
  { n: "02",
    t: { ru: "80% вопросов одинаковые", en: "80% of questions are the same" },
    d: { ru: "Цена, условия, как записаться – менеджер отвечает на одно и то же по кругу. Вместо продаж.",
         en: "Price, terms, how to book – the manager answers the same things on repeat. Instead of selling." } },
  { n: "03",
    t: { ru: "Менеджер выгорает от рутины", en: "Managers burn out on routine" },
    d: { ru: "Каждый день одни и те же вопросы. Хороший продавец начинает халтурить, потом уходит – и надо всё начинать заново.",
         en: "The same questions, every single day. A good salesperson starts cutting corners, then leaves – and you start over." } },
  { n: "04",
    t: { ru: "Настроили бот – не продаёт", en: "Set up a bot – it doesn't sell" },
    d: { ru: "Купили, подключили, разочаровались. Дело не в ботах – дело в том, что у них нет характера и понимания клиента.",
         en: "Bought it, connected it, got disappointed. The problem isn't bots – it's that they have no personality and no understanding of the client." } },
  { n: "05",
    t: { ru: "Живой менеджер – дорого и нестабильно", en: "A human manager is expensive and unreliable" },
    d: { ru: "Нанять – дорого. Обучить – долго. Заболел, в отпуске, уволился – бизнес встаёт. Один точно не справится с потоком.",
         en: "Hiring is expensive. Training takes time. Sick days, vacations, resignations – and the business stalls. One person can't keep up." } },
  { n: "06",
    t: { ru: "Бот не различает клиентов", en: "Bots don't tell clients apart" },
    d: { ru: "Холодному и горячему – один и тот же ответ. Горячий клиент чувствует равнодушие и уходит к конкуренту.",
         en: "A cold lead and a hot one get the same reply. The hot client feels the indifference and leaves for a competitor." } },
];

/* ---------- how ---------- */

export const HOW: { n: string; t: Bi; d: Bi }[] = [
  { n: "01",
    t: { ru: "Вы описываете бизнес", en: "You describe your business" },
    d: { ru: "Рассказываете о продукте, клиентах и пути, который они проходят до покупки.",
         en: "Tell us about your product, your customers, and the journey they take before buying." } },
  { n: "02",
    t: { ru: "Задаёте имя и характер", en: "You give it a name and personality" },
    d: { ru: "Придумываете, как зовут вашего бота и каким он должен быть – заботливым, уверенным, с юмором. Это ваш сотрудник.",
         en: "Decide what your bot is called and what it's like – caring, confident, witty. It's your employee." } },
  { n: "03",
    t: { ru: "Бот выходит на работу", en: "The bot starts working" },
    d: { ru: "Запуск за 3 дня. Бот общается, понимает состояние клиента и ведёт его к покупке – без вашего участия.",
         en: "Live in 3 days. The bot talks to clients, reads their state, and guides them to a purchase – without you lifting a finger." } },
];

/* ---------- differences ---------- */

export const DIFFS: { n: string; tag: Bi; t: Bi; d: Bi }[] = [
  { n: "01",
    tag: { ru: "Контекст", en: "Context" },
    t: { ru: "Понимает, где клиент", en: "Knows where the client is" },
    d: { ru: "Не один скрипт для всех. Бот видит состояние клиента – сомневается, думает, готов купить – и отвечает под него.",
         en: "No one-size-fits-all script. The bot sees the client's state – hesitant, exploring, ready to buy – and responds to it." } },
  { n: "02",
    tag: { ru: "Идентичность", en: "Identity" },
    t: { ru: "Имя и характер задаёте вы", en: "You set the name and personality" },
    d: { ru: "Клиенты не разговаривают с «ботом». Они общаются с Леной, Максом или Артёмом – вашим цифровым сотрудником, которого придумали сами.",
         en: "Clients aren't talking to a “bot”. They're talking to Lena, Max or Artyom – your digital employee, designed by you." } },
  { n: "03",
    tag: { ru: "Простота", en: "Simplicity" },
    t: { ru: "Без программистов", en: "No developers needed" },
    d: { ru: "Вы заполняете шаблон – мы настраиваем. Никакого кода, никаких технических знаний.",
         en: "You fill out a template – we configure everything. No code, no technical knowledge required." } },
];

export const DIFF_CONTEXT = {
  user: { ru: "Дороговато… не знаю, стоит ли?", en: "It's a bit pricey… not sure if it's worth it?" },
  badge: { ru: "Бот видит: клиент сомневается", en: "The bot sees: the client is hesitant" },
  bot: { ru: "Понимаю – важное решение. Предлагаю попробовать без риска: если не подойдёт – просто не продолжаете.",
         en: "I understand – it's an important decision. Let's try it risk-free: if it's not for you, you just don't continue." },
};

export const DIFF_IDENTITY_ROWS: { img: string; name: Bi; time: string; msg: Bi }[] = [
  { img: "/assets/saleon/lusya.png", name: { ru: "Люся", en: "Lucy" }, time: "14:30",
    msg: { ru: "Подруга, завтра есть 14:30 – идеальное время!", en: "Hey friend, tomorrow at 2:30 PM is perfect!" } },
  { img: "/assets/saleon/padik.png", name: { ru: "Падик", en: "Pad" }, time: "12:15",
    msg: { ru: "Дружище, первый час – 600 руб. Записать на завтра?", en: "Buddy, the first hour is 600₽. Book you for tomorrow?" } },
  { img: "/assets/saleon/kirillych.png", name: { ru: "Кириллыч", en: "Carl" }, time: "09:47",
    msg: { ru: "Диагностика бесплатно. В субботу 9:00 – подходит?", en: "Diagnostics are free. Saturday at 9 AM – does that work?" } },
];

export const DIFF_SIMPLE = {
  yes: [
    { ru: "Заполнить бриф о бизнесе", en: "Fill out a business brief" },
    { ru: "Придумать имя и характер", en: "Come up with a name and personality" },
  ] as Bi[],
  no: [
    { ru: "Писать код или настраивать API", en: "Write code or set up APIs" },
    { ru: "Нанимать разработчика", en: "Hire a developer" },
  ] as Bi[],
};

/* ---------- pricing ---------- */

export const PLANS: { name: Bi; lim: Bi; price: number | null; sup: Bi; featured?: boolean; custom?: boolean }[] = [
  { name: { ru: "Минимальный", en: "Starter" },
    lim: { ru: "до 20 обращений / день", en: "up to 20 inquiries / day" },
    price: 10000,
    sup: { ru: "Поддержка в рабочее время", en: "Business-hours support" } },
  { name: { ru: "Средний", en: "Standard" },
    lim: { ru: "до 50 обращений / день", en: "up to 50 inquiries / day" },
    price: 20000,
    sup: { ru: "Поддержка в рабочее время", en: "Business-hours support" },
    featured: true },
  { name: { ru: "Премиум", en: "Premium" },
    lim: { ru: "до 100 обращений / день", en: "up to 100 inquiries / day" },
    price: 30000,
    sup: { ru: "Приоритетная поддержка", en: "Priority support" } },
  { name: { ru: "Индивидуальный", en: "Custom" },
    lim: { ru: "от 100 обращений / день", en: "100+ inquiries / day" },
    price: null,
    sup: { ru: "Приоритетная поддержка", en: "Priority support" },
    custom: true },
];

export const PRICING_FEATURES: Bi[] = [
  { ru: "Любые каналы: TG, ВК, MAX, Instagram", en: "Any channel: Telegram, VK, MAX, Instagram" },
  { ru: "Интеграция с CRM", en: "CRM integration" },
  { ru: "Тестирование сценариев", en: "Scenario testing" },
];

/* ---------- team ---------- */

export const TEAM: { i: string; name: string; role: Bi; bio: Bi; gradient: string }[] = [
  { i: "Т", name: "Татьяна",
    role: { ru: "Маркетолог, 25 лет в бизнесе. Автор продукта. Десятки ниш", en: "Marketer, 25 years in business. Product creator. Dozens of niches" },
    bio: { ru: "25+ лет в маркетинге, десятки ниш: розница, услуги, b2b, b2g. 10 лет преподавала в вузе. Автор идеи продукта – знает на собственном опыте, где бизнес теряет клиентов и деньги.",
           en: "25+ years in marketing across dozens of niches: retail, services, B2B, B2G. Taught at university for 10 years. Came up with the product idea – knows firsthand where businesses lose customers and money." },
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #60a5fa 100%)" },
  { i: "И", name: "Игорь",
    role: { ru: "Технический директор. Программирует с 12 лет", en: "CTO. Coding since age 12" },
    bio: { ru: "Программирует с 12 лет – 8 лет реальной практики. В 20 лет руководит командой разработчиков. В портфеле – CRM-системы и мобильные приложения. Отвечает за стабильность и масштабируемость бота.",
           en: "Coding since age 12 – 8 years of real-world practice. Leading a dev team at 20. Portfolio includes CRM systems and mobile apps. Responsible for the bot's stability and scalability." },
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #67e8f9 100%)" },
  { i: "Д", name: "Дима",
    role: { ru: "Дизайнер и разработчик. Сайты и визуал. 17 лет", en: "Designer & developer. Sites and visuals. 17 years" },
    bio: { ru: "Воплощает любые дизайн-решения – от фирменного стиля до полноценного сайта. Работает с ИИ-инструментами – быстрее и нестандартнее большинства опытных дизайнеров.",
           en: "Brings any design idea to life – from brand identity to a full website. Works with AI tools – faster and more inventive than most experienced designers." },
    gradient: "linear-gradient(135deg, #6366f1 0%, #c7d2fe 100%)" },
  { i: "А", name: "Арина",
    role: { ru: "Архитектор клиентского пути. Прописывает сценарии бота", en: "Customer journey architect. Writes the bot's scenarios" },
    bio: { ru: "20 лет – и внимательный взгляд на детали. Прописывает каждый шаг клиентского пути, чтобы бот понимал контекст и отвечал в нужный момент. Благодаря ей боты ведут клиента к результату.",
           en: "20 years old, with a sharp eye for detail. Maps every step of the customer journey so the bot understands context and responds at the right moment. Thanks to her, the bots actually lead clients to results." },
    gradient: "linear-gradient(135deg, #db2777 0%, #f9a8d4 100%)" },
];

/* ---------- faq ---------- */

export const FAQ: { q: Bi; a: Bi }[] = [
  { q: { ru: "Что такое «цифровой сотрудник»?", en: "What is a “digital employee”?" },
    a: { ru: "Это ИИ-бот с именем и характером, который общается с клиентами в Telegram и ВКонтакте. Понимает, на каком этапе покупки клиент, и отвечает под ситуацию.",
         en: "It's an AI bot with a name and personality that talks to clients in Telegram and VK. It understands what stage of the buying journey the client is at and responds accordingly." } },
  { q: { ru: "Правда что запуск за 3 дня?", en: "Is it really live in 3 days?" },
    a: { ru: "Да, если у вас есть готовые материалы: прайс, описание услуг, ответы на частые вопросы. Нет готового – соберём вместе на созвоне.",
         en: "Yes, if you already have the materials ready: price list, service descriptions, answers to common questions. If not, we'll put it together on a call." } },
  { q: { ru: "Что нужно от меня для старта?", en: "What do I need to provide to get started?" },
    a: { ru: "Прайс, описание услуг, ответы на частые вопросы и придуманный характер для бота. Созвон 30 минут – и мы всё соберём вместе.",
         en: "A price list, service descriptions, answers to common questions, and a personality for the bot. A 30-minute call – and we'll put it all together." } },
  { q: { ru: "Можно настроить самостоятельно?", en: "Can I set it up myself?" },
    a: { ru: "Да. Есть подробный шаблон. В этом случае оплачивается только ежемесячный тариф.",
         en: "Yes. There's a detailed template. In that case you only pay the monthly plan." } },
  { q: { ru: "Бот может ответить неправильно?", en: "Can the bot give a wrong answer?" },
    a: { ru: "Бот отвечает только по вашей базе знаний – не придумывает. Перед запуском – тестирование всех сценариев. Менеджер может вмешаться в любой момент.",
         en: "The bot only answers from your knowledge base – it doesn't make things up. Before launch, every scenario is tested. A manager can step in at any time." } },
  { q: { ru: "Клиенты не любят ботов.", en: "Clients don't like bots." },
    a: { ru: "Клиенты не любят скучных ботов. Наш отвечает мгновенно, говорит живо, подстраивается под тон.",
         en: "Clients don't like boring bots. Ours replies instantly, talks naturally, and matches the tone." } },
  { q: { ru: "Где работает бот?", en: "Where does the bot work?" },
    a: { ru: "Работает в CRM, Telegram, ВКонтакте, MAX и Instagram. Интегрируется с Bitrix24, amoCRM и другими системами.",
         en: "It works in CRM, Telegram, VK, MAX and Instagram. Integrates with Bitrix24, amoCRM and other systems." } },
];

/* ---------- footer ---------- */

export const FOOTER_COLS: { title: Bi; links: Bi[] }[] = [
  { title: { ru: "Продукт", en: "Product" },
    links: [
      { ru: "Как работает", en: "How it works" },
      { ru: "Тарифы", en: "Pricing" },
      { ru: "Команда", en: "Team" },
    ] },
  { title: { ru: "Поддержка", en: "Support" },
    links: [
      { ru: "FAQ", en: "FAQ" },
      { ru: "Документация", en: "Docs" },
      { ru: "Контакты", en: "Contact" },
      { ru: "Telegram", en: "Telegram" },
    ] },
  { title: { ru: "Юридическое", en: "Legal" },
    links: [
      { ru: "Политика конфиденциальности", en: "Privacy policy" },
      { ru: "Условия использования", en: "Terms of use" },
      { ru: "Договор-оферта", en: "Public offer" },
    ] },
];

/* ---------- contacts ---------- */

export const CONTACT_STATS: { v: string; l: Bi }[] = [
  { v: "3", l: { ru: "дня на запуск", en: "days to launch" } },
  { v: "3", l: { ru: "секунды на ответ", en: "seconds to respond" } },
  { v: "5", l: { ru: "платформ", en: "platforms" } },
];

export const CONTACT_NICHES: Bi[] = [
  { ru: "Бьюти и салоны", en: "Beauty & salons" },
  { ru: "Фитнес и спорт", en: "Fitness & sports" },
  { ru: "Общепит", en: "Food & restaurants" },
  { ru: "Медицина", en: "Healthcare" },
  { ru: "Образование", en: "Education" },
  { ru: "E-commerce", en: "E-commerce" },
  { ru: "Другое", en: "Other" },
];

export const CONTACT_PS: { text: Bi; sign: string } = {
  text: { ru: "Если что-то непонятно — пишите прямо сюда, отвечу сама", en: "If anything's unclear — write right here, I'll reply myself" },
  sign: "Татьяна",
};

/* ---------- doodle annotations ---------- */

export const DOODLES: Bi[] = [
  { ru: "начните прямо здесь — это займёт 2 минуты", en: "start right here — takes 2 minutes" },
  { ru: "серьёзно, и в 3 часа ночи тоже", en: "seriously, even at 3am" },
  { ru: "большинство выбирает этот", en: "most people pick this one" },
  { ru: "это реальная команда — фото настоящие", en: "real team — these are actual photos" },
];

/* ---------- general UI strings ---------- */

export const UI = {
  ru: {
    header: { tryIt: "Попробовать" },
    hero: {
      h1b: "Ваш новый",
      h1highlight: "сотрудник",
      sub: "Имя, характер и режим работы – 24/7.",
      cta1: "Познакомиться с Сэйлоном",
      cta2: "Посмотреть, как это работает",
      worksIn: "Работает в",
    },
    problems: { title: "Где бизнес теряет клиентов" },
    personas: {
      title: "Бот знает, что происходит с вашим клиентом",
      sub: "Выберите персонажа и состояние – посмотрите, как бот с характером отвечает в нужный момент.",
      choose: "Выберите персонажа",
      clientState: "Состояние клиента",
      situation: "Ситуация:",
      online: "онлайн",
      cta: "Хочу такого бота для своего бизнеса",
    },
    how: {
      title: "Запуск за 3 дня",
      noTime: "Нет времени разбираться?",
      noTimeDesc: "Мы берём всё на себя: от брифа до запуска. Вы передаёте информацию – через 3 дня бот работает. Или настройте сами по шаблону – без оплаты за внедрение.",
      cta: "Обсудить подключение",
    },
    diffs: {
      title: "Чем Сэйлон отличается",
      whatYouDo: "Что делаете вы",
      whatYouDont: "Что НЕ делаете",
    },
    pricing: {
      title: "Тарифы",
      sub: "Выберите подходящий план для вашего бизнеса",
      howMany: "Сколько обращений в день у вас сейчас?",
      perDay: "в день",
      recommended: "Вам подойдёт тариф",
      perMonth: "руб/мес",
      onRequest: "по запросу",
      featuredBadge: "Рекомендуем",
      choose: "Выбрать",
      selfTitle: "Самостоятельно",
      selfHeading: "Настройте сами по шаблону",
      selfDesc: "Платите только тариф. Без доплат за внедрение.",
      turnkeyTitle: "Под ключ",
      turnkeyPrice: "40 000 руб.",
      turnkeyOldPrice: "90 000 руб.",
      turnkeyDesc: "Берём всё на себя: разбираемся в вашем бизнесе, настраиваем характер, сценарии и логику бота. Вы просто рассказываете – мы делаем.",
      note: "Больше 100 обращений в день – 1 руб. за сообщение. Напишите, рассчитаем.",
    },
    team: { title: "Кто делает Saleon" },
    faq: { title: "Частые вопросы" },
    contacts: {
      title: "Запишитесь на созвон",
      desc: "Бесплатный созвон 30 минут – разберём вашу ситуацию, придумаем характер бота, покажем как это работает в вашей нише.",
      authorRole: "маркетолог, автор продукта",
      nameLabel: "Имя",
      namePlaceholder: "Как к вам обращаться",
      contactLabel: "Телефон или Telegram",
      contactPlaceholder: "+7 ... или @username",
      nicheLabel: "Ниша бизнеса",
      nicheSelect: "Выберите…",
      submit: "Записаться на созвон",
      privacyPrefix: "Нажимая кнопку, вы соглашаетесь с",
      privacyLink: "политикой конфиденциальности",
      altPrefix: "Или напишите нам в",
      altLink: "Telegram",
    },
    footer: {
      desc: "Цифровые сотрудники с именем и характером. Понимают, на каком этапе клиент – и отвечают точно под момент.",
      copy: "Saleon. Все права защищены.",
      madeWith: "Сделано с ❤ для бизнеса, который ценит время",
    },
  },
  en: {
    header: { tryIt: "Try it" },
    hero: {
      h1b: "Your new",
      h1highlight: "employee",
      sub: "A name, a personality, and one mode – always on.",
      cta1: "Meet Saleon",
      cta2: "See how it works",
      worksIn: "Works in",
    },
    problems: { title: "Where businesses lose customers" },
    personas: {
      title: "The bot knows what's happening with your client",
      sub: "Pick a character and a client state – see how a bot with personality responds at the right moment.",
      choose: "Choose a character",
      clientState: "Client status",
      situation: "Situation:",
      online: "online",
      cta: "I want a bot like this for my business",
    },
    how: {
      title: "Live in 3 days",
      noTime: "No time to dig in?",
      noTimeDesc: "We handle everything: from the brief to launch. You hand over the info – in 3 days the bot is live. Or set it up yourself from the template – no setup fee.",
      cta: "Discuss setup",
    },
    diffs: {
      title: "What makes Saleon different",
      whatYouDo: "What you do",
      whatYouDont: "What you DON'T do",
    },
    pricing: {
      title: "Pricing",
      sub: "Choose the right plan for your business",
      howMany: "How many inquiries do you get per day?",
      perDay: "per day",
      recommended: "Recommended plan:",
      perMonth: "₽/mo",
      onRequest: "on request",
      featuredBadge: "Recommended",
      choose: "Choose",
      selfTitle: "Self-service",
      selfHeading: "Set it up yourself from a template",
      selfDesc: "Pay only the plan price. No setup fees.",
      turnkeyTitle: "Full setup",
      turnkeyPrice: "₽40,000",
      turnkeyOldPrice: "₽90,000",
      turnkeyDesc: "We handle everything: we learn your business and configure the bot's personality, scenarios and logic. You just tell us – we do the rest.",
      note: "More than 100 inquiries a day – ₽1 per message. Get in touch and we'll calculate it.",
    },
    team: { title: "Who's behind Saleon" },
    faq: { title: "Frequently asked questions" },
    contacts: {
      title: "Book a call",
      desc: "A free 30-minute call – we'll look at your situation, design the bot's personality, and show you how it works in your niche.",
      authorRole: "marketer, product creator",
      nameLabel: "Name",
      namePlaceholder: "How should we address you",
      contactLabel: "Phone or Telegram",
      contactPlaceholder: "+1 ... or @username",
      nicheLabel: "Business niche",
      nicheSelect: "Select…",
      submit: "Book a call",
      privacyPrefix: "By clicking the button, you agree to the",
      privacyLink: "privacy policy",
      altPrefix: "Or message us on",
      altLink: "Telegram",
    },
    footer: {
      desc: "Digital employees with a name and personality. They understand what stage the client is at – and respond right for the moment.",
      copy: "Saleon. All rights reserved.",
      madeWith: "Made with ❤ for businesses that value their time",
    },
  },
} satisfies Record<Locale, unknown>;
