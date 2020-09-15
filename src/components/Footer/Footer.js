import React from 'react';
import './footer.css';
import logo from '../../logo2.png';
const Footer = () => {
    return (
      <section className="col-md-12" style={{ backgroundColor:'black',color:'white',padding:'20px',height:'200px'}}>
          <div className="col-md-6" style={{float:'left'}}>
            <img style ={{width:'200px', height:'50px',display:'block'}} src={logo} alt=""/>
          </div>

          
             <div className="col-md-3" style={{float:'right', listStyle:'none'}}>
                <li>Get help</li>
                <li>Read FAQs</li>
                <li>View all cities</li>
                <li>Restaurants near me</li>
                
             </div>
              <div className="col-md-3" style={{float:'right',listStyle:'none'}}>
                <li>About online food</li>
                <li>Read our blog</li>
                <li>Sign up to deliver</li>
                <li>Add your restaurant</li>
                
              </div>
         
      </section>
    );
};

export default Footer;