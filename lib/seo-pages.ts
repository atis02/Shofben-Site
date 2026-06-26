import { IMAGES } from "./constants";

export type SeoPageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  h2Service: string;
  serviceDescription: string;
  h2Faults: string;
  faults: string[];
  h2WhyUs: string;
  whyUs: string[];
  h2Regions: string;
  regionText: string;
  image: string;
};

const regionBase =
  "Avrupa Yakası'nda Beşiktaş, Bakırköy, Beylikdüzü, Fatih ve Şişli başta olmak üzere; Anadolu Yakası'nda Kadıköy, Üsküdar, Maltepe, Ataşehir ve Ümraniye dahil pek çok ilçeye mobil ekip yönlendiriyoruz. Semtinize en yakın servis aracımızı aradığınızda yola çıkar, arızayı adresinizde çözeriz.";

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "hermetik-sofben-servisi",
    title: "Hermetik Şofben Servisi İstanbul | 7/24 Tamir ve Bakım",
    description:
      "İstanbul'da hermetik şofben tamiri, bakımı ve montajı. Avrupa ve Anadolu Yakası'nda aynı gün servis. 0552 713 67 67 — hemen arayın.",
    h1: "Hermetik Şofben Servisi",
    h2Service: "Hermetik Şofben Tamir ve Bakım Hizmeti",
    serviceDescription:
      "Hermetik şofbenler kapalı yanma odası ve fan sistemiyle çalışır; bu yüzden arıza tespiti deneyim ister. Ekibimiz su ısıtmama, ateşleme sorunu, fan arızası ve gaz ayarı gibi işlemleri yerinde halleder. Yeni cihaz montajından periyodik bakıma kadar tüm hermetik şofben ihtiyaçlarınız için İstanbul genelinde hizmet veriyoruz.",
    h2Faults: "Sık Görülen Hermetik Şofben Arızaları",
    faults: [
      "Sıcak su gelmemesi veya suyun ısınmaması",
      "Ateşleme yapıyor ama hemen sönüyor",
      "Fan çalışmıyor veya anormal ses çıkarıyor",
      "Ekranda hata kodu görünmesi",
      "Gaz kokusu veya düzensiz yanma",
      "Su sızıntısı ve eşanjör tıkanıklığı",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Doğalgaz yetki belgeli teknisyenlerle güvenli müdahale",
      "Aynı gün yerinde tamir ve bakım imkânı",
      "Orijinal yedek parça ve 2 yıl işçilik garantisi",
      "7/24 acil servis hattı ve WhatsApp desteği",
    ],
    h2Regions: "Bölge Servisi",
    regionText: regionBase,
    image: IMAGES.hermetic,
  },
  {
    slug: "baymak-hermetik-sofben-servisi",
    title: "Baymak Hermetik Şofben Servisi İstanbul | Tamir & Bakım",
    description:
      "Baymak hermetik şofben tamiri ve bakımı İstanbul genelinde. Yetkili ekip, orijinal parça. 0552 713 67 67 numaralı hattan ulaşın.",
    h1: "Baymak Hermetik Şofben Servisi",
    h2Service: "Baymak Hermetik Şofben Tamir Hizmeti",
    serviceDescription:
      "Baymak hermetik şofben modellerinde ateşleme kartı, gaz valfi ve eşanjör kaynaklı arızalar sık görülür. Bu markaya özel parça ve ayar bilgisine sahip teknisyenlerimiz, cihazınızı sökmeden mümkün olduğunca yerinde onarır. Bakım sırasında baca gazı ve fan performansını da kontrol ederiz.",
    h2Faults: "Baymak Şofbende Sık Karşılaşılan Arızalar",
    faults: [
      "F1 veya ateşleme hatası uyarıları",
      "Sıcak su basıncının düşük kalması",
      "Termostatın doğru çalışmaması",
      "Kullanım sonrası alevin sönmesi",
      "Uzun süre çalışınca kapanma",
      "Kireçlenmeye bağlı verim düşüklüğü",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Baymak hermetik modellere özel servis tecrübesi",
      "Hızlı parça temini ve aynı gün müdahale",
      "Gaz kaçağı kontrolü her işlem sonrası yapılır",
      "Avrupa ve Anadolu Yakası'na mobil ekip",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Baymak hermetik şofben servisi için ${regionBase}`,
    image: IMAGES.hermetic,
  },
  {
    slug: "eca-hermetik-sofben-servisi",
    title: "ECA Hermetik Şofben Servisi İstanbul | 7/24 Teknik Servis",
    description:
      "ECA hermetik şofben arıza, bakım ve montaj servisi. İstanbul Avrupa ve Anadolu Yakası. 0850 346 54 57 veya 0552 713 67 67.",
    h1: "ECA Hermetik Şofben Servisi",
    h2Service: "ECA Hermetik Şofben Servis Hizmeti",
    serviceDescription:
      "ECA hermetik şofbenlerde elektronik kart, NTC sensör ve fan motoru arızaları öne çıkar. Servis ekibimiz önce güvenlik kontrolü yapar, ardından arızayı test cihazlarıyla tespit eder. Bakım paketimizde kireç temizliği, gaz ayarı ve filtre kontrolü yer alır.",
    h2Faults: "ECA Hermetik Şofbende Sık Görülen Sorunlar",
    faults: [
      "Sıcak suyun aniden kesilmesi",
      "Alev alıp kısa sürede sönme",
      "Ekranda sensör veya fan hatası",
      "Düşük su debisinde ısıtma zayıflığı",
      "Petek vanası veya üç yollu vana sorunları",
      "Uzun süre kullanılmayınca ateşleme yapmama",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "ECA uyumlu yedek parça kullanımı",
      "Arıza öncesi net bilgilendirme",
      "Montaj ve değişimde standartlara uygun işçilik",
      "WhatsApp üzerinden hızlı randevu",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `ECA hermetik şofben için ${regionBase}`,
    image: IMAGES.kombi,
  },
  {
    slug: "demirdokum-hermetik-sofben-servisi",
    title: "Demirdöküm Hermetik Şofben Servisi | İstanbul Teknik Servis",
    description:
      "Demirdöküm hermetik şofben tamiri, bakımı ve yedek parça değişimi. İstanbul geneli yerinde servis. Hemen arayın: 0552 713 67 67.",
    h1: "Demirdöküm Hermetik Şofben Servisi",
    h2Service: "Demirdöküm Hermetik Şofben Bakım ve Onarım",
    serviceDescription:
      "Demirdöküm hermetik şofbenler dayanıklı yapılarıyla bilinir; ancak düzenli bakım yapılmazsa eşanjör ve ateşleme sistemi yıpranır. Ustalarımız basınç düşüklüğü, alev kararsızlığı ve su ısıtma problemlerini markanın teknik şartlarına uygun şekilde giderir.",
    h2Faults: "Demirdöküm Şofbende Yaygın Arızalar",
    faults: [
      "Kırmızı ışık yanıp sönme veya hata kodu",
      "Banyoda suyun ılık kalması",
      "Gaz ayarı bozukluğundan düzensiz yanma",
      "Fan devri düşük olduğunda kapanma",
      "Eşanjörde kireç birikimi",
      "Su giriş filtresi tıkanıklığı",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Demirdöküm modellerine hakim ustalar",
      "Yerinde tamir ile zaman kaybını önleme",
      "Bakım sonrası test ve kullanım bilgilendirmesi",
      "7/24 ulaşılabilir servis hattı",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Demirdöküm hermetik şofben servisi ${regionBase}`,
    image: IMAGES.hermetic,
  },
  {
    slug: "vaillant-hermetik-sofben-servisi",
    title: "Vaillant Hermetik Şofben Servisi İstanbul | Tamir & Montaj",
    description:
      "Vaillant hermetik şofben teknik servisi İstanbul'da. Tamir, bakım, montaj. 0552 713 67 67 ve WhatsApp hattı açık.",
    h1: "Vaillant Hermetik Şofben Servisi",
    h2Service: "Vaillant Hermetik Şofben Teknik Servis",
    serviceDescription:
      "Vaillant hermetik şofbenlerde hassas elektronik yapı nedeniyle yanlış müdahale maliyeti artırır. Servisimiz önce arıza kodunu okur, gerekli parçayı belirler ve onarımı adresinizde tamamlar. Yeni montajlarda baca ve havalandırma kurallarına uygun kurulum yapılır.",
    h2Faults: "Vaillant Hermetik Şofbende Sık Arızalar",
    faults: [
      "Dijital panelde arıza uyarısı",
      "Sürekli ateşleme denemesi yapıp açılmama",
      "Sıcak su talebinde gecikme",
      "Fan veya hava akış sensörü kaynaklı kapanma",
      "Gaz valfi takılı kalması",
      "Mineral birikimine bağlı performans kaybı",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Vaillant cihazlarda deneyimli servis kadrosu",
      "Orijinal veya üretici onaylı parça",
      "Montaj sonrası gaz kaçağı testi",
      "İstanbul'un iki yakasına hızlı ulaşım",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Vaillant hermetik şofben için ${regionBase}`,
    image: IMAGES.maintenance,
  },
  {
    slug: "daxom-hermetik-sofben-servisi",
    title: "Daxom Hermetik Şofben Servisi | İstanbul Tamir & Bakım",
    description:
      "Daxom hermetik şofben servisi İstanbul genelinde. Arıza tespiti, tamir ve periyodik bakım. 0850 346 54 57.",
    h1: "Daxom Hermetik Şofben Servisi",
    h2Service: "Daxom Hermetik Şofben Onarım Hizmeti",
    serviceDescription:
      "Daxom hermetik şofben kullanan birçok evde su ısıtma ve ateşleme sorunları benzer nedenlerden çıkar. Teknisyenlerimiz cihazınızın modeline göre parça kontrolü yapar, gerektiğinde kart veya sensör değişimi uygular. Ekonomik ve hızlı çözüm için önce yerinde tamir deneriz.",
    h2Faults: "Daxom Şofbende Karşılaşılan Arızalar",
    faults: [
      "Ateşleme bobini arızası",
      "Su çıkışında dalgalanma ve ısı dengesizliği",
      "Termistör okuma hatası",
      "Düşük gaz basıncında çalışmama",
      "Baca sensörü uyarısı",
      "Uzun süreli kullanımda koku veya is oluşumu",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Daxom modellerine uygun servis prosedürü",
      "Şeffaf fiyatlandırma ve işlem öncesi bilgi",
      "Acil arızalarda öncelikli yönlendirme",
      "Bakım ile tekrarlayan arızaları azaltma",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Daxom hermetik şofben servisi ${regionBase}`,
    image: IMAGES.hermetic,
  },
  {
    slug: "goldtherm-hermetik-sofben-servisi",
    title: "Goldtherm Hermetik Şofben Servisi İstanbul | 7/24 Servis",
    description:
      "Goldtherm hermetik şofben tamiri ve bakımı. İstanbul Avrupa Yakası ve Anadolu Yakası servis. 0552 713 67 67.",
    h1: "Goldtherm Hermetik Şofben Servisi",
    h2Service: "Goldtherm Hermetik Şofben Servis Desteği",
    serviceDescription:
      "Goldtherm hermetik şofbenlerde eşanjör ve gaz grubu bakımı düzenli yapılmazsa verim düşer. Servis ekibimiz kireç temizliği, ateşleme ayarı ve fan kontrolünü tek ziyarette tamamlayabilir. Arıza durumunda cihazınızın güvenli şekilde devreye alınmasını sağlarız.",
    h2Faults: "Goldtherm Hermetik Şofbende Sık Görülen Arızalar",
    faults: [
      "Ilık su problemi ve ısıtma yetersizliği",
      "Alev sensörü kirlenmesinden kaynaklı kapanma",
      "Elektronik kart reset ihtiyacı",
      "Su basıncı düşüklüğü uyarısı",
      "Gaz hattı tıkanıklığına bağlı performans düşüşü",
      "Montaj hatasından kaynaklı hava girişi sorunu",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Goldtherm cihazlarda pratik tamir yaklaşımı",
      "Yıllık bakım hatırlatması ve planlı servis",
      "Yerinde müdahale ile cihazı evden götürmeme",
      "İki hat üzerinden ulaşılabilir telefon desteği",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Goldtherm hermetik şofben için ${regionBase}`,
    image: IMAGES.installation,
  },
  {
    slug: "termodinamik-hermetik-sofben-servisi",
    title: "Termodinamik Hermetik Şofben Servisi | İstanbul Tamir",
    description:
      "Termodinamik hermetik şofben arıza ve bakım servisi. İstanbul genelinde aynı gün müdahale. WhatsApp: 0552 713 67 67.",
    h1: "Termodinamik Hermetik Şofben Servisi",
    h2Service: "Termodinamik Hermetik Şofben Tamir Hizmeti",
    serviceDescription:
      "Termodinamik hermetik şofbenlerde fan, ateşleme ve su yolu bileşenleri birbiriyle uyumlu çalışmalıdır. Ustalarımız arıza şikayetinizi dinledikten sonra ölçüm cihazlarıyla kontrol yapar ve sorunu kaynağında çözer. Eski model cihazlarda uyumlu yedek parça temini konusunda da destek veririz.",
    h2Faults: "Termodinamik Şofbende Yaygın Sorunlar",
    faults: [
      "Çakma ateşleme sorunu",
      "Sıcak su debisinin düşmesi",
      "Fan motoru kilitlenmesi",
      "Gaz ayar vanası arızası",
      "NTC veya sıcaklık sensörü hatası",
      "Pas ve kireç kaynaklı ısı transferi zayıflığı",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Termodinamik modellere aşina ekip",
      "Arıza tekrarında ücretsiz kontrol imkânı",
      "Montaj ve taşıma işlemlerinde dikkatli işçilik",
      "Avrupa Yakası ve Anadolu Yakası eşit servis ağı",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Termodinamik hermetik şofben servisi ${regionBase}`,
    image: IMAGES.hermetic,
  },
  {
    slug: "copa-hermetik-sofben-servisi",
    title: "Copa Hermetik Şofben Servisi İstanbul | Bakım & Tamir",
    description:
      "Copa hermetik şofben teknik servisi. Tamir, bakım, montaj. İstanbul'da hızlı servis için 0552 713 67 67.",
    h1: "Copa Hermetik Şofben Servisi",
    h2Service: "Copa Hermetik Şofben Servis Hizmeti",
    serviceDescription:
      "Copa hermetik şofbenler apartman ve müstakil evlerde sık tercih edilir. Su ısıtmama veya gaz kesilmesi gibi durumlarda ekip yönlendirmesi hızlı yapılır. Bakım sırasında baca çekişi, fan devri ve emniyet ventilleri kontrol edilir; cihazınız güvenli şekilde teslim edilir.",
    h2Faults: "Copa Hermetik Şofbende Sık Karşılaşılan Arızalar",
    faults: [
      "Kısa süreli ısınıp kapanma",
      "Ateşleme iğnesi veya pil kaynaklı sorun",
      "Sıcak su musluğunda gecikme",
      "Düşük debide alevin sönmesi",
      "Eşanjör sızıntısı",
      "Uzun süre kapalı kalınca devreye girmeme",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Copa hermetik modellerde yerinde çözüm odaklı servis",
      "Gaz güvenliği önceliğimizdir",
      "Bakım paketi ile kış öncesi hazırlık",
      "Telefon ve WhatsApp ile kolay ulaşım",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Copa hermetik şofben için ${regionBase}`,
    image: IMAGES.kombi,
  },
  {
    slug: "termomex-hermetik-sofben-servisi",
    title: "Termomex Hermetik Şofben Servisi | İstanbul 7/24 Tamir",
    description:
      "Termomex hermetik şofben tamiri ve bakımı İstanbul genelinde. Avrupa ve Anadolu Yakası. 0850 346 54 57.",
    h1: "Termomex Hermetik Şofben Servisi",
    h2Service: "Termomex Hermetik Şofben Bakım ve Tamir",
    serviceDescription:
      "Termomex hermetik şofbenlerde özellikle kış aylarında yoğun kullanım arıza riskini artırır. Servis ekibimiz su yolu, gaz grubu ve elektronik kartı birlikte değerlendirir. Gerekli durumlarda parça değişimi sonrası cihazı test ederek sıcak su ve ateşleme performansını doğrular.",
    h2Faults: "Termomex Şofbende Sık Görülen Arızalar",
    faults: [
      "Sıcak suyun bir anda soğuması",
      "Alev kararsızlığı ve sönme",
      "Fan ve baca sensörü uyumsuzluğu",
      "Kireçlenmiş eşanjör nedeniyle zayıf ısıtma",
      "Gaz basıncı düşüklüğünde çalışmama",
      "Elektronik kart arızası veya kablo oksitlenmesi",
    ],
    h2WhyUs: "Neden Bizi Tercih Etmelisiniz?",
    whyUs: [
      "Termomex cihazlarda hızlı arıza teşhisi",
      "Yedek parça ve işçilik garantisi",
      "Acil durumlarda öncelikli servis",
      "İstanbul'un iki yakasında aktif ekip",
    ],
    h2Regions: "Bölge Servisi",
    regionText: `Termomex hermetik şofben servisi ${regionBase}`,
    image: IMAGES.maintenance,
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}

export function getAllSeoSlugs(): string[] {
  return SEO_PAGES.map((page) => page.slug);
}
