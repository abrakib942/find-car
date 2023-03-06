import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ShoppingCartOutlined, FavoriteBorder } from "@mui/icons-material";

import SearchBox from "../../components/SearchBox";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import { Link, NavLink } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "HOME", link: "/" },
  { label: "VEHICLES", link: "/vehicles" },
  { label: "ACCESSORIES", link: "/accessories" },
  { label: "My ACCOUNT", link: "/my-account" },
  { label: "ABOUT US", link: "/about" },
];
const settings = ["Submit Cars", "My Car", "My Account"];

const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
        RoadRover
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.link}>
            <ListItem key={item.label} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="bg-white shadow-none" component="nav">
        <Toolbar className="p-0 flex items-center sm:justify-between sm:mr-10 lg:mr-0">
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ml: 1, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            style={{
              borderTop: " 70px solid rgb(251,225,34)",
              borderRight: "70px solid transparent",
              width: "250px",

              position: "relative",
            }}
            className=" text-black font-semibold italic xl:text-4xl lg:text-3xl font-sans"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0.5,
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: "-50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              RoadRover
            </span>
          </Typography>

          <Box
            className=""
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            {navItems.map((item) => (
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                        borderBottom: "6px solid rgb(251,225,34) ",
                        borderRight: "10px solid transparent",
                        width: "5px",
                      }
                    : { color: "#545e6f", background: "white" }
                }
                to={item.link}
                key={item.label}
              >
                <Button
                  className="text-black font-sans font-bold mb-2"
                  variant="text"
                  color="inherit"
                >
                  {item.label}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box className="text-black flex items-center lg:mx-6 ml-6">
            <SearchBox
              placeholder="Search"
              searchText=""
              // searchHistory={searchHistory}
              applySearch={(value) => {}}
            />
            <ShoppingCartOutlined className="ml-5" />
            <FavoriteBorder className="ml-3 lg:mr-5" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;

///

{
  /* <Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <MenuIcon className="ml-5 lg:mr-8" />
    </IconButton>
  </Tooltip>
  <Menu
    sx={{ mt: "45px" }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
    {settings.map((setting) => (
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography textAlign="center">{setting}</Typography>
      </MenuItem>
    ))}
  </Menu>
</Box>; */
}

//  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//    null
//  );

//  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//    setAnchorElNav(event.currentTarget);
//  };
//  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//    setAnchorElUser(event.currentTarget);
//  };

//  const handleCloseNavMenu = () => {
//    setAnchorElNav(null);
//  };

//  const handleCloseUserMenu = () => {
//    setAnchorElUser(null);
//  };
