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
import { motion } from "framer-motion";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function MainMenu() {
    let [tab, setTab] = useState(1);
    let [profileMenuAnchor, setProfileMenuAnchor] = useState();
    let [hoverIndicator, setHoverIndicator] = useState({
        left: 0,
        width: 0,
        hovered: false,
        initial: true,
    });
    let theme = useTheme();
    let onTabMouseIn = (e) => {
        let menu = e.target.closest(".main-menu");
        let tabBox = e.target.getBoundingClientRect();
        let menuBox = menu.getBoundingClientRect();
        setHoverIndicator({
            left: tabBox.left - menuBox.left,
            width: tabBox.width,
            hovered: true,
            initial: hoverIndicator.initial ? (hoverIndicator.hovered ? false : true) : false,
        });
    };
    let onTabMouseOut = () => {
        setHoverIndicator({ ...hoverIndicator, hovered: false, initial: true });
    };
    let tabProps = { onMouseEnter: onTabMouseIn, onMouseLeave: onTabMouseOut };
    let profileMenuClick = (e) => {
        setProfileMenuAnchor(e.currentTarget);
    };
    let profileMenuClose = ({ ...args }) => {
        setProfileMenuAnchor(null);
    };
    let profileMenuIsOpen = Boolean(profileMenuAnchor);
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
                <Tabs className="mb-[-1px]" value={tab} onChange={(e, v) => setTab(v)}>
                    <motion.div
                        className="absolute bottom-0 h-[2px]"
                        style={{ width: hoverIndicator.width + "px" }}
                        animate={{ left: hoverIndicator.left }}
                        transition={{
                            duration: hoverIndicator.initial ? 0 : 0.2,
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

                    <Tab label="Item One" id="item-0" {...tabProps} />
                    <Tab label="Item Two" id="item-1" {...tabProps} />
                    <Tab label="Item Three" id="item-2" {...tabProps} />
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
