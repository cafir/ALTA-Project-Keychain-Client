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
        borderRadius: '20px',
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
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
}))