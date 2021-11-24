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
    width: "60%",
    height: "auto",
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
    padding: 0,
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 5,
  },
  logoModal: {
    width: "120px",
    height: "auto",
    marginBottom: theme.spacing(2)
  },
  styleModal: {
    position: "absolute",
    top: "120px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "10px 20px 10px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subStyleModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subSubStyleModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: theme.spacing(8),
  },
  userName: {
    fontFamily: "Poppins",
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    color: "#000000",
    marginLeft: 5,
  },
  brandContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  log: {
    fontFamily: "Poppins",
    fontWeight: 600,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "16px",
    color: "#c4c4c4",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#3838FD",
      color: "#ffffff",
    },
  },
  logout: {
    fontFamily: "Poppins",
    fontWeight: 600,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "16px",
    color: "#3838FD",
    textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#ffffff",
        color: "#0000ff",
      }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));
