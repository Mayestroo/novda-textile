'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Link from 'next/link'
import ProductFilterBar from '@/components/ProductFilterBar'

const translations = {
  uz: {
    heroSub: 'Mahsulotlarimiz',
    heroTitle: <>Har bir kiyim,<br />Sizning buyurtmangiz asosida.</>,
    heroDesc: 'Barcha kiyimlarimiz xususiy brending yorliqlari (private label), maxsus oʻlchamlar va katta hajmdagi buyurtmalar uchun mavjud.',
    requestQuote: 'Narxni bilish',
    infoBox: 'ℹ️ Barcha ichki kiyimlarimiz maxsus toza xonada OEKO-TEX® sertifikatiga ega matolardan tayyorlanadi.',
    requestProd: 'Suhbatni boshlash',
    ownBrand: 'Brendingiz uchun ishlab chiqarish',
    yourLabel: <>Sizning brendingiz.<br /><span className="text-secondary">Bizning fabrikamiz.</span></>,
    ownBrandDesc: 'Biz xususiy yorliqli mahsulotlarni toʻliq ishlab chiqaramiz — gʻoyadan to tayyor qadoqlangan mahsulotgacha. Dizaynlaringizni taqdim eting yoki loyihalash guruhimiz bilan birga ishlang.',
    moqTitle: 'Buyurtma talablari bir qarashda',
    moqDesc: 'Barcha toifalar uchun shaffof minimal hajmlar va standart ishlab chiqarish muddatlari.',
    tableHeaders: ['Toifa', 'Min. buyurtma hajmi', 'Yetkazib berish muddati', 'Namuna muddati', 'Matolar turi'],
    foundTitle: 'Kerakli narsani topdingizmi?',
    foundDesc: 'Bizga talablaringizni, miqdorlarni va yetkazib berish shartlarini yuboring. Biz 24 soat ichida javob beramiz.',
    downloadCat: 'Katalogni yuklab olish',
    privateLabelList: [
      'Sizning yorligʻingiz va etiketkangiz',
      'Logotipli paket va quti qadoqlari',
      'Oʻlcham yorliqlari (EU, US, UK oʻlchamlari)',
      'Shtrix-kod va SKU boshqaruvi',
      'Kashtachilik va screen print',
      'Maxsus yuvish boʻyicha tavsiya yorliqlari',
      'Minimal buyurtma modeli uchun 500 dona',
      '7–10 ish kuni ichida namuna olish',
    ],
    categories: [
      {
        id: 'tshirts',
        num: '01',
        name: 'Futbolkalar',
        desc: 'Bizning asosiy mahsulotimiz. Oʻnlab bichimlar, matolar va qalinliklar mavjud. Kundalik kiyish, reklama va moda brendlari uchun mos keladi.',
        items: [
          { name: 'Klassik dumaloq yoqali futbolka', desc: '180g/m² taroqlangan paxtadan tikilgan kundalik kiyim.', details: 'Oʻlchamlar: XS–5XL, Ranglar: 50+', seed: 'tee1' },
          { name: 'V-simon yoqali futbolka', desc: 'Yumshoq trikotajdan tayyorlangan klassik futbolka.', details: 'Mato: 200g/m² paxt', seed: 'tee2' },
          { name: 'Polo futbolkalar', desc: 'Tugmali, yoqali va yeng uchi qismlari naqshli piqué paxta polo.', details: 'Kashta tushirish imkoniyati', seed: 'tee3' },
          { name: 'Oversized futbolka', desc: 'Koʻcha uslubidagi keng va qulay futbolka, 220g/m² qalin paxta.', details: 'Trend siluet', seed: 'tee4' },
          { name: 'Bolalar futbolkasi', desc: '2–14 yoshdagi bolalar uchun yumshoq, tegsiz variantlar.', details: 'Xavfsizlik sertifikatiga ega', seed: 'tee5' },
          { name: 'Uzun yengli futbolka', desc: 'Yengil qatlamli futbolka, trikotaj yeng uchi.', details: 'Barcha fasllar uchun', seed: 'tee6' },
        ]
      },
      {
        id: 'tops',
        num: '02',
        name: 'Toplar va Bluzkalar',
        desc: 'Ayollar va uniseks toplar va bluzkalar. Minimalist asoslardan tortib, moslashtirilgan moda namunalarigacha.',
        items: [
          { name: 'Qovurgʻali tank top', desc: 'Yumshoq modal materialdan tayyorlangan tor tank top.', details: '95% modal, 5% spandex', seed: 'top1' },
          { name: 'Yengsiz bluzka', desc: 'Yengil, qulay va yozgi kiyish uchun mos bluzka.', details: 'Turli yoqa shakllari', seed: 'top2' },
          { name: 'Crop top', desc: 'Kaltaroq bichimdagi trikotaj top, elastik manjet.', details: 'Moda va sportga mos', seed: 'top3' },
          { name: 'Klassik koʻylak', desc: 'Poplin matodan tayyorlangan toʻliq tugmali klassik koʻylak.', details: 'Rasmiy yoki kundalik', seed: 'top4' },
          { name: 'Kamy top', desc: 'Satin yoki paxtadan tikilgan yupqa ipli ayollar maykasi.', details: 'Ichki kiyim yoki moda uchun', seed: 'top5' },
          { name: 'Puff yengli top', desc: 'Yelkasi shishirilgan zamonaviy moda bluzkasi.', details: 'Fason kiyim', seed: 'top6' },
        ]
      },
      {
        id: 'underwear',
        num: '03',
        name: 'Ichki kiyimlar',
        desc: 'Eng yuqori gigiyena va sifat standartlari asosida ishlab chiqarilgan yumshoq va bardoshli ichki kiyimlar.',
        items: [
          { name: 'Ayollar slip ichki kiyimi', desc: 'Yumshoq rezinkali paxta trikotaj slip.', details: 'Oʻlchamlar: XS–4XL', seed: 'uw1' },
          { name: 'Bikini pantilar', desc: 'Paxta yoki mikrofibradan tikilgan pastroq bichimdagi pantilar.', details: 'Har bir partiyada 15+ ranglar', seed: 'uw2' },
          { name: 'Boyshorts', desc: 'Kengroq va yumshoq rezinkali oʻrta uzunlikdagi shlyapa ichki kiyim.', details: 'Ommabop kiyim', seed: 'uw3' },
          { name: 'Erkaklar boksyorlari', desc: 'Paxta matosidan tayyorlangan qulay boksyor kiyimi.', details: 'Katakli va tekis ranglar', seed: 'uw4' },
          { name: 'Erkaklar klassik ichki kiyimi', desc: 'Y-simon ochiladigan klassik erkaklar ichki kiyimi.', details: '3 talik qadoq', seed: 'uw5' },
          { name: 'Choksiz ichki kiyim', desc: 'Trikotajli choksiz konstruksiya, kiyim ostida koʻrinmaydi.', details: 'Mikroton aralashmasi', seed: 'uw6' },
        ]
      },
      {
        id: 'sportswear',
        num: '04',
        name: 'Sport kiyimlari',
        desc: '4 tomonlama choʻziluvchan, namlikni oʻtkazmaydigan materiallardan tayyorlangan yuqori samarali sport kiyimlari.',
        items: [
          { name: 'Sport brasi', desc: 'Oʻrtacha tayanchli sport brasi, choksiz yoki tikilgan variantlar.', details: '80% neylon, 20% spandex', seed: 'sp1' },
          { name: 'Sport maykasi', desc: 'Namlikni oʻtkazmaydigan qulay sport maykasi.', details: 'Uniseks va ayollar bichimi', seed: 'sp2' },
          { name: 'Mashgʻulot futbolkasi', desc: 'Tez quruvchi poliester sport futbolkasi.', details: 'Sublimatsiya nashri bilan', seed: 'sp3' },
          { name: 'Kompressor shortilar', desc: 'Velosiped uslubidagi tor shortilar, keng rezinka.', details: '4 tomonlama choʻziluvchan mato', seed: 'sp4' },
          { name: 'Jogerlar', desc: 'Elastik bel, toraygan yeng uchi, yon choʻntaklar.', details: 'Fleece yoki French terry', seed: 'sp5' },
        ]
      },
      {
        id: 'kids',
        num: '05',
        name: 'Bolalar kiyimlari',
        desc: 'Xavfsiz, yumshoq va qulay bolalar kiyimlari. Yassi choklar va xavfsizlik sertifikatiga ega furnituralar.',
        items: [
          { name: 'Bolalar asosiy futbolkasi', desc: 'Yorliqsiz, 180g/m² paxtadan tikilgan futbolka.', details: '2–14 yosh, 12 xil rang', seed: 'kid1' },
          { name: 'Bolalar maykasi', desc: 'Qizlar va oʻgʻil bolalar uchun qovurgʻali paxta maykasi.', details: 'Yumshoq elastik chok', seed: 'kid2' },
          { name: 'Bolalar trusilari', desc: 'Qiziqarli rasmli yumshoq paxta trusilari.', details: 'Sertifikatlangan rezinka', seed: 'kid3' },
          { name: 'Bolalar pijama toʻplami', desc: '100% paxtadan tikilgan pijama (futbolka va shortilar).', details: 'Chiroyli printlar bilan', seed: 'kid4' },
        ]
      }
    ],
    moqTable: [
      { cat: 'Futbolkalar', moq: '500 dona/model', lead: '30–40 kun', sample: '7 kun', fabric: 'Paxta, Poliester, Aralashmalar' },
      { cat: 'Toplar va Bluzkalar', moq: '300 dona/model', lead: '35–45 kun', sample: '10 kun', fabric: 'Toʻqilgan mato, Trikotaj' },
      { cat: 'Ichki kiyimlar', moq: '1,000 dona/model', lead: '25–35 kun', sample: '7 kun', fabric: 'Paxta, Modal, Mikrofibra' },
      { cat: 'Sport kiyimlari', moq: '500 dona/model', lead: '40–50 kun', sample: '10 kun', fabric: 'Neylon, Poliester, Spandeks' },
      { cat: 'Bolalar kiyimlari', moq: '500 dona/model', lead: '30–40 kun', sample: '7 kun', fabric: 'Paxta, Trikotaj' },
    ]
  },
  ru: {
    heroSub: 'Наш ассортимент',
    heroTitle: <>Каждое изделие,<br />по вашим лекалам.</>,
    heroDesc: 'Полный ассортимент одежды для вашего бренда. Все товары доступны для private label, индивидуального брендирования и оптовых партий.',
    requestQuote: 'Запросить расчет',
    infoBox: 'ℹ️ Все нижнее белье производится в стерильной зоне из сертифицированных тканей OEKO-TEX®.',
    requestProd: 'Запросить расчет',
    ownBrand: 'Производство под вашим брендом',
    yourLabel: <>Ваша бирка.<br /><span className="text-secondary">Наша фабрика.</span></>,
    ownBrandDesc: 'Полный цикл производства под собственной маркой — от концепции до готовой упаковки. Пришлите свои эскизы или доработайте их с нашими конструкторами.',
    moqTitle: 'Требования к заказам кратко',
    moqDesc: 'Прозрачные минимумы и стандартные сроки производства для всех категорий.',
    tableHeaders: ['Категория', 'Мин. партия', 'Срок пошива', 'Срок образца', 'Варианты тканей'],
    foundTitle: 'Нашли то, что искали?',
    foundDesc: 'Отправьте нам характеристики, объемы и требования к доставке. Мы ответим в течение 24 часов.',
    downloadCat: 'Скачать каталог',
    privateLabelList: [
      'Ваши тканые бирки и этикетки',
      'Брендированные пакеты и коробки',
      'Нанесение размеров (EU, US, UK стандарты)',
      'Штрихкодирование и управление SKU',
      'Вышивка и шелкография',
      'Индивидуальные ярлыки по уходу за одеждой',
      'Минимальный заказ от 500 штук на модель',
      'Разработка лекал и образца за 7–10 дней',
    ],
    categories: [
      {
        id: 'tshirts',
        num: '01',
        name: 'Футболки',
        desc: 'Наш ключевой продукт. Доступен в десятках вариантов кроя, плотности и материалов. Идеально для промо, корпоративной одежды и модных брендов.',
        items: [
          { name: 'Классическая футболка с круглым вырезом', desc: 'Повседневная база из гребенного хлопка плотностью 180 г/м².', details: 'Размеры: XS–5XL, Цвета: 50+', seed: 'tee1' },
          { name: 'Футболка с V-образным вырезом', desc: 'Приталенный и классический силуэт из мягкого кулирного трикотажа.', details: 'Материал: 200 г/м² хлопок', seed: 'tee2' },
          { name: 'Футболка-Поло', desc: 'Поло из хлопка пике с воротником в рубчик и планкой на двух пуговицах.', details: 'Возможно нанесение вышивки', seed: 'tee3' },
          { name: 'Свободный силуэт оверсайз', desc: 'Уличный стиль со спущенным плечом, плотный хлопок 220 г/м².', details: 'Трендовый силуэт', seed: 'tee4' },
          { name: 'Детская футболка', desc: 'Мягкий гипоаллергенный трикотаж без внутренних бирок для детей 2–14 лет.', details: 'Сертификат безопасности', seed: 'tee5' },
          { name: 'Футболка с длинным рукавом', desc: 'Лонгслив приталенного или классического кроя с манжетами.', details: 'База на любой сезон', seed: 'tee6' },
        ]
      },
      {
        id: 'tops',
        num: '02',
        name: 'Топы и Блузки',
        desc: 'Трикотажные и тканые женские топы. От минималистичных базовых маек до изысканных блузок сложного кроя.',
        items: [
          { name: 'Трикотажный топ в рубчик', desc: 'Облегающий топ на широких бретелях из мягкого модала.', details: '95% модал, 5% спандекс', seed: 'top1' },
          { name: 'Женская блузка без рукавов', desc: 'Легкая шифоновая блузка свободного покроя.', details: 'Различные варианты выреза', seed: 'top2' },
          { name: 'Укороченный кроп-топ', desc: 'Короткий трикотажный топ с эластичной резинкой.', details: 'Спорт и стиль', seed: 'top3' },
          { name: 'Рубашка на пуговицах', desc: 'Хлопковая поплиновая блузка на сквозных пуговицах.', details: 'Строгая и повседневная', seed: 'top4' },
          { name: 'Майка на бретелях', desc: 'Атласный полиэстер или нежный хлопок на тонких бретельках.', details: 'Бельевой стиль', seed: 'top5' },
          { name: 'Блузка с пышными рукавами', desc: 'Модный топ со сборкой на плечах из легкой ткани.', details: 'Фэшн-силуэт', seed: 'top6' },
        ]
      },
      {
        id: 'underwear',
        num: '03',
        name: 'Нижнее Белье',
        desc: 'Мягкое, удобное и гигиеничное нижнее белье, сшитое по строгим санитарным стандартам.',
        items: [
          { name: 'Женские слипы', desc: 'Классические женские трусы из мягкого хлопка с эластичным поясом.', details: 'Размеры: XS–4XL', seed: 'uw1' },
          { name: 'Трусики-бикини', desc: 'Заниженная посадка, тонкие швы, хлопковые или микрофибровые варианты.', details: '15+ цветов в наличии', seed: 'uw2' },
          { name: 'Трусы-шортики', desc: 'Удобные женские боксеры с широким мягким поясом.', details: 'Комфортная база', seed: 'uw3' },
          { name: 'Мужские семейные боксеры', desc: 'Классические свободные трусы из тканого хлопка.', details: 'Однотонные и клетка', seed: 'uw4' },
          { name: 'Мужские слипы', desc: 'Эластичные анатомические трусы из хлопка.', details: 'Упаковки по 3 штуки', seed: 'uw5' },
          { name: 'Бесшовное нижнее белье', desc: 'Кругловязаная бесшовная конструкция, незаметная под одеждой.', details: 'Микрофибра с эластаном', seed: 'uw6' },
        ]
      },
      {
        id: 'sportswear',
        num: '04',
        name: 'Спортивная Одежда',
        desc: 'Одежда для тренировок из влагоотводящих эластичных тканей. Отлично тянется и быстро сохнет.',
        items: [
          { name: 'Спортивный топ-бра', desc: 'Топ с поддержкой груди, бесшовный или сшивной.', details: '80% нейлон, 20% спандекс', seed: 'sp1' },
          { name: 'Спортивная майка-борцовка', desc: 'Сетчатые вставки, быстросохнущие спортивные волокна.', details: 'Свободный крой', seed: 'sp2' },
          { name: 'Тренировочная футболка', desc: 'Футболка из dry-fit полиэстера, плоские спортивные швы.', details: 'Подходит для сублимации', seed: 'sp3' },
          { name: 'Компрессионные шорты', desc: 'Облегающие шорты-велосипедки с высокой посадкой.', details: 'Эластичность во всех направлениях', seed: 'sp4' },
          { name: 'Спортивные джоггеры', desc: 'Пояс на резинке со шнурком, эластичные манжеты, карманы.', details: 'Футер двухнитка/трехнитка', seed: 'sp5' },
        ]
      },
      {
        id: 'kids',
        num: '05',
        name: 'Детская Одежда',
        desc: 'Безопасная, прочная и невероятно мягкая детская одежда. Гипоаллергенный хлопок и плоские мягкие швы.',
        items: [
          { name: 'Базовая детская футболка', desc: '180 г/м² хлопок без колючих внутренних ярлыков.', details: 'Возраст 2–14 лет, 12 цветов', seed: 'kid1' },
          { name: 'Детская майка в рубчик', desc: 'Бельевая майка из мягкого эластичного трикотажа.', details: 'Натуральный хлопок', seed: 'kid2' },
          { name: 'Детские трусики', desc: 'Трусы для мальчиков и девочек из дышащего хлопка с принтом.', details: 'Мягкие бельевые резинки', seed: 'kid3' },
          { name: 'Детская пижама', desc: 'Комплект из футболки и шортиков для сна из тонкого хлопка.', details: 'Красивые гипоаллергенные принты', seed: 'kid4' },
        ]
      }
    ],
    moqTable: [
      { cat: 'Футболки', moq: '500 шт/модель', lead: '30–40 дней', sample: '7 дней', fabric: 'Хлопок, полиэстер, смеси' },
      { cat: 'Топы и Блузки', moq: '300 шт/модель', lead: '35–45 дней', sample: '10 дней', fabric: 'Шифон, трикотаж, вискоза' },
      { cat: 'Нижнее белье', moq: '1,000 шт/модель', lead: '25–35 дней', sample: '7 дней', fabric: 'Хлопок, модал, микрофибра' },
      { cat: 'Спортивная одежда', moq: '500 шт/модель', lead: '40–50 дней', sample: '10 дней', fabric: 'Нейлон, полиэстер, спандекс' },
      { cat: 'Детская одежда', moq: '500 шт/модель', lead: '30–40 дней', sample: '7 дней', fabric: 'Натуральный хлопок, интерлок' },
    ]
  },
  en: {
    heroSub: 'Our Product Range',
    heroTitle: <>Every Garment,<br />Crafted to Spec.</>,
    heroDesc: 'Browse our full range of manufactured apparel. All products available for private label, custom sizing, and bulk ordering.',
    requestQuote: 'Request a Quote',
    infoBox: 'ℹ️ All intimate apparel is produced in a dedicated clean-room environment with OEKO-TEX® certified fabrics.',
    requestProd: 'Request Product',
    ownBrand: 'Own Brand Production',
    yourLabel: <>Your Label.<br /><span className="text-secondary">Our Factory.</span></>,
    ownBrandDesc: 'We handle full private label production — from concept to packaged product. Bring us your designs, or work with our in-house tech team to develop them.',
    moqTitle: 'Order Requirements at a Glance',
    moqDesc: 'Transparent minimums and standard lead times for all categories.',
    tableHeaders: ['Category', 'Min. Order Qty', 'Lead Time', 'Sample Time', 'Fabric Options'],
    foundTitle: 'Found What You\'re Looking For?',
    foundDesc: 'Send us your specs, quantities, and delivery requirements. We\'ll get back to you within 24 hours.',
    downloadCat: 'Download Catalog',
    privateLabelList: [
      'Custom woven labels & hang tags',
      'Branded polybag & box packaging',
      'Size label printing (EU, US, UK sizing)',
      'Barcode & SKU management',
      'Embroidery & screen printing',
      'Custom wash care labels',
      'MOQ from 500 pieces per style',
      'Sampling within 7–10 business days',
    ],
    categories: [
      {
        id: 'tshirts',
        num: '01',
        name: 'T-Shirts',
        desc: 'Our core product. Available in dozens of fits, weights, and fabrics. Suitable for casual, workwear, promotional, and fashion applications.',
        items: [
          { name: 'Classic Crew Neck Tee', desc: 'The everyday essential in 180gsm combed cotton.', details: 'Sizes: XS–5XL, Colors: 50+', seed: 'tee1' },
          { name: 'V-Neck Tee', desc: 'Fitted and relaxed cuts in soft single-jersey.', details: 'Fabric: 200gsm cotton', seed: 'tee2' },
          { name: 'Polo Shirt', desc: 'Piqué cotton polo with 2-button placket, ribbed collar.', details: 'Customizable embroidery', seed: 'tee3' },
          { name: 'Oversized Drop-Shoulder', desc: 'Streetwear-cut tee, 220gsm heavyweight cotton.', details: 'Trendy silhouette', seed: 'tee4' },
          { name: "Kids' T-Shirt", desc: 'Soft, pre-shrunk, tag-free options for children ages 2–14.', details: 'Safety certified', seed: 'tee5' },
          { name: 'Long-Sleeve Tee', desc: 'Lightweight layering tee, ribbed cuffs, crew or v-neck.', details: 'Year-round basic', seed: 'tee6' },
        ]
      },
      {
        id: 'tops',
        num: '02',
        name: 'Tops & Blouses',
        desc: 'Woven and knit tops for women\'s, juniors\', and unisex lines. From minimalist basics to tailored fashion pieces.',
        items: [
          { name: 'Ribbed Tank Top', desc: 'Slim-fit ribbed modal tank, wide strap.', details: '95% modal, 5% spandex', seed: 'top1' },
          { name: 'Sleeveless Blouse', desc: 'Lightweight georgette, relaxed fit.', details: 'Multiple neckline options', seed: 'top2' },
          { name: 'Fitted Crop Top', desc: 'Short-cut knit top, elasticated hem.', details: 'Fashion & athleisure', seed: 'top3' },
          { name: 'Woven Button-Down', desc: 'Classic poplin shirt, full button front.', details: 'Formal or casual', seed: 'top4' },
          { name: 'Cami Top', desc: 'Thin-strap camisole in satin-finish polyester or cotton.', details: 'Innerwear or fashion', seed: 'top5' },
          { name: 'Puff Sleeve Top', desc: 'Trendy puffed shoulder blouse, lightweight woven fabric.', details: 'Fashion-forward', seed: 'top6' },
        ]
      },
      {
        id: 'underwear',
        num: '03',
        name: 'Underwear & Intimate Apparel',
        desc: 'Soft, comfortable, and durable intimate wear manufactured to the highest hygiene and quality standards.',
        items: [
          { name: "Women's Briefs", desc: 'Full-coverage cotton brief with elastic waistband.', details: 'Sizes: XS–4XL', seed: 'uw1' },
          { name: 'Bikini Panties', desc: 'Low-rise cut, cotton or microfiber options.', details: '15+ colors per run', seed: 'uw2' },
          { name: 'Boyshorts', desc: 'Full-coverage, soft waistband, longer leg cut.', details: 'Very popular basics', seed: 'uw3' },
          { name: "Men's Boxers", desc: 'Woven cotton boxer, elasticated waist, button fly.', details: 'Checks & solid options', seed: 'uw4' },
          { name: "Men's Briefs", desc: 'Stretch cotton brief with Y-front opening.', details: '3-pack MOQ available', seed: 'uw5' },
          { name: 'Seamless Underwear', desc: 'Knitted seamless construction, no-show under clothing.', details: 'Microfiber blend', seed: 'uw6' },
        ]
      },
      {
        id: 'sportswear',
        num: '04',
        name: 'Sportswear & Activewear',
        desc: 'Performance-first garments using moisture-wicking, 4-way stretch fabrics. Ideal for gym, outdoor, and athleisure brands.',
        items: [
          { name: 'Sports Bra', desc: 'Medium-support sports bra, seamless or cut-&-sew.', details: '80% nylon, 20% spandex', seed: 'sp1' },
          { name: 'Athletic Tank Top', desc: 'Racerback, mesh panel inserts, moisture-wicking.', details: "Unisex & women's cuts", seed: 'sp2' },
          { name: 'Training T-Shirt', desc: 'Dry-fit polyester tee, flatlock stitching.', details: 'Available with sublimation print', seed: 'sp3' },
          { name: 'Compression Shorts', desc: 'Tight-fit cycling-style shorts, wide waistband.', details: '4-way stretch fabric', seed: 'sp4' },
          { name: 'Jogger Pants', desc: 'Elastic waist, tapered leg, side pockets.', details: 'Fleece or French terry', seed: 'sp5' },
        ]
      },
      {
        id: 'kids',
        num: '05',
        name: "Kids' Apparel",
        desc: 'Safe, durable, and comfortable children\'s basics. Pre-shrunk fabrics, flat seams, and safety-certified trims throughout.',
        items: [
          { name: "Kids' Crew Tee", desc: 'Tagless, pre-shrunk, 180gsm cotton.', details: 'Ages 2–14, 12 colors', seed: 'kid1' },
          { name: "Kids' Vest / Tank", desc: 'Ribbed cotton tank for boys and girls.', details: 'Soft elastic trim', seed: 'kid2' },
          { name: "Kids' Brief", desc: 'Soft cotton underwear with fun prints.', details: 'Safety-certified elastic', seed: 'kid3' },
          { name: "Kids' Pyjama Set", desc: 'Top + shorts set in 100% cotton jersey.', details: 'Prints available', seed: 'kid4' },
        ]
      }
    ],
    moqTable: [
      { cat: 'T-Shirts', moq: '500 pcs/style', lead: '30–40 days', sample: '7 days', fabric: 'Cotton, Poly, Blends' },
      { cat: 'Tops & Blouses', moq: '300 pcs/style', lead: '35–45 days', sample: '10 days', fabric: 'Woven, Knit, Jersey' },
      { cat: 'Underwear', moq: '1,000 pcs/style', lead: '25–35 days', sample: '7 days', fabric: 'Cotton, Modal, Microfiber' },
      { cat: 'Sportswear', moq: '500 pcs/style', lead: '40–50 days', sample: '10 days', fabric: 'Nylon, Polyester, Spandex' },
      { cat: "Kids' Wear", moq: '500 pcs/style', lead: '30–40 days', sample: '7 days', fabric: 'Cotton, Jersey' },
    ]
  }
}

export default function ProductsPage() {
  const { language } = useLanguage()
  const t = translations[language] || translations.uz

  const uiCategories = t.categories.map((cat, index) => ({
    ...cat,
    bg: index % 2 === 0 ? 'bg-background' : 'bg-surface'
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] pt-24 pb-12 flex items-center justify-center text-center" aria-label="Products hero">
        <img src="https://picsum.photos/seed/fabrics/1400/500" alt="Fabric selection" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="relative z-10 px-6">
          <p className="text-xs font-semibold tracking-[0.15em] md:tracking-[0.25em] text-secondary uppercase mb-4">{t.heroSub}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            {t.heroTitle}
          </h1>
          <p className="text-text-muted text-base md:text-lg mt-4 mb-8 max-w-xl mx-auto">
            {t.heroDesc}
          </p>
          <Link href="/contact" id="products-hero-quote-btn" className="inline-block px-8 py-4 rounded-full bg-secondary text-white font-semibold hover:bg-accent transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">{t.requestQuote}</Link>
        </div>
      </section>

      {/* Filter bar */}
      <ProductFilterBar categories={uiCategories} />

      {/* Product categories */}
      {uiCategories.map((cat) => (
        <section key={cat.id} id={cat.id} className={`py-20 ${cat.bg}`} aria-labelledby={`cat-${cat.id}-h2`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-2">{language === 'uz' ? 'Kategoriya' : language === 'ru' ? 'Категория' : 'Category'} {cat.num}</p>
              <h2 id={`cat-${cat.id}-h2`} className="text-3xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{cat.name}</h2>
              <p className="text-text-muted max-w-2xl">{cat.desc}</p>
              {cat.id === 'underwear' && (
                <div className="mt-4 p-4 rounded-xl border border-border bg-surface-alt/60 text-sm text-text-muted inline-block">
                  {t.infoBox}
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="relative group bg-surface-alt rounded-2xl overflow-hidden aspect-4/5 shadow-sm">
                  <img src={`https://picsum.photos/seed/${item.seed}/500/700`} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <h3 className="font-bold text-white text-xl mb-1 translate-y-8 group-hover:translate-y-0 transition-transform duration-300" style={{ fontFamily: 'var(--font-syne)' }}>{item.name}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <p className="text-white/80 text-sm mb-4 line-clamp-3 mt-2">{item.desc}</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs mb-4">{item.details}</span>
                      <Link href="/contact" className="block w-full text-center py-3 rounded-full bg-secondary text-white text-sm font-bold hover:bg-accent transition-colors">{t.requestProd}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom / Private Label */}
      <section id="private-label-section" className="py-24 bg-surface-alt relative overflow-hidden" aria-labelledby="private-label-h2">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center relative z-10">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-secondary inline-block"></span>
               {t.ownBrand}
            </p>
            <h2 id="private-label-h2" className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
               {t.yourLabel}
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              {t.ownBrandDesc}
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.privateLabelList.map((f) => (
                <div key={f} className="flex items-start gap-4 p-5 rounded-2xl bg-surface shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 group">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <svg className="w-4 h-4 text-secondary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text font-medium text-sm leading-tight pt-1.5">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Table */}
      <section className="py-24 bg-background" aria-labelledby="moq-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 id="moq-h2" className="text-3xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-syne)' }}>{t.moqTitle}</h2>
            <p className="text-text-muted">{t.moqDesc}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-text text-text">
                  {t.tableHeaders.map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-bold tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.moqTable.map((row) => (
                  <tr key={row.cat} className="border-b border-border hover:bg-surface-alt transition-colors duration-200">
                    <td className="px-5 py-5 font-semibold text-text">{row.cat}</td>
                    <td className="px-5 py-5 text-text-muted">{row.moq}</td>
                    <td className="px-5 py-5 text-text-muted">{row.lead}</td>
                    <td className="px-5 py-5 text-text-muted">{row.sample}</td>
                    <td className="px-5 py-5 text-text-muted">{row.fabric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary" aria-labelledby="products-cta-h2">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="products-cta-h2" className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-syne)' }}>{t.foundTitle}</h2>
          <p className="text-white/90 text-lg mb-8">{t.foundDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" id="products-cta-quote" className="px-8 py-4 rounded-full bg-white text-secondary font-bold hover:bg-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">{t.requestQuote}</Link>
            <a href="#" id="products-catalog-dl" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5">{t.downloadCat}</a>
          </div>
        </div>
      </section>
    </>
  )
}
