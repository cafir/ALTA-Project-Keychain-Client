import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    marginBottom: "10px",
    boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
    width: "95%",
    padding: "10px 0 10px 0"
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 0 0 20px",
    textAlign: "left",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 400,
    cursor: "pointer",
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  isi: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 0 0 20px",
    textAlign: "left",
  },
  passIsi: {
    fontFamily: "Poppins",
    fontWeight: 400,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0 0 0 20px",
    textAlign: "left",
    color: "#000000",
  },
  modalDelete: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  modalDeleteImg: {
    width: "60px",
    height: "auto",
  },
  btnYesNo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  btnYes: {
    borderRadius: "10px",
    color: "#ffffff",
    fontWeight: "bold",
    marginRight: "10%",
    backgroundColor: "#3838FD",
      "&:hover": {
        backgroundColor: "#3838FD",
        boxShadow: "0px 0px 5px rgba(0, 0, 255, 1)"
      }
  },
  btnNo: {
    borderRadius: "10px",
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: "10%",
    backgroundColor: "#FD3838",
      "&:hover": {
        backgroundColor: "#FD3838",
        boxShadow: "0px 0px 5px rgba(255, 0, 0, 1)"
      }
  },
  pass: {
    fontFamily: "Poppins",
    fontWeight: 400,
  }
});