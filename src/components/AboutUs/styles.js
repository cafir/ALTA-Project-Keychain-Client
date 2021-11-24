import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  aboutUs: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
    marginTop: theme.spacing(8),
    borderTop: "2px solid #c4c4c4",
    borderBottom: "2px solid #c4c4c4",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  titleAboutUs: {
      display: "flex",
      fontFamily: "Poppins",
      fontWeight: 800,
      fontSize: 22,
      flexDirection: "row",
      justifyContent: "space-between",
      cursor: "pointer"
  },
  titleSubAboutUs: {
    display: "flex",
    fontFamily: "Poppins",
    fontWeight: 600,
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  dropDown: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "10px",
  },
  arrow: {
    cursor: "pointer",
  },
  isi: {
    fontFamily: "Poppins",
    fontWeight: 500,
    paddingLeft: "10px",
    textAlign: "justify",
    marginBottom: "10px"
  },
  aboutCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify"
  },
  logo: {
    width: "50%",
    height: "auto",
  },
  blueKey: {
    color: "#0085FF",
  },
  blackKey: {
    color: "#000000",
  },
  redKey: {
    color: "#FF002E",
  },
  isiTeam: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: 500,
    paddingLeft: "10px",
    marginBottom: "10px"
  },
  photo: {
    marginBottom: "10px",
    width: "30%",
    height: "auto",
    boxShadow: "4px 6px 10px rgba(0, 0, 0, 1)"
  },
  groupPhoto: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "10px",
  }
}))