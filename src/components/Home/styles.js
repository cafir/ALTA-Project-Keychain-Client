import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  con: {
      backgroundColor: "#FFFFFF",
      paddingBottom: "30px",
  },
    pagination: {
        borderRadius: 15,
        marginTop: '1rem',
        padding: '16px',
    },
    appBarSearch: {
        marginBottom: '2rem',
        display: 'flex',
        alignItems: "center",
        padding: '16px',
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
      },
    buttonSubmit: {
      fontFamily: "Poppins",
      fontWeight: 700,
      textTransform: "capitalize",
      marginTop: "20px",
      width: "80%",
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
    txt: {
      borderRadius: "10px",
      boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#FFFFFF",
      width: "80%",
      fontFamily: "Roboto",
      fontWeight: 400,
    },
}))