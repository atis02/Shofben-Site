"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { onPhoneClick, onWhatsAppClick } from "@/lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, lg: 80 } }}>
            <Logo />

            <Stack
              direction="row"
              spacing={0.5}
              sx={{ ml: 4, display: { xs: "none", lg: "flex" } }}
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  component="a"
                  href={link.href}
                  color="inherit"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    "&:hover": { bgcolor: "#f8fafc", color: "secondary.main" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}
            >
              <Button
                component="a"
                href={SITE.phoneHref}
                onClick={onPhoneClick(SITE.phone)}
                startIcon={<PhoneIcon />}
                color="inherit"
                sx={{ fontWeight: 600, color: "secondary.main" }}
              >
                {SITE.phone}
              </Button>
              <Button
                component="a"
                href="/#iletisim"
                variant="contained"
                color="primary"
                sx={{ px: 2.5, py: 1.25 }}
              >
                Hemen Servis Al
              </Button>
            </Stack>

            <IconButton
              component="a"
              href={SITE.phoneHref}
              onClick={onPhoneClick(SITE.phone)}
              sx={{ display: { xs: "inline-flex", lg: "none" }, mr: 1 }}
              color="primary"
            >
              <PhoneIcon />
            </IconButton>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { lg: "none" } }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 300 } } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            fullWidth
            variant="outlined"
            component="a"
            href={SITE.whatsappHref}
            onClick={onWhatsAppClick()}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{ mb: 1.5, borderColor: "#22c55e", color: "#16a34a" }}
          >
            WhatsApp
          </Button>
          <Button
            fullWidth
            variant="contained"
            component="a"
            href="/#iletisim"
            onClick={() => setOpen(false)}
          >
            Hemen Servis Al
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
