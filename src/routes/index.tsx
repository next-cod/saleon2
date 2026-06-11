import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import avatar from "@/assets/saleon/saleon-avatar.png";
import sem from "@/assets/saleon/sem.png";
import padik from "@/assets/saleon/padik.png";
import glasha from "@/assets/saleon/glasha.png";
import kirillych from "@/assets/saleon/kirillych.png";
import lusya from "@/assets/saleon/lusya.png";
import bars from "@/assets/saleon/bars.png";
import maks from "@/assets/saleon/maks.png";
import maxIcon from "@/assets/saleon/max-icon.png";
import { Squiggle } from "@/components/saleon/Decor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saleon — цифровые сотрудники с характером" },
      { name: "description", content: "ИИ-сотрудники, которые продают, как живые менеджеры. Понимают, на каком этапе клиент, и отвечают точно под момент. Запуск за 3 дня." },
      { property: "og:title", content: "Saleon — цифровые сотрудники с характером" },
      { property: "og:description", content: "ИИ-боты с именем, характером и режимом «работать». Отвечают за 3 секунды, закрывают до 80% обращений." },
    ],
  }),
  component: Index,
});

/* ---------- data ---------- */

const NAV = [
  { href: "#how", label: "Как работает" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
];

const CHANNELS = [
  { name: "CRM", color: "#2555F5", icon: "M4 6h16v12H4z M4 10h16" },
  { name: "Telegram", color: "#229ED9", icon: "M22 3L2 11l6 2 2 6 4-4 5 4 3-16z" },
  { name: "ВКонтакте", color: "#0077FF", icon: "M3 6h18v12H3z" },
  { name: "MAX", color: "#7B61FF", img: maxIcon },
  { name: "Instagram", color: "#E1306C", icon: "M4 4h16v16H4z M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" },
];

const STATS = [
  { v: "3 дня", l: "от брифа до запуска под ключ" },
  { v: "~3 сек", l: "среднее время первого ответа" },
  { v: "24 / 7", l: "на связи без выходных и больничных" },
  { v: "до 80%", l: "обращений бот закрывает сам" },
];

const PROBLEMS = [
  { n: "01", t: "Заявки приходят ночью", d: "Клиент написал в 23:00 — менеджер увидит утром. К тому времени он уже купил у конкурента." },
  { n: "02", t: "80% вопросов одинаковые", d: "Цена, условия, как записаться — менеджер отвечает на одно и то же по кругу. Вместо продаж." },
  { n: "03", t: "Менеджер выгорает от рутины", d: "Каждый день одни и те же вопросы. Хороший продавец начинает халтурить, потом уходит — и надо всё начинать заново." },
  { n: "04", t: "Настроили бот — не продаёт", d: "Купили, подключили, разочаровались. Дело не в ботах — дело в том, что у них нет характера и понимания клиента." },
  { n: "05", t: "Живой менеджер — дорого и нестабильно", d: "Нанять — дорого. Обучить — долго. Заболел, в отпуске, уволился — бизнес встаёт. Один точно не справится с потоком." },
  { n: "06", t: "Бот не различает клиентов", d: "Холодному и горячему — один и тот же ответ. Горячий клиент чувствует равнодушие и уходит к конкуренту." },
];

type Persona = {
  id: string; name: string; niche: string; img: string; tone: string;
  states: Record<string, { sit: string; q: string; a: string; chips: string[] }>;
};

const PERSONAS: Persona[] = [
  {
    id: "sem", name: "СЭМ", niche: "Фотостудия", img: sem,
    tone: "Творческий, вдохновляет клиента, говорит образно. Знает всё про свет и атмосферу.",
    states: {
      "Первый раз": { sit: "Написал впервые. Ещё не знает, что предложить.", q: "Привет, а что вы вообще предлагаете?", a: "Привет, красотка! Я СЭМ, твой помощник в фотостудии. Расскажи, что тебя интересует — подберу лучший вариант! Или хочешь, покажу, с чего обычно начинают?", chips: ["Расскажи подробнее", "Сколько стоит?", "Как записаться?"] },
      "Изучает": { sit: "Сравнивает варианты, читает описание.", q: "А циклорама большая? И есть ли реквизит?", a: "Циклорама 6×4 — для ростовых кадров идеально. Реквизит даём бесплатно: фоны, стулья, цветы. Хочешь, скину примеры съёмок?", chips: ["Скинь примеры", "Какой свет?", "Записаться"] },
      "Сомневается": { sit: "Думает, не дорого ли.", q: "Дороговато выходит, не уверен.", a: "Понимаю. Есть будний слот за 1500 ₽/час — отличный свет, минус толпа. Попробуй раз, дальше решишь.", chips: ["Будний слот", "Что входит?", "Подумаю"] },
      "Готов купить": { sit: "Уже выбрал, осталось забронировать.", q: "Окей, беру субботу 14:00.", a: "Отлично! Бронирую субботу 14:00, зал «Север». Скинуть памятку и адрес?", chips: ["Скинь памятку", "Оплатить", "Перенести"] },
      "Пропал": { sit: "Не отвечает третий день.", q: "—", a: "Привет, это СЭМ. Ты выбирал субботу — слот ещё держу до вечера. Подтвердить?", chips: ["Да, бронирую", "На другой день", "Отмена"] },
    },
  },
  { id: "padik", name: "ПАДИК", niche: "Падел-центр", img: padik, tone: "Дружелюбный, по-свойски, быстро ведёт к записи.",
    states: { "Первый раз": { sit: "Новичок, ничего не знает про падел.", q: "Привет, хочу попробовать падел. Я вообще новичок.", a: "Дружище, это лучшее решение! Падел — самый быстро усваиваемый вид спорта. Уже через час будешь рубиться. Есть пробный слот завтра в 18:00 — залетай!", chips: ["Да, записать!", "Другое время", "Цены"] } } },
  { id: "glasha", name: "ГЛАША", niche: "Цветочный магазин", img: glasha, tone: "Тёплая, уютная, советует букет под настроение.",
    states: { "Первый раз": { sit: "Нужен букет, не знает какой.", q: "Здравствуйте, нужен букет на день рождения мамы.", a: "Ой, как мило! Расскажите немного — мама романтичная или скорее строгая? Подберу что-то, что точно тронет.", chips: ["Романтичная", "Строгая", "Покажите варианты"] } } },
  { id: "kirillych", name: "КИРИЛЛЫЧ", niche: "Автосервис", img: kirillych, tone: "По-мужски, по делу, без воды.",
    states: { "Первый раз": { sit: "Стучит подвеска, нужна диагностика.", q: "Стучит спереди при кочках. Что делать?", a: "Похоже на стойки или сайлентблоки. Диагностика бесплатно. В субботу 9:00 — подходит?", chips: ["Подходит", "Другое время", "Сколько по деньгам?"] } } },
  { id: "lusya", name: "ЛЮСЯ", niche: "Салон красоты", img: lusya, tone: "Заботливая подруга, советует, не давит.",
    states: { "Первый раз": { sit: "Хочет окрашивание, переживает за волосы.", q: "Хочу осветлиться, но боюсь за волосы.", a: "Подруга, понимаю! Сделаем щадящее окрашивание Olaplex — волосы будут целы. Завтра есть 14:30 — идеальное время!", chips: ["Запишите", "Расскажите подробнее", "Цена"] } } },
  { id: "bars", name: "БАРС", niche: "Ветклиника", img: bars, tone: "Спокойный, внимательный, поддерживает в стрессе.",
    states: { "Первый раз": { sit: "Кот стал вялым, переживает.", q: "Кот не ест второй день, что делать?", a: "Понимаю, это тревожно. Принесите сегодня — посмотрим. Свободно в 17:00 у Анны Сергеевны. Записать?", chips: ["Записать", "Раньше можно?", "Это срочно?"] } } },
  { id: "maks", name: "МАКС", niche: "Фитнес-клуб", img: maks, tone: "Заряжает энергией, держит ритм, мотивирует.",
    states: { "Первый раз": { sit: "Хочет начать ходить в зал.", q: "Думаю записаться, давно не занимался.", a: "Бро, отличное решение! Первая тренировка с тренером — бесплатно. Заодно покажем зал. Завтра 19:00?", chips: ["Записать", "Другое время", "Что взять?"] } } },
];

const HOW = [
  { n: "01", t: "Вы описываете бизнес", d: "Рассказываете о продукте, клиентах и пути, который они проходят до покупки." },
  { n: "02", t: "Задаёте имя и характер", d: "Придумываете, как зовут вашего бота и каким он должен быть — заботливым, уверенным, с юмором. Это ваш сотрудник." },
  { n: "03", t: "Бот выходит на работу", d: "Запуск за 3 дня. Бот общается, понимает состояние клиента и ведёт его к покупке — без вашего участия." },
];

const DIFFS = [
  { n: "01", tag: "Контекст", t: "Понимает, где клиент",
    d: "Не один скрипт для всех. Бот видит состояние клиента — сомневается, думает, готов купить — и отвечает под него." },
  { n: "02", tag: "Идентичность", t: "Имя и характер задаёте вы",
    d: "Клиенты не разговаривают с «ботом». Они общаются с Леной, Максом или Артёмом — вашим цифровым сотрудником, которого придумали сами." },
  { n: "03", tag: "Простота", t: "Без программистов",
    d: "Вы заполняете шаблон — мы настраиваем. Никакого кода, никаких технических знаний." },
];

const CASES = [
  { tag: "Фотостудия", city: "Брянск", t: "Студия «Сам себе фотограф»",
    d: "Собственник не успевал отвечать клиентам в ВКонтакте. СЭМ взял переписку на себя.",
    metrics: [["80%", "клиентов бот доводит до бронирования сам"], ["0", "потерянных обращений в нерабочее время"]] },
  { tag: "Падел-центр", city: "Магнитогорск", t: "Падел.Точка",
    d: "ПАДИК объясняет правила, отвечает на вопросы и сразу записывает на слот.",
    metrics: [["3 сек", "среднее время первого ответа"], ["24/7", "без выходных и праздников"]] },
];

const PLANS = [
  { name: "Минимальный", lim: "до 20 обращений / день", price: 10000, sup: "Поддержка в рабочее время" },
  { name: "Средний", lim: "20–50 обращений / день", price: 20000, sup: "Поддержка в рабочее время", featured: true },
  { name: "Премиум", lim: "50–100 обращений / день", price: 30000, sup: "Приоритетная поддержка" },
];

const TEAM = [
  { i: "Т", name: "Татьяна", role: "Маркетолог, 25 лет в бизнесе. Автор продукта. Десятки ниш",
    bio: "25+ лет в маркетинге, десятки ниш: розница, услуги, b2b, b2g. 10 лет преподавала в вузе. Автор идеи продукта — знает на собственном опыте, где бизнес теряет клиентов и деньги." },
  { i: "И", name: "Игорь", role: "Технический директор. Программирует с 12 лет",
    bio: "Программирует с 12 лет — 8 лет реальной практики. В 20 лет руководит командой разработчиков. В портфеле — CRM-системы и мобильные приложения. Отвечает за стабильность и масштабируемость бота." },
  { i: "Д", name: "Дима", role: "Дизайнер и разработчик. Сайты и визуал. 17 лет",
    bio: "Воплощает любые дизайн-решения — от фирменного стиля до полноценного сайта. Работает с ИИ-инструментами — быстрее и нестандартнее большинства опытных дизайнеров." },
  { i: "А", name: "Арина", role: "Архитектор клиентского пути. Прописывает сценарии бота",
    bio: "20 лет — и внимательный взгляд на детали. Прописывает каждый шаг клиентского пути, чтобы бот понимал контекст и отвечал в нужный момент. Благодаря ей боты ведут клиента к результату." },
];

const FAQ = [
  ["Что такое «цифровой сотрудник»?", "Это ИИ-бот с именем и характером, который общается с клиентами в Telegram и ВКонтакте. Понимает, на каком этапе покупки клиент, и отвечает под ситуацию."],
  ["Правда что запуск за 3 дня?", "Да, если у вас есть готовые материалы: прайс, описание услуг, ответы на частые вопросы. Нет готового — соберём вместе на созвоне."],
  ["Что нужно от меня для старта?", "Прайс, описание услуг, ответы на частые вопросы и придуманный характер для бота. Созвон 30 минут — и мы всё соберём вместе."],
  ["Можно настроить самостоятельно?", "Да. Есть подробный шаблон. В этом случае оплачивается только ежемесячный тариф."],
  ["Бот может ответить неправильно?", "Бот отвечает только по вашей базе знаний — не придумывает. Перед запуском — тестирование всех сценариев. Менеджер может вмешаться в любой момент."],
  ["Клиенты не любят ботов.", "Клиенты не любят скучных ботов. Наш отвечает мгновенно, говорит живо, подстраивается под тон."],
  ["Где работает бот?", "Работает в CRM, Telegram, ВКонтакте, MAX и Instagram. Интегрируется с Bitrix24, amoCRM и другими системами."],
];

/* ---------- shared bits ---------- */

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <img src={avatar} alt="" className="h-7 w-7 rounded-lg object-cover" />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-ink">Saleon</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <Sparkle className="h-3 w-3" />
      {children}
    </div>
  );
}

function SectionLabel({ title, children }: { kicker?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl text-balance">
        {title}
      </h2>
      {children && <p className="mt-4 text-base text-muted-foreground sm:text-lg text-pretty">{children}</p>}
    </div>
  );
}


/* ---------- page ---------- */

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />
      <Hero />
      <StatsBar />
      <Problems />
      <Personas />
      <How />
      <Differences />
      <Cases />
      <Pricing />
      <Team />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  );
}


/* ---------- header ---------- */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary-soft/60 hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-border bg-surface px-1 py-1 text-xs font-semibold sm:flex">
            <span className="rounded-full bg-primary px-2.5 py-1 text-primary-foreground">RU</span>
            <span className="px-2.5 py-1 text-muted-foreground">EN</span>
          </div>
          <a href="#contacts"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]">
            Попробовать
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <button onClick={() => setOpen(!open)} aria-label="menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-7xl px-5 py-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-24">
        <div className="fade-up">
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.2rem]">
            Познакомьтесь —<br />
            это ваш новый{" "}
            <span className="relative inline-block">
              <span className="text-gradient">сотрудник</span>
              <Squiggle className="absolute -bottom-3 left-0 h-3 w-full text-primary/60" />
            </span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            У него есть имя, характер и один единственный режим: работать.
            Не уволится, не заболеет, не нагрубит клиенту в пятницу вечером.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacts"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]">
              Познакомиться с Сэйлоном
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#personas"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition hover:border-primary/30 hover:text-primary">
              Посмотреть, как это работает
            </a>
          </div>

          <div className="mt-10">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Работает в
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {CHANNELS.map((c) => (
                <span key={c.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-medium text-ink shadow-sm">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md"
                    style={{ background: `${c.color}1a`, color: c.color }}>
                    {c.img ? <img src={c.img} alt="" className="h-3.5 w-3.5"/> :
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={c.color} strokeWidth="2"><path d={c.icon!}/></svg>}
                  </span>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <HeroChat />
      </div>
    </section>
  );
}

const HERO_CHATS = [
  {
    id: "sem", name: "СЭМ", niche: "Фотостудия", img: sem,
    messages: [
      { side: "r", text: "Привет, а что вы вообще предлагаете?" },
      { side: "l", text: "Привет, красотка! Я СЭМ, помощник фотостудии. Расскажи, что интересует — подберу лучший вариант." },
      { side: "r", text: "А циклорама большая? Реквизит есть?" },
      { side: "l", text: "Циклорама 6×4 — для ростовых кадров идеально. Реквизит даём бесплатно. Скинуть примеры?" },
    ],
    chips: ["Скинь примеры", "Записаться", "Сколько стоит?"],
  },
  {
    id: "padik", name: "ПАДИК", niche: "Падел-центр", img: padik,
    messages: [
      { side: "r", text: "Привет, хочу попробовать падел. Я новичок." },
      { side: "l", text: "Дружище, это лучшее решение! Падел — самый быстро усваиваемый вид спорта. Есть пробный слот завтра в 18:00 — залетай!" },
      { side: "r", text: "А ракетку нужно свою брать?" },
      { side: "l", text: "Нет, у нас всё есть — ракетки, мячи, обувь. Записать тебя на завтра?" },
    ],
    chips: ["Да, записать!", "Другое время", "Цены"],
  },
  {
    id: "glasha", name: "ГЛАША", niche: "Цветы", img: glasha,
    messages: [
      { side: "r", text: "Здравствуйте, нужен букет на день рождения мамы." },
      { side: "l", text: "Ой, как мило! Мама романтичная или скорее строгая? Подберу что-то, что точно тронет." },
      { side: "r", text: "Романтичная, любит пионы." },
      { side: "l", text: "Тогда соберу облако пионов с эвкалиптом. Доставим к 12:00. Адрес скиньте?" },
    ],
    chips: ["Хочу такой", "Другие варианты", "Цена"],
  },
  {
    id: "kirillych", name: "КИРИЛЛЫЧ", niche: "Автосервис", img: kirillych,
    messages: [
      { side: "r", text: "Стучит спереди при кочках. Что делать?" },
      { side: "l", text: "Похоже на стойки или сайлентблоки. Диагностика бесплатно. Суббота 9:00 — подходит?" },
      { side: "r", text: "Подходит. По деньгам как?" },
      { side: "l", text: "После диагностики скажу точно. Обычно от 4 до 12 тыс — зависит от того, что найдём." },
    ],
    chips: ["Записать", "Другое время", "Адрес"],
  },
  {
    id: "lusya", name: "ЛЮСЯ", niche: "Салон красоты", img: lusya,
    messages: [
      { side: "r", text: "Хочу осветлиться, но боюсь за волосы." },
      { side: "l", text: "Подруга, понимаю! Сделаем щадящее окрашивание Olaplex — волосы будут целы. Завтра есть 14:30 — идеальное время." },
      { side: "r", text: "А сколько по времени?" },
      { side: "l", text: "Часа 3–4. Зато результат — на месяцы. Записать?" },
    ],
    chips: ["Записать", "Подробнее", "Цена"],
  },
];

function HeroChat() {
  const [id, setId] = useState(HERO_CHATS[0].id);
  const chat = HERO_CHATS.find((c) => c.id === id)!;
  return (
    <div className="relative fade-up [animation-delay:0.15s]">
      <div className="relative rounded-[2rem] border border-border bg-surface p-5 shadow-elev sm:p-6">
        {/* persona tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3">
          {HERO_CHATS.map((c) => {
            const active = c.id === id;
            return (
              <button key={c.id} onClick={() => setId(c.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-semibold transition
                  ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-ink hover:border-primary/30"}`}>
                <img src={c.img} alt="" className="h-5 w-5 rounded-full object-cover" />
                {c.name}
              </button>
            );
          })}
        </div>

        {/* chat header */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <img src={chat.img} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20" />
            <div>
              <div className="font-display text-base font-extrabold text-ink">{chat.name}</div>
              <div className="text-xs text-muted-foreground">{chat.niche} · онлайн</div>
            </div>
          </div>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint">
            <span className="absolute inset-0 animate-ping rounded-full bg-mint/70" />
          </span>
        </div>

        {/* messages */}
        <div className="mt-4 space-y-2.5">
          {chat.messages.map((m, i) => (
            <Bubble key={i} side={m.side as "l" | "r"}>{m.text}</Bubble>
          ))}
          <div className="flex flex-wrap gap-2 pt-1">
            {chat.chips.map((c) => (
              <span key={c} className="rounded-full border border-primary/20 bg-surface px-3 py-1 text-xs font-semibold text-primary">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}





function Bubble({ children, side, green }: { children: React.ReactNode; side: "l" | "r"; green?: boolean }) {
  const isR = side === "r";
  return (
    <div className={`flex ${isR ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm shadow-sm
        ${isR ? "rounded-tr-sm bg-primary-soft text-ink"
              : green ? "rounded-tl-sm bg-mint/15 text-ink border border-mint/20"
                      : "rounded-tl-sm bg-surface text-ink border border-border"}`}>
        {children}
      </div>
    </div>
  );
}

/* ---------- stats marquee ---------- */

function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="grid gap-3 rounded-3xl border border-border bg-surface p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.l} className="relative overflow-hidden rounded-2xl bg-background p-5">
            <div className="absolute right-3 top-3 text-[10px] font-bold text-muted-foreground/60">0{i + 1}</div>
            <div className="font-display text-3xl font-extrabold text-ink">{s.v}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            <div className="mt-4 h-1 w-full rounded-full bg-border">
              <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${[40, 70, 100, 80][i]}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- problems ---------- */

function Problems() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Проблема" title="Где бизнес теряет клиентов" />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p) => (
          <article key={p.n}
            className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm transition hover:shadow-elev hover:-translate-y-1">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-soft/70 blur-2xl transition group-hover:scale-125" />
            <span className="relative font-display text-5xl font-extrabold text-primary/20 group-hover:text-primary/40 transition">
              {p.n}
            </span>
            <h3 className="relative mt-4 font-display text-xl font-bold text-ink">{p.t}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{p.d}</p>
          </article>
        ))}

      </div>

      <div className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-soft/60 to-transparent p-8 text-center">
        <p className="mx-auto max-w-3xl text-pretty text-lg text-ink">
          <span className="font-display font-extrabold">Сэйлон</span> создаёт цифровых сотрудников с характером.
          Они понимают, на каком этапе находится клиент — и отвечают точно под момент.
        </p>
      </div>
    </section>
  );
}




/* ---------- personas ---------- */

function Personas() {
  const [pid, setPid] = useState("sem");
  const persona = PERSONAS.find((p) => p.id === pid)!;
  const stateKeys = Object.keys(persona.states);
  const [st, setSt] = useState(stateKeys[0]);
  const current = persona.states[st] ?? persona.states[stateKeys[0]];

  return (
    <section id="personas" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Как работает Сэйлон" title="Бот знает, что происходит с вашим клиентом">
        Выберите персонажа и состояние — посмотрите, как бот с характером отвечает в нужный момент.
      </SectionLabel>

      <div className="mt-10 rounded-3xl border border-border bg-surface p-3 shadow-soft sm:p-5">
        {/* tabs */}
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Выберите персонажа</div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {PERSONAS.map((p) => {
            const active = p.id === pid;
            return (
              <button key={p.id} onClick={() => { setPid(p.id); setSt(Object.keys(p.states)[0]); }}
                className={`group flex items-center gap-2 rounded-2xl border p-2 text-left transition
                  ${active ? "border-primary bg-primary-soft/50 shadow-soft" : "border-border bg-background hover:border-primary/30"}`}>
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl
                  ${active ? "bg-gradient-primary" : "bg-muted"}`}>
                  <img src={p.img} alt="" className="h-8 w-8 rounded-lg object-cover" />
                </span>
                <span className="min-w-0">
                  <span className={`block truncate text-sm font-bold ${active ? "text-primary" : "text-ink"}`}>{p.name}</span>
                  <span className="block truncate text-[11px] text-muted-foreground">{p.niche}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* persona card */}
          <div className="rounded-2xl bg-background p-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary p-1">
                <img src={persona.img} alt="" className="h-full w-full rounded-xl object-cover bg-surface" />
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-ink">{persona.name}</div>
                <div className="text-sm text-muted-foreground">{persona.niche}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{persona.tone}</p>

            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Состояние клиента</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {stateKeys.map((k) => (
                <button key={k} onClick={() => setSt(k)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition
                    ${st === k ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-surface text-muted-foreground hover:border-primary/30 hover:text-primary"}`}>
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* chat */}
          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-3">
                <img src={persona.img} alt="" className="h-9 w-9 rounded-full ring-2 ring-primary/20 object-cover" />
                <div>
                  <div className="font-semibold text-ink">{persona.name}</div>
                  <div className="text-[11px] text-mint">онлайн</div>
                </div>
              </div>
              <div className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-primary">{st}</div>
            </div>
            <div className="mt-3 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
              <span className="font-semibold text-ink">Ситуация:</span> {current.sit}
            </div>
            <div className="mt-4 space-y-2.5">
              <Bubble side="r">{current.q}</Bubble>
              <Bubble side="l">{current.a}</Bubble>
              <div className="flex flex-wrap gap-2 pt-1">
                {current.chips.map((c) => (
                  <span key={c} className="rounded-full border border-primary/20 bg-surface px-3 py-1 text-xs font-semibold text-primary">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="#contacts"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]">
          Хочу такого бота для своего бизнеса
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  );
}

/* ---------- how ---------- */

function How() {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Процесс" title="Запуск за 3 дня" />
      <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
        <div aria-hidden className="absolute left-0 right-0 top-12 hidden h-px lg:block">
          <div className="mx-auto h-px w-[78%] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        {HOW.map((s, i) => (
          <div key={s.n} className="relative rounded-3xl border border-border bg-surface p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                {s.n}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">шаг {i + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary-soft/60 to-transparent p-8 lg:grid-cols-[1.2fr_auto]">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-ink">Нет времени разбираться?</h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Мы берём всё на себя: от брифа до запуска. Вы передаёте информацию — через 3 дня бот работает.
            Или настройте сами по шаблону — без оплаты за внедрение.
          </p>
        </div>
        <a href="#contacts" className="inline-flex h-12 items-center self-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-background transition hover:bg-primary">
          Обсудить подключение
        </a>
      </div>
    </section>
  );
}

/* ---------- differences ---------- */

function Differences() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Отличия" title="Чем Сэйлон отличается" />
      <div className="mt-12 space-y-6">
        {DIFFS.map((d, i) => (
          <div key={d.n} className="grid gap-6 rounded-3xl border border-border bg-surface p-6 shadow-soft lg:grid-cols-[1.05fr_1fr] lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold text-primary/30">{d.n}</span>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">{d.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-ink">{d.t}</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">{d.d}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              {i === 0 && <DiffContext />}
              {i === 1 && <DiffIdentity />}
              {i === 2 && <DiffSimple />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DiffContext() {
  return (
    <div className="space-y-2.5">
      <Bubble side="r">Дороговато… не знаю, стоит ли?</Bubble>
      <div className="text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Бот видит: клиент сомневается
      </div>
      <Bubble side="l">Понимаю — важное решение. Предлагаю попробовать без риска: если не подойдёт — просто не продолжаете.</Bubble>
    </div>
  );
}

function DiffIdentity() {
  const rows = [
    { p: lusya, n: "Люся", t: "14:30", m: "Подруга, завтра есть 14:30 — идеальное время!" },
    { p: padik, n: "Падик", t: "12:15", m: "Дружище, первый час — 600 руб. Записать на завтра?" },
    { p: kirillych, n: "Кириллыч", t: "09:47", m: "Диагностика бесплатно. В субботу 9:00 — подходит?" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div key={r.n} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3">
          <img src={r.p} alt="" className="h-9 w-9 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">{r.n}</span>
              <span className="text-xs text-muted-foreground">{r.t}</span>
            </div>
            <p className="text-sm text-muted-foreground">{r.m}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DiffSimple() {
  const yes = ["Заполнить бриф о бизнесе", "Придумать имя и характер"];
  const no = ["Писать код или настраивать API", "Нанимать разработчика"];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-mint/20 bg-mint/5 p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-mint">Что делаете вы</div>
        <ul className="mt-3 space-y-2">
          {yes.map((y) => (
            <li key={y} className="flex items-start gap-2 text-sm text-ink">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint/15 text-mint">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {y}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-border bg-background p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Что НЕ делаете</div>
        <ul className="mt-3 space-y-2">
          {no.map((y) => (
            <li key={y} className="flex items-start gap-2 text-sm text-muted-foreground line-through">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground">×</span>
              {y}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- cases ---------- */

function Cases() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Кейсы" title="Реальные результаты" />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {CASES.map((c) => (
          <article key={c.t} className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elev">
            
            <div className="relative flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{c.tag}</span>
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">{c.city}</span>
            </div>
            <h3 className="relative mt-4 font-display text-2xl font-extrabold text-ink">{c.t}</h3>
            <p className="relative mt-2 text-muted-foreground">{c.d}</p>
            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {c.metrics.map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-background p-4">
                  <div className="font-display text-3xl font-extrabold text-gradient">{v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- pricing ---------- */

function Pricing() {
  const [vol, setVol] = useState(30);
  const recommended = useMemo(() => {
    if (vol <= 20) return PLANS[0];
    if (vol <= 50) return PLANS[1];
    return PLANS[2];
  }, [vol]);

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Тарифы" title="Тарифы">
        Выберите подходящий план для вашего бизнеса
      </SectionLabel>

      <div className="mt-10 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Сколько обращений в день у вас сейчас?
            </div>
            <div className="mt-1 font-display text-3xl font-extrabold text-ink">
              {vol}+ <span className="text-base font-medium text-muted-foreground">в день</span>
            </div>
          </div>
          <div className="rounded-2xl bg-primary-soft px-4 py-3 text-sm">
            Вам подойдёт тариф <span className="font-bold text-primary">{recommended.name}</span>
            {" · "}
            <span className="font-bold text-ink">{recommended.price.toLocaleString("ru-RU")} руб/мес</span>
          </div>
        </div>
        <input type="range" min={5} max={120} step={5} value={vol}
          onChange={(e) => setVol(+e.target.value)}
          className="mt-6 w-full accent-[color:var(--primary)]" />
        <div className="mt-2 flex justify-between text-xs font-semibold text-muted-foreground">
          <span>5</span><span>40</span><span>80</span><span>120+</span>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {PLANS.map((p) => {
          const isReco = p.name === recommended.name;
          return (
            <article key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-soft transition
                ${isReco ? "border-primary bg-gradient-to-b from-primary-soft/70 to-surface shadow-glow"
                         : "border-border bg-surface"}`}>
              {isReco && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft">
                  Рекомендуем
                </span>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{p.name}</div>
              <div className="mt-3 text-sm text-muted-foreground">{p.lim}</div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold text-ink">{p.price.toLocaleString("ru-RU")}</span>
                <span className="text-sm text-muted-foreground">руб / мес</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {[p.sup, "Любые каналы: TG, ВК, MAX, Instagram", "Интеграция с CRM", "Тестирование сценариев"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contacts" className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition
                ${isReco ? "bg-gradient-primary text-primary-foreground shadow-glow hover:translate-y-[-1px]"
                         : "border border-border bg-surface text-ink hover:border-primary/30 hover:text-primary"}`}>
                Выбрать
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Самостоятельно</div>
          <h4 className="mt-2 font-display text-xl font-bold text-ink">Настройте сами по шаблону</h4>
          <p className="mt-2 text-sm text-muted-foreground">Платите только тариф. Без доплат за внедрение.</p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-soft/70 to-transparent p-7 shadow-soft">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Под ключ</div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display text-3xl font-extrabold text-ink">40 000 руб.</span>
            <span className="text-sm text-muted-foreground line-through">90 000 руб.</span>
          </div>
          <p className="mt-2 text-sm text-foreground">
            Берём всё на себя: разбираемся в вашем бизнесе, настраиваем характер, сценарии и логику бота.
            Вы просто рассказываете — мы делаем.
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Больше 100 обращений в день — 1 руб. за сообщение. Напишите, рассчитаем.
      </p>
    </section>
  );
}

/* ---------- team ---------- */

function Team() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="Команда" title="Кто делает Saleon" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <article key={m.name} className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elev">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 transition group-hover:scale-110"
              style={{ background: ["var(--color-primary-soft)", "var(--color-amber)", "var(--color-mint)", "var(--color-lilac)"][i % 4], filter: "blur(20px)" }} />
            <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary font-display text-2xl font-extrabold text-primary-foreground shadow-glow">
              {m.i}
            </div>
            <h3 className="relative mt-5 font-display text-xl font-extrabold text-ink">{m.name}</h3>
            <p className="relative mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{m.role}</p>
            <p className="relative mt-3 text-sm text-muted-foreground">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- faq ---------- */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <SectionLabel kicker="FAQ" title="Частые вопросы" />
      <div className="mt-10 space-y-3">
        {FAQ.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q} className={`rounded-2xl border bg-surface shadow-sm transition
              ${isOpen ? "border-primary/40 shadow-soft" : "border-border"}`}>
              <button onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-display text-base font-bold text-ink sm:text-lg">{q}</span>
                <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition
                  ${isOpen ? "bg-gradient-primary text-primary-foreground rotate-45" : "bg-primary-soft text-primary"}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-muted-foreground fade-up">{a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- contacts ---------- */

function Contacts() {
  return (
    <section id="contacts" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-6 shadow-elev sm:p-12">
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Запишитесь на созвон
            </h2>

            <p className="mt-4 max-w-md text-muted-foreground">
              Бесплатный созвон 30 минут — разберём вашу ситуацию, придумаем характер бота, покажем как это работает в вашей нише.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[["3", "дня на запуск"], ["3", "секунды на связи"], ["5", "платформ"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-background p-4 text-center">
                  <div className="font-display text-3xl font-extrabold text-gradient">{v}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary font-display text-lg font-extrabold text-primary-foreground">Т</div>
              <div>
                <div className="font-semibold text-ink">Татьяна</div>
                <div className="text-xs text-muted-foreground">маркетолог, автор продукта</div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}
            className="relative rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="space-y-4">
              <Field label="Имя" placeholder="Как к вам обращаться" />
              <Field label="Телефон или Telegram" placeholder="+7 ... или @username" />
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ниша бизнеса
                </label>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option>Выберите…</option>
                  <option>Бьюти и салоны</option>
                  <option>Фитнес и спорт</option>
                  <option>Общепит</option>
                  <option>Медицина</option>
                  <option>Образование</option>
                  <option>E-commerce</option>
                  <option>Другое</option>
                </select>
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]">
              Записаться на созвон
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с <a href="#" className="text-primary underline">политикой конфиденциальности</a>
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Или напишите нам в <a href="#" className="font-semibold text-primary">Telegram</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Цифровые сотрудники с именем и характером. Понимают, на каком этапе клиент — и отвечают точно под момент.
          </p>
        </div>
        <FooterCol title="Продукт" links={["Как работает", "Тарифы", "Кейсы", "Команда"]} />
        <FooterCol title="Поддержка" links={["FAQ", "Документация", "Контакты", "Telegram"]} />
        <FooterCol title="Юридическое" links={["Политика конфиденциальности", "Условия использования", "Договор-оферта"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <div>© {new Date().getFullYear()} Saleon. Все права защищены.</div>
          <div className="flex items-center gap-1">
            Сделано с ❤ для бизнеса, который ценит время
          </div>
        </div>
      </div>

      {/* floating chat button */}
      <a href="#contacts"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow ring-4 ring-primary/15 transition hover:scale-105">
        <img src={avatar} alt="Saleon" className="h-10 w-10 rounded-full object-cover" />
      </a>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-sm text-muted-foreground transition hover:text-primary">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
