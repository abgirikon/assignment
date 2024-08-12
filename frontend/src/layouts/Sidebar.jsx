import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {styled, useTheme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from '@mui/material/Tooltip';
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const paths = [
    {
        path: "/dashboard",
        label: "Dashboard",
    },
    {
        path: "/user",
        label: "Users",
    }
];

export const SideBar = ({
                            open,
                            handleDrawerClose,
                            setMainLayout,
                            mainLayout,
                            orgName,
                        }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [userdata] = useState(JSON.parse(localStorage.getItem('authentication')));
    const [userType, setUserType] = useState(false);
    useEffect(() => {
        if (userdata != null) {
            setUserType(userdata.is_admin);
        }
    }, [userdata]);


    const onClickButton = (e, value) => {
        e.preventDefault();

        let v = paths.find((p) => p.path === value);
        setMainLayout(v);
        // navigate(`/${orgName}/${value}`);
        navigate(value);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <h4>Assignment</h4>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon/>
                    ) : (
                        <ChevronLeftIcon/>
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider/>

            <List component="nav">
                <Tooltip title="Dashboard" placement="right">
                    <ListItemButton
                        onClick={(e) => onClickButton(e, "/dashboard")}
                        selected={mainLayout.path === "/dashboard"}
                    >
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItemButton>
                </Tooltip>

                <Tooltip title="Users" placement="right">
                    {userType && <ListItemButton
                        onClick={(e) => onClickButton(e, "/user")}
                        selected={mainLayout.path === "/user"}
                    >
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Users"/>
                    </ListItemButton>}
                </Tooltip>
            </List>
        </Drawer>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);