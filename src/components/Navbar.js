import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/1.png";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@mui/material';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem",
    },
    appBar: {
      backgroundColor: "whitesmoke",
      boxShadow: "none",
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(2),
    },
    image: {
      marginRight: "10px",
    },
  }));

const Navbar = () => {  
const classes = useStyles();
const [{ basket },/*  dispatch */] = useStateValue();
/* const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} role={undefined} />
  )); */


  return (
      <div className={classes.root}>
          <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>
                  <Link to="/">
                  <IconButton>
                    <img                        
                        src={logo}
                        alt='Commerce.js'
                        height='80px'
                        className={classes.image}
                    />                      
                  </IconButton>
                  </Link>
                  <div className={classes.grow} />
                  <Typography variant="h6" color="Primary" component="p">
                      Hello Guest
                  </Typography>
                  <div className={classes.button}>                    
                    <Button variant="outline" color="Primary" component={Link} to="signin">
                         <strong>Sign In</strong>                         
                    </Button>    
                      <IconButton areia-label="show cart items" color="inherit" component={Link} to="checkout-page"> 
                        <Badge badgeContent={basket?.length} color="secondary">                          
                            <ShoppingCart fontSize="large" color="textPrimary"/>
                        </Badge>
                      </IconButton>                                                                                   
                  </div>                  
              </Toolbar>
          </AppBar>
      </div>   
  );
}  


export default Navbar;