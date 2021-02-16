import React from 'react';

import {
    Home,
    AccountCircle,
    AttachMoney,
    Payment,
    ShowChart,
    SupervisorAccount,
    ViewColumn
} from '@material-ui/icons';

const sideBarItems = [
    {
        key: 'sideItem1',
        title: 'Home',
        icon: <Home style={{color: 'rgba(5, 5, 5, 0.75)'}} />,
        url: '/user/'
    },
    {
        key: 'sideItem2',

        title: 'Profile',
        icon: <AccountCircle style={{color: 'rgba(5, 5, 5, 0.75)'}} />,
        url: '/user/profile/'
    },
    {
        key: 'sideItem3',

        title: 'My Spendings',
        icon: <AttachMoney style={{color: 'rgba(5, 5, 5, 0.75)'}} />,
        url: '/user/spendings/'
    },
    {
        key: 'sideItem4',

        title: 'Transactions',
        icon: <Payment style={{color: 'rgba(5, 5, 5, 0.75)'}} />,
        url: '/user/transactions/'
    },
    // {
    // key: "sideItem5",

    // title: "Analytics",
    // icon: <ShowChart style={{ color: "rgba(80,80,80,1)" }} />,
    // url: "/user/analytics/"
    // },

    {
        key: 'sideItem6',

        title: 'Product',
        icon: <ViewColumn style={{color: 'rgba(5, 5, 5, 0.75)'}} />,
        url: '/user/analytics/'
    },

];

export default sideBarItems;
