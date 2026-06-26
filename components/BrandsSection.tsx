import Link from "next/link";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { WORK_WITH_BRANDS } from "@/lib/constants";
import { brandNavy } from "@/lib/theme";

export default function BrandsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, lg: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{ fontSize: { xs: "1.75rem", lg: "2.25rem" }, color: brandNavy, mb: 1 }}
          >
            Çalıştığımız Markalar
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 560, mx: "auto", lineHeight: 1.7 }}>
            Tüm marka şofben ve kombiler için servis hizmeti sunuyoruz
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {WORK_WITH_BRANDS.map((brand) => (
            <Grid key={brand.name} size={{ xs: 6, sm: 4 }}>
              <Card
                component={brand.href ? Link : "div"}
                href={brand.href || undefined}
                sx={{
                  height: "100%",
                  minHeight: 72,
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: 3,
                  boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": brand.href
                    ? { transform: "translateY(-2px)", boxShadow: 3 }
                    : undefined,
                }}
              >
                <CardContent sx={{ py: 2.5, px: 1, width: "100%" }}>
                  <Typography
                    sx={{
                      fontWeight: "fontWeight" in brand ? brand.fontWeight : 600,
                      fontSize:
                        "fontSize" in brand && brand.fontSize === "large"
                          ? { xs: "1.05rem", sm: "1.35rem" }
                          : { xs: "0.9rem", sm: "1.05rem" },
                      fontStyle: "fontStyle" in brand ? brand.fontStyle : "normal",
                      color: brand.color,
                      letterSpacing:
                        "letterSpacing" in brand ? brand.letterSpacing : "normal",
                      lineHeight: 1.2,
                      wordBreak: "break-word",
                    }}
                  >
                    {brand.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
