// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";

import { Alert as MuiAlert, Snackbar } from "@mui/material";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "./redux/slices/app";

const vertical = "bottom";
const horizontal = "center";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state) => state.app.snackbar
  );

  // const registrationStatus = useSelector(
  //   (state) => state.auth.registrationStatus
  // );

  // const [warningMsg, setWarningMsg] = useState(true);

  // const handleCloseWarningMsg = () => {
  //   setWarningMsg(false);
  // }

  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>

      {open && message ? (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            dispatch(closeSnackbar());
          }}
        >
          <Alert
            onClose={() => {
              dispatch(closeSnackbar());
            }}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
      {/* {!registrationStatus && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={warningMsg}
          key={vertical + horizontal + vertical}
          onClose={() => {
            handleCloseWarningMsg();
          }}
        >
          <Alert
            onClose={() => {
              handleCloseWarningMsg();
            }}
            severity='error'
            sx={{ width: "100%" }}
          >
            Please navigate to Complete "Enrollment Form" in next Tab in Sidebar !
          </Alert>
        </Snackbar>
      )} */}
    </>
  );
}

export default App;
