"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildIcon from "@mui/icons-material/Build";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactActions from "@/components/ContactActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BRAND_LINKS } from "@/lib/constants";
import type { SeoPageData } from "@/lib/seo-types";
import { brandNavy, brandNavyLight, brandOrange } from "@/lib/theme";

type ServiceSeoPageProps = {
  page: SeoPageData;
};

export default function ServiceSeoPage({ page }: ServiceSeoPageProps) {
  const isMain = page.slug === "hermetik-sofben-servisi";

  const breadcrumbItems = isMain
    ? [
        { label: "Ana Sayfa", href: "/" },
        { label: page.breadcrumbLabel },
      ]
    : [
        { label: "Ana Sayfa", href: "/" },
        { label: "Hermetik Şofben Servisi", href: "/hermetik-sofben-servisi" },
        { label: page.breadcrumbLabel },
      ];

  const relatedBrands = BRAND_LINKS.filter((b) =>
    page.relatedBrandSlugs.includes(b.href.replace("/", "")),
  );

  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: brandNavy,
          backgroundImage: `linear-gradient(135deg, ${brandNavy} 0%, ${brandNavyLight} 100%)`,
          color: "#fff",
          py: { xs: 6, lg: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs items={breadcrumbItems} variant="light" />
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: { xs: "2.25rem", lg: "3.25rem" },
                  lineHeight: 1.1,
                  mb: 2,
                  color: "#fff",
                }}
              >
                {page.h1}
              </Typography>
              <Typography sx={{ color: "#cbd5e1", lineHeight: 1.8, mb: 4, maxWidth: 640 }}>
                {page.intro}
              </Typography>
              <ContactActions onDark />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  minHeight: 280,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                }}
              >
                <Image
                  src={page.image}
                  alt={page.h1}
                  fill
                  priority={isMain}
                  loading={isMain ? undefined : "lazy"}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, lg: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h2"
            sx={{ fontSize: { xs: "1.75rem", lg: "2.25rem" }, color: brandNavy, mb: 2 }}
          >
            {page.h2Service}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ lineHeight: 1.8, fontSize: "1.05rem", maxWidth: 900, mb: 2 }}
          >
            {page.serviceDescription}
          </Typography>
        </Container>
      </Box>

      {page.sections.map((section) => (
        <Box
          key={section.h2}
          component="section"
          sx={{
            py: { xs: 5, lg: 6 },
            bgcolor: page.sections.indexOf(section) % 2 === 1 ? "#f8fafc" : "#fff",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h2"
              variant="h2"
              sx={{ fontSize: { xs: "1.5rem", lg: "2rem" }, color: brandNavy, mb: 2 }}
            >
              {section.h2}
            </Typography>
            {section.paragraphs.map((paragraph) => (
              <Typography
                key={paragraph.slice(0, 40)}
                color="text.secondary"
                sx={{ lineHeight: 1.85, fontSize: "1.05rem", maxWidth: 900, mb: 2 }}
              >
                {paragraph}
              </Typography>
            ))}
            {section.subsections?.map((sub) => (
              <Box key={sub.h3} sx={{ mt: 3 }}>
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{ fontSize: { xs: "1.2rem", lg: "1.4rem" }, color: brandNavy, mb: 1.5 }}
                >
                  {sub.h3}
                </Typography>
                {sub.paragraphs.map((paragraph) => (
                  <Typography
                    key={paragraph.slice(0, 40)}
                    color="text.secondary"
                    sx={{ lineHeight: 1.85, fontSize: "1.02rem", maxWidth: 900, mb: 2 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            ))}
          </Container>
        </Box>
      ))}

      <Box component="section" sx={{ py: { xs: 6, lg: 8 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={1} sx={{ mb: 2, alignItems: "center" }}>
                <BuildIcon sx={{ color: brandOrange }} />
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{ fontSize: { xs: "1.5rem", lg: "2rem" }, color: brandNavy }}
                >
                  {page.h2Faults}
                </Typography>
              </Stack>
              <List dense>
                {page.faults.map((fault) => (
                  <ListItem key={fault} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon sx={{ color: brandOrange, fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={fault} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                component="h2"
                variant="h2"
                sx={{ fontSize: { xs: "1.5rem", lg: "2rem" }, color: brandNavy, mb: 2 }}
              >
                {page.h2WhyUs}
              </Typography>
              <List dense>
                {page.whyUs.map((item) => (
                  <ListItem key={item} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon sx={{ color: "#22c55e", fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, lg: 8 } }}>
        <Container maxWidth="lg">
          <Card sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{ fontSize: { xs: "1.5rem", lg: "2rem" }, color: brandNavy, mb: 2 }}
            >
              {page.h2Regions}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, maxWidth: 900 }}>
              {page.regionText}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {!isMain && (
                <>
                  <Link
                    href="/hermetik-sofben-servisi"
                    style={{ color: brandOrange, fontWeight: 600 }}
                  >
                    Hermetik şofben servisi
                  </Link>
                  {" · "}
                </>
              )}
              <Link href="/" style={{ color: brandOrange, fontWeight: 600 }}>
                Ana sayfa
              </Link>
              {" · "}
              <Link href="/#iletisim" style={{ color: brandOrange, fontWeight: 600 }}>
                İletişim
              </Link>
            </Typography>
          </Card>

          {relatedBrands.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography
                component="h2"
                variant="h2"
                sx={{ fontSize: { xs: "1.35rem", lg: "1.75rem" }, color: brandNavy, mb: 2 }}
              >
                İlgili Marka Servisleri
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                {relatedBrands.map((brand) => (
                  <Link
                    key={brand.href}
                    href={brand.href}
                    style={{
                      color: brandOrange,
                      fontWeight: 600,
                      textDecoration: "none",
                      padding: "6px 12px",
                      border: `1px solid ${brandOrange}33`,
                      borderRadius: 8,
                    }}
                  >
                    {brand.name}
                  </Link>
                ))}
              </Stack>
            </Box>
          )}
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, lg: 8 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Typography
            component="h2"
            variant="h2"
            sx={{ fontSize: { xs: "1.75rem", lg: "2.25rem" }, color: brandNavy, mb: 3 }}
          >
            Sık Sorulan Sorular
          </Typography>
          {page.faq.map((item) => (
            <Accordion
              key={item.question}
              disableGutters
              elevation={0}
              sx={{
                mb: 1,
                border: "1px solid #e2e8f0",
                borderRadius: "12px !important",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600, color: brandNavy }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 6, lg: 8 },
          bgcolor: brandNavy,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Hemen Servis Talep Edin
          </Typography>
          <Typography sx={{ color: "#cbd5e1", mb: 4, lineHeight: 1.7 }}>
            Arıza veya bakım için 0850 346 54 57 numarasını arayın ya da WhatsApp hattından
            yazın. Aynı gün yerinde tamir ve garantili hizmet.
          </Typography>
          <ContactActions layout="row" centered onDark />
        </Container>
      </Box>
    </>
  );
}
