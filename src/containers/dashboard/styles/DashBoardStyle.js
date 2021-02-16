import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  gridBody: {
    marginTop: "4em",
    background: "whitesmoke",
    width: "95%",
    marginLeft: "2.5%"
  },
  gridTitle: {
    color: "rgba(6, 74, 119, 1)"
  },
  gridValue: {
    color: "rgba(80,80,80,1)",
    marginTop: "0.5em",
    marginLeft: "-0.2em",
    fontSize: "1em"
  },

  gridCard: {
    borderBottom: "1px solid rgba(6, 74, 119, 1)"
  },
  gridIcons: {
    fontSize: "2em",
    color: "rgba(6, 74, 119, 1)"
  }
}));

export default useStyles;
