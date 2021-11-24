import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  logo: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    width: "70%",
    height: "auto",
  },
  titleKeyChain: {
    fontFamily: "Poppins",
    fontWeight: 800,
    fontSize: "200%",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  txt: {
    borderRadius: "10px",
    boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  forgotPass: {
    color: '#1A73E8',
    textTransform: "capitalize",
    marginTop: "5px",
    fontFamily: "Poppins",
    fontWeight: 600,
      "&:hover": {
        backgroundColor: "#FFFFFF"
      }
  },
  buttonSubmit: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "capitalize",
    marginTop: "20px",
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
  text: {
    color: "#8c8c8c",
    marginBottom:"10px",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "70%",
  }, 
  buttonSubmit2: {
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "capitalize",
    backgroundColor: "#F4F4F4",
    borderRadius: "20px",
    boxShadow: "0px 0px 5px rgba(119, 119, 119, 1)",
    fontSize: "16px",
    color: "#000000",
      "&:hover": {
        backgroundColor: "#F4f4f4",
        color: "#000000",
        boxShadow: "0px 0px 10px rgba(119, 119, 119, 1)"
      }
  },
  switchSign: {
    textAlign: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  }
}));