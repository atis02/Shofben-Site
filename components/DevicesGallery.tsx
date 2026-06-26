import Image from "next/image";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { DEVICE_GALLERY } from "@/lib/constants";
import { brandNavy, brandOrange } from "@/lib/theme";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: 2,
        py: 0.75,
        bgcolor: "#fff7ed",
        color: brandOrange,
        borderRadius: 999,
        fontSize: "0.875rem",
        fontWeight: 600,
        mb: 2,
      }}
    >
      {children}
    </Box>
  );
}

function DeviceCard({
  device,
  large = false,
}: {
  device: (typeof DEVICE_GALLERY)[number];
  large?: boolean;
}) {
  return (
    <Card
      sx={{
        overflow: "hidden",
        height: "100%",
        borderRadius: 4,
        "&:hover img": { transform: "scale(1.05)" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: large ? { xs: 280, md: 480 } : { xs: 180, sm: 200 },
          overflow: "hidden",
        }}
      >
        <Image
          src={device.image}
          alt={device.title}
          fill
          sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
          style={{ objectFit: "cover", transition: "transform 0.7s" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${brandNavy}dd 0%, ${brandNavy}55 35%, transparent 70%)`,
          }}
        />
        <Box sx={{ position: "absolute", bottom: 16, left: 16, right: 16, color: "#fff" }}>
          <Typography
            sx={{
              display: "inline-block",
              fontSize: large ? "0.8rem" : "0.7rem",
              fontWeight: 600,
              color: brandOrange,
              mb: large ? 0.5 : 0,
            }}
          >
            {device.tag}
          </Typography>
          {device.subtitle && (
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: large ? { xs: "1.25rem", md: "1.5rem" } : "0.875rem",
                lineHeight: 1.2,
              }}
            >
              {device.subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
}

export default function DevicesGallery() {
  const [featured, ...rest] = DEVICE_GALLERY;

  return (
    <Box component="section" sx={{ py: { xs: 8, lg: 12 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <SectionBadge>Uzman Olduğumuz Cihazlar</SectionBadge>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
              lineHeight: 1.15,
              color: brandNavy,
            }}
          >
            Kombi, Şofben & Doğalgazlı{" "}
            <Box component="span" sx={{ color: brandOrange }}>
              Hermetik Cihazlar
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <DeviceCard device={featured} large />
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={2} sx={{ height: "100%" }}>
              {rest.map((device) => (
                <Grid key={device.title} size={{ xs: 6 }}>
                  <DeviceCard device={device} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
