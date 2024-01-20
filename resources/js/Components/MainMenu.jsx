import {
    Avatar,
    Box,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Tooltip,
    useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/react";
import classes from "classnames";
import { areEqualShallow } from "../Utilities/Functions";

export default function MainMenu() {
    let theme = useTheme();

    let [tab, setTab] = useState(1);
    let tabsRef = useRef();

    let [profileMenuAnchor, setProfileMenuAnchor] = useState();
    let profileMenuClick = (e) => {
        setProfileMenuAnchor(e.currentTarget);
    };
    let profileMenuIsOpen = Boolean(profileMenuAnchor);
    let profileMenuClose = () => {
        setProfileMenuAnchor(null);
    };

    let [hoverIndicator, setHoverIndicator] = useState({
        left: 0,
        width: 0,
        hovered: false,
        initial: true,
    });
    let updateHoverIndicator = (tabElement) => {
        if (!tabElement) return;
        let menu = tabElement.closest(".main-menu");
        let tabBox = tabElement.getBoundingClientRect();
        let menuBox = menu.getBoundingClientRect();
        let newHoverIndicatorState = {
            left: tabBox.left - menuBox.left,
            width: tabBox.width,
            hovered: true,
            initial: hoverIndicator.initial ? (hoverIndicator.hovered ? false : true) : false,
        };
        if (!areEqualShallow(hoverIndicator, newHoverIndicatorState)) {
            setHoverIndicator({
                left: tabBox.left - menuBox.left,
                width: tabBox.width,
                hovered: true,
                initial: hoverIndicator.initial ? (hoverIndicator.hovered ? false : true) : false,
            });
        }
    };
    let onTabMouseOut = () => {
        setHoverIndicator({ ...hoverIndicator, hovered: false, initial: true });
    };
    useEffect(() => {
        requestAnimationFrame(() => {
            let hoveredTab = tabsRef.current.querySelector(".MuiTab-root:hover");
            updateHoverIndicator(hoveredTab);
        });
    });
    let getMainTab = (label, icon, id) => {
        let active = id == tab;
        let iconMaxSize = active ? "30px" : "0";
        let iconMRight = active ? "8px" : "0";
        return (
            <Tab
                sx={{
                    minHeight: "48px",
                }}
                label={label}
                icon={
                    <motion.div
                        className={classes("overflow-hidden", { active })}
                        animate={{ maxWidth: iconMaxSize, marginRight: iconMRight }}
                        transition={{ duration: 0.2, delay: active ? 0.2 : 0 }}
                    >
                        {icon}
                    </motion.div>
                }
                iconPosition="start"
                id={"item-" + id}
                onMouseEnter={(e) => updateHoverIndicator(e.target)}
                onMouseLeave={onTabMouseOut}
            />
        );
    };

    let setActiveTab = (e, v) => {
        setTab(v);
    };

    return (
        <div className="flex w-full items-end gap-4">
            <Box
                className="main-menu flex-grow"
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    position: "relative",
                }}
            >
                <Tabs
                    ref={tabsRef}
                    className="mb-[-1px]"
                    value={tab}
                    onChange={setActiveTab}
                    sx={{
                        "& .MuiTab-root.Mui-selected:hover::before": {
                            content: '""',
                            width: "50%",
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            height: "2px",
                            background: theme.palette.secondary.main,
                        },
                        "& .MuiTab-root::after": {
                            content: '""',
                            width: "0",
                            position: "absolute",
                            bottom: 0,
                            height: "2px",
                            background: theme.palette.primary.main,
                        },
                        "& .MuiTab-root.Mui-selected::after": {
                            width: "100%",
                            transition: "all 0.2s",
                            transitionDelay: "0.15s",
                        },
                    }}
                >
                    <motion.div
                        className="absolute bottom-0 h-[2px]"
                        animate={{ left: hoverIndicator.left, width: hoverIndicator.width + "px" }}
                        transition={{
                            duration: hoverIndicator.initial ? 0 : 0.1,
                        }}
                    >
                        <motion.div
                            className="m-auto h-full"
                            style={{ background: theme.palette.secondary.main }}
                            animate={{
                                width: hoverIndicator.hovered ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.div>
                    {getMainTab("Dictionary", <FontDownloadIcon />, 1)}
                    {getMainTab("Textbook", <MenuBookIcon />, 2)}
                    {getMainTab("My words", <AssignmentIcon />, 3)}
                    {getMainTab("Excercises", <SpellcheckIcon />, 4)}
                    {getMainTab("About", <InfoIcon />, 5)}
                </Tabs>
            </Box>
            <Tooltip title="Профиль">
                <IconButton
                    size="small"
                    onClick={profileMenuClick}
                    aria-controls={profileMenuIsOpen ? "profile-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={profileMenuIsOpen ? "true" : undefined}
                >
                    <Avatar sx={{ width: 40, height: 40 }}>
                        <PersonIcon />
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                id="profile-menu"
                open={Boolean(profileMenuAnchor)}
                anchorEl={profileMenuAnchor}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                onClose={profileMenuClose}
                onClick={profileMenuClose}
            >
                <MenuItem id="profile-menu_profile-item">
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Профиль
                </MenuItem>
                <Divider />
                <MenuItem id="profile-menu_settings-item">
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    Настройки
                </MenuItem>
                <MenuItem
                    id="profile-menu_logout-item"
                    onClick={() => router.visit(route("login"))}
                >
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Выйти
                </MenuItem>
            </Menu>
        </div>
    );
}
