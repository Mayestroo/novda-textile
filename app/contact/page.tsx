'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { useEffect, useState } from 'react'

const translations = {
  uz: {
    heroSub: 'Aloqada boʻling',
    heroTitle: <>Muloqotni<br />boshlaylik.</>,
    heroDesc: 'Narx soʻrash, ishlab chiqarish haqida soʻrash yoki martaba imkoniyatlarini oʻrganish — biz siz bilan bogʻlanishdan mamnunmiz. Biz 24 ish soati ichida javob beramiz.',
    officeHeader: 'Fabrikamiz va Ofisimiz',
    officeAddress: <>Novda Textile MChJ<br />123 Sanoat zonasi, Yunusobod tumani<br />Toshkent, Oʻzbekiston, 100000</>,
    viewMap: 'Xaritada koʻrish →',
    workingHours: 'Ish vaqti',
    monFri: 'Dushanba – Juma',
    sat: 'Shanba',
    sun: 'Yakshanba',
    closed: 'Yopiq',
    responseTime: 'Javob berish muddati: 24 ish soati ichida',
    directContacts: 'Toʻgʻridan-toʻgʻri aloqalar',
    chatTelegram: 'Telegramda yozish',
    sendUsMessage: 'Bizga xabar yuboring',
    fillDetails: 'Quyida tafsilotlarni toʻldiring va biz tez orada siz bilan bogʻlanamiz.',
    findFactory: 'Fabrikamizni toping',
    airportDistance: 'Toshkent xalqaro aeroportidan 20 daqiqa',
    quickAnswers: 'Tezkor javoblar',
    faqTitle: 'Tez-tez soʻraladigan savollar',
    sentTitle: 'Xabar yuborildi!',
    sentDesc: 'Rahmat, {name}! Biz sizning xabaringizni oldik va 24 ish soati ichida {email} manziliga javob beramiz.',
    sendAnother: 'Yana xabar yuborish',
    fullName: 'Toʻliq ism *',
    fullNamePlaceholder: 'Sizning toʻliq ismingiz',
    companyName: 'Kompaniya / Brend nomi',
    optional: 'Ixtiyoriy',
    emailAddress: 'Elektron pochta manzili *',
    emailPlaceholder: 'sizning@elektron.pochta',
    phoneTelegram: 'Telefon / Telegram',
    phonePlaceholder: '+998 XX XXX XX XX (ixtiyoriy)',
    subject: 'Mavzu *',
    subjectPlaceholder: 'Mavzuni tanlang…',
    message: 'Xabar *',
    messagePlaceholder: 'Talablaringiz haqida yozing — mahsulot turi, miqdori, muddati, mato afzalliklari va boshqalar.',
    howDidFind: 'Biz haqimizda qayerdan bildingiz?',
    selectOptional: 'Tanlang (ixtiyoriy)',
    newsletter: 'Yangi mahsulotlar va xizmatlar haqida maʼlumot olishni xohlayman.',
    sendBtn: 'Xabar yuborish →',
    sendingBtn: 'Yuborilmoqda…',
    privacyNotice: '🔒 Sizning maʼlumotlaringiz maxfiy saqlanadi va uchinchi shaxslarga berilmaydi.',
    errName: 'Toʻliq ism kiritilishi shart',
    errEmail: 'Toʻgʻri elektron pochta manzili talab qilinadi',
    errSubject: 'Iltimos, mavzuni tanlang',
    errMessage: 'Xabar kiritilishi shart',
    
    subjects: [
      'Mahsulot soʻrovi',
      'Narxni hisoblash',
      'Xususiy brending (Private Label)',
      'Karyera / Ishga ariza',
      'Umumiy savol',
      'Hamkorlik imkoniyati',
    ],
    sources: [
      'Google qidiruvi',
      'Ijtimoiy tarmoqlar',
      'Tavsiya orqali',
      'Koʻrgazma',
      'Boshqa',
    ],
    responsePromise: [
      {
        label: '01',
        title: 'Elektron pochta',
        sub: '24 ish soati ichida',
        detail: 'info@novdatex.com',
        href: 'mailto:info@novdatex.com',
      },
      {
        label: '02',
        title: 'Telegram',
        sub: 'Tezkor savollar uchun tezkor javoblar',
        detail: '@novdatex',
        href: 'https://t.me/novdatex',
      },
      {
        label: '03',
        title: 'Qoʻngʻiroq qiling',
        sub: 'Dush–Shan, 8:00–18:00 (Toshkent vaqti)',
        detail: '+998 XX XXX XX XX',
        href: 'tel:+998000000000',
      }
    ],
    faqs: [
      { q: 'Sizning minimal buyurtma miqdori (MOQ) qancha?', a: 'Bizning standart MOQ koʻp toifalar uchun har bir model uchun 500 donani tashkil qiladi. Ichki kiyimlar uchun MOQ har bir model uchun 1,000 donadir. Yangi mijozlar uchun namunalar tayyorlashda moslashuvchanlikni taklif qilamiz.' },
      { q: 'Katta hajmdagi ishlab chiqarishdan oldin namuna tayyorlaysizmi?', a: 'Ha. Biz har qanday ommaviy buyurtmadan oldin tasdiqlash uchun namunalar ishlab chiqaramiz. Standart namuna olish muddati 7–10 ish kunini tashkil qiladi. Namuna toʻlovlari ommaviy buyurtmalarda qaytarib beriladi.' },
      { q: 'Bizning shaxsiy brendimiz (private label) ostida ishlab chiqara olasizmi?', a: 'Albatta. Biz sizning talablaringizga muvofiq maxsus toʻqilgan yorliqlar, etiketkalar, logotipli qadoqlar va oʻlchamlarni markalashni oʻz ichiga olgan toʻliq private label xizmatlarini taklif qilamiz.' },
      { q: 'Qanday toʻlov shartlarini taklif qilasiz?', a: 'Standart shartlar — buyurtma tasdiqlanganda 30% depozit va joʻnatishdan oldin 70%. Doimiy mijozlar uchun muqobil shartlarni muhokama qilishimiz mumkin.' },
      { q: 'Qaysi mamlakatlarga eksport qilasiz?', a: 'Hozirgi vaqtda biz Yevropa, Yaqin Sharq, Markaziy Osiyo va Janubi-Sharqiy Osiyodagi 30 dan ortiq mamlakatlarga eksport qilamiz. Bizda Yevropa Ittifoqi, AQSh va Fors koʻrfazi import talablari boʻyicha tajriba mavjud.' },
      { q: 'Ishlab chiqarish qancha vaqt oladi?', a: 'Standart ishlab chiqarish muddati mahsulot toifasi va buyurtma hajmiga qarab 30–50 kunni tashkil qiladi. Shoshilinch ishlab chiqarish ham mumkin — muddatni muhokama qilish uchun biz bilan bogʻlaning.' },
      { q: 'Matolaringiz xalqaro xavfsizlik standartlariga javob beradimi?', a: 'Ha. Biz matolarimiz uchun OEKO-TEX® xavfsizlik sertifikatlarini taqdim eta olamiz va ishlab chiqarish jarayonlarimiz xalqaro ekologik talablarga toʻliq javob beradi.' },
      { q: 'Fabrikangizga tashrif buyurishim mumkinmi?', a: 'Ha, fabrikaga tashrif buyurishni mamnuniyat bilan qabul qilamiz va ragʻbatlantiramiz! Tashrifni rejalashtirish uchun biz bilan bogʻlaning. Biz aeroportdan kutib olish va Toshkentda mehmonxona boʻyicha yordam bera olamiz.' },
    ]
  },
  ru: {
    heroSub: 'Свяжитесь с нами',
    heroTitle: <>Свяжитесь с нами</>,
    heroDesc: 'Хотите ли вы запросить расчет стоимости, спросить о производстве или обсудить вакансию — мы будем рады услышать вас. Ответ в течение 24 рабочих часов.',
    officeHeader: 'Наша фабрика и офис',
    officeAddress: <>ООО Novda Textile<br />123 Промышленная зона, Юнусабадский район<br />Ташкет, Узбекистан, 100000</>,
    viewMap: 'Посмотреть на карте →',
    workingHours: 'Рабочее время',
    monFri: 'Понедельник – Пятница',
    sat: 'Суббота',
    sun: 'Воскресенье',
    closed: 'Выходной',
    responseTime: 'Время ответа: В течение 24 рабочих часов',
    directContacts: 'Прямые контакты',
    chatTelegram: 'Написать в Telegram',
    sendUsMessage: 'Отправьте нам сообщение',
    fillDetails: 'Заполните форму ниже, и мы свяжемся с вами в ближайшее время.',
    findFactory: 'Как найти нашу фабрику',
    airportDistance: '20 минут от Ташкентского международного аэропорта',
    quickAnswers: 'Быстрые ответы',
    faqTitle: 'Часто задаваемые вопросы',
    sentTitle: 'Сообщение отправлено!',
    sentDesc: 'Спасибо, {name}! Мы получили ваше сообщение и ответим на адрес {email} в течение 24 рабочих часов.',
    sendAnother: 'Отправить еще одно сообщение',
    fullName: 'Полное имя *',
    fullNamePlaceholder: 'Ваше полное имя',
    companyName: 'Название компании / бренда',
    optional: 'Необязательно',
    emailAddress: 'Электронная почта *',
    emailPlaceholder: 'your@email.com',
    phoneTelegram: 'Телефон / Telegram',
    phonePlaceholder: '+998 XX XXX XX XX (необязательно)',
    subject: 'Тема *',
    subjectPlaceholder: 'Выберите тему…',
    message: 'Сообщение *',
    messagePlaceholder: 'Опишите ваши требования — тип продукта, тираж, сроки, предпочтения по ткани и т.д.',
    howDidFind: 'Как вы о нас узнали?',
    selectOptional: 'Выберите (необязательно)',
    newsletter: 'Я хочу получать новости о новых продуктах и услугах.',
    sendBtn: 'Отправить сообщение →',
    sendingBtn: 'Отправка…',
    privacyNotice: '🔒 Ваша информация строго конфиденциальна и никогда не передается третьим лицам.',
    errName: 'Введите полное имя',
    errEmail: 'Введите корректный email',
    errSubject: 'Пожалуйста, выберите тему',
    errMessage: 'Введите сообщение',
    
    subjects: [
      'Запрос о продукции',
      'Запрос расчета стоимости',
      'Запрос о Private Label',
      'Вакансии / Карьера',
      'Общий вопрос',
      'Сотрудничество и партнерство',
    ],
    sources: [
      'Поиск в Google',
      'Социальные сети',
      'По рекомендации',
      'Выставка',
      'Другое',
    ],
    responsePromise: [
      {
        label: '01',
        title: 'Электронная почта',
        sub: 'В течение 24 рабочих часов',
        detail: 'info@novdatex.com',
        href: 'mailto:info@novdatex.com',
      },
      {
        label: '02',
        title: 'Telegram',
        sub: 'Быстрые ответы на срочные вопросы',
        detail: '@novdatex',
        href: 'https://t.me/novdatex',
      },
      {
        label: '03',
        title: 'Позвонить нам',
        sub: 'Пн–Сб, с 8:00 до 18:00 (по Ташкенту)',
        detail: '+998 XX XXX XX XX',
        href: 'tel:+998000000000',
      }
    ],
    faqs: [
      { q: 'Каков ваш минимальный объем заказа (MOQ)?', a: 'Наш стандартный MOQ составляет 500 штук на модель для большинства категорий. Для нижнего белья MOQ составляет 1,000 штук на модель. Мы предлагаем гибкие условия для новых клиентов при заказе образцов.' },
      { q: 'Предоставляете ли вы образцы перед запуском тиража?', a: 'Да. Мы шьем предпроизводственные образцы для утверждения перед запуском всей партии. Срок изготовления образцов составляет 7–10 рабочих дней. Стоимость образцов вычитается из суммы основного заказа.' },
      { q: 'Можете ли вы шить под нашей собственной торговой маркой?', a: 'Абсолютно. Мы предлагаем полный спектр услуг private label, включая фирменные тканые бирки, этикетки, брендированную упаковку и размерники по вашим лекалам.' },
      { q: 'Какие условия оплаты вы предлагаете?', a: 'Стандартные условия: предоплата 30% при подтверждении заказа и 70% перед отгрузкой. Для постоянных клиентов возможны альтернативные варианты.' },
      { q: 'В какие страны вы экспортируете продукцию?', a: 'В настоящее время мы экспортируем одежду в 30+ стран Европы, Ближнего Востока, Центральной и Юго-Восточной Азии. Имеем опыт работы с импортными требованиями ЕС, США и стран Залива.' },
      { q: 'Сколько времени занимает производство?', a: 'Стандартный срок пошива составляет 30–50 дней в зависимости от категории товара и объема заказа. Возможен срочный пошив — свяжитесь с нами для обсуждения сроков.' },
      { q: 'Соответствуют ли ваши ткани международным стандартам безопасности?', a: 'Да. Мы используем ткани, сертифицированные по стандарту OEKO-TEX®, а наша фабрика имеет сертификат ISO 9001:2015. Предоставим все сертификаты по запросу.' },
      { q: 'Могу ли я посетить вашу фабрику?', a: 'Да, мы приветствуем визиты на производство! Свяжитесь с нами, чтобы запланировать встречу. Мы можем организовать трансфер из аэропорта и помочь с проживанием в Ташкенте.' },
    ]
  },
  en: {
    heroSub: 'Get in Touch',
    heroTitle: <>Let’s Start a<br />Conversation.</>,
    heroDesc: 'Whether you’re requesting a quote, asking about production, or exploring a career — we’d love to hear from you. We respond within 24 business hours.',
    officeHeader: 'Our Factory & Office',
    officeAddress: <>Novda Textile LLC<br />123 Industrial Zone, Yunusabad District<br />Tashkent, Uzbekistan, 100000</>,
    viewMap: 'View on Map →',
    workingHours: 'Working Hours',
    monFri: 'Monday – Friday',
    sat: 'Saturday',
    sun: 'Sunday',
    closed: 'Closed',
    responseTime: 'Response time: Within 24 business hours',
    directContacts: 'Direct Contacts',
    chatTelegram: 'Chat on Telegram',
    sendUsMessage: 'Send Us a Message',
    fillDetails: 'Fill in the details below and we’ll get back to you shortly.',
    findFactory: 'Find Our Factory',
    airportDistance: '20 min from Tashkent International Airport',
    quickAnswers: 'Quick Answers',
    faqTitle: 'Frequently Asked Questions',
    sentTitle: 'Message Sent!',
    sentDesc: 'Thank you, {name}! We’ve received your message and will reply to {email} within 24 business hours.',
    sendAnother: 'Send Another Message',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'Your full name',
    companyName: 'Company / Brand Name',
    optional: 'Optional',
    emailAddress: 'Email Address *',
    emailPlaceholder: 'your@email.com',
    phoneTelegram: 'Phone / Telegram',
    phonePlaceholder: '+998 XX XXX XX XX (optional)',
    subject: 'Subject *',
    subjectPlaceholder: 'Select a subject…',
    message: 'Message *',
    messagePlaceholder: 'Tell us about your requirements — product type, quantity, timeline, fabric preferences, etc.',
    howDidFind: 'How did you find us?',
    selectOptional: 'Select (optional)',
    newsletter: 'I’d like to receive updates about new products and services.',
    sendBtn: 'Send Message →',
    sendingBtn: 'Sending…',
    privacyNotice: '🔒 Your information is kept private and never shared with third parties.',
    errName: 'Full name is required',
    errEmail: 'Valid email is required',
    errSubject: 'Please select a subject',
    errMessage: 'Message is required',
    
    subjects: [
      'Product Inquiry',
      'Request a Quote',
      'Private Label Inquiry',
      'Careers / Job Application',
      'General Question',
      'Partnership Opportunity',
    ],
    sources: [
      'Google Search',
      'Social Media',
      'Referral',
      'Trade Show',
      'Other',
    ],
    responsePromise: [
      {
        label: '01',
        title: 'Email Response',
        sub: 'Within 24 business hours',
        detail: 'info@novdatex.com',
        href: 'mailto:info@novdatex.com',
      },
      {
        label: '02',
        title: 'Telegram',
        sub: 'Instant replies for fast questions',
        detail: '@novdatex',
        href: 'https://t.me/novdatex',
      },
      {
        label: '03',
        title: 'Call Us',
        sub: 'Mon–Sat, 8am–6pm Tashkent',
        detail: '+998 XX XXX XX XX',
        href: 'tel:+998000000000',
      }
    ],
    faqs: [
      { q: 'What is your minimum order quantity (MOQ)?', a: 'Our standard MOQ is 500 pieces per style for most categories. For underwear, the MOQ is 1,000 pieces per style. We offer flexibility for new clients ordering samples.' },
      { q: 'Do you offer sampling before bulk production?', a: 'Yes. We produce pre-production samples for approval before any bulk run. Standard sampling time is 7–10 business days. Sample charges are credited back on bulk orders.' },
      { q: 'Can you produce under our private label?', a: 'Absolutely. We offer full private label services including custom woven labels, hang tags, branded packaging, and size labeling to your specifications.' },
      { q: 'What payment terms do you offer?', a: 'Standard terms are 30% deposit on order confirmation and 70% before shipment. We can discuss alternative terms for established clients.' },
      { q: 'Which countries do you export to?', a: 'We currently export to 30+ countries across Europe, the Middle East, Central Asia, and Southeast Asia. We have experience with EU, US, and Gulf import requirements.' },
      { q: 'How long does production take?', a: 'Standard lead times are 30–50 days depending on product category and order volume. Rush production may be available — contact us to discuss your deadline.' },
      { q: 'Do your fabrics meet international safety standards?', a: 'Yes. We use OEKO-TEX® certified fabrics and our facility is ISO 9001:2015 certified. We can provide full compliance documentation on request.' },
      { q: 'Can I visit your factory?', a: 'Yes, factory visits are welcome and encouraged! Contact us to schedule a visit. We can arrange airport pickup and accommodation recommendations in Tashkent.' },
    ]
  }
}

function FAQAccordion() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz
  const [open, setOpen] = useState<number | null>(null)
  
  return (
    <div className="flex flex-col max-w-3xl mx-auto relative z-10">
      {t.faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-border/60 group">
            <button
              id={`faq-toggle-${i}`}
              className="w-full flex items-center justify-between py-6 text-left gap-6 outline-none"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`text-base sm:text-lg transition-colors duration-300 font-medium ${isOpen ? 'text-text' : 'text-text group-hover:text-secondary'}`}>{faq.q}</span>
              <span className={`text-3xl transition-transform duration-300 shrink-0 leading-none font-light ${isOpen ? 'rotate-45 text-secondary' : 'text-secondary/60 group-hover:text-secondary'}`}>
                 +
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
              <p className="text-text-muted text-base leading-relaxed pr-8">{faq.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const role = params.get('role')
    const source = params.get('source')
    if (role || source === 'careers') {
      setSubject(language === 'uz' ? 'Karyera / Ishga ariza' : language === 'ru' ? 'Вакансии / Карьера' : 'Careers / Job Application')
      if (role) {
        setMessage(
          language === 'uz'
            ? `Men ${role.replace(/-/g, ' ')} lavozimiga qiziqaman. `
            : language === 'ru'
            ? `Меня интересует вакансия ${role.replace(/-/g, ' ')}. `
            : `I'm interested in the ${role.replace(/-/g, ' ')} position. `
        )
      }
    }
  }, [language])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = t.errName
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = t.errEmail
    if (!subject) e.subject = t.errSubject
    if (!message.trim()) e.message = t.errMessage
    return e
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-4 bg-surface/30 dark:bg-white/1 backdrop-blur-md rounded-3xl border border-border/50 dark:border-white/5 shadow-2xl flex flex-col items-center justify-center animate-[fadeUp_0.5s_ease-out_forwards]">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-4xl mb-6 text-secondary animate-[scaleUp_0.3s_ease-out]">✓</div>
        <h3 className="text-2xl font-black text-text mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{t.sentTitle}</h3>
        <p className="text-text-muted mb-8 max-w-md mx-auto text-base leading-relaxed">
          {t.sentDesc.replace('{name}', name).replace('{email}', email)}
        </p>
        <button onClick={() => { setSubmitted(false); setName(''); setEmail(''); setSubject(''); setMessage('') }} className="px-8 py-3.5 rounded-full bg-secondary text-white font-bold hover:bg-accent transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]">{t.sendAnother}</button>
      </div>
    )
  }

  const labelClass = "block text-xs font-bold uppercase tracking-wider text-text/75 mb-2"
  const field = "block w-full px-5 py-4 rounded-xl border border-border/60 dark:border-white/10 text-sm text-text bg-surface/50 dark:bg-white/2 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary focus:bg-background transition-all duration-300 hover:border-border/100 dark:hover:border-white/20 placeholder:text-text-muted/50"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 p-8 md:p-10 bg-surface/50 dark:bg-white/1 backdrop-blur-md rounded-3xl border border-border/50 dark:border-white/5 shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t.fullName}</label>
          <input id="form-name" type="text" value={name} onChange={e => setName(e.target.value)} className={field} placeholder={t.fullNamePlaceholder} />
          {errors.name && <p className="text-secondary text-xs mt-1.5 font-medium">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass}>{t.companyName}</label>
          <input id="form-company" type="text" className={field} placeholder={t.optional} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t.emailAddress}</label>
          <input id="form-email" type="email" value={email} onChange={e => setEmail(e.target.value)} className={field} placeholder={t.emailPlaceholder} />
          {errors.email && <p className="text-secondary text-xs mt-1.5 font-medium">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>{t.phoneTelegram}</label>
          <input id="form-phone" type="tel" className={field} placeholder={t.phonePlaceholder} />
        </div>
      </div>
      <div>
        <label className={labelClass}>{t.subject}</label>
        <select id="form-subject" value={subject} onChange={e => setSubject(e.target.value)} className={`${field} appearance-none`} style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>")`, backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat', paddingRight: '3rem' }}>
          <option value="" className="dark:bg-zinc-900">{t.subjectPlaceholder}</option>
          {t.subjects.map((sub) => (
            <option key={sub} value={sub} className="dark:bg-zinc-900">{sub}</option>
          ))}
        </select>
        {errors.subject && <p className="text-secondary text-xs mt-1.5 font-medium">{errors.subject}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.message}</label>
        <textarea id="form-message" rows={5} value={message} onChange={e => setMessage(e.target.value)} className={field} placeholder={t.messagePlaceholder} />
        {errors.message && <p className="text-secondary text-xs mt-1.5 font-medium">{errors.message}</p>}
      </div>
      <div>
        <label className={labelClass}>{t.howDidFind}</label>
        <select id="form-source" className={`${field} appearance-none`} style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/></svg>")`, backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat', paddingRight: '3rem' }}>
          <option value="" className="dark:bg-zinc-900">{t.selectOptional}</option>
          {t.sources.map((src) => (
            <option key={src} value={src} className="dark:bg-zinc-900">{src}</option>
          ))}
        </select>
      </div>
      <label className="flex items-start gap-3 text-sm text-text/80 cursor-pointer select-none group py-1">
        <input type="checkbox" id="form-newsletter" className="w-5 h-5 rounded border-border/60 dark:border-white/10 text-secondary bg-surface/50 dark:bg-white/2 focus:ring-offset-background focus:ring-secondary cursor-pointer mt-0.5" />
        <span className="leading-tight group-hover:text-text transition-colors">{t.newsletter}</span>
      </label>
      <button
        id="form-submit"
        type="submit"
        disabled={loading}
        className="w-full py-4.5 rounded-full bg-secondary text-white font-bold text-base hover:bg-accent hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 shadow-[0_4px_20px_rgba(16,185,129,0.15)] flex items-center justify-center gap-2 cursor-pointer"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>{t.sendingBtn}</span>
          </>
        ) : (
          <span>{t.sendBtn}</span>
        )}
      </button>
      <p className="text-center text-text-muted text-xs pt-2">{t.privacyNotice}</p>
    </form>
  )
}

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] pt-32 pb-16 flex items-center justify-center text-center bg-background" aria-label="Contact hero">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-4 animate-[fadeIn_0.8s_ease-out]">{t.heroSub}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text leading-[1.1] mb-6 animate-[fadeUp_0.8s_ease-out_forwards] opacity-0" style={{ fontFamily: 'var(--font-syne)', animationDelay: '0.1s' }}>
            {t.heroTitle}
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-[fadeUp_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32 bg-background relative" aria-labelledby="contact-form-h2">
        {/* Form Container (Centered, max-w-4xl) */}
        <div className="max-w-4xl mx-auto px-6 mb-20 relative z-10 animate-[fadeUp_0.8s_ease-out_forwards]">
          <div className="mb-8 text-center">
            <h2 id="contact-form-h2" className="text-2xl md:text-3xl font-black text-text mb-2.5" style={{ fontFamily: 'var(--font-syne)' }}>{t.sendUsMessage}</h2>
            <p className="text-text-muted text-base">{t.fillDetails}</p>
          </div>
          <ContactForm />
        </div>

        {/* Three Contact Cards (Horizontal Grid, col-span-3) */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 animate-[fadeUp_0.8s_ease-out_forwards]" style={{ animationDelay: '0.15s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Office */}
            <div className="bg-surface/50 dark:bg-white/1 backdrop-blur-md rounded-3xl border border-border/50 dark:border-white/5 p-8 shadow-2xl flex flex-col justify-between hover:border-secondary/30 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-text text-lg mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{t.officeHeader}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-medium">
                    {t.officeAddress}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/20 dark:border-white/2">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-bold inline-flex items-center gap-1.5 hover:text-accent transition-colors group">
                  {t.viewMap}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-surface/50 dark:bg-white/1 backdrop-blur-md rounded-3xl border border-border/50 dark:border-white/5 p-8 shadow-2xl flex flex-col justify-between hover:border-secondary/30 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{t.workingHours}</h3>
                  <div className="text-sm text-text-muted space-y-2.5">
                    <div className="flex justify-between border-b border-border/10 dark:border-white/2 pb-1.5">
                      <span className="font-medium">{t.monFri}</span>
                      <span className="font-semibold text-text">08:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-border/10 dark:border-white/2 pb-1.5">
                      <span className="font-medium">{t.sat}</span>
                      <span className="font-semibold text-text">09:00 – 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">{t.sun}</span>
                      <span className="font-bold text-secondary">{t.closed}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/20 dark:border-white/2">
                <p className="text-text-muted/80 text-xs italic font-medium">{t.responseTime}</p>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="bg-surface/50 dark:bg-white/1 backdrop-blur-md rounded-3xl border border-border/50 dark:border-white/5 p-8 shadow-2xl flex flex-col justify-between hover:border-secondary/30 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 00-2.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text text-lg mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{t.directContacts}</h3>
                  <div className="space-y-2 text-sm text-text-muted font-medium">
                    <div className="flex items-center justify-between border-b border-border/10 dark:border-white/2 pb-1.5">
                      <a href="mailto:info@novdatex.com" className="hover:text-secondary transition-colors">info@novdatex.com</a>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{language === 'uz' ? 'Umumiy' : language === 'ru' ? 'Общий' : 'General'}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border/10 dark:border-white/2 pb-1.5">
                      <a href="mailto:sales@novdatex.com" className="hover:text-secondary transition-colors">sales@novdatex.com</a>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{language === 'uz' ? 'Buyurtmalar' : language === 'ru' ? 'Заказы' : 'Orders'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <a href="tel:+998000000000" className="hover:text-secondary transition-colors">+998 XX XXX XX XX</a>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{language === 'uz' ? 'Telefon' : language === 'ru' ? 'Телефон' : 'Phone'}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4">
                <a
                  href="https://t.me/novdatex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-secondary hover:bg-accent text-white text-xs font-bold shadow-[0_4px_15px_rgba(16,185,129,0.15)] transition-all duration-300 hover:scale-[1.01]"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                  {t.chatTelegram}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background pb-24" aria-labelledby="map-h2">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="map-h2" className="text-2xl md:text-3xl font-black text-text text-center mb-8" style={{ fontFamily: 'var(--font-syne)' }}>{t.findFactory}</h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 dark:border-white/5 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191880.56!2d69.2!3d41.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Novda Textile factory location"
              className="grayscale contrast-125 dark:invert dark:opacity-85 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 dark:group-hover:invert-0"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-6 py-3 rounded-full bg-surface/50 dark:bg-white/2 border border-border/50 dark:border-white/5 text-text font-bold text-sm shadow-md inline-flex items-center">
              <svg className="w-4 h-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {language === 'uz' ? 'Toshkent, Oʻzbekiston' : language === 'ru' ? 'Ташкент, Узбекистан' : 'Tashkent, Uzbekistan'}
            </span>
            <span className="px-6 py-3 rounded-full bg-surface/50 dark:bg-white/2 border border-border/50 dark:border-white/5 text-text font-bold text-sm shadow-md inline-flex items-center">
              <svg className="w-4 h-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {t.airportDistance}
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-surface/30 dark:bg-white/0.5 border-t border-border/40 dark:border-white/5" aria-labelledby="faq-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 relative z-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-4 flex items-center justify-center gap-3">
               {t.quickAnswers}
            </p>
            <h2 id="faq-h2" className="text-4xl md:text-5xl font-black text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.faqTitle}</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

    </>
  )
}
