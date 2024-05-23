import * as Colors from "@mui/material/colors";
import { useTheme, useMediaQuery } from "@mui/material";
// eslint-disable-next-line react-refresh/only-export-components
export const styles = {
  appbar: {
    icon: {
      backgroundColor: Colors.deepOrange[600],
      color: "white",
      fontSize: 32,
      borderRadius: "50%",
    },
    appname: {
      fontWeight: "bolder",
      fontSize: { xs: 20, lg: 28 },
    },
    downloadbutton: {
      marginLeft: "auto",
      backgroundColor: Colors.deepOrange[600],
      textTransform: "Capitalize",
      "&:hover": {
        backgroundColor: Colors.deepOrange[600],
      },
    },
  },
  colorcomponent: {
    slider: {
      width: 300,
      "&.MuiSlider-root": {
        color: Colors.deepOrange[600],
        backgroundColor: "white",
      },
    },
    iconbox: {
      width: 50,
      height: 50,
      bgcolor: Colors.grey[300],
      borderRadius: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
    },
  },
  sidebar: {
    listElement: {
      //backgroundColor: Colors.deepOrange[600],
    },
  },
  dialog: {
    buttonsgroup: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      gap: 2,
      marginBlockEnd: 1,
    },
    button: {
      textTransform: "capitalize",
      "&:focus": { bgcolor: Colors.grey[900], color: "white" },
    },
    iconsgrid: {
      display: "grid",
      gridTemplateColumns: { xs: "repeat(3,1fr)", lg: "repeat(5,1fr)" },
      gridGap: 6,
    },
    dialogpaper: {
      width: 80,
      p: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export default function Mediascreens() {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.only("xs"));
  return Mobile;
}
