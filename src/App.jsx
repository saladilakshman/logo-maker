import { useReducer, createContext, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Box } from "@mui/material";
// import { IconsList } from "./utils/iconslist";
// import { icons } from "lucide-react";
import { Sidebar } from "./components/sidebar";
import { Colorcontroller } from "./components/colorController";
import { Iconcontroller } from "./components/iconController";
import { Iconpreview } from "./components/iconpreview";
import { DialogElement } from "./components/dialog";
export const Appstate = createContext();
function App() {
  const initialstate = {
    selectedIndex: 0,
    iconsize: 15,
    iconrotation: 0,
    iconcolor: "rgba(255,255,255,1)",
    icon: "Smile",
    iconradius: 0,
    iconpadding: 0,
    iconbgcolor: "rgba(163 80 80)",
    downloadImageElement: null,
    icongroupselectiontext: "icons",
    opendialog: false,
  };
  function iconreducer(state, action) {
    if (action.type === "identical-index") {
      return {
        ...state,
        selectedIndex: action.payload,
      };
    }
    if (action.type === "iconsize-selection") {
      return {
        ...state,
        iconsize: action.payload,
      };
    }
    if (action.type === "iconrotation-selection") {
      return {
        ...state,
        iconrotation: action.payload,
      };
    }
    if (action.type === "iconcolor-selection") {
      return {
        ...state,
        iconcolor: action.payload,
      };
    }
    if (action.type === "icon-selection") {
      return {
        ...state,
        icon: action.payload,
      };
    }
    if (action.type === "iconradius-selection") {
      return {
        ...state,
        iconradius: action.payload,
      };
    }
    if (action.type === "iconpadding-selection") {
      return {
        ...state,
        iconpadding: action.payload,
      };
    }
    if (action.type === "iconbgcolor-selection") {
      return {
        ...state,
        iconbgcolor: action.payload,
      };
    }
    if (action.type === "icongroup-selection") {
      return {
        ...state,
        icongroupselectiontext: action.payload,
      };
    }
    if (action.type === "show-dialog") {
      return {
        ...state,
        opendialog: true,
      };
    }
    if (action.type === "close-dialog") {
      return {
        ...state,
        opendialog: false,
      };
    } else {
      return state;
    }
  }
  const [state, dispatch] = useReducer(iconreducer, initialstate, (initial) => {
    const localData = window.localStorage.getItem("appvalues");
    return localData ? JSON.parse(localData) : initial;
  });
  useEffect(() => {
    window.localStorage.setItem("appvalues", JSON.stringify(state));
  }, [state]);
  return (
    <Appstate.Provider value={{ state, dispatch }}>
      <Header />
      <DialogElement />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { lg: "1fr 1.5fr 2fr", sm: "1fr" },
          marginBlockStart: 8,
        }}
      >
        <Box
          sx={{
            borderRight: 1,
            borderColor: "divider",
            height: { xs: 100, lg: 755 },
          }}
        >
          <Sidebar />
        </Box>
        <Box sx={{ borderRight: 1, borderColor: "divider" }}>
          {state.selectedIndex === 0 && <Iconcontroller />}
          {state.selectedIndex === 1 && <Colorcontroller />}
        </Box>
        <Box>
          <Iconpreview />
        </Box>
      </Box>
    </Appstate.Provider>
  );
}

export default App;
