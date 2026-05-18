'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'

const certs = ['ISO 9001:2015', 'OEKO-TEX® Standard 100', 'GOTS Certified', 'SA8000 Compliant', 'BSCI Audited', 'SEDEX Member']

const translations = {
  uz: {
    heroSub: 'Tariximiz',
    heroTitle: <>Shunchaki fabrika emas.<br />Hunarmandchilik anʼanasi.</>,
    heroDesc: '2015-yilda tashkil etilgan boʻlib, biz kichik ustaxonadan Oʻzbekistonning eng ishonchli kiyim-kechak ishlab chiqaruvchilaridan biriga aylandik — hunarmandchilik ruhini yoʻqotmagan holda.',
    howBegan: 'Qanday boshlangan',
    sewingTitle: 'Bitta tikuv mashinasidan boshlandi',
    storyText1: '2015-yilda asoschimiz Andijondagi oddiy ustaxonada 12 nafar malakali tikuvchi bilan ish boshlagan edi. Vazifa oddiy edi: uzoq muddat xizmat qiladigan, qulay kiyimlar ishlab chiqarish.',
    storyText2: 'Bugungi kunda 8,000 m² maydonga ega fabrikamizda kesish, tikish, pardozlash va QC boʻlimlarida 500 dan ortiq xodim ishlamoqda. Yevropa, Yaqin Sharq va Osiyoning 30 dan ortiq mamlakatlariga eksport qilamiz.',
    storyText3: 'Fabrikamizdan chiquvchi har bir kiyim birinchi marta tikkanimizdagi kabi gʻamxoʻrlik va mehr bilan tayyorlanadi. Bu marketing emas. Bu bizning madaniyatimiz.',
    foundation: 'Bizning poydevorimiz',
    purpose: <>Maqsad sari<br />Harakat.</>,
    milestoneTitle: <>Raqamlarda<br />Novda.</>,
    milestoneScale: 'Novda koʻlami',
    inside: 'Fabrikamiz ichida',
    everyThread: 'Har bir ip oʻz maqsadiga yetadigan joy',
    peopleBehind: 'Orqadagi insonlar',
    ledBy: 'Tajriba orqali boshqaruv',
    certsTitle: 'Sertifikatlar va Standartlar',
    certsDesc: 'Biz xalqaro standartlarga javob beramiz, shuning uchun tashvishlanishingizga hojat yoʻq.',
    letsBuild: 'Keling, birgalikda nimanidir quramiz',
    startup: 'Siz yangi brend boʻlasizchi yoki yirik riteyler — biz sizning oʻsishingizni qoʻllab-quvvatlash uchun toʻliq imkoniyat va tajribaga egamiz.',
    startConv: 'Suhbatni boshlash',
    seeProducts: 'Mahsulotlarimizni koʻrish',
    
    milestones: [
      { value: 2015, suffix: '', label: 'Tashkil etilgan yili' },
      { value: 500, suffix: '+', label: 'Xodimlar' },
      { value: 8000, suffix: ' m²', label: 'Fabrika maydoni' },
      { value: 30, suffix: '+', label: 'Eksport davlatlari' },
      { value: 1000000, suffix: '+', label: 'Dona / Oy' },
      { value: 100, suffix: '%', label: 'Vaqtida yetkazib berish' },
      { value: 12, suffix: '-Point', label: 'QC Tekshiruvi' },
      { value: 24, suffix: 'soat', label: 'Namuna javobi' },
    ],
    facility: [
      { title: 'Aniq bichish', seed: 'cutting', text: 'Avtomatlashtirilgan bichish xonamiz bir vaqtning oʻzida 50 qatlamgacha matoni qayta ishlay oladi. Gerber va Lectra tizimlari bilan jihozlangan.', imgLeft: true },
      { title: 'Tikuvchi ustalar', seed: 'sewing2', text: 'Turli mahsulot toifalari uchun ixtisoslashgan 20 ta tikuv liniyasi. Tikuvchilarimiz oʻrtacha 8 yildan ortiq tajribaga ega.', imgLeft: false },
      { title: 'Qattiq sifat nazorati', seed: 'quality', text: 'Har bir buyurtma qadoqlashdan oldin bir necha bosqichli tekshiruvdan oʻtadi. Nuqsonlar darajasi 0.5% dan past.', imgLeft: true },
      { title: 'Brending qadoqlash', seed: 'packing', text: 'Yorliqlar, maxsus paketlar va qutilar — mahsulotlaringiz doʻkon peshtaxtasiga tayyor holda yetib borishi uchun barcha pardozlash ishlari.', imgLeft: false }
    ],
    team: [
      { name: 'Asoschi & Bosh direktor', role: 'Asoschi & CEO', note: 'Kiyim ishlab chiqarish sohasida 20 yildan ortiq tajriba' },
      { name: 'Ishlab chiqarish rahbari', role: 'Ishlab chiqarish rahbari', note: '3 ta smenada 500 dan ortiq xodimni boshqaradi' },
      { name: 'Sifat nazorati direktori', role: 'Sifat nazorati direktori', note: 'ISO 9001 bosh auditori, 15 yillik QC tajribasi' },
      { name: 'Eksport menejeri', role: 'Eksport menejeri', note: '30 dan ortiq mamlakatlarga logistikani nazorat qiladi' }
    ]
  },
  ru: {
    heroSub: 'Наша история',
    heroTitle: <>Больше чем фабрика.<br />Традиция мастерства.</>,
    heroDesc: 'Основанная в 2015 году, наша фабрика прошла путь от небольшой мастерской до одного из самых надежных производителей одежды в Узбекистане — сохранив дух ручной работы.',
    howBegan: 'Как все начиналось',
    sewingTitle: 'Началось с одной швейной машинки',
    storyText1: 'В 2015 году наш основатель начал с небольшой команды из 12 опытных портных в скромной мастерской в Андижане. Миссия была проста: шить одежду, которая служит дольше, сидит лучше и производится в справедливых условиях.',
    storyText2: 'Сегодня наше предприятие площадью 8 000 м² насчитывает более 500 сотрудников в отделах раскроя, пошива, отделки и контроля качества. Мы экспортируем продукцию в более чем 30 стран Европы, Ближнего Востока и Азии.',
    storyText3: 'Каждое изделие, покидающее нашу фабрику, несет в себе ту же заботу и внимание, что и самое первое. Это не маркетинг. Это наша культура.',
    foundation: 'Наш фундамент',
    purpose: <>Движимые<br />Целью.</>,
    milestoneTitle: <>Novda в<br />Цифрах.</>,
    milestoneScale: 'Масштаб фабрики',
    inside: 'Внутри нашей фабрики',
    everyThread: 'Где каждая нить находит свое назначение',
    peopleBehind: 'Люди позади процесса',
    ledBy: 'Под управлением опыта',
    certsTitle: 'Сертификаты и стандарты',
    certsDesc: 'Мы соответствуем международным стандартам качества, так что вам не о чем беспокоиться.',
    letsBuild: 'Давайте построим что-то вместе',
    startup: 'Будь вы молодой стартап-бренд или крупный ритейлер, у нас есть возможности и опыт для поддержки вашего роста.',
    startConv: 'Начать диалог',
    seeProducts: 'Посмотреть продукцию',
    
    milestones: [
      { value: 2015, suffix: '', label: 'Год основания' },
      { value: 500, suffix: '+', label: 'Сотрудников' },
      { value: 8000, suffix: ' м²', label: 'Площадь фабрики' },
      { value: 30, suffix: '+', label: 'Стран экспорта' },
      { value: 1000000, suffix: '+', label: 'Штук / Месяц' },
      { value: 100, suffix: '%', label: 'Своевременная доставка' },
      { value: 12, suffix: '-пунктов', label: 'QC Контроль' },
      { value: 24, suffix: 'ч', label: 'Сроки образца' },
    ],
    facility: [
      { title: 'Точный раскрой', seed: 'cutting', text: 'Наш автоматизированный раскройный цех обрабатывает до 50 слоев ткани одновременно. Оснащен системами Gerber и Lectra.', imgLeft: true },
      { title: 'Опытные швейные бригады', seed: 'sewing2', text: '20 специализированных швейных линий для разных категорий продукции. Средний стаж швей — более 8 лет.', imgLeft: false },
      { title: 'Строгий контроль качества', seed: 'quality', text: 'Каждый заказ проходит промежуточный контроль, проверку готовой продукции и финальный аудит перед упаковкой. Брак менее 0.5%.', imgLeft: true },
      { title: 'Брендовая упаковка', seed: 'packing', text: 'Бирки, пакеты, индивидуальные коробки — вся отделка для того, чтобы ваши товары поступили в продажу готовыми к полке.', imgLeft: false }
    ],
    team: [
      { name: 'Основатель и генеральный директор', role: 'Основатель и CEO', note: '20+ лет в производстве одежды' },
      { name: 'Руководитель производства', role: 'Руководитель производства', note: 'Управляет 500+ сотрудниками в 3 смены' },
      { name: 'Директор по качеству', role: 'Директор по качеству', note: 'Ведущий аудитор ISO 9001, 15 лет опыта' },
      { name: 'Менеджер по экспорту', role: 'Менеджер по экспорту', note: 'Курирует логистику в 30+ стран мира' }
    ]
  },
  en: {
    heroSub: 'Our Story',
    heroTitle: <>More Than a Factory.<br />A Craft Tradition.</>,
    heroDesc: 'Founded in 2015, we\'ve grown from a small workshop to one of Uzbekistan\'s most trusted garment manufacturers — without losing the craft that started it all.',
    howBegan: 'How It Began',
    sewingTitle: 'Started With a Single Sewing Machine',
    storyText1: 'In 2015, our founder began with a small team of 12 skilled tailors in a modest workshop in Andijan. The mission was simple: produce garments that lasted longer, fit better, and were made under fair conditions.',
    storyText2: 'Today, our 8,000 m² facility houses over 500 employees across cutting, sewing, finishing, and QC departments. We export to 30+ countries across Europe, the Middle East, and Asia.',
    storyText3: 'Every piece that leaves our factory carries the same care and attention it did when we stitched the first one. That\'s not marketing. That\'s our culture.',
    foundation: 'Our Foundation',
    purpose: <>Driven By<br />Purpose.</>,
    milestoneTitle: <>By The<br />Numbers.</>,
    milestoneScale: 'The Scale of Novda',
    inside: 'Inside Our Facility',
    everyThread: 'Where Every Thread Meets Its Purpose',
    peopleBehind: 'The People Behind It',
    ledBy: 'Led by Experience',
    certsTitle: 'Certifications & Compliance',
    certsDesc: 'We meet international standards so you don\'t have to worry.',
    letsBuild: 'Let\'s Build Something Together',
    startup: 'Whether you\'re a startup brand or an established retailer, we have the capacity and expertise to support your growth.',
    startConv: 'Start a Conversation',
    seeProducts: 'See Our Products',
    
    milestones: [
      { value: 2015, suffix: '', label: 'Year Founded' },
      { value: 500, suffix: '+', label: 'Employees' },
      { value: 8000, suffix: ' m²', label: 'Factory Space' },
      { value: 30, suffix: '+', label: 'Export Countries' },
      { value: 1000000, suffix: '+', label: 'Units/Month' },
      { value: 100, suffix: '%', label: 'On-Time Delivery' },
      { value: 12, suffix: '-Point', label: 'QC Checklist' },
      { value: 24, suffix: 'hr', label: 'Sample Response' },
    ],
    facility: [
      { title: 'Precision Cutting', seed: 'cutting', text: 'Our automated cutting room handles up to 50 layers of fabric simultaneously. Equipped with Gerber and Lectra cutting systems.', imgLeft: true },
      { title: 'Expert Sewing Teams', seed: 'sewing2', text: '20 dedicated sewing lines, each specialized for different product categories. Our seamstresses average 8+ years of experience.', imgLeft: false },
      { title: 'Rigorous QC Process', seed: 'quality', text: 'Every order goes through inline QC, end-line inspection, and final audit before packing. Defect rate below 0.5%.', imgLeft: true },
      { title: 'Branded Packaging', seed: 'packing', text: 'From hang tags to polybags to custom boxes — all finishing touches so your products arrive shelf-ready.', imgLeft: false }
    ],
    team: [
      { name: 'Founder & CEO', role: 'Founder & CEO', note: '20+ years in garment manufacturing' },
      { name: 'Head of Production', role: 'Head of Production', note: 'Manages 500+ floor staff across 3 shifts' },
      { name: 'Quality Director', role: 'Quality Director', note: 'ISO 9001 lead auditor, 15 years QC experience' },
      { name: 'Export Manager', role: 'Export Manager', note: 'Oversees logistics to 30+ countries' }
    ]
  }
}

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  const mvvContent = [
    { title: language === 'uz' ? 'Bizning missiyamiz' : language === 'ru' ? 'Наша миссия' : 'Our Mission', text: language === 'uz' ? 'Brendlarga yuqori sifat, raqobatbardosh narxlar va ishonchli muddatlarda kiyimlar ishlab chiqarib berish.' : language === 'ru' ? 'Предоставлять точно изготовленную одежду премиум-качества по конкурентоспособным ценам в надежные сроки.' : 'To deliver precision-manufactured garments that empower brands to offer lasting quality at competitive prices.' },
    { title: language === 'uz' ? 'Bizning maqsadimiz' : language === 'ru' ? 'Наше видение' : 'Our Vision', text: language === 'uz' ? 'Barqaror ishlab chiqarish va ajoyib mahorat bilan tanilgan yetakchi eksportyorga aylanish.' : language === 'ru' ? 'Стать ведущим экспортером одежды в Центральной Азии, признанным во всем мире благодаря качеству и экологичности.' : 'To become Central Asia\'s leading garment exporter recognized globally for sustainable practices and exceptional craftsmanship.' },
    { title: language === 'uz' ? 'Qadriyatlarimiz' : language === 'ru' ? 'Наши ценности' : 'Our Values', text: language === 'uz' ? 'Har bir chokda halollik. Har bir qarorda ekologik masʼuliyat. Biz kiyim emas, uzoq muddatli hamkorlik quramiz.' : language === 'ru' ? 'Честность в каждом шве. Экологичность в каждом решении. Мы не просто шьем одежду — мы строим долгосрочные партнерские отношения.' : 'Integrity in every stitch. Sustainability in every decision. We don\'t just make clothes — we build long-term relationships.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] pt-24 pb-12 flex items-center justify-center text-center" aria-label="About hero">
        <img src="https://picsum.photos/seed/factory/1400/600" alt="Novda factory" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="relative z-10 px-6">
          <p className="text-xs font-semibold tracking-[0.15em] md:tracking-[0.25em] text-secondary uppercase mb-4">{t.heroSub}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.heroTitle}
          </h1>
          <p className="text-text-muted text-base md:text-lg mt-6 max-w-2xl mx-auto">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background" aria-labelledby="story-h2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.howBegan}</p>
            <h2 id="story-h2" className="text-3xl md:text-4xl font-black text-text mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
              {t.sewingTitle}
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              {t.storyText1}
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              {t.storyText2}
            </p>
            <p className="text-text-muted leading-relaxed">
              {t.storyText3}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['sewing', 'workshop', 'garment', 'workers'].map((seed) => (
              <img key={seed} src={`https://picsum.photos/seed/${seed}/400/300`} alt={seed} className="rounded-lg w-full h-44 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values - Sticky Scroll Editorial */}
      <section className="py-32 bg-surface-alt relative border-y border-border" aria-labelledby="mvv-h2">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row relative">

          {/* Sticky Left: Title */}
          <div className="md:w-1/2 md:sticky md:top-40 h-auto md:h-[50vh] mb-16 md:mb-0">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-4">{t.foundation}</p>
            <h2 id="mvv-h2" className="text-5xl md:text-6xl font-bold text-text leading-tight max-w-sm" style={{ fontFamily: 'var(--font-syne)' }}>
              {t.purpose}
            </h2>
          </div>

          {/* Scrolling Right: Content */}
          <div className="md:w-1/2 flex flex-col gap-24 md:gap-32 pb-16 md:pb-32">
            {mvvContent.map((c, i) => (
              <div key={c.title} className="border-t-2 border-text/10 pt-8">
                <div className="text-secondary font-bold text-sm mb-4">0{i + 1}</div>
                <h3 className="text-text font-bold text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-syne)' }}>{c.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed max-w-md">{c.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Key Numbers - Sticky Editorial Layout */}
      <section className="py-32 bg-surface relative" aria-labelledby="milestones-h2">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row relative">

          {/* Sticky Left: Title */}
          <div className="md:w-1/2 md:sticky md:top-40 h-auto md:h-[50vh] mb-16 md:mb-0">
            <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4">{t.milestoneScale}</p>
            <h2 id="milestones-h2" className="text-5xl md:text-6xl font-bold text-text leading-tight max-w-sm" style={{ fontFamily: 'var(--font-syne)' }}>
              {t.milestoneTitle}
            </h2>
          </div>

          {/* Scrolling Right: Stats */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 pb-16 md:pb-32">
            {t.milestones.map((m) => (
              <div key={m.label} className="border-t-2 border-border/30 pt-6">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-3 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-text/70 text-sm font-semibold tracking-wider uppercase">{m.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Facility Tour */}
      <section className="py-24 bg-surface-alt" aria-labelledby="facility-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.inside}</p>
            <h2 id="facility-h2" className="text-3xl md:text-4xl font-black text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.everyThread}</h2>
          </div>
          <div className="space-y-16">
            {t.facility.map((row, index) => {
              const staticRow = translations.uz.facility[index];
              return (
                <div key={row.title} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${!staticRow.imgLeft ? 'md:flex-row-reverse' : ''}`}>
                  {staticRow.imgLeft
                    ? (<><img src={`https://picsum.photos/seed/${staticRow.seed}/600/400`} alt={row.title} className="rounded-2xl w-full h-64 object-cover shadow-md" />
                      <div><h3 className="text-2xl font-black text-text mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{row.title}</h3><p className="text-text-muted leading-relaxed">{row.text}</p></div></>)
                    : (<><div className="md:order-2"><img src={`https://picsum.photos/seed/${staticRow.seed}/600/400`} alt={row.title} className="rounded-2xl w-full h-64 object-cover shadow-md" /></div>
                      <div className="md:order-1"><h3 className="text-2xl font-black text-text mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{row.title}</h3><p className="text-text-muted leading-relaxed">{row.text}</p></div></>)
                  }
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team - Modern Hover Cards */}
      <section className="py-24 bg-surface border-t border-border" aria-labelledby="team-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.peopleBehind}</p>
            <h2 id="team-h2" className="text-3xl md:text-4xl font-bold text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.ledBy}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.team.map((m, i) => (
              <div key={m.name} className="relative group rounded-2xl overflow-hidden aspect-3/4 shadow-sm hover:shadow-xl transition-all duration-500">
                <img src={`https://picsum.photos/seed/person${i + 1}/600/800`} alt={m.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <h3 className="font-bold text-white text-xl mb-1 translate-y-12 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: 'var(--font-syne)' }}>{m.name}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 mt-2">
                    <p className="text-secondary text-sm font-semibold mb-2">{m.role}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{m.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background" aria-labelledby="certs-h2">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 id="certs-h2" className="text-2xl md:text-3xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{t.certsTitle}</h2>
          <p className="text-text-muted mb-10">{t.certsDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {certs.map((c) => (
              <div key={c} className="bg-surface rounded-xl shadow-sm px-6 py-4 text-center min-w-[140px] border border-border">
                <p className="font-bold text-text text-sm">{c}</p>
                <p className="text-text-muted text-xs mt-1">{language === 'uz' ? 'Sertifikatlangan' : language === 'ru' ? 'Сертифицировано' : 'Certified'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary" aria-labelledby="about-cta-h2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="about-cta-h2" className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{t.letsBuild}</h2>
          <p className="text-white/80 mb-8">{t.startup}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" id="about-cta-contact" className="px-7 py-3.5 rounded-full bg-white text-secondary font-bold hover:bg-white/90 transition-all duration-200">{t.startConv}</Link>
            <Link href="/products" id="about-cta-products" className="px-7 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-200">{t.seeProducts}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
