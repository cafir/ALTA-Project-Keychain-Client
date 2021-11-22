import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3838FD",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  paper: {
    padding: "10px",
    marginTop: "20px",
    marginBottom: "40px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    position: "relative",
    bottom: "30px",
    width: "fit-content",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  imageNavbar: {
    width: "70%",
    height: "auto",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  log: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "16px",
    color: "#c4c4c4",
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#3838FD",
      color: "#ffffff",
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
