import React,{useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { UserContext } from './../../Context'

export default function AlertDialog() {
  const con = useContext(UserContext);


  // function handleClickOpen() {
  //   let val = {
  //       isAlertOpen: true,
  //       alertMsgs: '',
  //       alertType: '', 
  //   }
  //   con.dispatch({ type: 'setAlert', val: val })
  // }

  function handleClose() {
    con.dispatch({ type: 'setAlert', val: {isAlertOpen:false} })
    // con.dispatch({ type: 'setAlert', val: {alertMsg: '',alertTitle: '',alertType: '', }});
  }

  return (
    <div>
      <Dialog
        open={con.state.alertData.isAlertOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{con.state.alertData.alertTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {con.state.alertData.alertMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}