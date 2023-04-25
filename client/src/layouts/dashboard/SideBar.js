import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import { useTheme } from "@mui/material/styles";

import Logo from "../../assets/Images/logoV3.png";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import { UpdateSidebarTab } from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../redux/slices/auth";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/home";
    case 1:
      return "/enrollment";
    case 2:
      return "/contact";
    case 3:
      return "/q&a";
    case 4:
      return "/settings";

    default:
      break;
  }
};

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      // Update token & set isAuthenticated to false
      return "/auth/login";

    default:
      break;
  }
};

const SideBar = () => {
  const dispatch = useDispatch();
  const sidebarTab = useSelector((state) => state.app.sidebarTab);
  const theme = useTheme();

  const navigate = useNavigate();

  const [selected, setSelected] = useState(sidebarTab);

  const handleChangeTab = async (tabNum) => {
    dispatch(UpdateSidebarTab(tabNum));
    navigate(getPath(tabNum));
  };

  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setSelected(sidebarTab);
  }, [sidebarTab]);

  const handleMenu0 = () => {
    console.log("hii handle 0")
  };
  const handleMenu1 = () => {
    console.log("hii handle 1")
  };
  const handleMenu2 = () => {
    dispatch(LogoutUser());
  };

  const getMenuFunction = (index) => {
    switch (index) {
      case 0:
        return handleMenu0();
      case 1:
        return handleMenu1();
      case 2:
        return handleMenu2();
      default:
        break;
    }
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
      zIndex="2"
    >
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Stack
            sx={{
              height: 64,
              width: 64,
              borderRadius: 1.5,
              background: theme.palette.primary.light,
            }}
            alignItems="center"
            justifyContent="center"
          >
            <img width={48} src={Logo} alt={"Chat App Logo"} />
          </Stack>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                  key={el.index}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    handleChangeTab(el.index);
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: "48px" }} />
            {selected === 4 ? (
              <Box
                // p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  handleChangeTab(4);
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems={"center"}>
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => {
                    getMenuFunction(idx);
                  }}
                >
                  <Stack
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between"
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
