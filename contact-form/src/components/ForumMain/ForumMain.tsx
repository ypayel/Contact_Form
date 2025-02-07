import React, { useState, useEffect } from "react";
import "./ForumMain.scss";
export const ForumMain = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [queryType, setQueryType] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("Stan messageSent został zmieniony:", messageSent);
}, [messageSent]);

const validateForm = () => {
  let newErrors: { [key: string]: string } = {};

  if (!firstName.trim()) newErrors.firstName = "To pole jest wymagane";
  if (!lastName.trim()) newErrors.lastName = "To pole jest wymagane";
  if (!email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Wprowadź poprawny adres e-mail";
  if (!queryType) newErrors.queryType = "Wybierz rodzaj zapytania";
  if (!message.trim()) newErrors.message = "To pole jest wymagane";
  if (!consentGiven) newErrors.consent = "Aby wysłać formularz, musisz wyrazić zgodę na kontakt";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; 
};
const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
      console.log("The form has been validated correctly!");
      setMessageSent(true);
  } 
  
};

  return (
    <>
    {messageSent && (
        <div className="success-message" >
          <strong className="message-strong">Message Sent!</strong>  
          <p className="message-success-paragraf">
            Thanks for completing the form. We will be in touch soon!
          </p>
        </div>
      )}
      <div className="main-conteiner">
        <form  className="form-contact" onSubmit={handleSubmit}>
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
              <input type="text" className={`first-input ${errors.firstName ? "error" :""}`} alt="first-name"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              {errors.firstName && <span className="error-text-first-input">{errors.firstName}</span>}
              <input type="text" className={`last-input ${errors.lastName ? "error" : ""}`} alt="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              {errors.lastName && <span className="error-text-last-input">{errors.lastName}</span>}
            </div>
          </div>
          <div className="email-main">
            <div className="email-header-conteiner">
              <h3 className="email-header">
                Email Adress <span className="text-star">*</span>
              </h3>
            </div>
            <div className="email-input-conteiner">
              <input type="text" className={`email-input ${errors.email ? "error" : ""}`} value={email}  onChange={(e) => setEmail(e.target.value)} alt="email" />
              {errors.email && <span className="error-text-email-input">{errors.email}</span>}
            </div>
          </div>
          <div className="general-query-conteiner">
            <h3 className="general-query-header">
              Query Type <span className="text-star">*</span>
            </h3>
            <div className="general-query-buttons">
              <button
                type="button"
                className={`query-button ${queryType === "general" ? "active" : ""}`}
                onClick={() => setQueryType("general")}
              >
                General Enquiry
              </button>
              <button
                type="button"
                className={`query-button ${queryType === "support" ? "active" : ""}`}
                onClick={() => setQueryType("support")}
              >
                Support Request
              </button>
            </div>
            {errors.queryType && <span className="error-text-buttons">{errors.queryType}</span>}
          </div>
          <div className="message-conteiner">
              <h3 className="message-header">
                Message <span className="text-star">*</span>
              </h3>
            <div className="message-input-conteiner">
              <textarea className={`message-input ${errors.message ? "error" : ""}`}  onChange={(e) => setMessage(e.target.value)}></textarea>
              {errors.message && <span className="error-text-message">{errors.message}</span>}
            </div>
          </div>
          <div className="consent-button-conteiner">
            <input type="checkbox" checked={consentGiven} onChange={(e) => setConsentGiven(!consentGiven)}/>
            <span className="consent-text">
              I consent to being contacted by the team <span className="text-star">*</span>
            </span>
          </div>
          {errors.consent && <span className="error-text-consent">{errors.consent}</span>}
          <div className="submit-button-conteiner">
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForumMain;
