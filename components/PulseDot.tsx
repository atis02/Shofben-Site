import { Box } from "@mui/material";
import { brandOrange } from "@/lib/theme";

type PulseDotProps = {
  color?: string;
  size?: number;
};

export default function PulseDot({ color = brandOrange, size = 10 }: PulseDotProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: size,
        height: size,
        ml: 1,
        flexShrink: 0,
        "@keyframes pulse-ring": {
          "0%": { transform: "scale(1)", opacity: 0.8 },
          "70%": { transform: "scale(2.2)", opacity: 0 },
          "100%": { transform: "scale(2.2)", opacity: 0 },
        },
        "@keyframes pulse-core": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.65 },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          bgcolor: color,
          animation: "pulse-core 1.5s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          bgcolor: color,
          animation: "pulse-ring 1.5s ease-out infinite",
        }}
      />
    </Box>
  );
}
