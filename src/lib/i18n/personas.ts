import type { Locale } from "./LocaleProvider";
import type { Bi } from "./content";

export type BotId = "sem" | "padik" | "glasha" | "kirillych" | "lusya" | "bars" | "maks";

export type Bot = {
  id: BotId;
  name: Bi;
  biz: Bi;
  char: Bi;
  color: string;
  greet: Bi;
  img: string;
};

export const BOTS: Bot[] = [
  {
    id: "sem",
    name: { ru: "СЭМ", en: "SAM" },
    biz: { ru: "Фотостудия", en: "Photo Studio" },
    char: { ru: "Творческий, вдохновляет клиента, говорит образно. Знает всё про свет и атмосферу.",
            en: "Creative, inspires clients, speaks vividly. Knows everything about light and atmosphere." },
    color: "#D4537E",
    greet: { ru: "красотка", en: "gorgeous" },
    img: "/assets/saleon/sem.png",
  },
  {
    id: "padik",
    name: { ru: "ПАДИК", en: "PAD" },
    biz: { ru: "Падел-центр", en: "Padel Center" },
    char: { ru: "Спортивный, заводной, говорит как свой в тусовке. Продвигает активный образ жизни.",
            en: "Sporty, energetic, talks like a buddy. Promotes an active lifestyle." },
    color: "#1D9E75",
    greet: { ru: "дружище", en: "buddy" },
    img: "/assets/saleon/padik.png",
  },
  {
    id: "glasha",
    name: { ru: "ГЛАША", en: "FLORA" },
    biz: { ru: "Цветочный магазин", en: "Flower Shop" },
    char: { ru: "Тёплая, заботливая, помогает выбрать цветы с душой. Знает значение каждого букета.",
            en: "Warm, caring, helps choose flowers with heart. Knows the meaning of every bouquet." },
    color: "#D85A30",
    greet: { ru: "дорогая", en: "dear" },
    img: "/assets/saleon/glasha.png",
  },
  {
    id: "kirillych",
    name: { ru: "КИРИЛЛЫЧ", en: "CARL" },
    biz: { ru: "Автосервис", en: "Auto Service" },
    char: { ru: "Надёжный, говорит просто и по делу. Как механик, которому доверяешь.",
            en: "Reliable, speaks simply and to the point. Like a mechanic you can trust." },
    color: "#5F5E5A",
    greet: { ru: "друг", en: "friend" },
    img: "/assets/saleon/kirillych.png",
  },
  {
    id: "lusya",
    name: { ru: "ЛЮСЯ", en: "LUCY" },
    biz: { ru: "Салон красоты", en: "Beauty Salon" },
    char: { ru: "Внимательная, заботливая, понимает клиента с полуслова. Эксперт по стилю и уходу.",
            en: "Attentive, caring, understands clients intuitively. Expert in style and care." },
    color: "#993556",
    greet: { ru: "подруга", en: "friend" },
    img: "/assets/saleon/lusya.png",
  },
  {
    id: "bars",
    name: { ru: "БАРС", en: "BARLO" },
    biz: { ru: "Ветклиника", en: "Vet Clinic" },
    char: { ru: "Спокойный, профессиональный, говорит с теплом. Знает, как успокоить переживающего хозяина.",
            en: "Calm, professional, speaks with warmth. Knows how to reassure a worried pet owner." },
    color: "#0891B2",
    greet: { ru: "друг", en: "friend" },
    img: "/assets/saleon/bars.png",
  },
  {
    id: "maks",
    name: { ru: "МАКС", en: "MAX" },
    biz: { ru: "Фитнес-клуб", en: "Fitness Club" },
    char: { ru: "Мотивирующий, энергичный, верит в каждого клиента. Говорит коротко и по делу.",
            en: "Motivating, energetic, believes in every client. Speaks briefly and to the point." },
    color: "#185FA5",
    greet: { ru: "чемпион", en: "champion" },
    img: "/assets/saleon/maks.png",
  },
];

export type StateId = "new" | "explore" | "doubt" | "ready" | "gone";

export type ClientState = {
  id: StateId;
  name: Bi;
  intent: Bi;
  uMsg: Bi;
  bMsg: (b: Bot, locale: Locale) => string;
  chips: [Bi, Bi, Bi];
  badge: Bi;
};

export const STATES: ClientState[] = [
  {
    id: "new",
    name: { ru: "Первый раз", en: "First time" },
    intent: { ru: "Написал впервые. Ещё не знает, что предложить.", en: "First contact. Doesn't know what to expect yet." },
    uMsg: { ru: "Привет, а что вы вообще предлагаете?", en: "Hi, what do you guys offer?" },
    bMsg: (b, locale) =>
      locale === "ru"
        ? `Привет, ${b.greet.ru}! Я ${b.name.ru}, твой помощник в ${b.biz.ru.toLowerCase()}. Расскажи, что тебя интересует - подберу лучший вариант! Или хочешь, покажу, с чего обычно начинают?`
        : `Hey, ${b.greet.en}! I'm ${b.name.en}, your assistant at ${b.biz.en}. Tell me what you're interested in - I'll find the best option! Or want me to show you how most people get started?`,
    chips: [
      { ru: "Расскажи подробнее", en: "Tell me more" },
      { ru: "Сколько стоит?", en: "How much does it cost?" },
      { ru: "Как записаться?", en: "How to sign up?" },
    ],
    badge: { ru: "Первый контакт", en: "First contact" },
  },
  {
    id: "explore",
    name: { ru: "Изучает", en: "Exploring" },
    intent: { ru: "Сравнивает варианты, задаёт вопросы о деталях.", en: "Comparing options, asking about details." },
    uMsg: { ru: "А чем вы отличаетесь от конкурентов?", en: "How are you different from competitors?" },
    bMsg: (b, locale) =>
      locale === "ru"
        ? `Хороший вопрос, ${b.greet.ru}! Главное отличие - мы подходим индивидуально. Большинство, кто сравнивал варианты, выбирают нас. Что для тебя важнее всего?`
        : `Great question, ${b.greet.en}! The key difference is our individual approach. Most people who compare options end up choosing us. What matters most to you?`,
    chips: [
      { ru: "Показать примеры", en: "Show examples" },
      { ru: "Узнать цены", en: "See pricing" },
      { ru: "Записаться на пробное", en: "Book a trial" },
    ],
    badge: { ru: "Изучает варианты", en: "Exploring options" },
  },
  {
    id: "doubt",
    name: { ru: "Сомневается", en: "Hesitates" },
    intent: { ru: "Почти готов, но есть возражения или страхи.", en: "Almost ready, but has objections or fears." },
    uMsg: { ru: "Дороговато... Не знаю, стоит ли вообще?", en: "It's a bit pricey... Not sure if it's worth it?" },
    bMsg: (b, locale) =>
      locale === "ru"
        ? `Понимаю тебя, ${b.greet.ru} - это важное решение. Давай попробуем без риска. Если не подойдёт - просто не продолжаешь. Большинство, кто сомневался, потом говорят: "Надо было раньше!"`
        : `I get it, ${b.greet.en} - it's an important decision. Let's try without risk. If it doesn't fit - you just don't continue. Most people who hesitated say: "Should've started sooner!"`,
    chips: [
      { ru: "Что включено в цену?", en: "What's included?" },
      { ru: "Есть ли гарантия?", en: "Is there a guarantee?" },
      { ru: "Можно попробовать?", en: "Can I try first?" },
    ],
    badge: { ru: "Сомневается", en: "Hesitates" },
  },
  {
    id: "ready",
    name: { ru: "Готов купить", en: "Ready to buy" },
    intent: { ru: "Уже решил, хочет оформить быстро.", en: "Already decided, wants to proceed quickly." },
    uMsg: { ru: "Окей, я готов. Как записаться?", en: "Okay, I'm ready. How do I sign up?" },
    bMsg: (b, locale) =>
      locale === "ru"
        ? `Отлично, ${b.greet.ru}! Рад, что выбрал нас. Выбери удобное время или оплати онлайн - и ты в деле. Оформляем?`
        : `Awesome, ${b.greet.en}! Glad you chose us. Pick a convenient time or pay online - and you're in. Shall we proceed?`,
    chips: [
      { ru: "Выбрать время", en: "Choose a time" },
      { ru: "Оплатить онлайн", en: "Pay online" },
      { ru: "Нужна помощь с выбором", en: "Need help choosing" },
    ],
    badge: { ru: "Готов купить", en: "Ready to buy" },
  },
  {
    id: "gone",
    name: { ru: "Пропал", en: "Gone silent" },
    intent: { ru: "Общался, но перестал отвечать. Потерял интерес или забыл.", en: "Was chatting, then stopped. Lost interest or forgot." },
    uMsg: { ru: "(молчит уже 3 дня)", en: "(silent for 3 days)" },
    bMsg: (b, locale) =>
      locale === "ru"
        ? `${b.greet.ru.charAt(0).toUpperCase() + b.greet.ru.slice(1)}, это снова ${b.name.ru}. Просто хотел спросить - всё в порядке? Если остались вопросы - напиши, разберёмся. Держу для тебя специальное предложение ещё пару дней.`
        : `${b.greet.en.charAt(0).toUpperCase() + b.greet.en.slice(1)}, it's ${b.name.en} again. Just checking in - everything okay? If you have questions - write, we'll figure it out. I'm holding a special offer for you for a couple more days.`,
    chips: [
      { ru: "Да, хочу вернуться", en: "Yes, I'm back" },
      { ru: "Расскажи про предложение", en: "Tell me about the offer" },
      { ru: "Не актуально", en: "Not relevant anymore" },
    ],
    badge: { ru: "Реактивация", en: "Reactivation" },
  },
];

/**
 * CHIP_REPLIES[botId][stateIndex][chipIndex] — reply matching
 * STATES[stateIndex].chips[chipIndex] for that bot.
 */
export const CHIP_REPLIES: Record<BotId, Bi[][]> = {
  sem: [
    [
      { ru: "У нас два зала: белая циклорама — для чистых воздушных портретов, и тёмный лофт — для атмосферных съёмок. Реквизит, свет, гримёрка — всё включено!", en: "We have two studios: white cyclorama for clean airy portraits, and dark loft for atmospheric shoots. Props, lights, dressing room — all included!" },
      { ru: "Час аренды от 1 500 руб. Если нужна команда — фотограф, визажист — добавим. Что планируешь снимать?", en: "One hour rental from $18. Need a crew — photographer, makeup? We'll add them. What are we shooting?" },
      { ru: "Напиши дату, время и что будем снимать — я найду слот и оформлю. Когда удобно?", en: "Just tell me the date, time and what we're shooting — I'll find a slot and book it. When works for you?" },
    ],
    [
      { ru: "Наши работы — в Telegram @sem_foto. Там портреты, бизнес-съёмки, детские и семейные. Какой жанр интересует?", en: "Our work is in Telegram @sem_foto. Portraits, business shoots, family sessions. What genre interests you?" },
      { ru: "Час — 1 500 руб, 3 часа — 3 900 руб (выгоднее!). Свет и реквизит включены. Нужна команда — обговорим.", en: "One hour — $18, three hours — $48 (better value!). Lights and props included. Need a crew — we'll discuss." },
      { ru: "Есть пробная сессия 30 минут — 600 руб. Познакомишься с залом, сделаем несколько кадров. Когда удобно?", en: "We have a 30-minute trial session — $7. You'll see the studio and we'll shoot a few frames. When works for you?" },
    ],
    [
      { ru: "В аренду входит: студия, весь реквизит, профессиональный свет, гримёрка. Никаких скрытых доплат!", en: "Rental includes: studio, all props, professional lighting, dressing room. No hidden fees!" },
      { ru: "Если съёмка не понравится — вернём деньги. За 3 года работы такого не было, но обещание твёрдое.", en: "If the shoot doesn't satisfy you — full refund. In 3 years it's never happened, but the promise stands." },
      { ru: "Конечно! Есть пробная сессия 30 минут — минимальный риск, максимум впечатлений. Запишем?", en: "Of course! 30-minute trial session — minimum risk, maximum experience. Shall we book it?" },
    ],
    [
      { ru: "Свободные слоты: завтра 14:00 и 17:00, послезавтра 11:00. Какой зал — светлый или тёмный лофт?", en: "Open slots: tomorrow 2 PM and 5 PM, day after at 11 AM. Which studio — bright cyclorama or dark loft?" },
      { ru: "Принимаем карту онлайн или наличными. Напиши имя и дату — выставлю счёт прямо здесь.", en: "We accept card online or cash. Send your name and date — I'll issue an invoice right here." },
      { ru: "Расскажи что снимаем — образ, тему, настроение — и я подберу зал, свет и реквизит под идею.", en: "Tell me what we're shooting — the look, theme, mood — and I'll match the studio, lighting and props to your idea." },
    ],
    [
      { ru: "Рад слышать! Твой слот ещё не занят. Что изменилось? Могу помочь с выбором зала или идеей съёмки.", en: "Great to hear! Your slot is still open. What changed? I can help with studio choice or shoot concept." },
      { ru: "Для тебя — скидка 20% на первую аренду. Работает ещё два дня. Час в лофте вместо 1 500 — за 1 200 руб. Берём?", en: "For you — 20% off your first rental. Valid for two more days. One hour in the loft for $15 instead of $18. Deal?" },
      { ru: "Понял, бывает! Если вдруг захочется красивых кадров — я здесь. Удачи!", en: "No worries! When you want some great shots — I'm here. Take care!" },
    ],
  ],
  padik: [
    [
      { ru: "Падел — теннис + сквош, только круче и проще в освоении! 3 корта, инвентарь в аренду, тренеры. Уже через час будешь рубиться!", en: "Padel is tennis + squash, but easier to pick up! 3 courts, rental gear, coaches. You'll be playing within an hour!" },
      { ru: "Час корта — 1 200 руб. на 2–4 игрока, то есть от 300 руб с человека! Ракетка бесплатно. Абонемент ещё выгоднее.", en: "One court hour — $15 for 2–4 players, so from $4 per person! Racket free. Membership is even better value." },
      { ru: "Напиши сколько вас, день и примерное время — подберу корт и запишу. Минута дел!", en: "Tell me how many, the day and rough time — I'll find a court and book you in. Done in a minute!" },
    ],
    [
      { ru: "Глянь видосы в @padik_court — матчи, тренировки, атмосфера. Один просмотр — и сам захочешь!", en: "Check videos at @padik_court — matches, training, vibes. One look and you'll want to play!" },
      { ru: "Час корта — 1 200 руб., абонемент 8 часов — 7 200 руб., тренировка с тренером — 1 800 руб/час. Первый час — 600 руб!", en: "Court hour — $15, 8-hour membership — $90, coaching — $22/hour. First hour trial — just $7!" },
      { ru: "Пробный час за 600 руб с ракеткой — для тех, кто не пробовал. Тренер покажет азы и сразу начнём играть. Когда?", en: "Trial hour for $7 with racket — for beginners. Coach shows the basics and we start playing immediately. When?" },
    ],
    [
      { ru: "В аренду корта входит: корт, мячи, ракетки. Ничего лишнего не платишь. Обувь в аренду — 100 руб если нужно.", en: "Court rental includes: court, balls, rackets. Nothing extra. Shoe rental — $1.50 if needed." },
      { ru: "Если после первого часа не понравится — вернём деньги, без вопросов. Но такого ещё не было!", en: "If you don't enjoy your first hour — full refund, no questions. Never happened yet though!" },
      { ru: "Конечно! Пробный час за 600 руб — лучший старт. Минимум трат, максимум кайфа. Запишу?", en: "Of course! Trial hour for $7 — best start. Minimal cost, maximum fun. Book you in?" },
    ],
    [
      { ru: "Свободно: сегодня 19:00, завтра 10:00 и 18:00, суббота 12:00. Вас сколько будет?", en: "Open: today 7 PM, tomorrow 10 AM and 6 PM, Saturday 12 PM. How many players?" },
      { ru: "Картой онлайн или на кассе. Напиши имя и время — выставлю ссылку для оплаты!", en: "Card online or at the desk. Send name and time — I'll send the payment link!" },
      { ru: "Для новичков — пробный час с тренером, для опытных — просто аренда корта. Вы раньше играли в падел?", en: "For beginners — trial hour with coach; for experienced — just court rental. Have you played padel before?" },
    ],
    [
      { ru: "Дружище, ждали! Корты свободны — назови время и забронируем. Что остановило в прошлый раз?", en: "Buddy, we missed you! Courts are open — give me a time and I'll book it. What stopped you last time?" },
      { ru: "Для тебя — 2 часа по цене 1! Обычно 1 200 руб/час, сейчас 2 часа за 1 200. До конца недели. Берём?", en: "2 hours for the price of 1! Usually $15/hour, now 2 hours for $15. Until end of week. Deal?" },
      { ru: "Без проблем, дружище! Как захочется поиграть — возвращайся. Мы всегда рады!", en: "No problem, buddy! When you want to play — come back. Always welcome!" },
    ],
  ],
  glasha: [
    [
      { ru: "У нас живые цветы каждый день — пионы, розы, тюльпаны, экзотика. Делаем букеты под характер человека. Есть доставка. Что за повод?", en: "Fresh flowers every day — peonies, roses, tulips, exotic blooms. We make bouquets to match a person's personality. Delivery available. What's the occasion?" },
      { ru: "Букеты от 900 руб — небольшие нежные. Популярные варианты — 1 800–3 500 руб. Под бюджет подберу что-то настоящее. Сколько у нас?", en: "Bouquets from $11 — small and delicate. Popular options — $22–$43. Tell me your budget and I'll create something special." },
      { ru: "Напиши для кого, на какую дату и бюджет — соберу букет с душой. Самовывоз или доставка?", en: "Tell me: for whom, what date, budget — I'll craft a bouquet with soul. Pickup or delivery?" },
    ],
    [
      { ru: "Наши работы — в Instagram @glasha_flowers и Telegram. Много фото — портретные букеты, свадебные, для мам и подруг. Что ближе твоей идее?", en: "Our work is on Instagram @glasha_flowers and Telegram. Lots of photos — portrait bouquets, wedding, for moms and friends. Which style feels closest?" },
      { ru: "Маленький — от 900 руб, средний — 1 800–2 500, большой — от 3 500. Авторская упаковка и открытка — в подарок. Какой повод?", en: "Small — from $11, medium — $22–$30, large — from $43. Signature wrapping and card — gift included. What's the occasion?" },
      { ru: "Можно заехать и собрать букет самостоятельно с моей помощью! Платишь только за цветы. Хочешь попробовать?", en: "You can come in and assemble a bouquet yourself with my guidance! You only pay for the flowers. Want to try?" },
    ],
    [
      { ru: "В цену входит: цветы, авторская упаковка, зелень и декор, открытка. Доставка отдельно — 300 руб по городу. Всё честно!", en: "Price includes: flowers, signature wrapping, greenery and décor, card. Delivery extra — $4 citywide. All honest!" },
      { ru: "Цветы стоят минимум 5–7 дней при правильном уходе. Если завянут раньше — заменю. Всегда даю памятку по уходу.", en: "Flowers last at least 5–7 days with proper care. If they wilt sooner — I'll replace them. Always include care instructions." },
      { ru: "Начни с небольшого букета — от 900 руб. Увидишь качество и подход. Если понравится — вернёшься. Уверена!", en: "Start with a small bouquet — from $11. You'll see the quality and approach. If you like it — you'll be back. I'm sure!" },
    ],
    [
      { ru: "Скажи дату и примерное время — самовывоз или доставка? Букет соберу свежим к нужному моменту!", en: "Tell me the date and rough time — pickup or delivery? I'll have the bouquet freshly made for the right moment!" },
      { ru: "Принимаю карту, переводом или наличными. Напиши что заказываешь и дату — выставлю счёт!", en: "I accept card or transfer. Tell me what you're ordering and the date — I'll send an invoice!" },
      { ru: "Расскажи: для кого цветы, какой человек, какой повод — и я подберу букет с характером!", en: "Tell me: who are the flowers for, what kind of person, what occasion — and I'll pick a bouquet with character!" },
    ],
    [
      { ru: "Дорогая, рада слышать! Что интересует — тот же букет или что-то новое? Расскажи, подберу!", en: "Dear, so glad! Same bouquet as before or something new? Tell me and I'll get it ready!" },
      { ru: "Для тебя — скидка 15% на следующий заказ и бесплатная открытка. До конца недели. Что будем делать?", en: "15% off your next order plus a free card. Until end of week. What shall we create?" },
      { ru: "Всё хорошо! Если понадобятся цветы с душой — я здесь. Хорошего дня!", en: "All good! When you need flowers made with love — I'm here. Have a lovely day!" },
    ],
  ],
  kirillych: [
    [
      { ru: "Делаем всё: ТО, диагностика, тормоза, подвеска, кузов. Опыт 12 лет, работаем с любыми марками. Без накруток. Что за машина и что беспокоит?", en: "We do everything: servicing, diagnostics, brakes, suspension, bodywork. 12 years experience, all makes. No inflated prices. What's the car and what's wrong?" },
      { ru: "Диагностика — бесплатно. ТО от 3 500 руб, ремонт — по факту. Назови что случилось — скажу честную цену.", en: "Diagnostics — free. Service from $43, repairs — after inspection. Tell me what happened — I'll give an honest price." },
      { ru: "Напиши марку машины, что беспокоит и когда удобно приехать. Найдём время.", en: "Tell me your car make, what's wrong and when you can come. We'll find a time." },
    ],
    [
      { ru: "Отзывы — в ВКонтакте и Яндекс.Картах. Там же фото работ. 12 лет без рекламы — только сарафанное радио.", en: "Reviews on VK and 2GIS. Work photos there too. 12 years with no advertising — pure word of mouth." },
      { ru: "ТО — от 3 500 руб, тормоза — от 1 800 руб, подвеска — от 2 500 руб. Диагностика бесплатно. Что нужно?", en: "Service — from $43, brakes — from $22, suspension — from $30. Diagnostics free. What do you need?" },
      { ru: "Приезжай на бесплатную диагностику — 20 минут. Посмотрим машину, расскажем что есть, что срочно, что подождёт.", en: "Come for a free diagnostic — 20 minutes. We'll inspect the car and tell you what's there, what's urgent, what can wait." },
    ],
    [
      { ru: "В стоимость работ входит: сама работа, расходники. Скрытых доплат нет. После — показываю всё что сделал.", en: "Price includes: labor and consumables. No hidden fees. Afterwards I show everything that was done." },
      { ru: "Гарантия на работы — 6 месяцев. На запчасти — по гарантии производителя. Если что не так — переделаем бесплатно.", en: "Warranty on work — 6 months. On parts — manufacturer's warranty. If something's wrong — we redo it free." },
      { ru: "Приезжай на бесплатную диагностику — посмотрим машину и поймёшь, как работаем. Ни к чему не обязывает.", en: "Come for a free diagnostic — you'll see how we work. No obligation." },
    ],
    [
      { ru: "Свободно: завтра с 9:00, в пятницу с 10:00. Что за работы нужны — скажи, найдём нужный слот.", en: "Open: tomorrow from 9 AM, Friday from 10 AM. Tell me what needs doing — we'll find the right slot." },
      { ru: "Принимаем карту, наличные, перевод. Скажи что надо сделать — выставлю счёт после диагностики.", en: "Card, cash or transfer. Tell me what needs doing — I'll invoice after diagnostics." },
      { ru: "Приезжай на диагностику — сам всё покажу и объясню что срочно, что можно отложить. Честно.", en: "Come for diagnostics — I'll show and explain everything myself: what's urgent, what can wait. Straight talk." },
    ],
    [
      { ru: "Добро! Что с машиной — та же проблема или что-то новое? Найдём время.", en: "Good! Same issue with the car or something new? Let's find a time." },
      { ru: "Для тебя — бесплатная диагностика + скидка 10% на первый ремонт. До конца месяца. Записать?", en: "For you — free diagnostics + 10% off first repair. Until end of month. Book it?" },
      { ru: "Понял. Если понадобится — пиши, разберёмся быстро.", en: "Got it. If you need anything — write, we'll sort it fast." },
    ],
  ],
  lusya: [
    [
      { ru: "Делаем стрижки, окрашивание, уходы, маникюр и педикюр. Мастера 5–10 лет опыта. Работаем без выходных с 9 до 21. Что тебя интересует?", en: "We do haircuts, coloring, treatments, manicure and pedicure. Stylists with 5–10 years experience. Open every day 9 AM – 9 PM. What interests you?" },
      { ru: "Стрижка от 1 200, окрашивание от 2 500, маникюр от 900. Скажи что нужно — назову точнее!", en: "Haircut from $15, coloring from $30, manicure from $11. Tell me what you need — I'll give you the exact price!" },
      { ru: "Напиши что хочешь сделать и удобное время — подберу мастера и запишу. Всё просто!", en: "Tell me what you want done and a convenient time — I'll match a stylist and book you in. Super easy!" },
    ],
    [
      { ru: "Работы мастеров — в Instagram @lusya_beauty. Стрижки, окрашивания, укладки. Реальные клиенты!", en: "Stylist work on Instagram @lusya_beauty. Haircuts, coloring, styling. Real clients!" },
      { ru: "Стрижка от 1 200, балаяж от 4 500, ламинирование от 2 500, маникюр от 900. Хочешь полный прайс?", en: "Haircut from $15, balayage from $55, lamination from $30, manicure from $11. Want the full price list?" },
      { ru: "Есть пробный уход за 590 руб — 20 минут, увлажнение и блеск. Идеально познакомиться с нашими мастерами.", en: "Trial treatment for $7 — 20 minutes, hydration and shine. Perfect way to meet our stylists." },
    ],
    [
      { ru: "В стоимость: работа мастера, профессиональные средства, мытьё и укладка. Без скрытых доплат!", en: "Price includes: stylist's work, professional products, wash and blow-dry. No hidden fees!" },
      { ru: "Если что-то не понравится — скажи сразу. Подправим бесплатно. Нам важно, чтобы ты вышла довольной!", en: "If anything doesn't look right — tell us right away. We'll fix it free. Your happiness is what matters!" },
      { ru: "Запишись на стрижку или уход — сразу почувствуешь нашу работу. Страшно первый раз, но оно стоит!", en: "Book a haircut or treatment — you'll feel our work right away. First time is scary but worth it!" },
    ],
    [
      { ru: "Свободно: завтра 11:00 и 15:30, послезавтра 10:00. К какому мастеру хочешь — или не важно?", en: "Available: tomorrow 11 AM and 3:30 PM, day after at 10 AM. Do you have a preferred stylist?" },
      { ru: "Принимаем карту и переводом. Запишу и пришлю подтверждение. Имя и телефон?", en: "Card or transfer. I'll book you and send a confirmation. Your name and phone?" },
      { ru: "Расскажи что хочешь изменить, какая сейчас длина и состояние волос — подберу мастера и процедуру!", en: "Tell me what you want to change, current length and hair condition — I'll match the right stylist and treatment!" },
    ],
    [
      { ru: "Рада слышать! У нас всё по-прежнему хорошо. Что хочешь сделать в этот раз?", en: "So glad! Everything's still great here. What are you thinking of doing this time?" },
      { ru: "Для тебя — скидка 20% на любую услугу. Только эта неделя. Хочешь — запишу прямо сейчас?", en: "20% off any service — this week only. Want me to book you right now?" },
      { ru: "Хорошо, подруга! Если что — всегда здесь. Береги себя!", en: "No worries, friend! Whenever you need us — we're here. Take care!" },
    ],
  ],
  bars: [
    [
      { ru: "Лечим кошек, собак, грызунов и птиц. Работаем с 8:00 до 22:00, есть выездная служба. Средний опыт врача — 7 лет. Что беспокоит питомца?", en: "We treat cats, dogs, rodents and birds. Open 8 AM – 10 PM, home visits available. Average vet experience — 7 years. What's concerning your pet?" },
      { ru: "Первичный осмотр — 600 руб, вакцинация — от 400 руб, выезд на дом — 800 руб + осмотр. Что нужно?", en: "First exam — $7, vaccination — from $5, home visit — $10 + exam fee. What do you need?" },
      { ru: "Напиши какое животное, что беспокоит и когда удобно. Найдём время к нужному врачу.", en: "Tell me the type of animal, the concern and when you're free. We'll find the right vet and time." },
    ],
    [
      { ru: "Отзывы клиентов — в ВКонтакте и 2ГИС. Там реальные истории и фото наших пациентов. Там тепло!", en: "Client reviews on VK and 2GIS. Real stories and photos of our patients. Very heartwarming!" },
      { ru: "Осмотр — 600 руб, анализы от 300 руб, вакцинация от 400 руб, операции от 3 000 руб. Диагностика помогает не переплачивать.", en: "Exam — $7, tests from $4, vaccination from $5, surgery from $37. A diagnostic prevents overpaying." },
      { ru: "Первичный осмотр — 600 руб. Врач посмотрит питомца, ответит на вопросы, даст рекомендации. Когда удобно?", en: "First exam — $7. The vet will check your pet, answer questions, give recommendations. When works for you?" },
    ],
    [
      { ru: "В осмотр входит: осмотр, первичная консультация, рекомендации. Если нужны анализы — скажем заранее. Без сюрпризов.", en: "Exam includes: physical check, initial consultation, recommendations. If tests are needed — we tell you upfront. No surprises." },
      { ru: "Отвечаем за качество лечения. Если стало хуже — повторный осмотр бесплатно. Здоровье питомца — наш приоритет.", en: "We stand behind our treatment quality. If the pet gets worse — free follow-up. Your pet's health is our priority." },
      { ru: "Запишитесь на первичный осмотр за 600 руб — посмотрим питомца, познакомимся. Решение можно принять потом.", en: "Book an initial exam for $7 — we'll check your pet and get acquainted. No commitment beyond that." },
    ],
    [
      { ru: "Свободно: сегодня 17:00 и 19:30, завтра с 10:00. Как зовут питомца и какое животное?", en: "Available: today 5 PM and 7:30 PM, tomorrow from 10 AM. What's your pet's name and species?" },
      { ru: "Принимаем карту на месте или переводом. После осмотра выставим счёт — ничего лишнего.", en: "Card on site or bank transfer. We'll invoice after the exam — nothing extra." },
      { ru: "Расскажите что беспокоит питомца — подскажу к какому специалисту лучше записаться и что взять с собой.", en: "Tell me what's concerning your pet — I'll advise which specialist to see and what to bring along." },
    ],
    [
      { ru: "Рады слышать! Как ваш питомец сейчас? Запишем на удобное время.", en: "Glad to hear! How is your pet doing now? Let's find a convenient time." },
      { ru: "Для вас — бесплатный повторный осмотр, если лечение продолжается. Плюс скидка 10% на анализы. Актуально?", en: "For you — free follow-up exam if treatment is ongoing. Plus 10% off lab tests. Does that help?" },
      { ru: "Хорошо. Если понадобится помощь — мы здесь. Здоровья вашему питомцу!", en: "Understood. If you need help — we're here. Wishing your pet good health!" },
    ],
  ],
  maks: [
    [
      { ru: "У нас: тренажёрный зал, групповые программы, бассейн и персональные тренировки. Сертифицированные тренеры, топовое оборудование. Что хочешь прокачать?", en: "We have: gym floor, group classes, pool and personal training. Certified coaches, top-tier equipment. What do you want to work on?" },
      { ru: "Месячный — 2 900 руб, 3 месяца — 6 900, годовой — 19 900. Персональная тренировка — 2 500 руб. Пробное занятие — бесплатно!", en: "Monthly — $35, 3 months — $85, annual — $240. Personal training — $30. Trial session — free!" },
      { ru: "Напиши когда хочешь прийти — утром или вечером. Оформим за минуту!", en: "Tell me when you want to come — morning or evening. Done in a minute!" },
    ],
    [
      { ru: "Загляни в Instagram @max_fitness — трансформации клиентов, тренировки, атмосфера зала. Там виден результат!", en: "Check Instagram @max_fitness — client transformations, workouts, gym atmosphere. The results speak for themselves!" },
      { ru: "Месячный — 2 900 руб, 3 месяца — 6 900 руб (экономия 900!), годовой — 19 900 руб. Пробное — бесплатно!", en: "Monthly — $35, 3 months — $85 (save $20!), annual — $240. Trial — free!" },
      { ru: "Пробное — бесплатно! Потренируешься, познакомишься с тренером, посмотришь зал. Никаких обязательств. Когда приходишь?", en: "Trial session — FREE! Train, meet the coach, see the gym. Zero obligation. When are you coming?" },
    ],
    [
      { ru: "В абонемент: всё оборудование, групповые занятия, раздевалка с душем. Персональный тренер — дополнительно. Никаких скрытых платежей!", en: "Membership includes: all equipment, group classes, changing room with shower. Personal trainer extra. No hidden fees!" },
      { ru: "Если в первый месяц не понравится — вернём деньги. Без условий. Но уверен — ты останешься!", en: "If you're not satisfied in the first month — full refund. No conditions. But I'm confident you'll stay!" },
      { ru: "Приходи на бесплатное пробное занятие — без денег, без обязательств. Одна тренировка — и всё поймёшь!", en: "Come for a free trial session — no payment, no obligation. One workout and you'll know!" },
    ],
    [
      { ru: "Залетай: завтра утром 8:00 или вечером 19:00. Тренер тебя встретит. Имя для записи?", en: "Come on: tomorrow morning 8 AM or evening 7 PM. The coach will meet you. Name for the booking?" },
      { ru: "Картой онлайн или наличными на ресепшн. Напиши какой абонемент — выставлю ссылку!", en: "Card online or cash at the desk. Tell me which membership — I'll send the payment link!" },
      { ru: "Расскажи цель: похудеть, набрать мышцы, поддержать форму — подберу программу и тренера под тебя!", en: "Tell me your goal: lose weight, build muscle, stay fit — I'll pick the right program and coach for you!" },
    ],
    [
      { ru: "Чемпион, вернулся! Ждали! Прогресс никуда не делся. Когда заходишь?", en: "Champion, you're back! We waited! Your progress is still there. When are you coming?" },
      { ru: "Для тебя — месяц за 1 900 руб вместо 2 900! Специально, чтобы ты вернулся в ритм. Действует 48 часов. Оформляем?", en: "For you — one month for $22 instead of $35! Specially to get you back in the rhythm. Valid 48 hours. Deal?" },
      { ru: "Ок, чемпион! Когда захочешь вернуться в форму — мы здесь. Дверь открыта!", en: "Ok, champion! When you want to get back in shape — we're here. Door's always open!" },
    ],
  ],
};
