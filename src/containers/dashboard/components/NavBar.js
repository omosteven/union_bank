import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import {
  Grid,
  Typography,
  CardActionArea,
  Card,
  CardContent, List, ListItem, ListItemText, IconButton, Box, Popover, Divider
} from "@material-ui/core";

import {
  Menu,
  Notifications,
  PersonOutline,
  AccountBalanceRounded,
  AccountCircle,
} from "@material-ui/icons";


import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import { fetchApi } from "../../../utility/components/fetchApi";

import userToken from "../../../utility/components/userToken";

// import IfaLogo from "../../home/images/IMG-20201114-WA0000.jpg";

import useStyles from "../styles/NavBarStyle";

const NavBar = (props) => {
  const classes = useStyles();

  const [navBarInfo, setNavBarInfo] = useState("");

  const [noteDetails, setNoteDetails] = useState([
    {
      TITLE: "OPS!",
      VALUE: "",
    },
  ]);

  const dataObject = {
    TOKEN: userToken(),
  };

  const APIUrl = "https://ifamlmapis.herokuapp.com/user/profile/view";

  // const APIUrl = "http://localhost:5000/user/profile/view";

  useEffect(() => {
    (async () => {
      const { isError, data } = await fetchApi(dataObject, "POST", APIUrl);
      if (isError) {
        setNavBarInfo({
          FULLNAME: "REFRESH",
          USERID: "REFRESH",
          AMOUNT: "REFRESH",
        });
      } else {
        setNavBarInfo({
          FULLNAME:
            data.message.data.FIRSTNAME + " " + data.message.data.LASTNAME,
          USERID: data.message.data.USERCODE,
          AMOUNT: data.message.data.AMOUNT,
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noteBtn = () => {
    console.log("seen");

    // const APIUrlNote = "https://ifamlmapis.herokuapp.com/notifications/view/";

    const APIUrlNote = "http://localhost:5000/notifications/view/";


    (async () => {
      const { isError, data, errorMessage } = await fetchApi(
        dataObject,
        "POST",
        APIUrlNote
      );
      if (isError) {
        setNoteDetails([
          {
            TYPE: "OPS!",
            NOTIFICATION: errorMessage,
          },
        ]);
      } else {
        setNoteDetails(data.message);
      }
    })();
  };
  return (
    <>
      <AppBar position="fixed" className={classes.navBar}>
        <Toolbar>
          <List component="nav" className={classes.navCont}>
            <ListItem component="div">
              <Grid item={true} md={9} xs={9} sm={9}>
                <ListItemText className={classes.menuIcon}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={
                      (classes.navItem,
                      props.clsx(
                        props.classes.menuButton,
                        props.open && props.classes.hide
                      ))
                    }
                  >
                    {/* <img
                      src={IfaLogo}
                      alt="IFA"
                      style={{
                        width: "1em",
                        marginRight: "0.5em",
                        marginLeft: "-1em",
                      }}
                    /> */}

                    <Menu />
                  </IconButton>
                </ListItemText>

                <ListItemText inset className={classes.dashBoard}>
                  <Typography
                    variant="h6"
                    component="h6"
                    color="inherit"
                    className={classes.navItem}
                    style={{ fontSize: "0.85em" }}
                  >
                    {props.pageTitle}
                  </Typography>
                </ListItemText>
              </Grid>
              <Grid item={true} md={3} xs={6} sm={3}>
                <ListItemText inset className={classes.noteIcon}>
                  <Typography
                    variant="h6"
                    component="h6"
                    color="inherit"
                    className={(classes.navItem, classes.navIcon)}
                    onClick={noteBtn}
                  >
                    <PopupState
                      variant="popover"
                      popupId="demo-popup-popover"
                      className={classes.accountIcon}
                      style={{
                        borderBottom: "2px solid rgba(6, 74, 119, 1)",
                      }}
                    >
                      {(popupState) => (
                        // <div>
                        <span>
                          <Notifications
                            className={classes.navIcon}
                            {...bindTrigger(popupState)}
                          />
                          {/* Me */}
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Box p={2} className={classes.userPopUpCard}>
                              <Typography
                                component="h5"
                                variant="h5"
                                className={classes.userPopUpTitle}
                              >
                                Notifications.
                              </Typography>
                            </Box>
                            <Divider className={classes.divider} />
                            <Grid
                              style={{
                                height: "20em",
                                width: "20em",
                                overflow: "scroll",
                              }}
                            >
                              {noteDetails.map((notify) => (
                                <Grid
                                  item={true}
                                  md={12}
                                  xs={12}
                                  sm={12}
                                  key="gridNotify"
                                >
                                  <Card className={classes.gridCardInner}>
                                    <CardActionArea>
                                      <CardContent>
                                        <Typography
                                          component="b"
                                          variant="b"
                                          className={classes.gridTitle}
                                        >
                                          {notify.TYPE}
                                        </Typography>
                                        <Typography
                                          component="h6"
                                          variant="h6"
                                          className={classes.gridValue}
                                        >
                                          {notify.NOTIFICATION}
                                        </Typography>
                                      </CardContent>
                                    </CardActionArea>
                                  </Card>
                                </Grid>
                              ))}

                              <Divider className={classes.divider} />
                            </Grid>
                            <Grid
                              style={{
                                textAlign: "center",
                                textDecoration: "none",
                                height: "2.5em",
                              }}
                            >
                              <Link
                                to="/user/notifications/"
                                style={{
                                  textAlign: "center",
                                  textDecoration: "none",
                                  fontSize: "0.9em",
                                  marginTop: "0.5em",
                                }}
                              >
                                VIEW ALL
                              </Link>
                            </Grid>
                            <Divider className={classes.divider} />
                          </Popover>
                          {/*  </div> */}
                        </span>
                      )}
                    </PopupState>

                    {/* <Notifications className={classes.navIcon} /> */}
                    {/* <Notifications className={classes.navIcon} /> */}
                    {/* </Typography> */}
                    {/* </ListItemText>

                <ListItemText inset className={classes.accountIcon}> */}
                    {/* <Typography
                    variant="h6"
                    component="h6"
                    color="inherit"
                    className={classes.navItem}
                  > */}
                    <PopupState
                      variant="popover"
                      popupId="demo-popup-popover"
                      className={classes.accountIcon}
                      style={{
                        borderBottom: "2px solid rgba(6, 74, 119, 1)",
                      }}
                    >
                      {(popupState) => (
                        // <div>
                        <span>
                          <AccountCircle
                            className={classes.navIcon}
                            {...bindTrigger(popupState)}
                          />
                          {/* Me */}
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Box p={2} className={classes.userPopUpCard}>
                              <Typography
                                component="h5"
                                variant="h5"
                                className={classes.userPopUpTitle}
                              >
                                {navBarInfo.FULLNAME}
                              </Typography>
                            </Box>
                            <Divider className={classes.divider} />
                            <Box p={2} className={classes.userPopUpCard}>
                              <Typography
                                component="h6"
                                variant="h6"
                                className={classes.userPopUpContent}
                              >
                                User ID : {navBarInfo.USERID}
                              </Typography>
                            </Box>
                            <Divider className={classes.divider} />
                            <Box p={2} className={classes.userPopUpCard}>
                              <Typography
                                component="h6"
                                variant="h6"
                                className={classes.userPopUpContent2}
                              >
                                <Link
                                  to="/user/account/"
                                  className={classes.links}
                                >
                                  My Account
                                </Link>
                              </Typography>
                              <Typography
                                component="h6"
                                variant="h6"
                                className={classes.userPopUpContent2}
                              >
                                <Link
                                  to="/user/profile/"
                                  className={classes.links}
                                >
                                  My Profile
                                </Link>
                              </Typography>
                            </Box>
                            <Divider className={classes.divider} />
                            <Box p={2} className={classes.userPopUpCard}>
                              <Typography
                                component="h6"
                                variant="h6"
                                className={classes.userPopUpContent}
                              >
                                <AccountBalanceRounded
                                  className={classes.accountBalIcon}
                                />
                                N {navBarInfo.AMOUNT}
                              </Typography>
                            </Box>
                          </Popover>
                          {/*  </div> */}
                        </span>
                      )}
                    </PopupState>
                  </Typography>
                </ListItemText>
              </Grid>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
