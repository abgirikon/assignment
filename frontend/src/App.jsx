import { useState ,useEffect } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { BrowserRouter } from "react-router-dom"; 
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "./styles/getLPTheme";
import Sidebar from "./layouts/Sidebar";
import Header from './layouts/Header';
import {Box} from '@mui/material';
import { connect } from "react-redux";
import {setAuthToken} from './middleware/setAuthToken';
import Spinner from "react-spinkit";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  isAuthenticated : false
};

export function setAuth() {
  if (typeof localStorage !== 'undefined') {
    const storedData = JSON.parse(localStorage.getItem('authentication'));
    if(storedData.access_token){
      initialState.isAuthenticated = true;
    }
   };
   return initialState.isAuthenticated
}

 export function App({auth, isLoading}) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mainLayout, setMainLayout] = useState({
    path: "/dashboard",
    label: "Dashboard",
  });

 // auth.isLoggedIn = false ;

  useEffect(() => {
    if (localStorage.getItem("token") !== null && localStorage.getItem("token").length > 0) {
      setAuthToken(localStorage.getItem("token"));
      setIsAuthenticated(true);
      //alert("Token", )
    }
  }, [localStorage.getItem("token")]);

  const LPtheme = createTheme(getLPTheme(mode));
  
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };
 
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
   <>
   {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(16, 16, 16, 0.5)",
            zIndex: 999990,
          }}
        >
          <Spinner
            name="three-bounce"
            style={{
              marginTop: "50vh",
              marginLeft: "50vw",
              zIndex: 999999,
              color: "#0959AA",
            }}
          />
        </div>
      ) : (
        ""
      )}

      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <BrowserRouter>
          {isAuthenticated && isAuthenticated ? (
            <>
              <Header
                mode={mode}
                toggleColorMode={toggleColorMode}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
              />
            </>
          ) : (
            ""
          )}
            {isAuthenticated && isAuthenticated ? <>
                <Sidebar
                  open={open}
                  handleDrawerClose={handleDrawerClose}
                  setMainLayout={setMainLayout}
                  mainLayout={mainLayout}
                />
                <PrivateRoutes open={open} />
              </> : 
              <PublicRoutes/>}
          </BrowserRouter>
        </Box>
      </ThemeProvider>
      <ToastContainer autoClose={2000}/>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isLoading: state.loader.isLoading
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
