import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginTop: 10,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    width: "70%",
    height: "auto",
    marginLeft: 15,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  log: {
    borderColor: "#ff1717",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px rgba(255, 0, 0, 1)",
    fontSize: "12px",
    color: "#000000",
      "&:hover": {
        borderColor: "#ff0000",
        backgroundColor: "#ff1717",
        color: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(255, 0, 0, 1)"
      }
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));