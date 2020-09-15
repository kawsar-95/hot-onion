import React from "react";
import "./dinner.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import breakfast1 from '../../Breakfast/breakfast1.png';
import breakfast2 from '../../Breakfast/breakfast2.png';
import breakfast3 from '../../Breakfast/breakfast3.png';
import breakfast4 from '../../Breakfast/breakfast4.png';
import breakfast5 from '../../Breakfast/breakfast5.png';
import breakfast6 from '../../Breakfast/breakfast6.png';

const Dinner = () => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      const classes = useStyles();
    
      const typeStyle = {
            textAlign:'center',
            margin:'0 auto',
      }
      const imgStyle = {
        width:'200px',
        height:'200px',
        textAlign:'center',
        justifyContent:'center',
        marginLeft:'50px',
      }
    return (
        <div style={{margin:'70px'}}  className="header">
        <Card id="card" className= {classes.root}>
          <CardActionArea>
            <img style={imgStyle} src={breakfast1} alt=""/>
            <CardContent style={typeStyle}>
              <Typography gutterBottom variant="h5" component="h2">
                Healthy meal plan
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How we dream about our future
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <h2 style={typeStyle}>$23.99</h2>
              
          </CardActions>
        </Card>
  
        <Card id="card" className= {classes.root}>
          <CardActionArea>
            <img style={imgStyle} src={breakfast2} alt=""/>
            <CardContent style={typeStyle}>
              <Typography gutterBottom variant="h5" component="h2">
                Fried Chicken Bento
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How we dream about our future
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <h2 style={typeStyle}>$9.99</h2>
              
          </CardActions>
        </Card>
  
  
        <Card id="card" className= {classes.root}>
          <CardActionArea>
            <img style={imgStyle} src={breakfast3} alt=""/>
            <CardContent style={typeStyle}>
              <Typography gutterBottom variant="h5" component="h2">
                Tarragon-Rubbed Saimon
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How we dream about our future
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <h2 style={typeStyle}>$6.99</h2>
              
          </CardActions>
        </Card>
  
        <Card id="card" className= {classes.root}>
          <CardActionArea>
            <img style={imgStyle} src={breakfast4} alt=""/>
            <CardContent style={typeStyle}>
              <Typography gutterBottom variant="h5" component="h2">
                Indian Lunch
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How we dream about our future
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <h2 style={typeStyle}>$8.99</h2>
              
          </CardActions>
        </Card>
  
  
        <Card id="card" className= {classes.root}>
          <CardActionArea>
            <img style={imgStyle} src={breakfast5} alt=""/>
            <CardContent style={typeStyle}>
              <Typography gutterBottom variant="h5" component="h2">
                Beef Steak
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How we dream about our future
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <h2 style={typeStyle}>$15.99</h2>
              
          </CardActions>
        </Card>
  
  
       <Card id="card" className= {classes.root}>
          <CardActionArea>
            <img style={imgStyle} src={breakfast6} alt=""/>
            <CardContent style={typeStyle}>
              <Typography gutterBottom variant="h5" component="h2">
               Honey-Soy-Glazed Salmon with Peppers
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                How we dream about our future
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <h2 style={typeStyle}>$7.99</h2>
              
          </CardActions>
        </Card>

            <div style={{width: '20%',margin:'0 auto',}}>
              <button style={{
                marginTop:'50px',
                marginBottom:'50px',
                textAlign: 'center'
            }}
              className='btn-danger'>Checking your food</button>
          </div>
      </div>
    );
};

export default Dinner;