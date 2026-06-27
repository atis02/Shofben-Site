export const SITE = {
  name: "Hermetik Şofben Servisi",
  title:
    "Hermetik Şofben Servisi | İstanbul Doğalgazlı Şofben, Kombi ve Teknik Servis",
  description:
    "İstanbul genelinde hermetik şofben tamiri, bakımı ve kombi servisi. Aynı gün yerinde müdahale. Hemen arayın: 0850 346 54 57.",
  email: "info@sofbenservis.com",
  logo: "/logo.avif",
  phones: [
    {
      label: "Çağrı Merkezi",
      display: "0850 346 54 57",
      href: "tel:+908503465457",
    },
    {
      label: "Mobil Hat",
      display: "0552 713 67 67",
      href: "tel:+905527136767",
    },
  ],
  whatsapp: {
    label: "WhatsApp hattı",
    display: "0552 713 67 67",
    href: "https://wa.me/905527136767",
  },
  phone: "0850 346 54 57",
  phoneHref: "tel:+908503465457",
  whatsappHref: "https://wa.me/905527136767",
} as const;

export const IMAGES = {
  hero: "https://assets.ls-assets.com/provider/istock/2263154450.jpg?w=1200",
  technician:
    "https://assets.ls-assets.com/provider/istock/2237728977.jpg?w=1200",
  kombi: "https://assets.ls-assets.com/provider/istock/2237728977.jpg?w=1200",
  hermetic:
    "https://assets.ls-assets.com/provider/istock/2182985078.jpg?w=1200",
  maintenance:
    "https://assets.ls-assets.com/provider/istock/2156942049.jpg?w=1200",
  installation:
    "https://assets.ls-assets.com/provider/istock/2273311969.jpg?w=1200",
  spareParts:
    "https://assets.ls-assets.com/provider/istock/2212376280.jpg?w=1200",
} as const;

export const DEVICE_GALLERY = [
  {
    tag: "Kombi Tamiri",
    title: "Kombi Tamiri",
    subtitle: "Uzman Kombi Servisi",
    image: IMAGES.kombi,
  },
  {
    tag: "Hermetik Şofben",
    title: "Hermetik Şofben",
    subtitle: "",
    image: IMAGES.hermetic,
  },
  {
    tag: "Bakım & Onarım",
    title: "Bakım & Onarım",
    subtitle: "",
    image: IMAGES.maintenance,
  },
  {
    tag: "Profesyonel Montaj",
    title: "Profesyonel Montaj",
    subtitle: "",
    image: IMAGES.installation,
  },
  {
    tag: "Orijinal Yedek Parça",
    title: "Orijinal Yedek Parça",
    subtitle: "",
    image: IMAGES.spareParts,
  },
] as const;

export const WORK_WITH_BRANDS = [
  {
    name: "Daxom",
    color: "#D71920",
    fontWeight: 700,
    href: "/daxom-hermetik-sofben-servisi",
  },
  {
    name: "Goldtherm",
    color: "#D4A017",
    fontWeight: 700,
    href: "/goldtherm-hermetik-sofben-servisi",
  },
  {
    name: "Termodinamik",
    color: "#EE3124",
    fontWeight: 700,
    href: "/termodinamik-hermetik-sofben-servisi",
  },
  {
    name: "Copa",
    color: "#0072BC",
    fontWeight: 700,
    href: "/copa-hermetik-sofben-servisi",
  },
  {
    name: "Termomex",
    color: "#2C3E50",
    letterSpacing: "0.14em",
    href: "/termomex-hermetik-sofben-servisi",
  },
  {
    name: "Demirdöküm",
    color: "#003B71",
    fontWeight: 700,
    href: "/demirdokum-hermetik-sofben-servisi",
  },
  {
    name: "ECA",
    color: "#00529B",
    fontSize: "large",
    href: "/eca-hermetik-sofben-servisi",
  },
  {
    name: "Baymak",
    color: "#003A70",
    fontWeight: 700,
    href: "/baymak-hermetik-sofben-servisi",
  },
  {
    name: "Vaillant",
    color: "#E2001A",
    fontStyle: "italic",
    href: "/vaillant-hermetik-sofben-servisi",
  },
] as const;

export const NAV_LINKS = [
  { label: "Hizmetlerimiz", href: "/#hizmetler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Servis Bölgeleri", href: "/#bolgeler" },
  { label: "Sık Sorulan Sorular", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
] as const;

export const SEO_KEYWORD_BLOCKS = [
  {
    title: "Doğalgazlı Şofben Servisi",
    text: "Doğalgazlı şofbeniniz ısıtmıyor veya alev almıyorsa, İstanbul genelinde aynı gün servis ekibimizi yönlendiriyoruz. Gaz bağlantısı, ateşleme ve sıcak su sorunlarına yerinde çözüm sunuyoruz.",
    href: "/hermetik-sofben-servisi",
  },
  {
    title: "Hermetik Şofben Servisi",
    text: "Hermetik şofben modellerinde fan, elektronik kart ve eşanjör kaynaklı arızaları marka bazlı parçalarla gideriyoruz. Güvenli montaj ve bakım için doğrudan bizi arayabilirsiniz.",
    href: "/hermetik-sofben-servisi",
  },
  {
    title: "Kombi Servisi",
    text: "Kombi basınç düşüklüğü, petek ısınmama ve sıcak su kesintisi gibi sorunlarda deneyimli teknisyenlerimiz adresinize gelir. Periyodik bakım ve arıza tamiri tek elden.",
    href: "/hermetik-sofben-servisi",
  },
  {
    title: "Şofben Tamiri",
    text: "Su sızdırma, ateşleme hatası veya ani kapanma gibi şofben arızalarında hızlı teşhis yapıyoruz. Gerektiğinde orijinal yedek parça değişimiyle cihazınızı aynı gün çalışır hale getiriyoruz.",
    href: "/hermetik-sofben-servisi",
  },
  {
    title: "Şofben Bakımı",
    text: "Yıllık şofben bakımı, kireç temizliği ve gaz ayarı ile cihazınızın ömrünü uzatır, yakıt tüketimini düşürürsünüz. İstanbul'un her iki yakasında bakım randevusu alabilirsiniz.",
    href: "/hermetik-sofben-servisi",
  },
  {
    title: "İstanbul Teknik Servis",
    text: "Avrupa Yakası ve Anadolu Yakası'nda mobil servis araçlarımızla 7/24 ulaşılabilir teknik servis hizmeti veriyoruz. Acil arızalarda en yakın ekibimiz yola çıkar.",
    href: "/hermetik-sofben-servisi",
  },
] as const;

export const BRAND_LINKS = [
  { name: "Daxom", href: "/daxom-hermetik-sofben-servisi" },
  { name: "Goldtherm", href: "/goldtherm-hermetik-sofben-servisi" },
  { name: "Termodinamik", href: "/termodinamik-hermetik-sofben-servisi" },
  { name: "Copa", href: "/copa-hermetik-sofben-servisi" },
  { name: "Termomex", href: "/termomex-hermetik-sofben-servisi" },
  { name: "Demirdöküm", href: "/demirdokum-hermetik-sofben-servisi" },
  { name: "ECA", href: "/eca-hermetik-sofben-servisi" },
  { name: "Baymak", href: "/baymak-hermetik-sofben-servisi" },
  { name: "Vaillant", href: "/vaillant-hermetik-sofben-servisi" },
] as const;

export const REGION_SERVICE_FEATURES = [
  "Hermetik Şofben Servisi",
  "Doğalgazlı Şofben Servisi",
  "Kombi Teknik Servisi",
  "Arıza Tespiti",
  "Tamir",
  "Bakım",
  "Yerinde Servis",
  "Garantili Hizmet",
  "Aynı Gün Servis",
  "7/24 Teknik Destek",
] as const;

export const FEATURES = [
  {
    title: "Aynı Gün Servis",
    description:
      "İstanbul'un hangi semtinde olursanız olun, çağrınıza aynı gün içinde yanıt veriyoruz. Acil durumlarda 30 dakikada adresinizdeyiz.",
    color: "#f59e0b",
  },
  {
    title: "Garantili İşçilik",
    description:
      "Tüm tamir ve montaj işlemlerimiz 2 yıl garantilidir. Yaptığımız işin arkasındayız, içiniz rahat olsun.",
    color: "#3b82f6",
  },
  {
    title: "Uzman Sertifikalı Ekip",
    description:
      "Tüm teknisyenlerimiz doğalgaz yetki belgesine sahip, deneyimli ve sürekli eğitim alan profesyonellerden oluşur.",
    color: "#22c55e",
  },
  {
    title: "Orijinal Yedek Parça",
    description:
      "Sadece üretici onaylı orijinal yedek parçalar kullanıyoruz. Şofbeninizin ömrünü uzatır, performansını artırır.",
    color: "#8b5cf6",
  },
  {
    title: "7/24 Acil Destek",
    description:
      "Gece yarısı veya hafta sonu fark etmez. Acil şofben arızalarında 7 gün 24 saat hizmetinizdeyiz.",
    color: "#ef4444",
  },
  {
    title: "500+ Mutlu Müşteri",
    description:
      "İstanbul genelinde 500'den fazla aileye hizmet verdik. Müşteri memnuniyeti bizim en büyük referansımızdır.",
    color: "#06b6d4",
  },
] as const;

export const SERVICES = [
  {
    icon: "🔧",
    title: "Şofben Tamiri",
    description:
      "Su ısıtmama, alev almama, su sızdırma gibi tüm arızalara profesyonel müdahale. Arıza tespiti ve onarımı aynı gün içinde tamamlanır.",
    href: "/hermetik-sofben-servisi",
  },
  {
    icon: "🛡️",
    title: "Şofben Bakımı",
    description:
      "Düzenli bakım şofbeninizin ömrünü uzatır, verimliliğini artırır. Yıllık periyodik bakım paketlerimizle kombi ve şofbeninizi koruyun.",
    href: "/hermetik-sofben-servisi",
  },
  {
    icon: "⚙️",
    title: "Şofben Montajı",
    description:
      "Yeni şofbeninizin güvenli ve standartlara uygun montajı. Tüm marka ve modeller için profesyonel kurulum hizmeti.",
    href: "/hermetik-sofben-servisi",
  },
  {
    icon: "🔥",
    title: "Gaz Kaçağı Kontrolü",
    description:
      "Son teknoloji gaz dedektörleriyle kapsamlı gaz kaçağı testi. Güvenliğiniz için anında müdahale ve onarım.",
    href: "/hermetik-sofben-servisi",
  },
  {
    icon: "🚨",
    title: "Acil Servis",
    description:
      "7/24 acil şofben servisi. İstanbul genelinde ortalama 30 dakikada adresinizdeyiz. Gece, gündüz, hafta sonu fark etmez.",
    href: "/hermetik-sofben-servisi",
  },
  {
    icon: "📋",
    title: "Ücretsiz Keşif",
    description:
      "Şofben değişimi veya yeni montaj öncesi ücretsiz keşif hizmeti. En uygun çözümü birlikte belirleyelim.",
    href: "/#iletisim",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Bize Ulaşın",
    description:
      "Telefon veya WhatsApp üzerinden bize ulaşın. Arıza hakkında kısa bilgi verin, size en yakın ekibimizi yönlendirelim.",
    color: "primary" as const,
  },
  {
    step: "2",
    title: "Yerinde Müdahale",
    description:
      "Uzman teknisyenimiz adresinize gelir, arızayı tespit eder ve gerekli onarım veya bakımı aynı gün içinde tamamlar.",
    color: "navy" as const,
  },
  {
    step: "3",
    title: "Garantili Teslim",
    description:
      "İşlem tamamlandıktan sonra şofbeninizi test eder, size kullanım önerileri sunar ve 2 yıl garantili işçilikle teslim ederiz.",
    color: "success" as const,
  },
] as const;

export const DISTRICTS = [
  { name: "Kadıköy", time: "20 dk" },
  { name: "Beşiktaş", time: "25 dk" },
  { name: "Şişli", time: "20 dk" },
  { name: "Üsküdar", time: "25 dk" },
  { name: "Bakırköy", time: "30 dk" },
  { name: "Maltepe", time: "30 dk" },
  { name: "Ataşehir", time: "25 dk" },
  { name: "Beylikdüzü", time: "35 dk" },
  { name: "Sarıyer", time: "35 dk" },
  { name: "Ümraniye", time: "30 dk" },
  { name: "Fatih", time: "25 dk" },
  { name: "Beyoğlu", time: "20 dk" },
  { name: "Kartal", time: "35 dk" },
  { name: "Pendik", time: "40 dk" },
  { name: "Bağcılar", time: "30 dk" },
  { name: "Eyüpsultan", time: "30 dk" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Şofbenim suyu ısıtmıyor, ne yapmalıyım?",
    answer:
      "Önce şofbeninizin elektrik ve gaz bağlantılarını kontrol edin. Sorun devam ediyorsa, dahili bir arıza olabilir — kendi başınıza müdahale etmeyin. Bizi arayın, uzman ekibimiz aynı gün içinde arızanızı tespit edip çözsün.",
  },
  {
    question: "Acil şofben servisi için ne kadar beklerim?",
    answer:
      "İstanbul genelinde acil servis çağrılarına ortalama 30 dakika içinde yanıt veriyoruz. Bulunduğunuz bölgeye en yakın mobil ekibimizi anında yönlendiriyoruz.",
  },
  {
    question: "Şofben bakımı ne sıklıkla yapılmalıdır?",
    answer:
      "Şofbeninizin güvenli ve verimli çalışması için yılda en az bir kez periyodik bakım yapılmasını öneriyoruz. Düzenli bakım, arıza riskini azaltır ve enerji tasarrufu sağlar.",
  },
  {
    question: "Verdiğiniz hizmetler garantili mi?",
    answer:
      "Evet, tüm tamir ve montaj hizmetlerimiz 2 yıl garantilidir. Kullandığımız tüm yedek parçalar orijinal ve üretici garantisi altındadır.",
  },
  {
    question: "Hangi marka şofbenlerle çalışıyorsunuz?",
    answer:
      "Baymak, ECA, Demirdöküm, Vaillant, Daxom, Goldtherm, Termodinamik, Copa ve Termomex başta olmak üzere hermetik şofben ve kombi markalarında servis veriyoruz.",
  },
  {
    question: "Gece veya hafta sonu servis hizmeti var mı?",
    answer:
      "Evet, 7 gün 24 saat hizmet vermekteyiz. Gece yarısı, hafta sonu veya resmi tatil fark etmeksizin acil şofben arızalarında yanınızdayız.",
  },
] as const;

export const FOOTER_SERVICES = [
  "Hermetik Şofben Servisi",
  "Şofben Tamiri",
  "Şofben Bakımı",
  "Kombi Servisi",
  "Acil Servis",
] as const;
