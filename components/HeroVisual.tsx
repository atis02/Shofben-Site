"use client";

import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IMAGES } from "@/lib/constants";
import { brandNavy, brandOrange } from "@/lib/theme";

export default function HeroVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        pt: { xs: 2, lg: 0 },
        pb: { xs: 4, sm: 5 },
        pl: { xs: 0, sm: 3 },
        pr: { xs: 0, sm: 2 },
        "@keyframes hero-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        animation: "hero-float 5s ease-in-out infinite",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow:
            "0 28px 56px rgba(0,0,0,0.42), 0 12px 24px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <Image
          src={IMAGES.technician}
          alt="Uzman teknisyen kombi ve şofben tamiri yapıyor"
          width={800}
          height={600}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: -16, md: -20 },
          right: { xs: -8, md: -16 },
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          bgcolor: brandOrange,
          color: "#fff",
          borderRadius: 2,
          px: 2,
          py: 1.5,
          boxShadow:
            "0 10px 28px rgba(249,115,22,0.5), 0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <AccessTimeIcon sx={{ fontSize: 30 }} />
        <Box>
          <Typography
            sx={{ fontSize: "0.8rem", lineHeight: 1.2, opacity: 0.95 }}
          >
            Ortalama Yanıt
          </Typography>
          <Typography
            sx={{ fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.1 }}
          >
            30 dk
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 0, sm: -8 },
          left: { xs: 0, sm: -20 },
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: 1.5,
          bgcolor: "#fff",
          borderRadius: 2,
          px: 2,
          py: 1.75,
          boxShadow:
            "0 20px 45px rgba(15,23,42,0.2), 0 8px 20px rgba(15,23,42,0.1), 0 2px 6px rgba(15,23,42,0.06)",
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            bgcolor: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <StarBorderIcon sx={{ color: "#16a34a", fontSize: 24 }} />
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={0.2}
            sx={{ color: "#fbbf24", mb: 0.35 }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} sx={{ fontSize: 16 }} />
            ))}
          </Stack>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: brandNavy }}
          >
            500+ Mutlu Müşteri
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
