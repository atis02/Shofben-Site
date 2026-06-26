import Logo from "@/components/Logo";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldIcon from "@mui/icons-material/Shield";
import VerifiedIcon from "@mui/icons-material/Verified";
import { BRAND_LINKS, FOOTER_SERVICES, SITE } from "@/lib/constants";
import { brandNavy } from "@/lib/theme";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: brandNavy, color: "#fff", pt: 8, pb: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Logo />
            <Typography
              sx={{ mt: 2, color: "#94a3b8", lineHeight: 1.7, maxWidth: 320 }}
            >
              İstanbul genelinde 7/24 doğalgaz şofben tamiri, bakımı ve montajı.
              15 yılı aşkın deneyim, garantili işçilik, aynı gün servis.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Box
                component="a"
                href={SITE.phoneHref}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  "&:hover": { bgcolor: "primary.main" },
                }}
              >
                <PhoneIcon fontSize="small" />
              </Box>
              <Box
                component="a"
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  "&:hover": { bgcolor: "#22c55e" },
                }}
              >
                <WhatsAppIcon fontSize="small" />
              </Box>
              <Box
                component="a"
                href={`mailto:${SITE.email}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  "&:hover": { bgcolor: "primary.main" },
                }}
              >
                <EmailIcon fontSize="small" />
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontSize: "1rem", mb: 2 }}>
              Hizmetlerimiz
            </Typography>
            <Stack spacing={1}>
              {[
                { label: FOOTER_SERVICES[0], href: "/hermetik-sofben-servisi" },
                { label: FOOTER_SERVICES[1], href: "/hermetik-sofben-servisi" },
                { label: FOOTER_SERVICES[2], href: "/hermetik-sofben-servisi" },
                { label: FOOTER_SERVICES[3], href: "/hermetik-sofben-servisi" },
                { label: FOOTER_SERVICES[4], href: "/#iletisim" },
              ].map((item) => (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": { color: "primary.light" },
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  {item.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontSize: "1rem", mb: 2 }}>
              Markalar
            </Typography>
            <Stack spacing={1}>
              {BRAND_LINKS.map((brand) => (
                <Box
                  key={brand.href}
                  component="a"
                  href={brand.href}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    "&:hover": { color: "primary.light" },
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  {brand.name}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontSize: "1rem", mb: 2 }}>
              İletişim
            </Typography>
            <Stack spacing={2}>
              {SITE.phones.map((phone) => (
                <Box
                  key={phone.href}
                  component="a"
                  href={phone.href}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <PhoneIcon sx={{ color: "primary.main" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>
                      {phone.display}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                      {phone.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
              <Box
                component="a"
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <WhatsAppIcon sx={{ color: "#22c55e" }} />
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    {SITE.whatsapp.display}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    {SITE.whatsapp.label}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <AccessTimeIcon sx={{ color: "primary.main" }} />
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    Çalışma Saatleri
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    7/24 Acil Servis Açık
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <LocationOnIcon sx={{ color: "primary.main" }} />
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>İstanbul</Typography>
                  <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                    Tüm İstanbul
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
            © {year} {SITE.name}. Tüm hakları saklıdır.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
                color: "#94a3b8",
                fontSize: "0.875rem",
              }}
            >
              <ShieldIcon fontSize="small" sx={{ color: "primary.main" }} />
              Garantili İşçilik
            </Stack>
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
                color: "#94a3b8",
                fontSize: "0.875rem",
              }}
            >
              <VerifiedIcon fontSize="small" sx={{ color: "primary.main" }} />
              Sertifikalı Ekip
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
