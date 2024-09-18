import {
  Dialog,
  Box,
  DialogContent,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import * as ColorIcons from "../assets/index.js";
import { IconsList } from "../utils/iconslist";
import { icons } from "lucide-react";
import { styles } from "../styles/style";
import { Appstate } from "../App";
import { useContext } from "react";
export const DialogElement = () => {
  const {
    state: { icongroupselectiontext, opendialog },
    dispatch,
  } = useContext(Appstate);
  const changeiconstypeonclick = (type) => {
    dispatch({
      type: "icongroup-selection",
      payload: type,
    });
  };
  const listtypeselection = (iconcategory) => {
    dispatch({ type: "close-dialog" });
    dispatch({ type: "icon-selection", payload: iconcategory });
  };
  return (
    <Dialog
      open={opendialog}
      onClose={() => dispatch({ type: "close-dialog" })}
    >
      <DialogContent sx={{ height: 400 }}>
        <Box sx={styles.dialog.buttonsgroup}>
          <Button
            sx={{
              ...styles.dialog.button,
              bgcolor:
                icongroupselectiontext === "icons" ? "#212121" : "initial",
              color: icongroupselectiontext === "icons" ? "white" : "inherit",
            }}
            disableRipple
            onClick={(event) =>
              changeiconstypeonclick(event.target.textContent)
            }
          >
            icons
          </Button>
          <Button
            sx={{
              ...styles.dialog.button,
              bgcolor:
                icongroupselectiontext === "color icons"
                  ? "#212121"
                  : "initial",
              color:
                icongroupselectiontext === "color icons" ? "white" : "inherit",
            }}
            disableRipple
            onClick={(event) =>
              changeiconstypeonclick(event.target.textContent)
            }
          >
            color icons
          </Button>
        </Box>
        <Divider sx={{ marginBlockEnd: 1 }} />
        <Box sx={styles.dialog.iconsgrid}>
          {icongroupselectiontext === "icons"
            ? IconsList.map((IconList, index) => {
                const LucideIcon = icons[IconList];
                if (!LucideIcon) {
                  return null;
                }
                return (
                  <Box
                    component={Paper}
                    key={index}
                    sx={styles.dialog.dialogpaper}
                    onClick={() => listtypeselection(IconList)}
                  >
                    <LucideIcon />
                  </Box>
                );
              })
            : Object.values({ ...ColorIcons }).map((coloricon, index) => {
                return (
                  <Box
                    component={Paper}
                    key={index}
                    onClick={() => listtypeselection(coloricon)}
                  >
                    <Box
                      component="img"
                      alt=""
                      loading="lazy"
                      src={coloricon}
                      sx={styles.dialog.dialogpaper}
                    />
                  </Box>
                );
              })}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
