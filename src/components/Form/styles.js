import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleHolder: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "100%",
    marginBottom: theme.spacing(1),
    cursor: "pointer",
  },
  rataTengah: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: 'wrap',
  },
  txt: {
    borderRadius: "10px",
    boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
    width: "95%",
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  buttonSubmit: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "capitalize",
    marginTop: "20px",
    width: "95%",
    backgroundColor: "#3838FD",
    borderRadius: "20px", 
    boxShadow: "0px 0px 5px rgba(56, 56, 253, 1)",
    fontSize: "16px",
    color: "#ffffff",
      "&:hover": {
        backgroundColor: "#1717FF",
        color: "#FFFFFF",
        boxShadow: "0px 0px 10px rgba(0, 0, 255, 1)"
      }
  },
}));