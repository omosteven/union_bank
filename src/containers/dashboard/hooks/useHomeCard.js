import React from "react";

import {
  ArrowUpward,
  ArrowDownward,
  PersonAdd,
  TrendingUp,
} from "@material-ui/icons";

const useHomeCard = [
  {
    title: "UPLINE",
    value: "stevenJay",
    icon: (
      <ArrowUpward
        style={{ fontSize: "1.5em", color: "rgba(6, 74, 119, 1)" }}
      />
    ),
  },

  {
    title: "LEVEL",
    value: 1,
    icon: (
      <TrendingUp style={{ fontSize: "2em", color: "rgba(6, 74, 119, 1)" }} />
    ),
  },
  {
    title: "DOWNLINES",
    value: 5,
    icon: (
      <ArrowDownward
        style={{ fontSize: "2em", color: "rgba(6, 74, 119, 1)" }}
      />
    ),
  },
  {
    title: "REGISTER CODE",
    value: 0,
    icon: (
      <PersonAdd style={{ fontSize: "2em", color: "rgba(6, 74, 119, 1)" }} />
    ),
  },
];

export default useHomeCard;
