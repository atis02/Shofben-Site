"use client";

import { FormEvent, useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SITE } from "@/lib/constants";
import { onPhoneClick, trackLead } from "@/lib/analytics";

const SERVICE_TYPES = [
  "Şofben Tamiri",
  "Şofben Bakımı",
  "Şofben Montajı",
  "Gaz Kaçağı Kontrolü",
  "Acil Servis",
  "Ücretsiz Keşif",
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    trackLead("contact_form");
  };

  if (submitted) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <CheckCircleIcon sx={{ fontSize: 48, color: "success.main", mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          Talebiniz Alındı!
        </Typography>
        <Typography color="text.secondary">
          Ekibimiz en kısa sürede sizinle iletişime geçecek. Acil durumlarda lütfen
          bizi arayın:{" "}
          <Box
            component="a"
            href={SITE.phoneHref}
            onClick={onPhoneClick(SITE.phone)}
            sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none" }}
          >
            {SITE.phone}
          </Box>
          {" / "}
          <Box
            component="a"
            href={SITE.phones[1].href}
            onClick={onPhoneClick(SITE.phones[1].display)}
            sx={{ color: "primary.main", fontWeight: 600, textDecoration: "none" }}
          >
            {SITE.phones[1].display}
          </Box>
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Adınız Soyadınız"
            placeholder="Ahmet Yılmaz"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            id="phone"
            name="phone"
            type="tel"
            label="Telefon Numaranız"
            placeholder="05XX XXX XX XX"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth required>
            <InputLabel id="service-type-label">Hizmet Türü</InputLabel>
            <Select
              labelId="service-type-label"
              id="serviceType"
              name="serviceType"
              value={serviceType}
              label="Hizmet Türü"
              onChange={(e) => setServiceType(e.target.value)}
            >
              {SERVICE_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            id="district"
            name="district"
            label="İlçe / Semt"
            placeholder="Örn: Kadıköy, Beşiktaş..."
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Mesajınız"
            placeholder="Şofbeninizde yaşadığınız sorunu kısaca açıklayın..."
            multiline
            rows={4}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Alert severity="info" sx={{ mb: 1 }}>
            Form gönderimi demo amaçlıdır. Acil durumlarda doğrudan arayın.
          </Alert>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            endIcon={<SendIcon />}
            sx={{ py: 1.5 }}
          >
            Servis Talebi Gönder
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
