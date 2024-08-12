import * as React from 'react';
import { useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';


function ToggleColorMode({ mode, toggleColorMode }) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header({ mode,
  toggleColorMode,
  open,
  handleDrawerOpen }
) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profile , setProfile] = React.useState('');
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/user-profile");
  };

  const logout = () => {
    localStorage.removeItem("authentication");
    localStorage.removeItem("token");
    //navigate('/signin');
    window.location.assign("/signin");
    setToken(null);
  };

  React.useEffect(() => {
    if (localStorage.getItem("token") !== null && localStorage.getItem("token").length > 0) {
      const user = JSON.parse(localStorage.getItem("authentication"));
      setProfile(user);
      navigate('/dashboard');
    } else {
      logout();
    }
  }, [localStorage.getItem("token")]);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        variant="regular"
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          bgcolor:
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(24px)",
        })}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            flexGrow: 1,
          }}
        >
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Box>

        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          ><img src={`https://random.imagecdn.app/50/50`} alt="Profile" style={{ marginRight: 10, width: 32, height: 32, borderRadius: '50%' }} /></IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* Menu Items */}
            <MenuItem onClick={handleClose}>
              <img src={`https://random.imagecdn.app/50/50`} alt="Profile" style={{ marginRight: 10, width: 32, height: 32, borderRadius: '50%' }} />

              {profile?.name}
            </MenuItem>

            <MenuItem onClick={logout}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <LogoutIcon />
              </IconButton>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
