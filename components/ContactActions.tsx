"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SITE } from "@/lib/constants";
import { onPhoneClick, onWhatsAppClick } from "@/lib/analytics";

type ContactActionsProps = {
  layout?: "row" | "column";
  centered?: boolean;
  size?: "medium" | "large";
  onDark?: boolean;
};

export default function ContactActions({
  layout = "row",
  centered = false,
  size = "large",
  onDark = false,
}: ContactActionsProps) {
  return (
    <Stack
      direction={layout === "row" ? { xs: "column", sm: "row" } : "column"}
      spacing={1.5}
      sx={{
        alignItems: centered ? "center" : "stretch",
        justifyContent: centered ? "center" : "flex-start",
      }}
    >
      {SITE.phones.map((phone) => (
        <Button
          key={phone.href}
          component="a"
          href={phone.href}
          onClick={onPhoneClick(phone.display)}
          variant="contained"
          color="primary"
          size={size}
          startIcon={<PhoneIcon />}
          sx={{ px: 3 }}
        >
          {phone.display}
        </Button>
      ))}
      <Button
        component="a"
        href={SITE.whatsappHref}
        onClick={onWhatsAppClick()}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        size={size}
        startIcon={<WhatsAppIcon />}
        sx={{
          px: 3,
          bgcolor: "#22c55e",
          "&:hover": { bgcolor: "#16a34a" },
        }}
      >
        WhatsApp
      </Button>
      <Box
        sx={{
          display: { xs: "block", sm: layout === "row" ? "none" : "block" },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textAlign: centered ? "center" : "left",
            color: onDark ? "#cbd5e1" : "text.secondary",
          }}
        >
          {SITE.whatsapp.label}: {SITE.whatsapp.display}
        </Typography>
      </Box>
    </Stack>
  );
}
