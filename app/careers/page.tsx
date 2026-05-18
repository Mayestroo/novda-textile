'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'
import { useState } from 'react'

const translations = {
  uz: {
    heroSub: 'Jamoamizga qoʻshiling',
    heroTitle: <>Biz bilan oʻsing.<br />Kelajagingizni tikib boring.</>,
    heroDesc: 'Biz oʻsib borayotgan oilamizga qoʻshilish uchun har doim isteʼdodli va fidoyi insonlarni qidiramiz. Tikasizmi, boshqarasizmi yoki yangilik yaratasizmi — bizda siz uchun joy bor.',
    viewOpen: 'Ochiq vakansiyalarni koʻrish ↓',
    lifeAt: 'Novdadagi hayot',
    moreThanJob: 'Shunchaki ish emas',
    investPeople: 'Biz oʻz xodimlarimizga mahsulotlarimizga boʻlgani kabi gʻamxoʻrlik, izchillik va uzoq muddatli istiqbol bilan sarmoya kiritamiz.',
    ourCulture: 'Bizning madaniyatimiz',
    feelsLikeFamily: <>Oila kabi tuyuladigan <span className="text-secondary italic">Fabrika</span></>,
    clockInClockOut: 'Biz shunchaki vaqt oʻtkazish uchun ishlamaymiz. Biz qilayotgan ishimiz bilan faxrlanamiz — va bu faxr har bir chokimizda namoyon boʻladi.',
    seniorSeamstress: 'Katta tikuvchi',
    seniorExperience: 'Novdada 9 yil',
    realVoices: 'Haqiqiy ovozlar',
    hearFromTeam: 'Jamoamizdan eshiting',
    nowHiring: 'Hozir ishga qabul qilamiz',
    openPositions: 'Ochiq vakansiyalar',
    hiringBased: 'Biz yondashuv va salohiyatga qarab ishga qabul qilamiz. Mos keladigan vakansiya topilmadingizmi? Ochiq ariza yuboring — biz har hafta koʻrib chiqamiz.',
    howToJoin: 'Qanday qoʻshilish mumkin',
    hiringProcess: <>Ishga qabul qilish<br /><span className="text-text-muted italic font-light">Jarayoni</span></>,
    hiringDesc: 'Biz sizning vaqtingizni qadrlaymiz. Bizning ishga qabul qilish jarayonimiz birinchi kundan boshlab shaffof, sodda va hurmatga asoslangan holda tuzilgan.',
    readyApply: 'Ariza topshirishga tayyormisiz?',
    sendCV: 'Rezyumengizni careers@novdatex.com manziliga yuboring yoki aloqa formamiz orqali sizni qiziqtirgan lavozimni koʻrsating.',
    applyForm: 'Forma orqali ariza topshirish',
    equalOpportunity: 'Biz barcha uchun teng imkoniyatlar yaratuvchi ish beruvchimiz. Barcha arizalar yosh, jins va kelib chiqishidan qatʼi nazar koʻrib chiqiladi.',
    dontSeeRole: 'Sizga mos keladigan lavozim yoʻqmi?',
    growingFast: 'Biz tez oʻsmoqdamiz.',
    growingDesc: 'Bizga oʻz rezyumengizni yuboring va nima bilan shugʻullana olishingizni aytib bering. Har dushanba kuni kelib tushgan arizalarni koʻrib chiqamiz.',
    sendOpenApp: 'Ochiq ariza yuborish',
    applyRoleBtn: 'Ushbu lavozimga ariza topshirish →',
    reqs: 'Talablar',
    resps: 'Majburiyatlar',
    
    benefits: [
      { icon: '💰', title: 'Raqobatbardosh ish haqi', desc: 'Tajriba va natijalarga qarab har yili koʻrib chiqiladigan bozor narxidan yuqori maosh.' },
      { icon: '🏥', title: 'Tibbiy sugʻurta', desc: 'Birinchi kundan boshlab siz va oilangiz uchun toʻliq tibbiy sugʻurta qoplamasi.' },
      { icon: '📚', title: 'Kasbiy taʼlim', desc: 'Tikuv texnikasi, uskunalar va boshqa koʻnikmalar boʻyicha muntazam ichki mahorat darslari.' },
      { icon: '🕐', title: 'Moslashuvchan smena', desc: 'Sizning hayot tarzingizga mos keladigan ertalabki va kunduzgi smena variantlari.' },
      { icon: '🎉', title: 'Mavsumiy bonuslar', desc: 'Har chorakda toʻlanadigan natija bonuslari, shuningdek Hayit va Yangi yil bonuslari.' },
      { icon: '🤝', title: 'Qoʻllab-quvvatlovchi muhit', desc: 'Hamma teng huquqli boʻlgan, har bir ovoz eshitiladigan hurmatli ish joyi.' },
    ],
    hiringSteps: [
      { title: 'Hujjat topshirish', desc: 'CVingizni shakl yoki elektron pochta orqali yuboring. 5 daqiqa vaqt ketadi.' },
      { title: 'Koʻrib chiqish', desc: 'HR guruhimiz rezyumengizni 3 ish kuni ichida koʻrib chiqadi va siz bilan bogʻlanadi.' },
      { title: 'Suhbat', desc: 'Bir-birimizni yaqinroq bilish uchun qisqa shaxsiy uchrashuv yoki video qoʻngʻiroq.' },
      { title: 'Hush kelibsiz', desc: 'Taklif xati, jamoaga moslashish jarayoni va birinchi ish kuningiz.' },
    ],
    employeeStories: [
      { quote: 'Men tikuvchi operator sifatida ish boshlagan edim. Rahbarim sifat nazorati boʻlimiga tavsiya qildi va kompaniya ISO oʻqishim uchun pul toʻladi. Hozir 12 kishilik guruhni boshqaraman.', author: 'Dilnoza M.', role: 'Sifat nazorati inspektori · 6 yil' },
      { quote: 'Ertalabki smena oilaviy jadvalim bilan juda yaxshi mos keladi. Dazmollash jarayonini 20% ga qisqartiradigan yangi ish jarayonini taklif qilganimda, menejerim meni tingladi. Men bu yerda qadrlanishimni his qilaman.', author: 'Jasur T.', role: 'Ishlab chiqarish liniyasi nazoratchisi · 4 yil' }
    ],
    roles: [
      {
        id: 'sewing-operator',
        title: 'Tikuv mashinasi operatori',
        dept: 'Ishlab chiqarish',
        type: 'Toʻliq stavka',
        location: 'Andijon fabrikasi',
        reqs: ['Sanoat tikuv mashinalarida kamida 1 yillik ish tajribasi', 'Ishlab chiqarish tezligida toʻgʻri chok tikish qobiliyati', 'Overlok va yassi chok mashinalarini bilish ustunlik beradi', 'Jamoada ishlash qobiliyati'],
        resp: ['Yakka igna va overlok tikuv mashinalarini boshqarish', 'Ishlab chiqarish maqsadlari va sifat standartlariga rioya qilish', 'Mato nuqsonlari va mashina muammolari haqida tezkor xabar berish'],
      },
      {
        id: 'qc-inspector',
        title: 'Sifat nazorati inspektori',
        dept: 'Sifat nazorati',
        type: 'Toʻliq stavka',
        location: 'Andijon fabrikasi',
        reqs: ['Kiyim ishlab chiqarishda kamida 2 yillik QC tajribasi', 'AQL sifat standartlarini bilish', 'Yaxshi koʻrish qobiliyati, detallarga eʼtiborlilik', 'Hisobot yozishning boshlangʻich koʻnikmalari'],
        resp: ['Ishlab chiqarish jarayonida kiyimlarni koʻrikdan oʻtkazish', 'Nuqsonlarni qayd etish va takrorlanadigan muammolarni bartaraf etish', 'Sifat muammolarini hal qilish uchun liniya rahbarlari bilan ishlash'],
      },
      {
        id: 'cutting-tech',
        title: 'Bichuvchi texnik',
        dept: 'Bichish boʻlimi',
        type: 'Toʻliq stavka',
        location: 'Andijon fabrikasi',
        reqs: ['Mexanik bichish uskunalari bilan ishlash tajribasi', 'Chizmalar va andozalarni toʻgʻri oʻqiy olish', 'Tik oyoqda ishlash uchun jismoniy chidamlilik', 'Mato tolalari yoʻnalishiga eʼtiborli boʻlish'],
        resp: ['Bichish buyurtmalariga muvofiq matoni yoyish', 'Matoni tasdiqlangan andozalar boʻyicha aniq kesish', 'Pichoqlarning oʻtkirligini va bichish uskunalarini saqlash'],
      },
      {
        id: 'export-docs',
        title: 'Eksport hujjatlari boʻyicha mutaxassis',
        dept: 'Logistika va eksport',
        type: 'Toʻliq stavka',
        location: 'Toshkent ofisi',
        reqs: ['Yuk tashish va eksport hujjatlari bilan ishlash tajribasi', 'Invoys, qadoqlash varaqasi, kelib chiqish sertifikatini bilish', 'Rus va ingliz tillarini mukammal bilish', 'Muddati cheklangan ishlar bilan tartibli ishlash'],
        resp: ['Barcha eksport hujjatlarini aniq va oʻz vaqtida tayyorlash', 'Yuk tashuvchilar va bojxona brokerlari bilan muvofiqlashtirish', 'Yuklarni kuzatib borish va mijozlarni xabardor qilish'],
      },
      {
        id: 'merchandiser',
        title: 'Merchendayzer / Mijozlar boʻyicha menejer',
        dept: 'Sotuvlar va mijozlar aloqalari',
        type: 'Gibrid / Toʻliq stavka',
        location: 'Toshkent + xizmat safarlari',
        reqs: ['Kiyim-kechak merchendayzingida kamida 3 yillik tajriba', 'Ingliz tilida aʼlo darajada muloqot qilish koʻnikmalari', 'Xalqaro xaridorlar bilan ishlash tajribasi', 'Excel va buyurtmalarni kuzatish vositalarini bilish'],
        resp: ['Xaridorlar soʻrovlarini qabul qilish va namunalar yuborish', 'Tasdiqlashdan yetkazib berishgacha boʻlgan buyurtmalarni boshqarish', 'Xalqaro mijozlar bilan faol muloqot qilish'],
      },
    ]
  },
  ru: {
    heroSub: 'Присоединяйтесь к команде',
    heroTitle: <>Растите вместе с нами.<br />Шейте свое будущее.</>,
    heroDesc: 'Мы всегда ищем талантливых, преданных своему делу людей, готовых стать частью нашей растущей семьи. Шьете ли вы, управляете или внедряете инновации — для вас здесь найдется место.',
    viewOpen: 'Посмотреть открытые вакансии ↓',
    lifeAt: 'Жизнь в Novda',
    moreThanJob: 'Больше чем просто работа',
    investPeople: 'Мы инвестируем в наших людей так же, как в нашу продукцию — с заботой, стабильностью и долгосрочной перспективой.',
    ourCulture: 'Наша культура',
    feelsLikeFamily: <>Фабрика, которая чувствуется как <span className="text-secondary italic">семья</span></>,
    clockInClockOut: 'Мы работаем не просто ради галочки. Мы гордимся тем, что шьем — и это качество видно в каждом нашем стежке.',
    seniorSeamstress: 'Старшая швея',
    seniorExperience: '9 лет в Novda',
    realVoices: 'Реальные голоса',
    hearFromTeam: 'Отзывы нашей команды',
    nowHiring: 'Открытый набор',
    openPositions: 'Вакансии',
    hiringBased: 'Мы нанимаем, оценивая отношение к делу и потенциал. Не нашли идеальную вакансию? Отправьте открытое резюме — мы изучаем их каждую неделю.',
    howToJoin: 'Как присоединиться',
    hiringProcess: <>Процесс<br /><span className="text-text-muted italic font-light">Найма</span></>,
    hiringDesc: 'Мы ценим ваше время. Наш процесс отбора кандидатов прозрачен, прост и уважителен с самого первого дня.',
    readyApply: 'Готовы подать заявку?',
    sendCV: 'Отправьте резюме на careers@novdatex.com или воспользуйтесь формой обратной связи, указав интересующую роль.',
    applyForm: 'Подать заявку через форму',
    equalOpportunity: 'Мы являемся работодателем равных возможностей. Все резюме рассматриваются независимо от возраста, пола и происхождения.',
    dontSeeRole: 'Не нашли подходящую роль?',
    growingFast: 'Мы быстро растем.',
    growingDesc: 'Отправьте свое резюме и расскажите, что вы умеете делать лучше всего. Мы рассматриваем открытые заявки каждый понедельник.',
    sendOpenApp: 'Отправить открытое резюме',
    applyRoleBtn: 'Подать заявку на эту вакансию →',
    reqs: 'Требования',
    resps: 'Обязанности',
    
    benefits: [
      { icon: '💰', title: 'Конкурентная зарплата', desc: 'Зарплата выше рыночной с ежегодным пересмотром на основе опыта и результатов.' },
      { icon: '🏥', title: 'Медицинская страховка', desc: 'Полное медицинское обслуживание для вас и вашей семьи с первого рабочего дня.' },
      { icon: '📚', title: 'Обучение навыкам', desc: 'Регулярные мастер-классы по технологиям пошива и работе с оборудованием.' },
      { icon: '🕐', title: 'Гибкие смены', desc: 'Утренние и дневные смены, соответствующие вашему образу жизни.' },
      { icon: '🎉', title: 'Сезонные бонусы', desc: 'Квартальные премии за результаты работы, а также выплаты к Хаиту и Новому Году.' },
      { icon: '🤝', title: 'Поддержка и забота', desc: 'Уважительное рабочее пространство без предвзятости, где ценят каждого сотрудника.' },
    ],
    hiringSteps: [
      { title: 'Отправка резюме', desc: 'Отправьте ваше резюме через форму или на почту. Это займет всего 5 минут.' },
      { title: 'Рассмотрение', desc: 'Наша HR-команда рассматривает резюме в течение 3 рабочих дней и связывается с вами.' },
      { title: 'Собеседование', desc: 'Короткое личное интервью или видеозвонок, чтобы узнать друг друга поближе.' },
      { title: 'Добро пожаловать', desc: 'Оффер, знакомство с фабрикой и ваш первый день в дружной команде.' },
    ],
    employeeStories: [
      { quote: 'Я начинала швеей, а затем меня перевели в отдел контроля качества, заметив мою внимательность. Компания оплатила обучение по ISO. Сейчас я руковожу группой из 12 человек.', author: 'Дильноза М.', role: 'Инспектор контроля качества · 6 лет' },
      { quote: 'Утренняя смена идеально вписывается в семейные планы. Мой менеджер прислушался, когда я предложил оптимизировать процесс глажки — мы сэкономили 20% времени.', author: 'Жасур Т.', role: 'Руководитель швейной линии · 4 года' }
    ],
    roles: [
      {
        id: 'sewing-operator',
        title: 'Швея-оператор',
        dept: 'Производство',
        type: 'Полный день',
        location: 'Фабрика в Андижане',
        reqs: ['Опыт работы на промышленных швейных машинах от 1 года', 'Умение шить ровные строчки на производственной скорости', 'Знание оверлока и плоскошовных машин будет преимуществом', 'Умение работать в команде'],
        resp: ['Работа на одноигольных машинах и оверлоке', 'Соблюдение планов производства и стандартов качества', 'Своевременный доклад о дефектах полотна и неисправностях машин'],
      },
      {
        id: 'qc-inspector',
        title: 'Инспектор контроля качества',
        dept: 'Контроль качества',
        type: 'Полный день',
        location: 'Фабрика в Андижане',
        reqs: ['Опыт работы контролером качества в производстве одежды от 2 лет', 'Знание стандартов качества AQL', 'Отличное зрение, скрупулезность и внимательность', 'Базовые навыки ведения отчетности'],
        resp: ['Пооперационный контроль и проверка готовой продукции', 'Фиксация брака и предотвращение повторяющихся дефектов', 'Взаимодействие с мастерами участков по вопросам качества'],
      },
      {
        id: 'cutting-tech',
        title: 'Раскройщик-технолог',
        dept: 'Раскройный цех',
        type: 'Полный день',
        location: 'Фабрика в Андижане',
        reqs: ['Опыт работы с раскройными машинами вертикального и дискового типа', 'Умение читать раскладки и лекала', 'Физическая выносливость для работы на ногах', 'Внимание к направлению долевой нити и ворса'],
        resp: ['Настил ткани согласно картам раскроя', 'Точный крой деталей по согласованным лекалам', 'Уход за раскройным инструментом и своевременная заточка'],
      },
      {
        id: 'export-docs',
        title: 'Специалист по экспортному оформлению',
        dept: 'Логистика и экспорт',
        type: 'Полный день',
        location: 'Ташкентский офис',
        reqs: ['Опыт подготовки товаросопроводительных документов для экспорта', 'Знание инвойсов, упаковочных листов, сертификатов происхождения', 'Свободный русский и английский языки', 'Дисциплинированность и строгое соблюдение дедлайнов'],
        resp: ['Точная и своевременная подготовка пакета документов на экспорт', 'Взаимодействие с транспортными компаниями и таможней', 'Контроль статуса груза и информирование клиентов о прибытии'],
      },
      {
        id: 'merchandiser',
        title: 'Мерчендайзер / Эккаунт-менеджер',
        dept: 'Продажи и обслуживание клиентов',
        type: 'Гибридный / Полный день',
        location: 'Ташкент + редкие командировки',
        reqs: ['Опыт работы в мерчендайзинге швейных изделий от 3 лет', 'Отличные коммуникативные навыки на английском языке', 'Опыт ведения переговоров с зарубежными брендами', 'Уверенный пользователь Excel и CRM систем'],
        resp: ['Обработка входящих запросов брендов и отправка образцов', 'Сопровождение заказов от согласования до отгрузки', 'Ежедневная поддержка связи с иностранными клиентами'],
      },
    ]
  },
  en: {
    heroSub: 'Join Our Team',
    heroTitle: <>Grow With Us.<br />Stitch Your Future.</>,
    heroDesc: 'We\'re always looking for talented, dedicated people to join our growing family. Whether you sew, manage, or innovate — there\'s a place for you here.',
    viewOpen: 'View Open Positions ↓',
    lifeAt: 'Life at Novda',
    moreThanJob: 'More Than Just a Job',
    investPeople: 'We invest in our people the same way we invest in our products — with care, consistency, and a long-term view.',
    ourCulture: 'Our Culture',
    feelsLikeFamily: <>A Factory That Feels Like <span className="text-secondary italic">Family</span></>,
    clockInClockOut: 'We don\'t just clock in and out. We take pride in what we make — and that pride shows in every stitch we deliver.',
    seniorSeamstress: 'Senior Seamstress',
    seniorExperience: '9 years at Novda',
    realVoices: 'Real Voices',
    hearFromTeam: 'Hear From Our Team',
    nowHiring: 'Now Hiring',
    openPositions: 'Open Positions',
    hiringBased: 'We hire based on attitude and potential. Don\'t see a perfect fit? Send an open application — we review them every week.',
    howToJoin: 'How to Join',
    hiringProcess: <>The Hiring<br /><span className="text-text-muted italic font-light">Process</span></>,
    hiringDesc: 'We value your time. Our hiring process is designed to be transparent, straightforward, and respectful from day one.',
    readyApply: 'Ready to Apply?',
    sendCV: 'Send your CV to careers@novdatex.com or use our contact form and mention the role you\'re interested in.',
    applyForm: 'Apply via Form',
    equalOpportunity: 'We are an equal opportunity employer. All applications are reviewed regardless of age, gender, or background.',
    dontSeeRole: 'Don\'t see your role listed?',
    growingFast: 'We\'re Growing Fast.',
    growingDesc: 'Send us your CV and tell us what you do best. We review open applications every Monday.',
    sendOpenApp: 'Send Open Application',
    applyRoleBtn: 'Apply for This Role →',
    reqs: 'Requirements',
    resps: 'Responsibilities',
    
    benefits: [
      { icon: '💰', title: 'Competitive Salary', desc: 'Above-market wages reviewed annually based on performance and experience.' },
      { icon: '🏥', title: 'Health Insurance', desc: 'Full medical coverage for you and your immediate family from day one.' },
      { icon: '📚', title: 'Skills Training', desc: 'Regular in-house workshops on sewing techniques, machinery, and soft skills.' },
      { icon: '🕐', title: 'Flexible Shifts', desc: 'Morning and afternoon shift options to fit your lifestyle.' },
      { icon: '🎉', title: 'Seasonal Bonuses', desc: 'Performance bonuses paid quarterly, plus Eid and New Year bonuses.' },
      { icon: '🤝', title: 'Supportive Culture', desc: 'A respectful, harassment-free workplace where every voice is heard.' },
    ],
    hiringSteps: [
      { title: 'Apply', desc: 'Submit your CV via the form or email. Takes 5 minutes.' },
      { title: 'Review', desc: 'Our HR team reviews within 3 working days and contacts you.' },
      { title: 'Interview', desc: 'A short in-person or video call to get to know each other.' },
      { title: 'Welcome Aboard', desc: 'Offer letter, onboarding, and your first day on the team.' },
    ],
    employeeStories: [
      { quote: 'I started as a sewing operator and moved to QC after my supervisor saw my eye for detail. The company paid for my ISO training. Now I lead a team of 12. I never expected this kind of growth from a factory job.', author: 'Dilnoza M.', role: 'Quality Control Inspector · 6 years' },
      { quote: 'The morning shifts work perfectly with my family schedule. My manager actually listened when I suggested a new pressing workflow — we cut ironing time by 20%. I feel valued here.', author: 'Jasur T.', role: 'Production Line Supervisor · 4 years' }
    ],
    roles: [
      {
        id: 'sewing-operator',
        title: 'Sewing Machine Operator',
        dept: 'Production',
        type: 'Full-time',
        location: 'Andijan Factory',
        reqs: ['Minimum 1 year experience operating industrial sewing machines', 'Ability to sew straight seams at production speed', 'Knowledge of overlock and flatlock machines a plus', 'Team-oriented attitude'],
        resp: ['Operate single-needle and overlock sewing machines', 'Follow production targets and quality standards', 'Report fabric defects and machine issues promptly'],
      },
      {
        id: 'qc-inspector',
        title: 'Quality Control Inspector',
        dept: 'Quality',
        type: 'Full-time',
        location: 'Andijan Factory',
        reqs: ['2+ years of QC experience in garment manufacturing', 'Familiarity with AQL inspection standards', 'Good vision, attention to detail', 'Basic written reporting skills'],
        resp: ['Perform inline and end-line garment inspections', 'Record defects and escalate recurring issues', 'Work with production supervisors to resolve quality problems'],
      },
      {
        id: 'cutting-tech',
        title: 'Cutting Room Technician',
        dept: 'Cutting',
        type: 'Full-time',
        location: 'Andijan Factory',
        reqs: ['Experience with straight knife or round knife cutting machines', 'Ability to read markers and lay plans', 'Physical stamina for standing shifts', 'Attention to grain lines and fabric direction'],
        resp: ['Lay up fabric according to cutting orders', 'Cut fabric accurately to approved markers', 'Maintain cutting equipment and blade sharpness'],
      },
      {
        id: 'export-docs',
        title: 'Export Documentation Specialist',
        dept: 'Logistics & Export',
        type: 'Full-time',
        location: 'Tashkent (Head Office)',
        reqs: ['Experience in freight forwarding or export documentation', 'Knowledge of commercial invoices, packing lists, certificates of origin', 'Proficiency in Russian and English', 'Organized, deadline-driven'],
        resp: ['Prepare all export documentation accurately and on time', 'Coordinate with freight forwarders and customs agents', 'Track shipments and update clients on delivery status'],
      },
      {
        id: 'merchandiser',
        title: 'Merchandiser / Account Manager',
        dept: 'Sales & Customer Relations',
        type: 'Full-time · Hybrid',
        location: 'Tashkent + occasional travel',
        reqs: ['3+ years in garment merchandising or B2B sales', 'Strong communication skills in English', 'Experience managing buyer relationships', 'Proficient in Excel and order tracking tools'],
        resp: ['Handle buyer inquiries and sample coordination', 'Manage orders from confirmation to delivery', 'Communicate proactively with international clients'],
      },
    ]
  }
}

function RoleAccordion() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {t.roles.map((role) => {
        const isOpen = open === role.id
        return (
          <div
            key={role.id}
            className={`bg-surface rounded-2xl shadow-sm overflow-hidden border transition-all duration-300 ${isOpen ? 'border-secondary shadow-md' : 'border-border/60 hover:border-border/80 hover:shadow-md'}`}
          >
            <button
              id={`role-toggle-${role.id}`}
              className="w-full flex items-center justify-between p-6 text-left"
              onClick={() => setOpen(isOpen ? null : role.id)}
              aria-expanded={isOpen}
            >
              <div>
                <h3 className="font-bold text-text text-lg">{role.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs">{role.dept}</span>
                  <span className="px-3 py-1 rounded-full bg-background text-text-muted text-xs">{role.type}</span>
                  <span className="px-3 py-1 rounded-full bg-background text-text-muted text-xs">📍 {role.location}</span>
                </div>
              </div>
              <span className="text-2xl text-secondary ml-4">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 border-t border-border pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-text mb-3 text-sm uppercase tracking-wide">{t.reqs}</h4>
                    <ul className="space-y-2">
                      {role.reqs.map((r) => <li key={r} className="text-text-muted text-sm flex gap-2"><span className="text-secondary">•</span>{r}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-3 text-sm uppercase tracking-wide">{t.resps}</h4>
                    <ul className="space-y-2">
                      {role.resp.map((r) => <li key={r} className="text-text-muted text-sm flex gap-2"><span className="text-accent">•</span>{r}</li>)}
                    </ul>
                  </div>
                </div>
                <Link
                  href={`/contact?role=${role.id}`}
                  id={`apply-btn-${role.id}`}
                  className="inline-block px-6 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-accent transition-all duration-200"
                >
                  {t.applyRoleBtn}
                </Link>
              </div>
            )}
          </div>
        )
      })}

      {/* Open Application */}
      <div className="bg-linear-to-r from-primary to-[#2d2d4e] rounded-2xl p-8 text-center">
        <p className="text-accent font-semibold mb-2">{t.dontSeeRole}</p>
        <h3 className="text-white font-black text-xl mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{t.growingFast}</h3>
        <p className="text-white/70 text-sm mb-6">{t.growingDesc}</p>
        <Link href="/contact?role=open" id="open-application-btn" className="inline-block px-6 py-3 rounded-full bg-secondary text-white font-semibold hover:bg-accent transition-all duration-200">{t.sendOpenApp}</Link>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] pt-24 pb-12 flex items-center justify-center text-center" aria-label="Careers hero">
        <img src="https://picsum.photos/seed/teamwork/1400/550" alt="Team at work" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="relative z-10 px-6">
          <p className="text-xs font-semibold tracking-[0.15em] md:tracking-[0.25em] text-secondary uppercase mb-4">{t.heroSub}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.heroTitle}
          </h1>
          <p className="text-text-muted text-base md:text-lg mt-6 max-w-xl mx-auto">
            {t.heroDesc}
          </p>
          <a href="#openroles" id="careers-view-positions-btn" className="inline-block mt-8 px-8 py-4 rounded-full bg-secondary text-white font-semibold hover:bg-accent transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">{t.viewOpen}</a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background" aria-labelledby="benefits-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.lifeAt}</p>
            <h2 id="benefits-h2" className="text-3xl md:text-4xl font-black text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.moreThanJob}</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">{t.investPeople}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.map((b) => (
              <div key={b.title} className="bg-surface rounded-2xl shadow-sm p-7 border border-border">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-text text-lg mb-2">{b.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Strip */}
      <section className="py-24 bg-surface-alt relative overflow-hidden" aria-labelledby="culture-h2">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-secondary inline-block"></span>
              {t.ourCulture}
              <span className="w-8 h-px bg-secondary inline-block"></span>
            </p>
            <h2 id="culture-h2" className="text-4xl md:text-5xl font-bold text-text" style={{ fontFamily: 'var(--font-syne)' }}>
              {t.feelsLikeFamily}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-surface p-6 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50">
            <div className="relative group overflow-hidden rounded-2xl h-72">
              <img src="https://picsum.photos/seed/culture1/500/400" alt="Team culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="text-center px-4 py-8">
              <svg className="w-10 h-10 mx-auto text-secondary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-text text-xl font-bold leading-relaxed mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
                {t.clockInClockOut}
              </p>
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-sm">SS</div>
                <div className="text-left">
                  <p className="text-text font-bold text-sm">{t.seniorSeamstress}</p>
                  <p className="text-text-muted text-xs">{t.seniorExperience}</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl h-72">
              <img src="https://picsum.photos/seed/culture2/500/400" alt="Workshop environment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              language === 'uz' ? '95% xodimlarning qolishi' : language === 'ru' ? '95% Удержание сотрудников' : '95% Employee Retention',
              language === 'uz' ? '500+ jamoa aʼzolari' : language === 'ru' ? '500+ Членов команды' : '500+ Team Members',
              language === 'uz' ? '3 ta kunlik smena' : language === 'ru' ? '3 Ежедневные смены' : '3 Daily Shifts',
              language === 'uz' ? '10+ millatlar' : language === 'ru' ? '10+ Национальностей' : '10+ Nationalities'
            ].map((p) => (
              <span key={p} className="px-6 py-3 rounded-full bg-surface shadow-sm border border-border/50 text-text font-semibold text-sm hover:border-secondary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="py-24 bg-background" aria-labelledby="stories-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.realVoices}</p>
            <h2 id="stories-h2" className="text-3xl md:text-4xl font-black text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.hearFromTeam}</h2>
          </div>
          <div className="space-y-12">
            {t.employeeStories.map((story, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={story.author} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  {!isEven && (
                    <div className="md:order-2">
                      <img src={`https://picsum.photos/seed/emp${i + 1}/300/300`} alt={story.author} className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg" />
                    </div>
                  )}
                  {isEven && (
                    <img src={`https://picsum.photos/seed/emp${i + 1}/300/300`} alt={story.author} className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg" />
                  )}
                  <div className={!isEven ? 'md:order-1' : ''}>
                    <p className="text-text italic text-lg leading-relaxed mb-4">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <p className="font-bold text-text">{story.author}</p>
                    <p className="text-secondary text-sm">{story.role}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openroles" className="py-24 bg-surface-alt" aria-labelledby="openroles-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.nowHiring}</p>
            <h2 id="openroles-h2" className="text-3xl md:text-4xl font-black text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.openPositions}</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">{t.hiringBased}</p>
          </div>
          <RoleAccordion />
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-32 bg-background" aria-labelledby="hiring-process-h2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-secondary inline-block"></span>
              {t.howToJoin}
            </p>
            <h2 id="hiring-process-h2" className="text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
              {t.hiringProcess}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              {t.hiringDesc}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {t.hiringSteps.map((s, idx) => (
                <div key={s.title} className="group flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 sm:py-14 border-b border-border/40 hover:border-secondary transition-colors duration-500 first:pt-0 last:border-0 relative">
                  {/* Subtle highlight background on hover */}
                  <div className="absolute inset-0 bg-secondary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -mx-6 px-6 sm:mx-0 sm:px-0" />

                  <div className="text-6xl sm:text-8xl font-light text-border group-hover:text-secondary/20 transition-colors duration-500 tracking-tighter relative z-10" style={{ fontFamily: 'var(--font-syne)' }}>
                    0{idx + 1}
                  </div>

                  <div className="flex-1 sm:mt-4 relative z-10">
                    <h3 className="text-3xl font-bold text-text mb-4 group-hover:translate-x-4 transition-transform duration-500" style={{ fontFamily: 'var(--font-syne)' }}>{s.title}</h3>
                    <p className="text-text-muted text-lg leading-relaxed max-w-xl group-hover:translate-x-4 transition-transform duration-500 delay-75">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-secondary" aria-labelledby="apply-cta-h2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="apply-cta-h2" className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{t.readyApply}</h2>
          <p className="text-white/80 mb-8">{t.sendCV}</p>
          <Link href="/contact?source=careers" id="careers-apply-btn" className="inline-block px-8 py-4 rounded-full bg-white text-secondary font-bold hover:bg-background transition-all duration-200 hover:-translate-y-0.5">{t.applyForm}</Link>
          <p className="text-white/60 text-xs mt-6">{t.equalOpportunity}</p>
        </div>
      </section>
    </>
  )
}
