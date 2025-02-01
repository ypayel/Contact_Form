import React from "react";
export const ForumMain = () => {
  return (
    <>
      <div className="main-conteiner">
        <form action="form" className="form-contact">
        <h2 className="first-header">Contact us</h2>
        <div className="name-main">
          <div className="first-name-conteiner">
            <h3 className="first-name-header">First Name</h3>
          </div>
          <div className="first-input-conteiner">
            <label className="first-input-holder">
              <input type="text" className="first-input" alt="first-name" />
            </label>
          </div>
        </div>
        <div className="last-main">
          <div className="last-name-conteiner">
            <h3 className="last-name-header">Last Name</h3>
          </div>
          <div className="last-input-conteiner">
            <label className="last-input-holder">
              <input type="text" className="last-input" alt="last-name" />
            </label>
          </div>
        </div>
        <div className="email-main">
          <div className="email-holder">
            <h3 className="email-header">Email Adress</h3>
          </div>
          <div className="email-input-conteiner">
            <label className="email-input-holder">
              <input type="text" className="email-input" alt="email" />
            </label>
          </div>
        </div>
        <div className="general-query-conteiner">
          <div className="general-query-holder">
            <h3 className="general-query-header">Query Type</h3>
          </div>
          <div className="general-query-input-conteiner">
            <label className="general-query-input-holder">
              <input type="text" className="general-query-input" alt="general">
                {/* <button className="general-query-button">General Enquiry</button> */}
              </input>
            </label>
            <div className="support-query-conteiner">
              <div className="support-query-input-conteiner">
                <label className="support-query-input-holder">
                  <input type="text" className="support-query-input">
                    {/* <button className="support-query-button">Support Request</button> */}
                  </input>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="message-conteiner">
            <div className="message-holder">
                <h3 className="message-header">Message</h3>
            </div>
            <div className="message-input-conteiner">
                <label className="message-input-holder">
                    <input type="text" className="message-input"/>
                </label>
            </div>
        </div>
        <div className="consent-button-conteiner">
            <button className="constent-button"/>
            <p className="consent-text">I consent to bieng contacted by the team</p>
        </div>
        <div className="submit-button-conteiner">
            <button className="submit-button">Submit</button>
        </div>
        </form>
      </div>
    </>
  );
};
export default ForumMain;
