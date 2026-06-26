"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Card,
  CardContent,
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
import ContactActions from "@/components/ContactActions";
import type { SeoPageData } from "@/lib/seo-pages";
import { brandNavy, brandNavyLight, brandOrange } from "@/lib/theme";

type ServiceSeoPageProps = {
  page: SeoPageData;
};

export default function ServiceSeoPage({ page }: ServiceSeoPageProps) {
  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: brandNavy,
          backgroundImage: `linear-gradient(135deg, ${brandNavy} 0%, ${brandNavyLight} 100%)`,
          color: "#fff",
          py: { xs: 8, lg: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: { xs: "2.25rem", lg: "3.25rem" },
                  lineHeight: 1.1,
                  mb: 4,
                  color: "#fff",
                }}
              >
                {page.h1}
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
                  priority
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
            sx={{
              fontSize: { xs: "1.75rem", lg: "2.25rem" },
              color: brandNavy,
              mb: 2,
            }}
          >
            {page.h2Service}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ lineHeight: 1.8, fontSize: "1.05rem", maxWidth: 900 }}
          >
            {page.serviceDescription}
          </Typography>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{ py: { xs: 6, lg: 8 }, bgcolor: "#f8fafc" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 2, alignItems: "center" }}
              >
                <BuildIcon sx={{ color: brandOrange }} />
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", lg: "2rem" },
                    color: brandNavy,
                  }}
                >
                  {page.h2Faults}
                </Typography>
              </Stack>
              <List dense>
                {page.faults.map((fault) => (
                  <ListItem key={fault} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon
                        sx={{ color: brandOrange, fontSize: 20 }}
                      />
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
                sx={{
                  fontSize: { xs: "1.5rem", lg: "2rem" },
                  color: brandNavy,
                  mb: 2,
                }}
              >
                {page.h2WhyUs}
              </Typography>
              <List dense>
                {page.whyUs.map((item) => (
                  <ListItem key={item} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon
                        sx={{ color: "#22c55e", fontSize: 20 }}
                      />
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
          <Card sx={{ p: { xs: 3, md: 4 } }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", lg: "2rem" },
                color: brandNavy,
                mb: 2,
              }}
            >
              {page.h2Regions}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 3, maxWidth: 900 }}
            >
              {page.regionText}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Diğer hizmetlerimiz için{" "}
              <Link href="/" style={{ color: brandOrange, fontWeight: 600 }}>
                ana sayfayı
              </Link>{" "}
              ziyaret edebilir veya doğrudan arayabilirsiniz.
            </Typography>
          </Card>
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
            Arıza veya bakım için telefonla arayın ya da WhatsApp hattından
            yazın. En yakın ekibimiz yönlendirilsin.
          </Typography>
          <ContactActions layout="row" centered onDark />
        </Container>
      </Box>
    </>
  );
}
