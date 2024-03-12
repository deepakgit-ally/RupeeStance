import React from 'react';
import Ruppw from "../../Assets/Images/about-min.jpg"
const ServicesSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-7 text-center ">
            <h2 className="mb-2">What We Do</h2>
         
          </div>
        </div>
        <div>
            <p>We provide personalized and professional financial services to our clients, based on their financial situation, goals, and preferences. We create and implement customized plans that align with their vision and values. We also monitor and review their plans regularly to ensure that they remain relevant and effective. We cover all aspects of their financial life.</p>
        </div>
      </div>

      {/* Second part of the section */}
      <div className=" container ">
        <div className="row d-flex  ">
          <div className="col-md-6 ">
            <img src={Ruppw} alt='' 
            style={{
               width:"100%",
               height:"100%"
            }}
            />
          </div>
          <div className="col-md-6 d-flex  " 
       
          >
            <div className="" >
              <div className="  ">
                <h2 className="mb-2">Investment planning</h2>
                <span className="">We help our clients grow and preserve their wealth by designing and implementing an optimal investment strategy that suits their risk tolerance, time horizon, and goals.</span>
              </div>
              {/* Service List */}
              <div className=" d-flex ">
               
                <div className="">
                  <h3>Retirement planning</h3>
                  <p> We help our clients prepare for a comfortable and secure retirement   by estimating their retirement income and expenses and creating a retirement savings and  withdrawal plan.</p>
                </div>
              </div>
          
              <div className=" d-flex ">
                
                <div className="">
                  <h3>Tax planning</h3>
                  <p>We help our clients minimize their tax liability and maximize their after-tax returns by using various tax-efficient strategies and products.</p>
                </div>
              </div>
              <div className=" d-flex ">
               
                <div className="">
                  <h3>Risk management</h3>
                  <p> We help our clients protect their income, assets, and family from   unforeseen events and risks, and recommend the best insurance policies and products  that suit their situation and budget. </p>
                </div>
               
              </div>
              <div className='d-flex'>
              <div className="">
                  <h3>Who We Are</h3>
                  <p> We are a team of qualified and experienced financial advisors who are committed to delivering high-quality advice and guidance to our clients. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default ServicesSection;
