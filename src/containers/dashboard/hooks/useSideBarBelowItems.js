import React from "react";

import {ExitToApp, Settings} from "@material-ui/icons";

const sideBarBelowItems = [
    {
        key: "sideBelowItem1",
        title: "Settings",
        icon: <Settings style={{ color: "rgba(5, 5, 5, 0.75)" }} />,
        url: "/user/settings/",
        color: "rgba(5,5,5,0.75)"
    }, {
        key: "sideBelowItem2",

        title: "Sign Out",
        icon: <ExitToApp style={{ color: "rgba(5, 5, 5, 0.75)" }} />,
        url: "/auth/signout/",
        color: "red"
    }
];

export default sideBarBelowItems;
