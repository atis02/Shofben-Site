import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BRAND_LINKS, IMAGES, SEO_KEYWORD_BLOCKS } from "@/lib/constants";
import { brandNavy, brandOrange } from "@/lib/theme";

export default function SeoKeywordsSection() {
  return (
    <Box id="seo-hizmetler" component="section" sx={{ py: { xs: 8, lg: 12 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 6, alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", lg: "2.75rem" },
                color: brandNavy,
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              İstanbul&apos;da{" "}
              <Box component="span" sx={{ color: brandOrange }}>
                Hermetik Şofben
              </Box>{" "}
              ve Kombi Servisi
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
              Doğalgazlı şofben ve kombi arızalarında bekletmeden müdahale ediyoruz. Aşağıdaki
              hizmet başlıklarında yerinde tamir, bakım ve montaj desteği sunuyoruz.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                minHeight: 280,
                boxShadow: "0 20px 40px rgba(15,23,42,0.12)",
              }}
            >
              <Image
                src={IMAGES.kombi}
                alt="Kombi ve hermetik şofben servisi"
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${brandNavy}cc, transparent 55%)`,
                }}
              />
              <Box sx={{ position: "absolute", bottom: 20, left: 20, right: 20, color: "#fff" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "1.125rem" }}>
                  Kombi & Hermetik Şofben Servisi
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Avrupa Yakası ve Anadolu Yakası mobil ekipler
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {SEO_KEYWORD_BLOCKS.map((block) => (
            <Grid key={block.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                component={Link}
                href={block.href}
                sx={{
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.25s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                    borderColor: `${brandOrange}33`,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    component="h3"
                    variant="h6"
                    sx={{ color: brandNavy, mb: 1.5, fontWeight: 700 }}
                  >
                    {block.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                    {block.text}
                  </Typography>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", color: brandOrange, fontWeight: 600, fontSize: "0.875rem" }}>
                    Detaylı bilgi
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export function BrandLinksSection() {
  return (
    <Box id="markalar" component="section" sx={{ py: { xs: 6, lg: 8 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: "1.75rem", lg: "2.25rem" }, color: brandNavy, mb: 1 }}
        >
          Marka Bazlı Hermetik Şofben Servisi
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 720, lineHeight: 1.7 }}>
          Kullandığınız markaya özel tamir ve bakım sayfalarımızdan hizmet detaylarına
          ulaşabilirsiniz.
        </Typography>
        <Grid container spacing={2}>
          {BRAND_LINKS.map((brand) => (
            <Grid key={brand.href} size={{ xs: 6, sm: 4, md: 3 }}>
              <Card
                component={Link}
                href={brand.href}
                sx={{
                  textAlign: "center",
                  py: 2,
                  textDecoration: "none",
                  color: brandNavy,
                  fontWeight: 600,
                  transition: "all 0.2s",
                  "&:hover": { color: brandOrange, borderColor: `${brandOrange}44` },
                }}
              >
                <CardContent sx={{ py: "12px !important" }}>
                  {brand.name} Hermetik Şofben
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
