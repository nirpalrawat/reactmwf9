import React from 'react'

function Footer() {
  return (
    <>
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://pn-paul.netlify.app/image/ff-logo-02.png"
              className="img123"
            />
            <br /><br />
          </div>
          <div className="col-md-7">
            <h2 className="h22"><span style= {{color:"#ffad00"}}>CONTACT</span> US</h2>
            <p className="p1">
              We're a team focusing on redefining the way the hospitality
              industry works by bringing in concept based restaurants across
              India. We are truly committed to catering to the ever-changing
              cosmopolitan taste of the customer and revolutioning the F & B
              industry!
            </p>
            <div className="row">
              <div className="col-md-6">
                <h2 style= {{color:"#ffad00"}}>ADDRESS</h2>
                <p>
                  S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                  Park, New Delhi, Delhi 110017
                </p>
                <a href=" https://www.facebook.com/" target="_blank"
                  ><i
                    className="fa-brands fa-facebook"
                    style={{ fontSize: "40px", color: "blue"}}
                  ></i
                ></a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  ><i
                    className="fa-brands fa-instagram"
                    style={{ fontSize: "40px", color: "red"}}
                  ></i
                ></a>
                <a href="https://www.whatsapp.com/" target="_blank"
                  ><i
                    className="fa-brands fa-whatsapp"
                    style={{ fontSize: "40px", color: "green"}}
                  ></i
                ></a>
              </div>
              <div className="col-md-6">
                <h2 style= {{color:"#ffad00"}}>ENQUIRY</h2>

                <p>
                  Email:
                  <b style= {{color:"#ffad00"}}>customercare@firstfiddle.in</b>
                </p>
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
        {/* row end */}
      </div>
      {/* container-fluid end */}
    </footer>
    <div className="container-fluid" style={{background: "black"}}>
      <div className="row">
        <div className="col-3 md-3"></div>
        <div className="col-6 md-6 mt-3">
          <p style={{ fontWeight: "250", color: "white"}}>
            EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP
            <b style={{marginLeft: "80px", fontWeight: "250" , color: "white"}}
              >COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED</b
            >
          </p>
        </div>
      </div>
       {/* row */}
    </div>
     {/* container */}
  

    </>
  ) 
}

export default Footer
