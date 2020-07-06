import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, Box} from '@material-ui/core'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      // maxWidth: "100vh",
      maxHeight:"100vh",
      backgroundColor: theme.palette.background.paper,
      border: '5px solid #cc0c1b',
      boxShadow: theme.shadows[0],
      padding: theme.spacing(2, 4, 3),
    },
    main:{
      fontWeight:"5",
      height:"40px",
      textAlign:"center",
      backgroundColor:' #cc0c1b',
      color:'white',
      letterSpacing:"1.2px",
      borderRadius:"20px 20px",
    }
  }),
);

export const SimpleModal=()=>{
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box style={modalStyle} className={classes.paper}>
      <h2 style={{textAlign:"center"}} id="simple-modal-title">DO'S AND DONT'S OF CORONAVIRUS</h2>
      <div  id="simple-modal-description">
        {/* <p>If you’re looking to help prevent the further spread of COVID-19 in your community, here are some things you can do:</p> */}
        <ul>
          <li>Wash your hands frequently for 20+ seconds with soap and water</li>
          <li>Stay at home and limit contact with others</li>
          <li>Routinely clean frequently touched spaces in your home</li>
          <li>Seek medical help if you’re suffering from a fever, cough or difficulty breathing</li>
          <li>Limit contact with pets and animals</li>
        </ul>
        {/* <p>Self-quarantining and social distancing is the best protocol you can follow at this point, especially since many areas are enforcing lockdowns and shelter in place orders.
            Stay clean, wash your hands, avoid touching your face and disinfect high-traffic areas around your home as often as you can.
        </p> */}
      </div>
      
    </Box>
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
    <Button onClick={handleOpen} variant="contained" className={classes.main} disableElevation> Do's and Dont's </Button>
      {/* <button type="button" onClick={handleOpen}>
        DO AND DONTS
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Box>
  );
}
