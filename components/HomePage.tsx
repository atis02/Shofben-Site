"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactForm from "@/components/ContactForm";
import DevicesGallery from "@/components/DevicesGallery";
import BrandsSection from "@/components/BrandsSection";
import PulseDot from "@/components/PulseDot";
import HeroVisual from "@/components/HeroVisual";
import RegionServiceSection from "@/components/RegionServiceSection";
import SeoKeywordsSection from "@/components/SeoKeywordsSection";
import {
  DISTRICTS,
  FAQ_ITEMS,
  FEATURES,
  IMAGES,
  PROCESS_STEPS,
  SERVICES,
  SITE,
} from "@/lib/constants";
import {
  brandNavy,
  brandNavyLight,
  brandOrange,
  brandOrangeLight,
} from "@/lib/theme";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <Chip
      label={children}
      sx={{
        bgcolor: "#fff7ed",
        color: brandOrange,
        fontWeight: 600,
        mb: 2,
        height: 32,
      }}
    />
  );
}

function SectionTitle({
  before,
  highlight,
  after,
}: {
  before: string;
  highlight: string;
  after?: string;
}) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
        lineHeight: 1.15,
        color: brandNavy,
        mb: 2,
      }}
    >
      {before}{" "}
      <Box component="span" sx={{ color: brandOrange }}>
        {highlight}
      </Box>
      {after ? ` ${after}` : ""}
    </Typography>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: "calc(100vh - 64px)", lg: "calc(100vh - 80px)" },
          display: "flex",
          alignItems: "center",
          overflowX: "hidden",
          overflowY: "visible",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Image
            src={IMAGES.hero}
            alt="Doğalgaz şofben servisi"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${brandNavy}f2 0%, ${brandNavy}d9 50%, ${brandNavy}e6 100%)`,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: -96,
            right: -96,
            width: 384,
            height: 384,
            borderRadius: "50%",
            bgcolor: `${brandOrange}1a`,
            filter: "blur(64px)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, py: { xs: 8, lg: 10 } }}
        >
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Chip
                icon={<PulseDot />}
                label="7/24 Acil Servis"
                sx={{
                  bgcolor: `${brandOrange}33`,
                  color: brandOrangeLight,
                  border: `1px solid ${brandOrange}4d`,
                  fontWeight: 600,
                  mb: 3,
                }}
              />

              <Typography
                component="h1"
                variant="h1"
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    lg: "4rem",
                    xl: "4.3rem",
                  },
                  lineHeight: 1.05,
                  mb: 3,
                }}
              >
                Hermetik Şofben{" "}
                <Box component="span" sx={{ color: brandOrange }}>
                  Servisi
                </Box>
                <br />
                İstanbulda 7/24
              </Typography>

              <Typography
                sx={{
                  color: "#cbd5e1",
                  fontSize: { xs: "1rem", lg: "1.1rem" },
                  lineHeight: 1.7,
                  maxWidth: 560,
                  mb: 4,
                }}
              >
                Avrupa Yakası ve Anadolu Yakası&apos;nda doğalgazlı şofben
                tamiri, bakımı ve kombi servisi. Aynı gün yerinde müdahale için
                hemen arayın.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button
                  component="a"
                  href={SITE.phoneHref}
                  variant="contained"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{ px: 2, py: 1.5, fontSize: "1rem" }}
                >
                  {SITE.phone}
                </Button>
                <Button
                  component="a"
                  href={SITE.phones[1].href}
                  variant="contained"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: "1rem",
                    bgcolor: brandNavyLight,
                    "&:hover": { bgcolor: brandNavy },
                  }}
                >
                  {SITE.phones[1].display}
                </Button>
                <Button
                  component="a"
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.3)",
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,0.08)",
                    },
                  }}
                >
                  WhatsApp
                </Button>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                {[
                  {
                    icon: <VerifiedIcon fontSize="small" />,
                    label: "Garantili İşçilik",
                  },
                  {
                    icon: <AccessTimeIcon fontSize="small" />,
                    label: "Aynı Gün Servis",
                  },
                  {
                    icon: <EmojiEventsIcon fontSize="small" />,
                    label: "15+ Yıl Deneyim",
                  },
                ].map((item) => (
                  <Stack
                    key={item.label}
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                  >
                    <Box sx={{ color: brandOrange }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        color: "#e2e8f0",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <HeroVisual />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Us */}
      <Box
        id="hakkimizda"
        component="section"
        sx={{ py: { xs: 8, lg: 12 }, bgcolor: "#fff" }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 720,
              mx: "auto",
              mb: { xs: 6, lg: 8 },
            }}
          >
            <SectionBadge>Neden Bizi Tercih Etmelisiniz?</SectionBadge>
            <SectionTitle
              before="Her Zaman Yanınızda,"
              highlight="Her Zaman Hızlı"
            />
            <Typography
              color="text.secondary"
              sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
            >
              15 yılı aşkın deneyimimizle İstanbul genelinde binlerce aileye
              güvenilir şofben servisi sunduk. İşte bizi farklı kılan
              değerlerimiz.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "100%",
                  minHeight: 360,
                }}
              >
                <Image
                  src={IMAGES.technician}
                  alt="Uzman teknisyen şofben tamiri yapıyor"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    bgcolor: "#fff",
                    borderRadius: 3,
                    px: 3,
                    py: 2,
                    boxShadow: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800 }}
                    color="primary"
                  >
                    15+
                  </Typography>
                  <Typography sx={{ fontWeight: 600 }}>Yıl Deneyim</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
              <Grid container spacing={2}>
                {FEATURES.map((feature) => (
                  <Grid key={feature.title} size={{ xs: 12, sm: 6 }}>
                    <Card
                      sx={{
                        height: "100%",
                        transition: "all 0.3s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: 4,
                          borderColor: `${brandOrange}33`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontWeight: 800,
                            mb: 2,
                          }}
                        >
                          {feature.title.charAt(0)}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <DevicesGallery />
      <BrandsSection />

      {/* Services */}
      <Box id="hizmetler" component="section" sx={{ py: { xs: 8, lg: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 6 }}>
            <SectionBadge>Hizmetlerimiz</SectionBadge>
            <SectionTitle
              before="Şofbeniniz İçin"
              highlight="Kapsamlı Çözümler"
            />
            <Typography
              color="text.secondary"
              sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
            >
              Tamirden bakıma, montajdan gaz kaçağı kontrolüne kadar tüm
              ihtiyaçlarınız için uzman ekibimizle yanınızdayız.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {SERVICES.map((service) => (
              <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    p: 1,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                      borderColor: `${brandOrange}33`,
                    },
                  }}
                >
                  <CardContent>
                    <Typography sx={{ fontSize: "2.5rem", mb: 2 }}>
                      {service.icon}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    {"href" in service && (
                      <Box
                        component="a"
                        href={service.href}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: brandOrange,
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Detaylı Bilgi
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <SeoKeywordsSection />

      <RegionServiceSection />

      {/* Process */}
      <Box component="section" sx={{ py: { xs: 8, lg: 12 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <SectionBadge>Nasıl Çalışıyoruz?</SectionBadge>
            <SectionTitle before="3 Adımda" highlight="Servis Hizmeti" />
          </Box>

          <Grid container spacing={4}>
            {PROCESS_STEPS.map((step) => (
              <Grid key={step.step} size={{ xs: 12, md: 4 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 4,
                      mx: "auto",
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#fff",
                      bgcolor:
                        step.color === "primary"
                          ? brandOrange
                          : step.color === "navy"
                            ? brandNavy
                            : "#22c55e",
                      boxShadow: 3,
                    }}
                  >
                    {step.step}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: 8,
              p: { xs: 4, lg: 6 },
              borderRadius: 4,
              background: `linear-gradient(90deg, ${brandNavy}, ${brandNavyLight}, ${brandNavy})`,
              color: "#fff",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
              Acil bir şofben arızası mı yaşıyorsunuz?
            </Typography>
            <Typography
              sx={{ color: "#cbd5e1", mb: 4, maxWidth: 560, mx: "auto" }}
            >
              İstanbul genelinde ortalama 30 dakikada adresinizdeyiz. Hemen
              arayın, çözümü bekletmeyin.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                component="a"
                href={SITE.phoneHref}
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: brandNavy,
                  "&:hover": { bgcolor: "#f1f5f9" },
                }}
              >
                {SITE.phone}
              </Button>
              <Button
                component="a"
                href={SITE.phones[1].href}
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: brandNavy,
                  "&:hover": { bgcolor: "#f1f5f9" },
                }}
              >
                {SITE.phones[1].display}
              </Button>
              <Button
                component="a"
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ bgcolor: "#22c55e", "&:hover": { bgcolor: "#16a34a" } }}
              >
                WhatsApp ile Yazın
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Districts */}
      <Box
        id="bolgeler"
        component="section"
        sx={{ py: { xs: 8, lg: 12 }, bgcolor: "#f8fafc" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 6 }}>
            <SectionBadge>Servis Bölgeleri</SectionBadge>
            <SectionTitle before="İstanbul'un" highlight="Her Noktasındayız" />
            <Typography
              color="text.secondary"
              sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
            >
              Avrupa ve Anadolu yakasında 20&apos;den fazla ilçede hizmet
              vermekteyiz. Bulunduğunuz bölgeye en yakın ekibimizi anında
              yönlendiriyoruz.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {DISTRICTS.map((district) => (
              <Grid key={district.name} size={{ xs: 6, sm: 4, lg: 3 }}>
                <Card
                  sx={{
                    textAlign: "center",
                    py: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: `${brandOrange}33`,
                      boxShadow: 3,
                      "& .district-name": { color: brandOrange },
                    },
                  }}
                >
                  <CardContent sx={{ py: "16px !important" }}>
                    <Typography
                      className="district-name"
                      sx={{ fontWeight: 600, transition: "color 0.2s" }}
                    >
                      {district.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ~{district.time} varış
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box id="sss" component="section" sx={{ py: { xs: 8, lg: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="Sık Sorulan Sorular"
              sx={{
                bgcolor: brandNavy,
                color: brandOrangeLight,
                fontWeight: 600,
                mb: 2,
              }}
            />
            <SectionTitle before="Merak Ettiğiniz" highlight="Her Şey" />
          </Box>

          {FAQ_ITEMS.map((item, index) => (
            <Accordion
              key={item.question}
              defaultExpanded={index === 0}
              sx={{
                mb: 1.5,
                borderRadius: "12px !important",
                "&:before": { display: "none" },
                border: "1px solid #f1f5f9",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600 }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Contact */}
      <Box
        id="iletisim"
        component="section"
        sx={{ py: { xs: 8, lg: 12 }, bgcolor: "#f8fafc" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <SectionBadge>Servis Talebi</SectionBadge>
              <SectionTitle
                before="Size En Kısa Sürede"
                highlight="Dönüş Yapalım"
              />
              <Typography
                color="text.secondary"
                sx={{ fontSize: "1.125rem", lineHeight: 1.7, mb: 4 }}
              >
                Servis talebinizi bırakın, ekibimiz en kısa sürede sizinle
                iletişime geçsin. Acil durumlarda doğrudan bizi arayın.
              </Typography>

              <Stack spacing={2}>
                {SITE.phones.map((phone) => (
                  <Card
                    key={phone.href}
                    component="a"
                    href={phone.href}
                    sx={{
                      p: 0.5,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.3s",
                      "&:hover": {
                        bgcolor: "#fff7ed",
                        borderColor: `${brandOrange}33`,
                      },
                    }}
                  >
                    <CardContent
                      sx={{ display: "flex", gap: 2, alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: brandOrange,
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PhoneIcon />
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {phone.label}
                        </Typography>
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "1.125rem" }}
                        >
                          {phone.display}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))}

                <Card
                  component="a"
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 0.5,
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.3s",
                    "&:hover": { bgcolor: "#f0fdf4", borderColor: "#bbf7d0" },
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: "#22c55e",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WhatsAppIcon />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        WhatsApp
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 700, fontSize: "1.125rem" }}
                      >
                        {SITE.whatsapp.display}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
              <Card sx={{ p: { xs: 2, md: 4 } }}>
                <ContactForm />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
