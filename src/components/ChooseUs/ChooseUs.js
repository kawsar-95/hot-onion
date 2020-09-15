import React from 'react';
import './chooseUs.css';
import goo from "../../Image/adult-blur-blurred-background-687824.png";
import chefCook from "../../Image/chef-cook-food-33614.png";
import arc from "../../Image/architecture-building-city-2047397.png";
import gro from '../../ICON/Group 204.png';
import gonta from '../../ICON/Group 1133.png';
import gari from '../../ICON/Group 245.png';
const ChooseUs = () => {
    return (
        <div style={{marginBottom:'70px'}}>
            <h1 style={{margin:'20px', color:'tomato'}}>Why you choose us</h1>
            <p style={{margin:'40px'}}>Barton waited twenty always repair in within we do. An delighted offending <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded</p>
                        <div class="card-deck">
            <div class="card">
                <img src={goo} class="card-img-top" alt="..."/>
                <div class="card-body">
                
                <h5 class="card-title"> 
                <img src={gro} alt=""/> Fast Delevery
                </h5>
                <p class="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                </div>
               <button className='btn-danger'>See more</button>
            </div>
            <div class="card">
                <img src={chefCook} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">
                <img src={gonta} alt=""/>
                A Good Auto Responder</h5>
                <p class="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                </div>
               <button className='btn-danger'>See more</button>
            </div>
            <div class="card">
                <img src={arc} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">
                <img src={gari} alt=""/>Home Delivery</h5>
                <p class="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                </div>
               <button className='btn-danger'>See more</button>
            </div>
            
            </div>
         </div>
        
    );
};

export default ChooseUs;