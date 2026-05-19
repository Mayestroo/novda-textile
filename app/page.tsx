'use client'

import AnimatedCounter from '@/components/AnimatedCounter'
import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const translations = {
  uz: {
    est: 'Tashkil etilgan: 2015 · Andijon, Oʻzbekiston',
    heroTitle: <>Sifatli ishlab chiqarish<br /><span className="text-secondary">Ipdan tayyor kiyimgacha.</span></>,
    heroDesc: 'Biz butun dunyo boʻylab brendlar uchun premium darajadagi kiyimlar ishlab chiqaramiz. Aniq oʻlcham, yuqori sifat, ishonchli yetkazib berish.',
    explore: 'Imkoniyatlarni oʻrganish',
    requestQuote: 'Narxni bilish',
    stats: {
      units: 'Dona / Oy',
      exp: 'Yillik Tajriba',
      countries: 'Eksport Davlatlar',
      staff: 'Xodimlar'
    },
    whatWeMake: 'Nimalar ishlab chiqaramiz',
    basics: 'Oddiy kiyimdan eng mashhurlarigacha',
    everyItem: 'Har bir mahsulot sizning brendingiz logotipi ostida yuqori sifat standartlarida tayyorlanadi.',
    products: [
      { name: 'Futbolkalar', desc: 'Paxta aralashmasidan tayyorlangan 180–220g/m² futbolkalar. Yumaloq yoqa, V-simon yoqa va polo uslubida custom printlar.', seed: 'tshirt' },
      { name: 'Toplar va Bluzkalar', desc: 'Ayollar va bolalar uchun yengil va sifatli toplar. Turli xil bichimlar va qulay matolar.', seed: 'fabric' },
      { name: 'Ichki kiyimlar', desc: 'Yumshoq paxta, modal va mikrofibradan tayyorlangan ayollar, erkaklar va bolalar ichki kiyimlari.', seed: 'cotton' },
      { name: 'Sport kiyimlari', desc: 'Namlikni oʻtkazmaydigan va faol harakat uchun moʻljallangan sport toplari va formalar.', seed: 'sportswear' }
    ],
    viewAllProducts: 'Barcha mahsulotlar',
    precision: 'B2B aniqligi va ishonch',
    strengths: [
      { icon: '🏭', title: 'Oʻz fabrikamiz', desc: 'Bichishdan tortib qadoqlashgacha boʻlgan toʻliq siklli ishlab chiqarish liniyasi.' },
      { icon: '🌿', title: 'Ekologik toza matolar', desc: 'Sertifikatlangan organik paxta va qayta ishlangan tolalar.' },
      { icon: '✅', title: 'Sifat kafolati', desc: 'Har bir yuklashdan oldin ISO standarti boʻyicha koʻp bosqichli QC tekshiruvi.' },
      { icon: '🚀', title: 'Tezkor yetkazib berish', desc: '30–45 kunlik ishlab chiqarish muddati. Shoshilinch buyurtmalar ham qabul qilinadi.' },
      { icon: '📦', title: 'Brending va Yorliqlar', desc: 'Maxsus yorliqlar, logotipli qogʻozlar va brending qadoqlash xizmati.' },
      { icon: '🌍', title: 'Global Eksport', desc: 'Dunyoning 30 dan ortiq mamlakatlariga xavfsiz va tezkor yetkazib berish.' }
    ],
    process: 'Jarayon',
    howWeBuild: 'Sifat qanday yaratiladi',
    steps: [
      { n: 1, title: 'Soʻrov va Konsultatsiya', desc: 'Buyurtmangiz parametrlarini yuboring. Biz 24 soat ichida javob beramiz.' },
      { n: 2, title: 'Namuna tayyorlash', desc: 'Siz uchun mutlaqo bepul birinchi ishlab chiqarish namunasi.' },
      { n: 3, title: 'Ishlab chiqarish', desc: 'Doimiy foto/video hisobotlar bilan toʻliq hajmdagi kiyim tayyorlash.' },
      { n: 4, title: 'Sifat nazorati', desc: 'Har bir partiyada 12 punktdan iborat qattiq sifat tekshiruvi.' },
      { n: 5, title: 'Qadoqlash va Yetkazish', desc: 'Sizning dizayningizda qadoqlash va kafolatlangan logistika.' }
    ],
    whatPartnersSay: 'Hamkorlarimiz biz haqimizda',
    testimonials: [
      { quote: 'Novda bizning 5 yillik eng ishonchli hamkorimiz. Har mavsumda ajoyib sifat va oʻz vaqtida yetkazib berish.', author: 'Mariya L.', role: 'Yevropa kiyim brendi xarid menejeri' },
      { quote: 'Namuna tayyorlash jarayoni juda tez. Chizmadan tortib tayyor namunagacha 2 haftadan kam vaqt ketdi.', author: 'Jeyms T.', role: 'Avstraliya sport kiyimlari brendi asoschisi' },
      { quote: 'Maxsus qadoqlash ajoyib darajada. Mijozlarimiz uni autsorsing ekanligini bilishmadi ham — haqiqiy premium sifat.', author: 'Sara K.', role: 'Fors koʻrfazi chakana xaridori' }
    ],
    ready: 'Buyurtma berishga tayyormisiz?',
    join: 'Sifatli ishlab chiqarish uchun Novda Textile kompaniyasiga ishonch bildirgan yuzlab brendlarga qoʻshiling.',
    ctaBtn: 'Bugun narxni bilib oling'
  },
  ru: {
    est: 'Основано: 2015 · Андижан, Узбекистан',
    heroTitle: <>Качество во всем<br />От нити до<br /><span className="text-secondary">готовой одежды.</span></>,
    heroDesc: 'Мы производим одежду премиум-класса для брендов по всему миру. Построено на точности, доставлено с заботой.',
    explore: 'Наши возможности',
    requestQuote: 'Запросить расчет',
    stats: {
      units: 'Штук / Месяц',
      exp: 'Лет Опыта',
      countries: 'Стран Экспорта',
      staff: 'Сотрудников'
    },
    whatWeMake: 'Что мы производим',
    basics: 'От базовых моделей до бестселлеров',
    everyItem: 'Каждое изделие изготавливается под вашим брендом с соблюдением стандартов качества.',
    products: [
      { name: 'Футболки', desc: 'Футболки из хлопка плотностью 180–220 г/м². Круглый, V-образный вырез и поло с нанесением вашего принта.', seed: 'tshirt' },
      { name: 'Топы и Блузки', desc: 'Легкие трикотажные топы для женских и детских линий. Широкий выбор кроя и тканей.', seed: 'fabric' },
      { name: 'Нижнее Белье', desc: 'Мягкий хлопок, модал и микрофибра. Бесшовные варианты и классический крой.', seed: 'cotton' },
      { name: 'Спортивная Одежда', desc: 'Влагоотводящие спортивные футболки, майки и комплекты для тренировок.', seed: 'sportswear' }
    ],
    viewAllProducts: 'Все продукты',
    precision: 'B2B точность и надежность',
    strengths: [
      { icon: '🏭', title: 'Собственная Фабрика', desc: 'Полный цикл производства под одной крышей — от раскроя до упаковки.' },
      { icon: '🌿', title: 'Эко-материалы', desc: 'Сертифицированный органический хлопок и переработанные волокна.' },
      { icon: '✅', title: 'Гарантия Качества', desc: 'Многоэтапный контроль качества по стандартам ISO перед отправкой.' },
      { icon: '🚀', title: 'Быстрые Сроки', desc: 'Сроки производства 30–45 дней. Возможен срочный запуск.' },
      { icon: '📦', title: 'Брендирование', desc: 'Ваши бирки, этикетки и индивидуальная брендированная упаковка.' },
      { icon: '🌍', title: 'Глобальный Экспорт', desc: 'Доставка в более чем 30 стран мира с полной таможенной поддержкой.' }
    ],
    process: 'Процесс работы',
    howWeBuild: 'Как мы создаем качество',
    steps: [
      { n: 1, title: 'Запрос и Консультация', desc: 'Пришлите ваши требования. Мы ответим в течение 24 часов.' },
      { n: 2, title: 'Пошив образца', desc: 'Бесплатный предпроизводственный образец для согласования деталей.' },
      { n: 3, title: 'Производство', desc: 'Полномасштабный пошив партии с еженедельными фото/видео отчетами.' },
      { n: 4, title: 'Контроль Качества', desc: 'Проверка по 12 пунктам соответствия на каждом изделии партии.' },
      { n: 5, title: 'Упаковка и Доставка', desc: 'Индивидуальная упаковка по вашему дизайну и надежная логистика.' }
    ],
    whatPartnersSay: 'Что говорят наши партнеры',
    testimonials: [
      { quote: 'Novda — наш надежный партнер уже 5 лет. Стабильное качество ткани и пошива, доставка точно в срок.', author: 'Мария Л.', role: 'Менеджер по закупкам, европейский бренд' },
      { quote: 'Самый быстрый процесс разработки образцов. От эскиза до готового изделия менее чем за 2 недели.', author: 'Джеймс Т.', role: 'Основатель австралийского спортивного бренда' },
      { quote: 'Упаковка private label выполнена безупречно. Покупатели в восторге от качества товаров.', author: 'Сара К.', role: 'Байер торговой сети, Ближний Восток' }
    ],
    ready: 'Готовы начать ваш заказ?',
    join: 'Присоединяйтесь к сотням брендов, которые доверяют пошив одежды Novda Textile.',
    ctaBtn: 'Узнать стоимость сегодня'
  },
  en: {
    est: 'Est. 2015 · Andijan, Uzbekistan',
    heroTitle: <>Crafting Quality<br />From Thread<br /><span className="text-secondary">To Wardrobe.</span></>,
    heroDesc: 'We manufacture premium apparel for brands worldwide. Built on precision, delivered with care.',
    explore: 'Explore Capabilities',
    requestQuote: 'Request a Quote',
    stats: {
      units: 'Units/Month',
      exp: 'Years Experience',
      countries: 'Export Countries',
      staff: 'Staff'
    },
    whatWeMake: 'What We Make',
    basics: 'From Basics to Bestsellers',
    everyItem: 'Every item crafted with consistent quality standards, ready for your label.',
    products: [
      { name: 'T-Shirts', desc: 'Classic and fashion-fit tees in 180–220gsm cotton blends. Crew, V-neck, and polo styles with custom printing.', seed: 'tshirt' },
      { name: 'Tops & Blouses', desc: 'Lightweight woven and knit tops for women\'s and kids\' lines. Wide range of cuts and finishes.', seed: 'fabric' },
      { name: 'Panties & Underwear', desc: 'Soft-touch cotton, modal, and microfiber intimate wear. Seamless and cut-&-sew options available.', seed: 'cotton' },
      { name: 'Sportswear', desc: 'Moisture-wicking performance basics including tank tops and training tees.', seed: 'sportswear' }
    ],
    viewAllProducts: 'View All Products',
    precision: 'Built for B2B Precision',
    strengths: [
      { icon: '🏭', title: 'In-House Production', desc: 'End-to-end manufacturing under one roof — cutting to packing.' },
      { icon: '🌿', title: 'Sustainable Materials', desc: 'Certified organic cotton and recycled fibers.' },
      { icon: '✅', title: 'Quality Assured', desc: 'ISO-compliant multi-stage QC before every shipment.' },
      { icon: '🚀', title: 'Fast Turnaround', desc: '30–45 day lead times. Rush production available.' },
      { icon: '📦', title: 'Custom Labeling', desc: 'Private label, hang tags, and branded packaging.' },
      { icon: '🌍', title: 'Global Export', desc: 'Shipping to 30+ countries worldwide.' }
    ],
    process: 'The Process',
    howWeBuild: 'How We Build Quality',
    steps: [
      { n: 1, title: 'Inquiry & Consultation', desc: 'Share your specs. We respond within 24 hours.' },
      { n: 2, title: 'Sampling', desc: 'Pre-production sample at no extra charge.' },
      { n: 3, title: 'Production', desc: 'Full-scale manufacturing with progress updates.' },
      { n: 4, title: 'Quality Control', desc: '12-point inspection checklist on every batch.' },
      { n: 5, title: 'Packaging & Shipping', desc: 'Custom packaging and reliable logistics.' }
    ],
    whatPartnersSay: 'What Our Partners Say',
    testimonials: [
      { quote: 'Novda has been our go-to manufacturer for 5 years. Consistent quality and on-time delivery every season.', author: 'Maria L.', role: 'Sourcing Manager, EU Fashion Brand' },
      { quote: 'Their sampling process is the fastest we\'ve worked with. Sketch to sample in under 2 weeks.', author: 'James T.', role: 'Founder, Australian Sportswear Label' },
      { quote: 'Private label packaging was flawless. Customers had no idea it was outsourced — that\'s the quality we needed.', author: 'Sara K.', role: 'Retail Buyer, Gulf Region' }
    ],
    ready: 'Ready to Start Your Order?',
    join: 'Join hundreds of brands trusting Novda Textile for their premium manufacturing needs.',
    ctaBtn: 'Request a Quote Today'
  }
}

const processImages = {
  1: '/process_consultation.png',
  2: '/process_sampling.png',
  3: '/process_production.png',
  4: '/process_control.png',
  5: '/process_packaging.png',
}

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  const [activeStep, setActiveStep] = useState(1)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const html = document.documentElement
    html.classList.add('snap-y', 'snap-proximity', 'scroll-smooth')
    return () => {
      html.classList.remove('snap-y', 'snap-proximity', 'scroll-smooth')
    }
  }, [])

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, t.steps.length)

    const options = {
      root: null,
      rootMargin: '-55% 0px -30% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepNum = Number(entry.target.getAttribute('data-step'))
          if (stepNum) {
            setActiveStep(stepNum)
          }
        }
      })
    }, options)

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [language, t.steps])

  const statsList = [
    { value: 1000000, suffix: '+', label: t.stats.units },
    { value: 18, suffix: '+', label: t.stats.exp },
    { value: 30, suffix: '+', label: t.stats.countries },
    { value: 500, suffix: '+', label: t.stats.staff },
  ]

  return (
    <>
      {/* Cinematic Hero */}
      <section className="relative min-h-screen pt-24 pb-20 flex items-center justify-center text-center overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/textile-dark/1920/1080" alt="Textile manufacturing floor" className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-background/80 dark:bg-background/90 transition-colors duration-300" />
        </div>
        <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center animate-[fadeUp_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.3em] text-secondary uppercase mb-6">{t.est}</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-text dark:text-white leading-[1.05] mb-8 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.heroTitle}
          </h1>
          <p className="text-text-muted dark:text-white/80 text-lg md:text-xl max-w-2xl mb-8 md:mb-10 leading-relaxed">
            {t.heroDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="px-8 py-4 rounded-full bg-secondary text-white font-bold hover:bg-accent transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]">{t.explore}</Link>
            <Link href="/contact" className="px-8 py-4 rounded-full border border-border dark:border-white/20 bg-surface/50 dark:bg-white/5 backdrop-blur-sm text-text dark:text-white font-bold hover:bg-border/50 dark:hover:bg-white/10 transition-all duration-300">{t.requestQuote}</Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70 hidden sm:block">
          <div className="w-7 h-11 rounded-full border-2 border-text-muted/40 dark:border-white/40 flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-text-muted dark:bg-white rounded-full" />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slowZoom {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
          }
        `}} />
      </section>

      {/* Certifications Marquee */}
      <div className="bg-background py-8 border-y border-border overflow-hidden relative z-20">
        <div className="flex w-[200%] md:w-auto animate-none md:animate-pulse" style={{ animation: 'marquee 20s linear infinite' }}>
          <div className="flex gap-16 md:gap-32 items-center justify-around w-full opacity-60 grayscale px-6 text-sm font-bold tracking-widest uppercase text-text">
            <span>ISO 9001 Certified</span>
            <span>OEKO-TEX Standard 100</span>
            <span>BSCI Compliant</span>
            <span>GOTS Certified Organic</span>
            <span>Sedex Member</span>
            <span className="hidden md:inline">ISO 9001 Certified</span>
            <span className="hidden md:inline">OEKO-TEX Standard 100</span>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* Stats Bar */}
      <div className="bg-surface border-b border-border relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsList.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-text-muted text-sm uppercase tracking-wider font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Highlights */}
      <section className="py-24 bg-background" aria-labelledby="products-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.whatWeMake}</p>
            <h2 id="products-h2" className="text-3xl md:text-4xl font-bold text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.basics}</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">{t.everyItem}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.map((p, index) => {
              const staticProduct = translations.uz.products[index];
              return (
                <div key={p.name} className="relative group rounded-3xl overflow-hidden aspect-3/4 shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src={`https://picsum.photos/seed/${staticProduct.seed}/600/800`} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <h3 className="font-bold text-white text-2xl mb-1 translate-y-12 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: 'var(--font-syne)' }}>{p.name}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                      <p className="text-white/70 text-sm mb-5 line-clamp-3 mt-2 leading-relaxed">{p.desc}</p>
                      <Link href="/products" className="inline-flex items-center justify-center w-full py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold hover:bg-white hover:text-primary transition-colors">{t.explore}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <Link href="/products" id="home-view-products-btn" className="px-8 py-4 rounded-full bg-secondary text-white font-semibold hover:bg-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg inline-block">{t.viewAllProducts}</Link>
          </div>
        </div>
      </section>

      {/* High-Efficiency Strengths Grid */}
      <section className="py-24 bg-surface border-b border-border" aria-labelledby="strengths-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 id="strengths-h2" className="text-3xl md:text-4xl font-bold text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.precision}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 border-b border-border/50 pb-16 mb-16">
            {t.strengths.slice(0, 3).map((s, i) => (
              <div key={s.title} className={`group text-center px-8 ${i !== 2 ? 'md:border-r border-border/50 border-b border-border/50 pb-16 md:border-b-0 md:pb-0' : ''}`}>
                <div className="text-4xl mb-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">{s.icon}</div>
                <h3 className="text-secondary font-bold text-2xl mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">
            {t.strengths.slice(3, 6).map((s, i) => (
              <div key={s.title} className={`group text-center px-8 ${i !== 2 ? 'md:border-r border-border/50 border-b border-border/50 pb-16 md:border-b-0 md:pb-0' : ''}`}>
                <div className="text-4xl mb-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">{s.icon}</div>
                <h3 className="text-secondary font-bold text-2xl mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Scroll Process */}
      <section className="bg-background relative" aria-labelledby="process-h2">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-16 md:mb-24 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-3">{t.process}</p>
            <h2 id="process-h2" className="text-4xl md:text-5xl font-bold text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.howWeBuild}</h2>
          </div>

          <div className="flex flex-col md:flex-row relative">
            {/* Sticky Left/Top: Image Container */}
            <div className="w-full md:w-1/2 sticky top-20 md:top-[calc(50vh-180px)] z-20 bg-background pb-6 md:pb-0 self-start">
              {/* Aspect Ratio Card */}
              <div className="aspect-1380/752 w-full rounded-3xl overflow-hidden shadow-xl relative">
                {[1, 2, 3, 4, 5].map((stepNum) => (
                  <img
                    key={stepNum}
                    src={processImages[stepNum as keyof typeof processImages]}
                    alt={`Process step ${stepNum}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out ${activeStep === stepNum
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Scrolling Right/Bottom: Steps */}
            <div className="w-full md:w-1/2 md:px-10 lg:px-20 flex flex-col items-center justify-center relative z-10">
              {t.steps.map((s, idx) => (
                <div
                  key={s.title}
                  ref={(el) => {
                    stepRefs.current[idx] = el
                  }}
                  data-step={s.n}
                  className={`min-h-[45vh] md:min-h-[50vh] snap-start md:snap-center scroll-mt-[300px] md:scroll-mt-0 flex flex-col justify-center items-center text-center py-10 md:py-14 transition-all duration-500 ease-out ${activeStep === s.n
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-20 scale-95 translate-y-4 pointer-events-none'
                    }`}
                >
                  <div
                    className="text-[8rem] md:text-[10rem] font-bold leading-none mb-2 transition-colors duration-300 select-none pointer-events-none"
                    style={{
                      fontFamily: 'var(--font-syne)',
                      color: activeStep === s.n ? 'rgba(16,185,129,0.25)' : 'rgba(16,185,129,0.03)',
                    }}
                  >
                    {s.n}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-text mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{s.title}</h3>
                  <p className="text-text-muted text-lg leading-relaxed max-w-md mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface" aria-labelledby="testimonials-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 id="testimonials-h2" className="text-3xl md:text-4xl font-bold text-text" style={{ fontFamily: 'var(--font-syne)' }}>{t.whatPartnersSay}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((test) => (
              <div key={test.author} className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="text-4xl text-accent mb-3">&ldquo;</div>
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-accent text-sm">★</span>)}</div>
                <p className="text-text italic leading-relaxed mb-6 text-sm">{test.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-border/40 flex items-center justify-center font-bold text-sm text-text">{test.author[0]}</div>
                  <div>
                    <p className="font-semibold text-text text-sm">{test.author}</p>
                    <p className="text-text-muted text-xs">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-secondary" aria-labelledby="cta-h2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="cta-h2" className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{t.ready}</h2>
          <p className="text-white/90 text-lg mb-8">{t.join}</p>
          <Link href="/contact" id="home-cta-btn" className="inline-block px-8 py-4 rounded-full bg-white text-secondary font-bold hover:bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  )
}
