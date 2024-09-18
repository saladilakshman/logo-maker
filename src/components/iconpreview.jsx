import { useContext } from "react";
import { Appstate } from "../App";
import { Container, Box } from "@mui/material";
import { icons } from "lucide-react";
export const Iconpreview = () => {
  const {
    state: {
      iconbgcolor,
      iconradius,
      iconpadding,
      icon,
      iconsize,
      iconcolor,
      iconrotation,
    },
  } = useContext(Appstate);
  const LucideIcon = icons[icon];
  return (
    <Container>
      <Box
        sx={{
          width: 500,
          height: 500,
          border: "1px dotted grey",
          display: "block",
          margin: "auto",
          marginTop: 12,
          padding: `${iconpadding}px`,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: iconbgcolor,
            borderRadius: `${iconradius}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="icon-preview-box"
        >
          {icon.includes("png") ? (
            <Box
              component="img"
              src={icon}
              sx={{
                width: iconsize,
                height: "100%",
                objectFit: "contain",
                rotate: `${iconrotation}deg`,
              }}
            />
          ) : (
            <LucideIcon
              color={iconcolor}
              size={iconsize}
              style={{
                rotate: `${iconrotation}deg`,
              }}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};
