import type { FaqItem, SeoContentSection } from "@/lib/seo-types";

export type BrandContentConfig = {
  slug: string;
  brand: string;
  title: string;
  description: string;
  intro: string;
  faults: string[];
  faq: FaqItem[];
  serviceAngle: string;
  maintenanceAngle: string;
  repairAngle: string;
  regionNote: string;
  relatedSlugs: string[];
};

export function buildBrandSections(config: BrandContentConfig): SeoContentSection[] {
  const { brand } = config;

  return [
    {
      h2: `${brand} Hermetik Şofben Servisi`,
      paragraphs: [
        `${brand} hermetik şofben servisi hizmetimiz İstanbul Avrupa ve Anadolu Yakası'nda arıza tespiti, yerinde tamir ve periyodik bakım süreçlerini kapsar. ${config.serviceAngle}`,
        `${brand} kullanıcıları için aynı gün servis, garantili hizmet ve 7/24 teknik destek sunuyoruz. Şofben teknik servisi talebinizi 0850 346 54 57 numaralı hattan veya WhatsApp üzerinden iletebilirsiniz. Randevulu servis ile size uygun saatte ziyaret planlanır.`,
        `Doğalgazlı şofben teknik servisi kapsamında ${brand} cihazlarınızın güvenli çalışması için her müdahale sonrası kaçak ve performans testi yapılır. Kapıda kredi kartı ile ödeme seçeneği mevcuttur.`,
      ],
    },
    {
      h2: `${brand} Hermetik Şofben Arıza Tespiti`,
      paragraphs: [
        `${brand} hermetik şofben arıza belirtileri su ısıtmama, ateşleme gecikmesi, fan sesi veya ekranda hata kodu şeklinde ortaya çıkabilir. Arıza tespiti aşamasında teknisyenimiz gaz basıncı, fan devri, sensör değerleri ve su debisini ölçer.`,
        `Yanlış teşhis gereksiz parça değişimine yol açar; bu nedenle ${brand} modellerine aşina ekibimiz marka prosedürlerine uygun çalışır. Acil arıza durumlarında 7/24 teknik servis hattımız öncelikli yönlendirme yapar.`,
      ],
      subsections: [
        {
          h3: `${brand} Cihazlarda Sık Görülen Arızalar`,
          paragraphs: [
            `${brand} hermetik şofbenlerde en çok bildirilen sorunlar ateşleme sistemi, sensör hataları, fan motoru ve eşanjör kireçlenmesiyle ilgilidir. Her arıza için yerinde tamir mümkün olup olmadığı teşhis sonrası netleştirilir.`,
          ],
        },
      ],
    },
    {
      h2: `${brand} Hermetik Şofben Tamiri`,
      paragraphs: [
        `${brand} hermetik şofben tamiri çoğunlukla adresinizde tamamlanır. ${config.repairAngle}`,
        `Tamir sürecinde kullanılan yedek parçalar ${brand} uyumlu olup işlem öncesi fiyat onayı alınır. Tamir sonrası sıcak su debisi, alev stabilitesi ve emniyet fonksiyonları test edilir. İşçilik garantisi ile hizmet veriyoruz.`,
      ],
    },
    {
      h2: `${brand} Hermetik Şofben Bakımı`,
      paragraphs: [
        `${brand} hermetik şofben bakımı cihaz ömrünü uzatır ve enerji verimliliğini korur. ${config.maintenanceAngle}`,
        `Yıllık bakım paketimizde eşanjör temizliği, filtre kontrolü, ateşleme ayarı ve emniyet ventili testi yer alır. Yerinde bakım ile cihazınızı sökmeden tüm kontroller tamamlanır.`,
      ],
      subsections: [
        {
          h3: "Bakım Ne Sıklıkla Yapılmalı?",
          paragraphs: [
            `Yoğun kullanımda ${brand} cihazlar için yılda en az bir bakım önerilir. Kireçli su bölgelerinde altı ayda bir bakım planlanması performans kaybını önler.`,
          ],
        },
      ],
    },
    {
      h2: "Aynı Gün Servis ve Yerinde Müdahale",
      paragraphs: [
        `İstanbul genelinde ${brand} hermetik şofben için aynı gün servis veriyoruz. Yerinde tamir ve yerinde bakım yaklaşımımız sayesinde cihazınız günlerce serviste beklemez. Acil servis taleplerinde en yakın mobil ekip yönlendirilir.`,
        `Ortalama varış süresi semte göre 25–45 dakikadır. WhatsApp hattımızdan konum paylaşarak süreci hızlandırabilirsiniz.`,
      ],
    },
    {
      h2: "Garantili Hizmet ve 7/24 Teknik Destek",
      paragraphs: [
        `${brand} tamir ve montaj işlemlerimizde işçilik garantisi sunuyoruz. 7/24 teknik servis hattımız gece gündüz açıktır; sıcak su kesintisi veya gaz kokusu gibi acil durumlarda öncelikli müdahale sağlanır.`,
        `Garantili hizmet kapsamı işlem öncesi size açıklanır. Düzenli bakım yaptıran ${brand} kullanıcılarına öncelikli servis avantajı tanınır.`,
      ],
    },
    {
      h2: "İstanbul Bölge Servisi",
      paragraphs: [
        config.regionNote,
        `İstanbul bölge servisi ağımız sayesinde ${brand} hermetik şofben arızalarına hızlı yanıt veriyoruz. Kombi teknik servisi ile birlikte aynı adreste çoklu cihaz kontrolü de talep edilebilir.`,
      ],
    },
  ];
}

export function buildBrandWhyUs(brand: string): string[] {
  return [
    `${brand} hermetik modellere özel servis tecrübesi`,
    "Aynı gün yerinde tamir ve bakım imkânı",
    "Orijinal yedek parça ve işçilik garantisi",
    "7/24 acil servis ve WhatsApp desteği",
  ];
}
