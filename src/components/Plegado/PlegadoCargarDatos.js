/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import MailOutline from "@material-ui/icons/MailOutline";
import CardIcon from "components/Card/CardIcon.js";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
import Close from "@material-ui/icons/Close";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Instruction from "components/Instruction/Instruction.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";
import PlegadoFormularioPiezas from "./PlegadoFormularioPiezas";
 


const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function PlegadoCargarDatos() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  const [classicModal, setClassicModal] = React.useState(false);
  const [noticeModal, setNoticeModal] = React.useState(false);
  const [smallModal, setSmallModal] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.center}>
          <div
            className={
              classes.cardHeader +
              " " +
              classes.center +
              " " +
              classes.modalSectionTitle
            }
          >
            <h4 className={classes.cardTitle}>Elija una de las Opciones</h4>
          </div>
          <Button
            color="primary"
            round
            className={classes.marginRight}
            onClick={() => setClassicModal(true)}
          >
            Cargar Piezas
          </Button>
          <Dialog
            classes={{
              root: classes.center + " " + classes.modalRoot,
              paper: classes.modal
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setClassicModal(false)}
              >
                
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.modalTitle}>Piezas</h4>
            </DialogTitle>
            <PlegadoFormularioPiezas />
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
       
            </DialogContent>
          </Dialog>





          <Button
            color="rose"
            round
            className={classes.marginRight}
            onClick={() => setSmallModal(true)}
          >
            Por si falta
          </Button>
          <Dialog
            classes={{
              root: classes.center + " " + classes.modalRoot,
              paper: classes.modal + " " + classes.modalSmall
            }}
            open={smallModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setSmallModal(false)}
            aria-labelledby="small-modal-slide-title"
            aria-describedby="small-modal-slide-description"
          >
            <DialogTitle
              id="small-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              
              <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setSmallModal(false)}
              >
               
                <Close className={classes.modalClose} /> 
              </Button>
              <h4 className={classes.modalTitle}>Prueba</h4>
            </DialogTitle>
     
          </Dialog>






          <Button
            color="info"
            round
            className={classes.marginRight}
            onClick={() => setNoticeModal(true)}
          >
            Por si falta
                    </Button>
          <Dialog
            classes={{
              root: classes.center + " " + classes.modalRoot,
              paper: classes.modal
            }}
            open={noticeModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setNoticeModal(false)}
            aria-labelledby="notice-modal-slide-title"
            aria-describedby="notice-modal-slide-description"
          >
            <DialogTitle
              id="notice-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setNoticeModal(false)}
              >
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.modalTitle}>Por si falta</h4>
            </DialogTitle>
           
            <DialogActions
              className={
                classes.modalFooter + " " + classes.modalFooterCenter
              }
            >
            </DialogActions>
          </Dialog>
        </GridItem>



      </GridContainer>
    </Card>
  );
}
