import { Container, Stack, Slider, Typography, Box } from "@mui/material";
import { useContext } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { Appstate } from "../App";
import { icons } from "lucide-react";
export const Iconcontroller = () => {
  const {
    state: { iconsize, iconrotation, iconcolor, icon },
    dispatch,
  } = useContext(Appstate);
  const ActiveLucideIcon = icons[icon];
  return (
    <Container>
      <Box sx={{ paddingBlockStart: 2 }}>
        <Typography variant="h6">Icon</Typography>
        <Box
          component="button"
          onClick={() => dispatch({ type: "show-dialog" })}
          sx={{
            width: 60,
            height: 60,
            border: "none",
            borderRadius: 2,
          }}
        >
          {icon.includes("png") ? (
            <Box
              component="img"
              src={`https://logoexpress.tubeguruji.com/png/${icon}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <ActiveLucideIcon />
          )}
        </Box>
        <Box
          sx={{
            paddingBlockStart: 2,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Rotate</Typography>
            <Typography variant="body1">{iconrotation} &deg;</Typography>
          </Stack>
          <Slider
            value={iconrotation}
            min={0}
            max={360}
            onChange={(event, newvalue) => {
              dispatch({ type: "iconrotation-selection", payload: newvalue });
            }}
            sx={{
              "&.MuiSlider-root": {
                color: "#f4511e",
              },
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingBlockStart: 2 }}
          >
            <Typography variant="h6">Size</Typography>
            <Typography variant="body1">{iconsize} px</Typography>
          </Stack>
          <Slider
            value={iconsize}
            min={0}
            max={512}
            onChange={(event, newvalue) => {
              dispatch({ type: "iconsize-selection", payload: newvalue });
            }}
            sx={{
              "&.MuiSlider-root": {
                color: "#f4511e",
              },
            }}
          />
        </Box>
        <Box sx={{ paddingBlockStart: 2 }}>
          <ColorPicker
            value={iconcolor}
            onChange={(newcolor) =>
              dispatch({ type: "iconcolor-selection", payload: newcolor })
            }
            hideControls={true}
          />
        </Box>
      </Box>
    </Container>
  );
};
