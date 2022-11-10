import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom" ; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }, 
  icon:{
    fontSize : 'large'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

           <Typography variant="h6" className={classes.title}>
           <Link style = {{textDecoration : "none" , color : "white"}} to = "/">MENU</Link>
          </Typography>

          <Typography variant="h6" className={classes.icon}>
          <Link style = {{textDecoration: "none"  , color : "white"}} to = "/cart">
            <AddShoppingCartIcon/>
            </Link>
          </Typography>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
