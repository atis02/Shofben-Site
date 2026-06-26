"use client";

import { Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SITE } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <Tooltip title={`WhatsApp: ${SITE.whatsapp.display}`} placement="left">
      <Fab
        component="a"
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 28 },
          right: { xs: 20, md: 28 },
          zIndex: 1300,
          bgcolor: "#22c55e",
          color: "#fff",
          boxShadow: "0 8px 24px rgba(34,197,94,0.45)",
          "&:hover": { bgcolor: "#16a34a" },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 28 }} />
      </Fab>
    </Tooltip>
  );
}
