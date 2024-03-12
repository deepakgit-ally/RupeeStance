import LandingImage from "../../Assets/Images/dashboard_full_2.png";

const Landing = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 col-12">
            <header className="">
              <h1
                className="md-display-1 fp-quote--neutral preWrap md-font-medium TeWKj color"
                style={{
                  fontSize: "52px",
                  fontWeight: "700",
                  lineHeight: "0px",
                }}
              >
                <br />
                <span className="text-primary fs-3 d-block text-center text-nowrap">
                  Welcome to RUPEE STANCE!
                </span>
              </h1>
              <h3 className="text-center py-2 " 
              
              >Personalized and Professional Financial Services</h3>
            </header>
            <div className="rlQl8">
              <p className="text-bolde fs-5">
                RupeeStance is a financial advisory firm that helps individuals and businesses achieve their financial goals. We offer a range of solutions, such as investment planning, retirement planning, tax planning, estate planning, and risk management. We are independent, experienced, and client-focused, and we provide high-quality advice and guidance to our clients.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex">
            <img src={LandingImage} alt="Landingpage" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
