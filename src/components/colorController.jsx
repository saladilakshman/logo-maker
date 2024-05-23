import { Container, Stack, Slider, Typography, Box } from "@mui/material";
import { useContext } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { Appstate } from "../App";
export const Colorcontroller = () => {
  const {
    state: { iconradius, iconpadding, iconbgcolor },
    dispatch,
  } = useContext(Appstate);
  return (
    <Container sx={{ overflow: "auto", boxSizing: "border-box" }}>
      <Box sx={{ paddingBlockStart: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Rounded</Typography>
          <Typography variant="body1">{iconradius} &deg;</Typography>
        </Stack>
        <Slider
          value={iconradius}
          min={0}
          max={257}
          onChange={(event, newvalue) =>
            dispatch({ type: "iconradius-selection", payload: newvalue })
          }
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
          <Typography variant="h6">Padding</Typography>
          <Typography variant="body1">{iconpadding} px</Typography>
        </Stack>
        <Slider
          value={iconpadding}
          min={0}
          max={250}
          onChange={(event, newvalue) =>
            dispatch({ type: "iconpadding-selection", payload: newvalue })
          }
          sx={{
            "&.MuiSlider-root": {
              color: "#f4511e",
            },
          }}
        />
      </Box>
      <Box sx={{ paddingBlockStart: 2 }}>
        <ColorPicker
          value={iconbgcolor}
          onChange={(newcolor) =>
            dispatch({ type: "iconbgcolor-selection", payload: newcolor })
          }
          hideControls={false}
        />
      </Box>
    </Container>
  );
};
