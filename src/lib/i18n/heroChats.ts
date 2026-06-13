import type { Bi } from "./content";

export type HeroMessage = { who: "in" | "out"; text: Bi };

/**
 * One hero chat per bot, in the same order as BOTS in personas.ts
 * (sem, padik, glasha, kirillych, lusya, bars, maks).
 * chipReplies[i] is the bot's reply to chips[i] (positional, locale-agnostic).
 */
export type HeroChat = {
  msgs: HeroMessage[];
  chips: [Bi, Bi, Bi];
  chipReplies: [Bi, Bi, Bi];
};

export const HERO_CHATS: HeroChat[] = [
  // СЭМ / SAM
  {
    msgs: [
      { who: "in", text: { ru: "Привет! Хочу арендовать студию для съемки, что есть?", en: "Hi! I'd like to rent a studio for a shoot, what's available?" } },
      { who: "out", text: { ru: "Привет, красотка! У нас два зала: белый циклорама и тёмный loft. Расскажи, что снимаем - подберу свет и время!", en: "Hey gorgeous! We have two studios: white cyclorama and dark loft. Tell me what we're shooting - I'll match the light and time!" } },
      { who: "in", text: { ru: "Портрет, хочу что-нибудь атмосферное", en: "Portrait, I want something atmospheric" } },
      { who: "out", text: { ru: "Тогда точно loft - там мягкое боковое освещение, идеально для портрета. Завтра есть 14:00 или 17:30. Бронируем?", en: "Then definitely the loft - soft side lighting, perfect for portraits. Tomorrow I have 2:00 PM and 5:30 PM. Booking?" } },
    ],
    chips: [
      { ru: "Сколько стоит?", en: "How much?" },
      { ru: "Посмотреть фото зала", en: "View studio photos" },
      { ru: "Другое время", en: "Different time" },
    ],
    chipReplies: [
      { ru: "Час аренды — 2500 руб. Если нужна команда для съёмки, добавим 1000 руб. Для постоянных клиентов скидка 15%.", en: "One hour rental — $30. If you need a crew, add $12. Regular clients get 15% off." },
      { ru: "Конечно! Все фото есть в нашем Telegram-канале @sam_studio. Там же актуальное расписание.", en: "Of course! All photos are in our Telegram channel @sam_studio. Schedule is there too." },
      { ru: "Есть слоты: сегодня 19:00, послезавтра 10:00 и 15:00. Какой подходит?", en: "Available: today at 7 PM, day after tomorrow at 10 AM and 3 PM. Which works?" },
    ],
  },
  // ПАДИК / PAD
  {
    msgs: [
      { who: "in", text: { ru: "Привет, хочу попробовать падел. Я вообще новичок", en: "Hi, I want to try padel. I'm a total beginner" } },
      { who: "out", text: { ru: "Дружище, это лучшее решение! Падел - самый быстро усваиваемый вид спорта. Уже через час будешь рубиться. Есть пробный слот завтра в 18:00 - залетай!", en: "Buddy, best decision! Padel is the fastest sport to pick up. You'll be playing within an hour. Trial slot tomorrow at 6 PM - jump in!" } },
      { who: "in", text: { ru: "А ракетку нужно свою брать?", en: "Do I need to bring my own racket?" } },
      { who: "out", text: { ru: "Нет, у нас всё есть - ракетки, мячи, аренда обуви. Просто приходи и играй. Записать тебя на завтра?", en: "Nope, we have everything - rackets, balls, shoe rentals. Just show up and play. Book you for tomorrow?" } },
    ],
    chips: [
      { ru: "Да, записать!", en: "Yes, book me!" },
      { ru: "Другое время", en: "Different time" },
      { ru: "Цены", en: "Pricing" },
    ],
    chipReplies: [
      { ru: "Отлично! Записал тебя завтра в 18:00. Пришлю напоминание за 2 часа. Увидимся на корте!", en: "Awesome! Booked you for tomorrow at 6 PM. I'll send a reminder 2 hours before. See you on the court!" },
      { ru: "Есть слоты: в эту субботу в 10:00, воскресенье в 12:00 и 16:00. Что подходит?", en: "Available: this Saturday at 10 AM, Sunday at 12 PM and 4 PM. Which works?" },
      { ru: "Пробный час — 800 руб с ракеткой. Абонемент 8 часов — 5200 руб. Групповые тренировки — 600 руб/чел.", en: "Trial hour — $10 with racket. 8-hour membership — $65. Group training — $8/person." },
    ],
  },
  // ГЛАША / FLORA
  {
    msgs: [
      { who: "in", text: { ru: "Добрый день! Нужен букет на день рождения подруге", en: "Hello! I need a bouquet for a friend's birthday" } },
      { who: "out", text: { ru: "Дорогая, какая хорошая идея! Расскажи немного о подруге - какой она человек, есть ли любимые цветы? Подберу букет с характером, а не просто набор цветов.", en: "Dear, what a lovely idea! Tell me about your friend - what kind of person is she, any favorite flowers? I'll put together a bouquet with personality." } },
      { who: "in", text: { ru: "Она любит что-то нежное, пастельные тона", en: "She likes something delicate, pastel tones" } },
      { who: "out", text: { ru: "Тогда пионы и эустома в пыльно-розовом с веточками эвкалипта - это будет очень её. Бюджет примерно какой? Соберу под него.", en: "Then peonies and lisianthus in dusty pink with eucalyptus - it'll be very her. What's your budget? I'll work with it." } },
    ],
    chips: [
      { ru: "До 2000 руб", en: "Under $25" },
      { ru: "До 3500 руб", en: "Under $45" },
      { ru: "Нужна доставка", en: "Need delivery" },
    ],
    chipReplies: [
      { ru: "Отлично! В этом бюджете сделаю нежный букет из тюльпанов и альстромерий в пастельных тонах. Будет очень атмосферно! Самовывоз или доставка?", en: "Perfect! In this budget I'll make a delicate bouquet of tulips and alstroemeria in pastel tones. Very atmospheric! Pickup or delivery?" },
      { ru: "Прекрасно! На 3500 соберу роскошный букет из пионов и эустомы с эвкалиптом — именно то, что описывала. Когда нужен?", en: "Wonderful! For $45 I'll create a luxurious peony and lisianthus bouquet with eucalyptus — exactly what you described. When do you need it?" },
      { ru: "Доставляем по городу — 300 руб. Курьер привезёт в указанное время с открыткой. Адрес и время доставки?", en: "We deliver citywide — $4. Courier arrives at your specified time with a card included. Address and delivery time?" },
    ],
  },
  // КИРИЛЛЫЧ / CARL
  {
    msgs: [
      { who: "in", text: { ru: "Здорово. Стучит что-то спереди при торможении", en: "Hey. Something's knocking in the front when I brake" } },
      { who: "out", text: { ru: "Понял, друг. Скорее всего тормозные колодки или суппорт. Это не срочно, но ездить долго не стоит. Когда сможешь заехать на диагностику?", en: "Got it, friend. Most likely brake pads or caliper. Not urgent, but don't drive too long. When can you come in for a check?" } },
      { who: "in", text: { ru: "Могу в субботу утром", en: "I can make it Saturday morning" } },
      { who: "out", text: { ru: "Записал тебя на субботу в 9:00. Диагностика тормозов бесплатно, займёт минут 20. Марка и модель машины?", en: "Booked you for Saturday at 9 AM. Brake check is free, takes about 20 minutes. Make and model of your car?" } },
    ],
    chips: [
      { ru: "Отлично, жду", en: "Great, see you then" },
      { ru: "Другое время", en: "Different time" },
      { ru: "Примерная цена ремонта", en: "Estimated repair cost" },
    ],
    chipReplies: [
      { ru: "Добро! Ждём тебя в субботу в 9:00. Адрес: ул. Механиков, 14. Позвони, если вдруг не найдёшь.", en: "Perfect! See you Saturday at 9 AM. Address: 14 Mechanics St. Call if you can't find us." },
      { ru: "Без проблем. В воскресенье есть 10:00 и 12:00, в понедельник с 8:00. Что удобнее?", en: "No problem. Sunday has 10 AM and 12 PM, Monday from 8 AM. What works best?" },
      { ru: "Если колодки — от 1800 руб с работой. Суппорт — от 3500 руб. Точнее скажу после диагностики, она бесплатная.", en: "Brake pads — from $22 including labor. Caliper — from $45. I'll give exact price after the free diagnosis." },
    ],
  },
  // ЛЮСЯ / LUCY
  {
    msgs: [
      { who: "in", text: { ru: "Привет! Хочу записаться на стрижку, есть что-нибудь на завтра?", en: "Hi! I'd like to book a haircut, anything available tomorrow?" } },
      { who: "out", text: { ru: "Подруга, привет! Конечно есть - завтра у нас открыто 11:00 и 14:30. К кому хочешь - к Насте или Ирине?", en: "Hey friend! Of course - tomorrow we have 11:00 AM and 2:30 PM open. Who would you prefer - Nastya or Irina?" } },
      { who: "in", text: { ru: "К Насте! На 14:30", en: "Nastya! At 2:30" } },
      { who: "out", text: { ru: "Записала тебя к Насте на завтра в 14:30. Напомню за час до визита. До встречи!", en: "Booked you with Nastya tomorrow at 2:30 PM. I'll send a reminder an hour before. See you!" } },
    ],
    chips: [
      { ru: "Перенести запись", en: "Reschedule" },
      { ru: "Услуги и цены", en: "Services & prices" },
      { ru: "Адрес", en: "Address" },
    ],
    chipReplies: [
      { ru: "Конечно! Есть завтра в 11:00 и послезавтра в 10:00 и 15:00. Насте или к другому мастеру?", en: "Of course! Available tomorrow at 11 AM and the day after at 10 AM and 3 PM. With Nastya or another stylist?" },
      { ru: "Стрижка — от 1200 руб, окрашивание — от 2500, уход — от 800. Полный прайс пришлю в Telegram. Что интересует?", en: "Haircut — from $15, coloring — from $30, treatment — from $10. Full price list in Telegram. What are you interested in?" },
      { ru: "Мы на ул. Садовая, 23, вход со двора. Парковка бесплатная. Работаем с 9:00 до 21:00 без выходных.", en: "We're at 23 Garden St, enter from the courtyard. Free parking. Open 9 AM – 9 PM every day." },
    ],
  },
  // БАРС / BARLO
  {
    msgs: [
      { who: "in", text: { ru: "Здравствуйте, мой кот не ест второй день, что делать?", en: "Hello, my cat hasn't eaten for two days, what should I do?" } },
      { who: "out", text: { ru: "Здравствуй, друг. Понимаю, это тревожно. Скажи - кот вялый или активный? Пьёт воду? Это поможет понять срочность.", en: "Hello, friend. I understand, that's worrying. Tell me - is the cat lethargic or active? Drinking water? This will help gauge urgency." } },
      { who: "in", text: { ru: "Вялый, воду пьёт немного", en: "Lethargic, drinking a little water" } },
      { who: "out", text: { ru: "Рекомендую приехать сегодня - два дня без еды плюс вялость требуют осмотра. Есть время в 15:00 и 18:30. Как имя питомца?", en: "I recommend coming in today - two days without food plus lethargy needs an exam. Available at 3:00 PM and 6:30 PM. What's your pet's name?" } },
    ],
    chips: [
      { ru: "Записать на 15:00", en: "Book 3:00 PM" },
      { ru: "Записать на 18:30", en: "Book 6:30 PM" },
      { ru: "Вызов на дом", en: "Home visit" },
    ],
    chipReplies: [
      { ru: "Записал! Ждём вас сегодня в 15:00. Врач осмотрит кота и назначит лечение. Как зовут питомца?", en: "Booked! See you today at 3:00 PM. The vet will examine your cat and prescribe treatment. What's your pet's name?" },
      { ru: "Отлично! Записал на 18:30. Захватите предыдущие анализы, если есть. Как зовут кота?", en: "Great! Booked for 6:30 PM. Bring any previous test results if you have them. What's the cat's name?" },
      { ru: "Выезжаем в пределах города, стоимость — 800 руб + стоимость осмотра. Когда удобно — сегодня или завтра? Адрес?", en: "We do home visits within the city — $10 + exam fee. When's convenient — today or tomorrow? Address?" },
    ],
  },
  // МАКС / MAX
  {
    msgs: [
      { who: "in", text: { ru: "Сколько стоит абонемент?", en: "How much is a membership?" } },
      { who: "out", text: { ru: "Чемпион, привет! Месячный - 2900, три месяца - 6900, годовой - 19900. Но сначала рекомендую пробное занятие - бесплатно. Посмотришь зал, познакомишься с тренером.", en: "Champion, hey! Monthly - $35, three months - $85, annual - $240. But I recommend a free trial first - check out the gym, meet the trainer." } },
      { who: "in", text: { ru: "Пробное - это как? Нужно что-то приносить?", en: "Trial - how does that work? Do I need to bring anything?" } },
      { who: "out", text: { ru: "Только себя и хорошее настроение! Форма и полотенце есть в прокате. Когда удобно прийти - утром или вечером?", en: "Just yourself and good energy! Workout clothes and towels available for rent. When's convenient - morning or evening?" } },
    ],
    chips: [
      { ru: "Утром", en: "Morning" },
      { ru: "Вечером", en: "Evening" },
      { ru: "Купить абонемент сразу", en: "Buy membership now" },
    ],
    chipReplies: [
      { ru: "Отлично! Завтра в 8:00 тебя ждём. Форма и полотенце — в прокате. Имя для записи?", en: "Perfect! Tomorrow at 8:00 AM. Gear and towels are available for rent. Name for the booking?" },
      { ru: "Записал на завтра в 19:00. Приходи бодрым — первое занятие бесплатно!", en: "Booked for tomorrow at 7:00 PM. Come energized — first session is free!" },
      { ru: "Уважаю решительность! Месячный — 2900 руб, три месяца — 6900. Как удобно оплатить: картой онлайн или на месте?", en: "Love the decisiveness! Monthly — $35, three months — $85. Pay online by card or in person?" },
    ],
  },
];
