import type { BrandContentConfig } from "./brand-types";

const regionNote =
  "Avrupa Yakası'nda Beşiktaş, Bakırköy, Beylikdüzü, Fatih ve Şişli; Anadolu Yakası'nda Kadıköy, Üsküdar, Maltepe, Ataşehir ve Ümraniye başta olmak üzere tüm ilçelere mobil ekip yönlendiriyoruz.";

export const BRAND_CONFIGS: BrandContentConfig[] = [
  {
    slug: "baymak-hermetik-sofben-servisi",
    brand: "Baymak",
    title: "Baymak Hermetik Şofben Servisi | İstanbul Teknik Servis",
    description:
      "Baymak hermetik şofben tamiri, bakımı ve arıza tespiti İstanbul genelinde. Aynı gün yerinde servis, garantili işçilik. 0850 346 54 57.",
    intro:
      "Baymak hermetik şofben servisi kapsamında İstanbul'un her iki yakasında arıza tespiti, yerinde tamir ve periyodik bakım hizmeti veriyoruz. Baymak cihazlarda ateşleme kartı ve gaz valfi arızalarına özel tecrübemizle aynı gün müdahale sağlıyoruz.",
    faults: [
      "F1 ateşleme hatası ve alev almama",
      "Sıcak su basıncının düşük kalması",
      "Termostat kalibrasyon kayması",
      "Kullanım sonrası alevin sönmesi",
      "Uzun süre çalışınca güvenlik kapanması",
      "Kireçlenmeye bağlı eşanjör verim kaybı",
      "Fan devri düşüklüğünden kapanma",
      "Gaz ayarı bozukluğu",
    ],
    faq: [
      {
        question: "Baymak hermetik şofben servisi aynı gün yapılır mı?",
        answer:
          "Evet, İstanbul genelinde Baymak hermetik şofben servisi için aynı gün randevu veriyoruz. 0850 346 54 57 hattından arayarak veya WhatsApp ile konum paylaşarak ekip yönlendirmesi alabilirsiniz.",
      },
      {
        question: "Baymak şofbende F1 hatası ne anlama gelir?",
        answer:
          "F1 genellikle ateşleme sistemi veya gaz beslemesiyle ilgili bir sorunu işaret eder. Teknisyenimiz önce gaz basıncını, ardından ateşleme bobini ve kart bağlantılarını kontrol eder. Yerinde tamir çoğu durumda mümkündür.",
      },
      {
        question: "Baymak hermetik şofben bakımı ne kadar sürer?",
        answer:
          "Standart Baymak bakım işlemi 40–60 dakika sürer. Eşanjör temizliği, filtre kontrolü, gaz ayarı ve emniyet testleri bu süreçte tamamlanır.",
      },
      {
        question: "Orijinal Baymak yedek parça kullanıyor musunuz?",
        answer:
          "Evet, Baymak uyumlu orijinal veya üretici onaylı yedek parça kullanıyoruz. Parça değişimi öncesi fiyat bilgisi paylaşılır.",
      },
      {
        question: "Baymak servisi garantili mi?",
        answer:
          "Tamir ve montaj işlemlerimizde işçilik garantisi veriyoruz. İşlem sonrası gaz kaçağı ve çalışma testi yapılır.",
      },
    ],
    serviceAngle:
      "Baymak hermetik modellerde özellikle ateşleme kartı, üç yollu vana ve eşanjör bileşenleri sık kontrol edilir. Markanın servis prosedürlerine uygun şekilde arıza kodları okunur ve onarım planı oluşturulur.",
    maintenanceAngle:
      "Baymak hermetik şofben bakımında baca gazı sıcaklığı, fan performansı ve su debisi ölçülür. Kireçli su bölgelerinde eşanjör temizliği önceliklendirilir.",
    repairAngle:
      "Baymak tamir sürecinde önce güvenlik vanası kontrol edilir, ardından ateşleme testi yapılır. Kart veya sensör değişimi gerekiyorsa cihaz fabrika ayarlarına göre kalibre edilir.",
    regionNote: `Baymak hermetik şofben servisi için ${regionNote}`,
    relatedSlugs: [
      "eca-hermetik-sofben-servisi",
      "demirdokum-hermetik-sofben-servisi",
      "vaillant-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "eca-hermetik-sofben-servisi",
    brand: "ECA",
    title: "ECA Hermetik Şofben Servisi | İstanbul 7/24 Teknik Servis",
    description:
      "ECA hermetik şofben arıza, tamir ve bakım servisi İstanbul'da. Yerinde müdahale, garantili hizmet. WhatsApp: 0552 713 67 67.",
    intro:
      "ECA hermetik şofben servisi ile İstanbul genelinde arıza tespiti, yerinde tamir ve periyodik bakım sunuyoruz. ECA cihazlarda elektronik kart, NTC sensör ve fan motoru arızalarına hızlı çözüm üretiyoruz.",
    faults: [
      "Sıcak suyun aniden kesilmesi",
      "Alev alıp kısa sürede sönme",
      "Ekranda sensör veya fan hatası",
      "Düşük debide ısıtma zayıflığı",
      "Üç yollu vana arızası",
      "Uzun süre kapalı kalınca ateşleme yapmama",
      "Gaz basıncı düşüklüğü uyarısı",
      "Eşanjör tıkanıklığı",
    ],
    faq: [
      {
        question: "ECA hermetik şofben tamiri yerinde yapılır mı?",
        answer:
          "Çoğu ECA arızası yerinde tamir edilir. Sensör, kart veya fan değişimi servis aracı stoğundaki parçalarla genellikle aynı ziyarette tamamlanır.",
      },
      {
        question: "ECA şofben bakımı ne sıklıkla yapılmalı?",
        answer:
          "Yılda en az bir kez ECA hermetik şofben bakımı önerilir. Yoğun kullanımda altı ayda bir bakım planlanması verim kaybını önler.",
      },
      {
        question: "ECA hermetik şofben servis ücreti nasıl belirlenir?",
        answer:
          "Arıza tespiti sonrası net fiyat bildirilir. İşlem onayı alınmadan parça değişimi yapılmaz; kapıda kredi kartı ile ödeme mümkündür.",
      },
      {
        question: "7/24 ECA acil servis var mı?",
        answer:
          "Gece ve hafta sonu dahil 7/24 teknik destek hattımız açıktır. Acil arızalarda öncelikli ekip yönlendirmesi yapılır.",
      },
      {
        question: "ECA dışında başka markalara da bakıyor musunuz?",
        answer:
          "Evet, Baymak, Demirdöküm, Vaillant ve diğer tüm hermetik şofben markalarına servis veriyoruz.",
      },
    ],
    serviceAngle:
      "ECA hermetik şofbenlerde dijital panel okumaları ve hata kodları teşhisin temelini oluşturur. Fan hızı ile baca sensörü uyumu özellikle kontrol edilir.",
    maintenanceAngle:
      "ECA bakım paketinde su filtresi, ateşleme iğnesi ve gaz ayarı standarttır. Kireç temizliği ısıtma performansını doğrudan etkilediği için atlanmaz.",
    repairAngle:
      "ECA tamirinde önce emniyet ventilleri test edilir. Kart değişimi sonrası cihaz fabrika parametrelerine göre yeniden ayarlanır ve sıcak su testi yapılır.",
    regionNote: `ECA hermetik şofben için ${regionNote}`,
    relatedSlugs: [
      "baymak-hermetik-sofben-servisi",
      "demirdokum-hermetik-sofben-servisi",
      "termomex-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "demirdokum-hermetik-sofben-servisi",
    brand: "Demirdöküm",
    title: "Demirdöküm Hermetik Şofben Servisi | İstanbul Tamir & Bakım",
    description:
      "Demirdöküm hermetik şofben tamiri ve bakımı İstanbul'da. Aynı gün yerinde servis, garantili işçilik. 0850 346 54 57.",
    intro:
      "Demirdöküm hermetik şofben servisi ile dayanıklı yapıya sahip bu markanın arıza, bakım ve montaj ihtiyaçlarını karşılıyoruz. Basınç düşüklüğü, alev kararsızlığı ve eşanjör sorunlarına markaya özel çözümler sunuyoruz.",
    faults: [
      "Kırmızı ışık yanıp sönme veya hata kodu",
      "Banyoda suyun ılık kalması",
      "Gaz ayarı bozukluğundan düzensiz yanma",
      "Fan devri düşük olduğunda kapanma",
      "Eşanjörde kireç birikimi",
      "Su giriş filtresi tıkanıklığı",
      "Termostat arızası",
      "Baca sensörü uyumsuzluğu",
    ],
    faq: [
      {
        question: "Demirdöküm hermetik şofben neden ılık su verir?",
        answer:
          "Çoğunlukla eşanjör kireçlenmesi, gaz ayarı bozukluğu veya düşük debi bu soruna yol açar. Yerinde kontrol ile kaynak belirlenir ve tamir uygulanır.",
      },
      {
        question: "Demirdöküm servisi garantili mi?",
        answer:
          "Evet, işçilik garantisi veriyoruz. Tamir sonrası performans ve güvenlik testleri yapılır.",
      },
      {
        question: "Demirdöküm şofben montajı yapıyor musunuz?",
        answer:
          "Yeni Demirdöküm hermetik şofben montajı, baca ve gaz hattı kontrolleriyle birlikte sunulur.",
      },
      {
        question: "Aynı gün Demirdöküm servisi alabilir miyim?",
        answer:
          "İstanbul genelinde aynı gün servis mümkündür. Randevu için 0850 346 54 57 numarasını arayın.",
      },
      {
        question: "Demirdöküm yedek parça temin süresi ne kadar?",
        answer:
          "Sık kullanılan Demirdöküm parçaları servis aracı stoğunda bulunur; özel parçalarda aynı gün veya ertesi gün temin edilir.",
      },
    ],
    serviceAngle:
      "Demirdöküm modellerinde basınç sensörü ve genleşme tankı bağlantıları da kontrol edilir. Markanın dayanıklı eşanjör yapısı düzenli bakımla uzun ömürlü kullanım sağlar.",
    maintenanceAngle:
      "Demirdöküm bakımında ateşleme stabilitesi ve baca çekişi ölçülür. Filtre temizliği ve gaz ayarı kış öncesi hazırlığın temelidir.",
    repairAngle:
      "Demirdöküm tamirinde önce hata kodu analizi yapılır. Vana, sensör veya kart değişimi sonrası çok noktalı sıcak su testi uygulanır.",
    regionNote: `Demirdöküm hermetik şofben servisi ${regionNote}`,
    relatedSlugs: [
      "baymak-hermetik-sofben-servisi",
      "eca-hermetik-sofben-servisi",
      "vaillant-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "vaillant-hermetik-sofben-servisi",
    brand: "Vaillant",
    title: "Vaillant Hermetik Şofben Servisi | İstanbul Teknik Servis",
    description:
      "Vaillant hermetik şofben tamir, bakım ve montaj İstanbul'da. Uzman ekip, orijinal parça. 0850 346 54 57 — 7/24 destek.",
    intro:
      "Vaillant hermetik şofben servisi kapsamında hassas elektronik yapıya sahip bu markanın arıza tespiti ve onarımını uzman teknisyenlerimizle gerçekleştiriyoruz. Yanlış müdahaleden kaynaklanan maliyet artışını önlemek için marka prosedürlerine uygun çalışıyoruz.",
    faults: [
      "Dijital panelde arıza uyarısı",
      "Sürekli ateşleme denemesi yapıp açılmama",
      "Sıcak su talebinde gecikme",
      "Fan veya hava akış sensörü kaynaklı kapanma",
      "Gaz valfi takılı kalması",
      "Mineral birikimine bağlı performans kaybı",
      "Elektronik kart reset ihtiyacı",
      "Baca bağlantısı kaynaklı hava akış hatası",
    ],
    faq: [
      {
        question: "Vaillant hermetik şofben arıza kodları nasıl okunur?",
        answer:
          "Teknisyenimiz paneldeki kodu marka tablosuna göre yorumlar ve kaynağı belirler. Kod okuma teşhis süresini kısaltır.",
      },
      {
        question: "Vaillant montajında nelere dikkat edilir?",
        answer:
          "Baca, havalandırma ve gaz hattı standartlara uygun kurulmalıdır. Montaj sonrası kaçak testi ve çalışma testi zorunludur.",
      },
      {
        question: "Vaillant servisi ne kadar sürer?",
        answer:
          "Çoğu Vaillant tamir işlemi 1–2 saat içinde tamamlanır. Parça teminine bağlı istisnalar önceden bildirilir.",
      },
      {
        question: "Vaillant bakımı zorunlu mu?",
        answer:
          "Güvenlik ve verim için yıllık bakım şiddetle önerilir. Bakımsız cihazlarda garanti kapsamı etkilenebilir.",
      },
      {
        question: "WhatsApp ile Vaillant servis talebi oluşturabilir miyim?",
        answer:
          "Evet, 0552 713 67 67 WhatsApp hattına yazarak arıza fotoğrafı ve konum paylaşabilirsiniz.",
      },
    ],
    serviceAngle:
      "Vaillant cihazlarda hava akış sensörü ve modülasyonlu gaz valfi hassas ayar gerektirir. Servis öncesi yazılım ve kod okuma adımları uygulanır.",
    maintenanceAngle:
      "Vaillant bakımında yanma odası kontrolü, filtre ve eşanjör temizliği yapılır. Hassas bileşenler için üretici toleranslarına uyulur.",
    repairAngle:
      "Vaillant tamirinde kart ve sensör değişimleri sonrası kalibrasyon şarttır. Test modunda minimum ve maksimum debi kontrol edilir.",
    regionNote: `Vaillant hermetik şofben için ${regionNote}`,
    relatedSlugs: [
      "demirdokum-hermetik-sofben-servisi",
      "eca-hermetik-sofben-servisi",
      "goldtherm-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "daxom-hermetik-sofben-servisi",
    brand: "Daxom",
    title: "Daxom Hermetik Şofben Servisi | İstanbul Aynı Gün Tamir",
    description:
      "Daxom hermetik şofben servisi, tamir ve bakım İstanbul genelinde. Yerinde arıza tespiti. 0850 346 54 57 ve WhatsApp desteği.",
    intro:
      "Daxom hermetik şofben servisi ile ekonomik ve hızlı çözüm arayan İstanbul kullanıcılarına yerinde tamir hizmeti sunuyoruz. Ateşleme, termistör ve baca sensörü arızalarında aynı gün müdahale sağlıyoruz.",
    faults: [
      "Ateşleme bobini arızası",
      "Su çıkışında dalgalanma ve ısı dengesizliği",
      "Termistör okuma hatası",
      "Düşük gaz basıncında çalışmama",
      "Baca sensörü uyarısı",
      "Uzun süreli kullanımda koku veya is oluşumu",
      "Fan motoru arızası",
      "Su sızıntısı",
    ],
    faq: [
      {
        question: "Daxom hermetik şofben ateşleme yapmıyorsa ne yapmalıyım?",
        answer:
          "Cihazı kapatıp 0850 346 54 57 numarasını arayın. Gaz kokusu varsa vanayı kapatın ve acil servis talep edin.",
      },
      {
        question: "Daxom servisi uygun fiyatlı mı?",
        answer:
          "Şeffaf fiyatlandırma uyguluyoruz. İşlem öncesi maliyet paylaşılır; gereksiz parça değişiminden kaçınılır.",
      },
      {
        question: "Daxom bakım paketi neleri kapsar?",
        answer:
          "Eşanjör temizliği, ateşleme kontrolü, gaz ayarı, fan testi ve emniyet ventili kontrolü standart bakım kapsamındadır.",
      },
      {
        question: "Daxom parçaları stokta var mı?",
        answer:
          "Sık arıza veren Daxom parçaları servis araçlarımızda bulunur; nadir parçalar hızlı tedarik edilir.",
      },
      {
        question: "İstanbul dışına Daxom servisi veriyor musunuz?",
        answer:
          "Hizmet alanımız İstanbul sınırları içindedir; tüm ilçelere mobil ekip gönderiyoruz.",
      },
    ],
    serviceAngle:
      "Daxom modellerinde ateşleme bobini ve pil kaynaklı sorunlar sık görülür. Servis öncesi gaz ve elektrik bağlantıları kontrol edilir.",
    maintenanceAngle:
      "Daxom bakımında baca çekişi ve fan uyumu test edilir. Kireç temizliği özellikle apartman dairelerinde performansı artırır.",
    repairAngle:
      "Daxom tamirinde önce basit nedenler elenir; bobin, sensör veya kart değişimi gerekiyorsa yerinde uygulanır.",
    regionNote: `Daxom hermetik şofben servisi ${regionNote}`,
    relatedSlugs: [
      "goldtherm-hermetik-sofben-servisi",
      "copa-hermetik-sofben-servisi",
      "termodinamik-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "goldtherm-hermetik-sofben-servisi",
    brand: "Goldtherm",
    title: "Goldtherm Hermetik Şofben Servisi | İstanbul 7/24 Tamir",
    description:
      "Goldtherm hermetik şofben tamiri ve bakımı İstanbul'da. Yerinde servis, garantili hizmet. 0850 346 54 57.",
    intro:
      "Goldtherm hermetik şofben servisi ile ılık su, alev sönmesi ve fan arızalarına hızlı çözüm üretiyoruz. Eşanjör ve gaz grubu bakımında markaya özel prosedürler uyguluyoruz.",
    faults: [
      "Ilık su problemi ve ısıtma yetersizliği",
      "Alev sensörü kirlenmesinden kapanma",
      "Elektronik kart reset ihtiyacı",
      "Su basıncı düşüklüğü uyarısı",
      "Gaz hattı tıkanıklığına bağlı performans düşüşü",
      "Montaj hatasından hava girişi sorunu",
      "NTC sensör arızası",
      "Eşanjör sızıntısı",
    ],
    faq: [
      {
        question: "Goldtherm şofben neden ılık su verir?",
        answer:
          "Kireçlenmiş eşanjör, düşük gaz basıncı veya sensör hatası en yaygın nedenlerdir. Yerinde teşhis ile kesin çözüm uygulanır.",
      },
      {
        question: "Goldtherm yıllık bakım gerekli mi?",
        answer:
          "Evet, yıllık bakım verim kaybını önler ve güvenliği artırır. Kış öncesi bakım randevusu almanız önerilir.",
      },
      {
        question: "Goldtherm tamir garantisi var mı?",
        answer:
          "İşçilik garantisi sunuyoruz. Aynı arıza tekrarında ücretsiz kontrol yapılır.",
      },
      {
        question: "Goldtherm servisi kaç dakikada gelir?",
        answer:
          "Semte göre ortalama 25–45 dakika içinde ekip yönlendirilir. Yoğun saatlerde süre kısa mesajla bildirilir.",
      },
      {
        question: "Kapıda ödeme kabul ediyor musunuz?",
        answer:
          "Evet, nakit ve kredi kartı ile kapıda ödeme alıyoruz.",
      },
    ],
    serviceAngle:
      "Goldtherm cihazlarda alev sensörü ve gaz grubu birlikte değerlendirilir. Montaj hatalarından kaynaklanan hava girişi sorunları da kontrol edilir.",
    maintenanceAngle:
      "Goldtherm bakımında eşanjör ve filtre temizliği önceliklidir. Fan ve baca sensörü uyumu ölçülür.",
    repairAngle:
      "Goldtherm tamirinde kart reset ve sensör değişimi sık uygulanır. Tamir sonrası debi testi yapılır.",
    regionNote: `Goldtherm hermetik şofben için ${regionNote}`,
    relatedSlugs: [
      "daxom-hermetik-sofben-servisi",
      "termodinamik-hermetik-sofben-servisi",
      "termomex-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "termodinamik-hermetik-sofben-servisi",
    brand: "Termodinamik",
    title: "Termodinamik Hermetik Şofben Servisi | İstanbul Tamir",
    description:
      "Termodinamik hermetik şofben arıza ve bakım servisi İstanbul'da. Aynı gün yerinde tamir. 0850 346 54 57.",
    intro:
      "Termodinamik hermetik şofben servisi ile fan, ateşleme ve su yolu bileşenlerinin uyumlu çalışmasını sağlıyoruz. Eski ve yeni Termodinamik modellerde uyumlu yedek parça temini yapıyoruz.",
    faults: [
      "Çakma ateşleme sorunu",
      "Sıcak su debisinin düşmesi",
      "Fan motoru kilitlenmesi",
      "Gaz ayar vanası arızası",
      "NTC veya sıcaklık sensörü hatası",
      "Pas ve kireç kaynaklı ısı transferi zayıflığı",
      "Baca sensörü arızası",
      "Elektronik kart hatası",
    ],
    faq: [
      {
        question: "Termodinamik şofben fan çalışmıyorsa ne olur?",
        answer:
          "Hermetik cihazlar fan olmadan güvenlik nedeniyle çalışmaz. Fan motoru veya kart kaynaklı sorun yerinde giderilir.",
      },
      {
        question: "Termodinamik eski model parça bulunur mu?",
        answer:
          "Uyumlu yedek parça tedarik ağımızla eski Termodinamik modellere de servis veriyoruz.",
      },
      {
        question: "Termodinamik bakım fiyatı sabit mi?",
        answer:
          "Bakım paketi standart işlemleri kapsar; ek parça ihtiyacı ayrıca bildirilir.",
      },
      {
        question: "Aynı gün Termodinamik servisi var mı?",
        answer:
          "Evet, İstanbul genelinde aynı gün servis veriyoruz.",
      },
      {
        question: "Arıza tekrarında ne yapılıyor?",
        answer:
          "Garanti kapsamındaki işlemlerde ücretsiz kontrol sağlanır.",
      },
    ],
    serviceAngle:
      "Termodinamik modellerde fan ve ateşleme sistemi eş zamanlı test edilir. Su debisi düşüklüğü çoğu zaman kireç veya vana kaynaklıdır.",
    maintenanceAngle:
      "Termodinamik bakımında pas ve kireç temizliği yapılır. Gaz ayarı ve emniyet ventilleri kontrol edilir.",
    repairAngle:
      "Termodinamik tamirinde vana ve sensör değişimleri sonrası uzun süreli çalışma testi uygulanır.",
    regionNote: `Termodinamik hermetik şofben servisi ${regionNote}`,
    relatedSlugs: [
      "daxom-hermetik-sofben-servisi",
      "goldtherm-hermetik-sofben-servisi",
      "copa-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "copa-hermetik-sofben-servisi",
    brand: "Copa",
    title: "Copa Hermetik Şofben Servisi | İstanbul Bakım & Tamir",
    description:
      "Copa hermetik şofben teknik servisi İstanbul'da. Tamir, bakım, montaj. 0850 346 54 57 — aynı gün servis.",
    intro:
      "Copa hermetik şofben servisi ile apartman ve müstakil evlerde sık tercih edilen bu markanın arıza ve bakım ihtiyaçlarını karşılıyoruz. Baca çekişi, fan devri ve emniyet ventilleri her ziyarette kontrol edilir.",
    faults: [
      "Kısa süreli ısınıp kapanma",
      "Ateşleme iğnesi veya pil kaynaklı sorun",
      "Sıcak su musluğunda gecikme",
      "Düşük debide alevin sönmesi",
      "Eşanjör sızıntısı",
      "Uzun süre kapalı kalınca devreye girmeme",
      "Gaz valfi arızası",
      "Fan gürültüsü ve titreşim",
    ],
    faq: [
      {
        question: "Copa hermetik şofben kışın neden sık arızalanır?",
        answer:
          "Yoğun kullanım, kireç birikimi ve gaz basıncı dalgalanmaları kış aylarında arıza riskini artırır. Bakım ile önlenebilir.",
      },
      {
        question: "Copa montajı yapıyor musunuz?",
        answer:
          "Evet, yeni Copa hermetik şofben montajı ve eski cihaz sökümü hizmeti veriyoruz.",
      },
      {
        question: "Copa servisi yerinde mi yapılır?",
        answer:
          "Çoğu Copa arızası yerinde tamir edilir; cihazı atölyeye götürmeden çözüm üretiriz.",
      },
      {
        question: "Copa için 7/24 destek var mı?",
        answer:
          "Gece ve hafta sonu dahil 7/24 teknik destek hattımız açıktır.",
      },
      {
        question: "Diğer marka sayfalarına nereden ulaşırım?",
        answer:
          "Ana hermetik şofben servisi sayfamızdan ve footer bölümünden tüm marka linklerine erişebilirsiniz.",
      },
    ],
    serviceAngle:
      "Copa hermetik modellerde ateşleme iğnesi ve pil değişimi basit görünse de güvenlik testi gerektirir. Eşanjör sızıntıları öncelikli müdahale kapsamındadır.",
    maintenanceAngle:
      "Copa bakımında baca çekişi ve fan devri ölçülür. Kış öncesi bakım paketi önerilir.",
    repairAngle:
      "Copa tamirinde debi ve basınç testleri uygulanır. Vana ve sensör değişimleri sonrası sıcak su testi yapılır.",
    regionNote: `Copa hermetik şofben için ${regionNote}`,
    relatedSlugs: [
      "termomex-hermetik-sofben-servisi",
      "daxom-hermetik-sofben-servisi",
      "baymak-hermetik-sofben-servisi",
    ],
  },
  {
    slug: "termomex-hermetik-sofben-servisi",
    brand: "Termomex",
    title: "Termomex Hermetik Şofben Servisi | İstanbul 7/24 Tamir",
    description:
      "Termomex hermetik şofben tamiri ve bakımı İstanbul genelinde. Garantili yerinde servis. 0850 346 54 57.",
    intro:
      "Termomex hermetik şofben servisi ile kış aylarında artan arıza taleplerine hızlı yanıt veriyoruz. Su yolu, gaz grubu ve elektronik kart birlikte değerlendirilir; parça değişimi sonrası performans testi yapılır.",
    faults: [
      "Sıcak suyun bir anda soğuması",
      "Alev kararsızlığı ve sönme",
      "Fan ve baca sensörü uyumsuzluğu",
      "Kireçlenmiş eşanjör nedeniyle zayıf ısıtma",
      "Gaz basıncı düşüklüğünde çalışmama",
      "Elektronik kart arızası veya kablo oksitlenmesi",
      "Su basıncı sorunları",
      "Ateşleme gecikmesi",
    ],
    faq: [
      {
        question: "Termomex hermetik şofben bakımı ne zaman yapılmalı?",
        answer:
          "Yılda en az bir kez, kış öncesi bakım ideal zamandır. Yoğun kullanımda altı ayda bir bakım önerilir.",
      },
      {
        question: "Termomex kart arızası yerinde çözülür mü?",
        answer:
          "Evet, uyumlu kart stokta ise aynı ziyarette değişim ve test yapılır.",
      },
      {
        question: "Termomex servis ücreti nasıl belirlenir?",
        answer:
          "Arıza tespiti sonrası net fiyat bildirilir; onay alınmadan işlem yapılmaz.",
      },
      {
        question: "WhatsApp ile Termomex servis talebi oluşturabilir miyim?",
        answer:
          "0552 713 67 67 WhatsApp hattına yazarak hızlı randevu alabilirsiniz.",
      },
      {
        question: "Termomex dışında hangi markalara bakıyorsunuz?",
        answer:
          "Baymak, ECA, Demirdöküm, Vaillant, Daxom, Goldtherm, Termodinamik ve Copa markalarına da servis veriyoruz.",
      },
    ],
    serviceAngle:
      "Termomex cihazlarda kart ve kablo oksitlenmesi nemli banyolarda sık görülür. Fan-baca sensörü uyumu kritik kontrol noktasıdır.",
    maintenanceAngle:
      "Termomex bakımında eşanjör kireç temizliği ve gaz ayarı yapılır. Elektrik bağlantıları oksitlenmeye karşı kontrol edilir.",
    repairAngle:
      "Termomex tamirinde parça değişimi sonrası uzun süreli sıcak su testi uygulanır. Güvenlik ventilleri mutlaka test edilir.",
    regionNote: `Termomex hermetik şofben servisi ${regionNote}`,
    relatedSlugs: [
      "copa-hermetik-sofben-servisi",
      "goldtherm-hermetik-sofben-servisi",
      "eca-hermetik-sofben-servisi",
    ],
  },
];
