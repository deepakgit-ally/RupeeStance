import React, { useState, useEffect } from 'react';
import LandingImage from "../../Assets/Images/dashboard_full_2.png";


const Landing = () => {
  const mainText = "RUPEE STANCE";
  const subTexts = [ "Welcome to RUPEE STANCE!", ];
  const [currentSubTextIndex, setCurrentSubTextIndex] = useState(0);
  const [currentSubText, setCurrentSubText] = useState(subTexts[currentSubTextIndex]);
  const [typedMainText, setTypedMainText] = useState('');
  const [isTypingMainText, setIsTypingMainText] = useState(true);

  useEffect(() => {
    const mainTextInterval = setInterval(() => {
      const currentMainText = mainText.substring(0, typedMainText.length + 1);
      setTypedMainText(currentMainText);

      if (currentMainText === mainText) {
        clearInterval(mainTextInterval);
        setIsTypingMainText(false);

        // Change the subtext every 3 seconds after typing main text
        const subTextInterval = setInterval(() => {
          setCurrentSubTextIndex((prevIndex) => (prevIndex + 1) % subTexts.length);
          setCurrentSubText(subTexts[currentSubTextIndex]);
        }, 3000);

        return () => clearInterval(subTextInterval);
      }
    }, 300);

    return () => clearInterval(mainTextInterval);
  }, [typedMainText, mainText, currentSubTextIndex, subTexts]);

  return (
<>
    <div className="container">
      <div className='row'>
        <div className='col-sm-6'>
          <header className='mt-5' style={{ }}>
            <h1 className="md-display-1 fp-quote--neutral preWrap md-font-medium TeWKj color"
              style={{
                fontSize: "52px",
                fontWeight: "700",
                lineHeight: "65px",
                marginBottom: "0"
              }}
            >
              {typedMainText}
              <br/>
              <span className="text-primary fs-4">{isTypingMainText ? '|' : ''} {currentSubText}</span>
            </h1>
            <h3 className="">  Personalized and Professional Financial Services</h3>
          </header>
          <div className="rlQl8">
            <p className="text-bolde fs-5 ">
            RupeeStance is a financial advisory firm that helps individuals and businesses achieve their financial goals. We offer a range of solutions, such as investment planning, retirement planning, tax planning, estate planning, and risk management. We are independent, experienced, and client-focused, and we provide high-quality advice and guidance to our clients.
            </p>
          </div>
          
          <div class="input-group mb-3 w-75 mt-3">
  
      
       </div>
          </div>
          <div className='col-md-6 d-flex'>
            <img src={LandingImage} alt='Landingpage' className="img-fluid" />
          </div>
        </div>
</div>

</>
  );
};




export default Landing;
