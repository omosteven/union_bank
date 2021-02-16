import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    navBar: {
        background: "white",
        height: "4.5em",
        boxShadow: "0px 1px 3px rgba(5,5,5, 0.1), 0px 1px 5px rgba(5,5,5, 0.1)"

    },
    navCont: {
        width: "95%",
        marginLeft: "2.5%"
    },
    navItem: {
        color: "rgba(18, 83, 19, 1)",
        fontWeight: "bold",
        fontSize: "1em"
    },
    menuIcon: {
        width: "5%",
        float: "left",
        color: "rgba(18, 83, 19, 1)"
    },
    dashBoard: {
        width: "fit-content",
        float: "left",
        marginTop: "0.9em"
    },
    noteIcon: {
        width: "fit-content",
        float: "right",
        color: "rgba(18, 83, 19, 1)"
    },
    accountIcon: {
        marginLeft: "1em"
    },
    navIcon: {
        fontSize: "1.3em",
        cursor: "pointer"
    },
    userPopUpCard: {
        background: "white",
        border: "1px solid rgba(255,255,255,0.7)",
        width: "10em"
    },
    userPopUpTitle: {
        color: "rgba(18, 83, 19, 1)",
        fontSize: "1em",
        fontWeight: "bold"
    },
    userPopUpContent: {
        color: "rgba(18, 83, 19, 1)",
        fontSize: "0.9em"
    },
    userPopUpContent2: {
        color: "rgba(18, 83, 19, 1)",
        fontSize: "0.9em",
        marginTop: "0.5em",
        marginBottom: "0.5em"
    },
    divider: {
        color: "rgba(18, 83, 19, 1)",
        fontWeight: "bold"
    },
    links: {
        textDecoration: "none",
        color: "rgba(18, 83, 19, 1)"
    },
    accountBalIcon: {
        marginRight: "0.5em",
        fontSize: "0.95em"
    },
    gridCardInner: {
        color: "rgba(18, 83, 19, 1)",
        marginBottom: "1em"
    },
    gridTitle: {
        color: "rgba(18, 83, 19, 1)"
    },
    gridValue: {
        color: "rgba(18, 83, 19, 1)",
        marginTop: "0.5em",
        fontWeight: "normal",
        marginLeft: "-0.2em",
        fontSize: "1em"
    }
}));

export default useStyles;
