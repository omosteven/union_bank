import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import clsx from "clsx";

import { useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ListItem from "@material-ui/core/ListItem";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import ListItemText from "@material-ui/core/ListItemText";

import NavBar from "./NavBar";

import { Typography } from "@material-ui/core";

import { SupervisorAccount } from "@material-ui/icons";

import useStyles from "./../styles/SideBarStyle";

import useSideBarItem from "./../hooks/useSideBarItems";

import useSideBarBelowItem from "./../hooks/useSideBarBelowItems";

import userToken from "../../../utility/components/userToken";

// import IfaLogo from "../../home/images/IMG-20201114-WA0000.jpg";

const SideBar = (props) => {
  const classes = useStyles();

  const theme = useTheme();

  const sideBarItems = useSideBarItem;

  const sideBarBelowItems = useSideBarBelowItem;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dataObject = {
    TOKEN: userToken(),
  };

  const APIUrl = "https://ifamlmapis.herokuapp.com/user/profile/view";

  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className={classes.root}>
      <NavBar
        classes={classes}
        clsx={clsx}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        pageTitle={props.pageTitle}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography
            component="p"
            variant="subtitle2"
            style={{ color: "rgba(80,80,80,1)", float: "left" }}
          >
            {/* <img
              src={IfaLogo}
              alt="IFA"
              style={{
                width: "2.5em",
                marginRight: "0.5em",
                marginLeft: "-1em",
              }}
            /> */}
            Dashboard
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideBarItems.map((sideBarItem) => (
            <Link
              to={sideBarItem.url}
              style={{ textDecoration: "none" }}
              key={sideBarItem.key}
            >
              <ListItem button key={sideBarItem.title}>
                <ListItemIcon>{sideBarItem.icon}</ListItemIcon>

                <ListItemText
                  primary={sideBarItem.title}
                  style={{ color: "rgba(80,80,80,1)" }}
                />
              </ListItem>
            </Link>
          ))}
          {showAdmin && (
            <Link
              to="/user/admin/"
              style={{ textDecoration: "none" }}
              key="Admin"
            >
              <ListItem button key="Admin">
                <ListItemIcon>
                  <SupervisorAccount style={{ color: "rgba(80,80,80,1)" }} />
                </ListItemIcon>

                <ListItemText
                  primary="Admin"
                  style={{ color: "rgba(80,80,80,1)" }}
                />
              </ListItem>
            </Link>
          )}
        </List>
        <Divider />
        <List>
          {sideBarBelowItems.map((sideBarItem) => (
            <Link
              to={sideBarItem.url}
              style={{ textDecoration: "none" }}
              key={sideBarItem.key}
            >
              <ListItem button key={sideBarItem.title}>
                <ListItemIcon>{sideBarItem.icon}</ListItemIcon>
                <ListItemText
                  primary={sideBarItem.title}
                  style={{ color: sideBarItem.color }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
