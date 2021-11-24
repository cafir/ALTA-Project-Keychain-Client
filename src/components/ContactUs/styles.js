import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contactUs: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(8),
  },
  logo: {
      width: "40%",
      height: "auto",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 600,
    marginTop: theme.spacing(4)
  },
  icon: {
    textAlign: "center",
      marginTop: theme.spacing(1),
  },
  icons: {
      width: "8%",
      height: "auto",
      cursor: "pointer",
      padding: "10px",
  }
}))