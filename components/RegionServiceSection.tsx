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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { REGION_SERVICE_FEATURES } from "@/lib/constants";
import { brandNavy, brandOrange } from "@/lib/theme";

export default function RegionServiceSection() {
  return (
    <Box
      id="bolge-servisi"
      component="section"
      sx={{ py: { xs: 8, lg: 10 }, bgcolor: "#f8fafc" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{ fontSize: { xs: "1.75rem", lg: "2.5rem" }, color: brandNavy, mb: 1.5 }}
          >
            İstanbul Bölge Servisi
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 640, mx: "auto", lineHeight: 1.7, fontSize: "1.05rem" }}
          >
            İstanbul&apos;un tüm ilçelerinde aynı gün teknik servis hizmeti sunuyoruz.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {REGION_SERVICE_FEATURES.map((feature) => (
            <Grid key={feature} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ py: 2.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                    <CheckCircleIcon sx={{ color: brandOrange, fontSize: 22 }} />
                    <Typography sx={{ fontWeight: 600, color: brandNavy }}>
                      {feature}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{ textAlign: "center", mt: 4, color: "text.secondary", lineHeight: 1.7 }}
        >
          Detaylı bilgi için{" "}
          <Link href="/hermetik-sofben-servisi" style={{ color: brandOrange, fontWeight: 600 }}>
            hermetik şofben servisi
          </Link>{" "}
          sayfamızı ziyaret edin veya{" "}
          <Link href="/#bolgeler" style={{ color: brandOrange, fontWeight: 600 }}>
            servis bölgelerimizi
          </Link>{" "}
          inceleyin.
        </Typography>
      </Container>
    </Box>
  );
}
