import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DesignServices } from "@mui/icons-material";
import { Photo } from "@mui/icons-material";
import { useContext } from "react";
import { Appstate } from "../App";
export const Sidebar = () => {
  const {
    state: { selectedIndex },
    dispatch,
  } = useContext(Appstate);
  const nav_elements = [
    {
      name: "Icon",
      icon: <DesignServices />,
    },
    {
      name: "Background",
      icon: <Photo />,
    },
  ];
  return (
    <>
      {nav_elements.map((nav_element, index) => {
        return (
          <ListItem key={index} disableGutters disablePadding sx={{ p: 0.3 }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() =>
                dispatch({ type: "identical-index", payload: index })
              }
            >
              <ListItemIcon>{nav_element.icon}</ListItemIcon>
              <ListItemText>
                <Typography variant="h6">{nav_element.name}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};
