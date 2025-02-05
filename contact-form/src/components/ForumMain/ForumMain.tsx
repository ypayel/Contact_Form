import React, { useState } from "react";
import "./ForumMain.scss";
export const ForumMain = () => {
  const [queryType, setQueryType] = useState("");
  const [constentType, setConstentType] = useState("");
  const [txt, setTxt] = useState('');
  const [secondTxt, secondSetTxt] = useState("");
  const [messageSent, setMessageSent] = useState("");
  const onInputChange = e => {
    const { value } = e.target;
    console.log('Input value: ', value);

    const re = /^[A-Za-z]*$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  }

  const secondOnInputChange = e => {
    const {value } = e.target;
    console.log('Second input value: ', value);

    const re = /^[A-Za-z]*$/;
    if(value === "" || re.test(value)) {
      secondSetTxt(value)
    }else if(value === "") {
      console.log()
      
    }

    
  }
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };
  
  return (
    <>
    {messageSent && (
        <div className="success-message">
          <strong className="message-strong">Message Sent!</strong>  
          <p className="message-success-paragraf">Thanks for completing the form. We will be in touch soon!</p>
        </div>
      )}
      <div className="main-conteiner">
        <form action="form" className="form-contact" onSubmit={handleSubmit}>
          <h2 className="first-header">Contact us</h2>
          <div className="name-main">
            <div className="headers-conteiner">
              <h3 className="first-name-header">
                First Name <span className="text-star">*</span>
              </h3>
              <h3 className="last-name-header">
                Last Name <span className="text-star">*</span>
              </h3>
            </div>
            <div className="name-inputs-conteiner">
              <input type="text" className="first-input" alt="first-name"  value={txt} onChange={onInputChange } />
              <div></div>
              <input type="text" className="last-input" alt="last-name" value={secondTxt} onChange={secondOnInputChange} />
            </div>
          </div>
          <div className="email-main">
            <div className="email-header-conteiner">
              <h3 className="email-header">
                Email Adress <span className="text-star">*</span>
              </h3>
            </div>
            <div className="email-input-conteiner">
              <input type="text" className="email-input" alt="email" />
            </div>
          </div>
          <div className="general-query-conteiner">
            <h3 className="general-query-header">
              Query Type <span className="text-star">*</span>
            </h3>
            <div className="general-query-buttons">
              <button
                type="button"
                className={`query-button ${
                  queryType === "general" ? "active" : ""
                }`}
                onClick={() => setQueryType("general")}
              >
                General Enquiry
              </button>
              <button
                type="button"
                className={`query-button ${
                  queryType === "support" ? "active" : ""
                }`}
                onClick={() => setQueryType("support")}
              >
                Support Request
              </button>
            </div>
          </div>
          <div className="message-conteiner">
            <div className="message-holder">
              <h3 className="message-header">
                Message <span className="text-star">*</span>
              </h3>
            </div>
            <div className="message-input-conteiner">
              <input type="text" className="message-input" />
            </div>
          </div>
          <div className="consent-button-conteiner">
            <button
              type="button"
              className={`consent-button ${
                constentType === "accept" ? "active" : "unactive"
              }`}
              onClick={() =>
                setConstentType(constentType === `accept` ? `` : `accept`)
              }
            ></button>
            <span className="consent-text">
              I consent to being contacted by the team <span className="text-star">*</span>
            </span>
          </div>
          <div className="submit-button-conteiner">
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForumMain;
