import React from 'react'
import FinancialServices from './Finces'
function Home() {
  return (
    <>
    <div className=" landing-page p-1 m-1 mt-0">
    <div className="">
        <div className="">
        
            <div className="financial-services p-4" style={{backgroundImage:"-moz-initial"}}>
                <h3 className="card-title text-center p-2">RupeeStance</h3>
                <h3 className="text-center p-2">Personalized and Professional Financial Services</h3>
                <p className="lead text-center p-2 fs-4">RupeeStance is a financial advisory firm that helps individuals and businesses achieve their financial goals. We offer a range of solutions, such as investment planning, retirement planning, tax planning, estate planning, and risk management. We are independent, experienced, and client-focused, and we provide high-quality advice and guidance to our clients.</p>
            </div>
        </div>
    </div>
</div>
<FinancialServices/>
</>
  )
}

export default Home
