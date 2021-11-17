import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#3838FD",
    boxShadow: "none",
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  imageNavbar: {
    width: "70%",
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
    padding: 0,
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontSize: "14px",
    color: "#ffffff"
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'flex-start',
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
      }
  },
  logout: {
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
      }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    justifyContent: "center",
    alignItems: "center"
  },
}));