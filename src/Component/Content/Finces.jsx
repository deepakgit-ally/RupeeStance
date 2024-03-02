import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
const FinancialServices = () => {
    const [faqs, setFaqs] = useState([
        { id: 1, question: 'Nvestment planning', answer:' We help our clients grow and preserve their wealth by designing and  implementing an optimal investment strategy that suits their risk tolerance, time horizon, and goals.' },
        { id: 2, question: ' Retirement planning', answer: ' We help our clients prepare for a comfortable and secure retirement   by estimating their retirement income and expenses and creating a retirement savings and  withdrawal plan' },
        { id: 3, question: ' Tax planning: ', answer: ' We help our clients minimize their tax liability and maximize their after-tax returns by using various tax-efficient strategies and products' },
        { id: 4, question: ' Risk management:  ', answer: ' We help our clients protect their income, assets, and family from   unforeseen events and risks, and recommend the best insurance policies and products  that suit their situation and budget. ' },
      ]);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>What We Do</h2>
          <p>
            We provide personalized and professional financial services to our clients, based on their financial
            situation, goals, and preferences. We create and implement customized plans that align with their
            vision and values. We also monitor and review their plans regularly to ensure that they remain
            relevant and effective. We cover all aspects of their financial life.
          </p>
        </Col>
        <Col md={6}>
          <h3>Services Offered</h3>
          <div className='container' id='Shareholding'>
    <ul className='list-unstyled'>
      {faqs.map((faq) => (
        <li key={faq.id} className='mb-3'>
          <details>
            <summary className='font-weight-bold fs-4'>{faq.question}</summary>
            <p className='mt-2 s-2'>{faq.answer}</p>
          </details>
        </li>
      ))}
    </ul>
  </div>
        </Col>
      </Row>
      <div className=''>
        <h3 className='text-center'>Who We Are</h3>
        <p className='text-center fs-3'>We are a team of qualified and experienced financial advisors who are committed to delivering 
high-quality advice and guidance to our clients.</p>
      </div>
    </Container>
  );
};

export default FinancialServices;
