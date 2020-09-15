import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "@material-ui/core/Icon";
import "./header.css";
import logo2 from "../../logo2.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import banner from "../../bannerbackground.png";
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
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
  }));
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar
          style={{ backgroundColor: "white", boxShadow: "0 0 0 0" }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img
                style={{ width: "100px", height: "30px" }}
                src={logo2}
                alt=""
              />
            </Typography>
            <ShoppingCartIcon
              style={{ color: "black", marginRight: "20px" }}
            ></ShoppingCartIcon>
            <Button
              style={{
                color: "black",
                fontStyle: "none",
                fontWeight: "none",
                marginRight: "20px",
              }}
            >
              Log in
            </Button>
            <button
              className="btn btn-danger"
              style={{
                borderRadius: "30px",
                height: " 30px",
                width: "70px",
                padding: "0",
                fontSize: "12px",
              }}
            >
              Sign up
            </button>
          </Toolbar>
        </AppBar>
      </div>

      <div style={{width: "100%", height: "400px"}}>
            <img style={{height:'400px',position:'absolute'}} src={banner} alt=""/>
                
                <div style={{position:'relative', width:'30%',height:'50px', margin:'0 auto',}}>
                    <input style={{marginTop:'200px'}} type="text" placeholder="Search.." name="search"/>
                    <button style={{marginTop:'200px'}} className='btn-danger' type="submit"><SearchIcon style={{borderRadius:'5px'}}/></button>
                   
                </div>
        </div>
        
    </div>
     
  );
};

export default Header;
