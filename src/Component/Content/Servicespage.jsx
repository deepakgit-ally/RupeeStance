import React from 'react';
import Ruppw from "../../Assets/Images/about.jpg"
const ServicesSection = () => {
  return (
    <section className="ftco-section ftco-services">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-7 text-center ">
            <h2 className="mb-2">What We Do</h2>
            <span className="subheading">Stock &amp; Mutual Funds</span>
          </div>
        </div>
        <div>
            <p>We provide personalized and professional financial services to our clients, based on their financial situation, goals, and preferences. We create and implement customized plans that align with their vision and values. We also monitor and review their plans regularly to ensure that they remain relevant and effective. We cover all aspects of their financial life.</p>
        </div>
      </div>

      {/* Second part of the section */}
      <div className="container-wrap mt-5">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 img ftco-animate">
            <img src={Ruppw} alt='' 
            style={{
                width:"50vw"
            }}
            />
          </div>
          <div className="col-md-6 d-flex">
            <div className="services-wrap">
              <div className="heading-section mb-5 ftco-animate">
                <h2 className="mb-2">Nvestment planning</h2>
                <span className="subheading">We help our clients grow and preserve their wealth by designing and implementing an optimal investment strategy that suits their risk tolerance, time horizon, and goals.</span>
              </div>
              {/* Service List */}
              <div className="list-services d-flex ftco-animate">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-pencil"></span>
                </div>
                <div className="text">
                  <h3>Retirement planning</h3>
                  <p> We help our clients prepare for a comfortable and secure retirement   by estimating their retirement income and expenses and creating a retirement savings and  withdrawal plan</p>
                </div>
              </div>
              {/* Repeat the above structure for other services */}
              <div className="list-services d-flex ftco-animate">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-web"></span>
                </div>
                <div className="text">
                  <h3>Tax planningt</h3>
                  <p>We help our clients minimize their tax liability and maximize their after-tax returns by using various tax-efficient strategies and products</p>
                </div>
              </div>
              <div className="list-services d-flex ftco-animate">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-pie-chart"></span>
                </div>
                <div className="text">
                  <h3>Risk management</h3>
                  <p> We help our clients protect their income, assets, and family from   unforeseen events and risks, and recommend the best insurance policies and products  that suit their situation and budget. .</p>
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
