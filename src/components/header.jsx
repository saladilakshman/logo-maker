import { AppBar, Typography, Stack, Toolbar, Button } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { styles } from "../styles/style";
import Mediascreens from "../styles/style";
import html2canvas from "html2canvas";
import { Appstate } from "../App";
import { useContext } from "react";
export const Header = () => {
  const issmalldevice = Mediascreens();
  const {
    state: { icon },
  } = useContext(Appstate);
  return (
    <AppBar
      color="inherit"
      sx={{ borderBottom: 1, borderColor: "divider", boxShadow: 0 }}
    >
      <Toolbar>
        <>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="start"
            alignItems="center"
          >
            <BoltIcon sx={styles.appbar.icon} />
            <Typography variant="h6" sx={styles.appbar.appname}>
              LogoForge
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={styles.appbar.downloadbutton}
            startIcon={issmalldevice ? "" : <CloudDownloadIcon />}
            size={issmalldevice ? "small" : "large"}
            onClick={async () => {
              const boxElement = document.getElementById("icon-preview-box");
              await html2canvas(boxElement, {
                useCORS: true,
                backgroundColor: null,
              })
                .then((res) => {
                  const anchor = document.createElement("a");
                  anchor.href = res.toDataURL("image/png");
                  document.body.appendChild(anchor);
                  anchor.download = `logoforge-${icon}`;
                  anchor.click();
                })
                .catch((err) => console.log(err.message));
            }}
          >
            Download
          </Button>
        </>
      </Toolbar>
    </AppBar>
  );
};
