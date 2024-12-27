import React from 'react'

function Carrers() {
  return (
  <>
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 mb-1 mt-5 text-center"
          style={{
            textTransform: "uppercase",
            fontFamily: "prague",
            letterSpacing: "2px",
            fontSize: "1.2cm"
          }}
        >
          <p>COME WORK <b style={{color: "orange"}}>WITH US!</b></p>
        </div>
        <p
          style={{
            letterSpacing: "1px",
            wordSpacing: "2px",
            lineHeight: "25px",
            fontWeight: "lighter",
            fontSize: "18px",
          }}
        >
          First Fiddle is all about innovation, creativity and understanding
          ever-changing consumer needs. The work environment enables both
          professional and personal growth.
        </p>
      </div>
      {/* <!--row--> */}
    </div>
    {/* <!--container--> */}

    {/* <!-- 2nd why! contaier start --> */}

    <div className="container">
      <div className="row">
        <div
          className="col-md-12 mb-1 mt-5 text-center"
          style={{
            textTransform: "uppercase",
            fontFamily: "prague",
            letterSpacing: "2px",
            fontSize: "1.2cm"
          }}
        >
          <p>HOW TO<b style={{color: "orange"}}>APPLY!</b></p>
        </div>
        <p
          style={{
            letterSpacing: "1px",
            wordSpacing: "2px",
            lineHeight: "25px",
            fontWeight: "lighter",
            fontSize: "18px"
          }}
        >
          First Fiddle is all about innovation, creativity and understanding
          ever-changing consumer needs. The work environment enables both
          professional and personal growth
        </p>
      </div>
      {/* <!--row--> */}
    </div>
    {/* <!--container--> */}

    <div className="container">
      <div className="row mt-4">
        <div className="col-md-5 mt-3 ms-3">
          <h4 style={{fontWeight: "400"}} className="mt-5 mb-1">
            Steep learning curve
          </h4>
          <p
             style={{
              letterSpacing: "1px",
              wordSpacing: "2px",
              lineHeight: "25px",
              fontWeight: "lighter",
              fontSize: "18px"
            }}
          >
            Talent and merit are rewarded at First Fiddle Restaurants. Add
            value, and see yourself grow!
          </p>

          <h4 style={{fontWeight: "400"}} className="mt-5 mb-1">
            Growth opportunities
          </h4>
          <p
            style={{
              letterSpacing: "1px",
              wordSpacing: "2px",
              lineHeight: "25px",
              fontWeight: "lighter",
              fontSize: "18px"
            }}
          >
            Talent and merit are rewarded at First Fiddle Restaurants. Add
            value, and see yourself grow!
          </p>

          <h4 style={{fontWeight: "400"}} className="mt-5 mb-1">
            Exciting work environment
          </h4>
          <p
             style={{
              letterSpacing: "1px",
              wordSpacing: "2px",
              lineHeight: "25px",
              fontWeight: "lighter",
              fontSize: "18px"
            }}
          >
            Work in a highly motivated environment with talented people. A
            positive work environment, ensures a productive and happy you.
          </p>
        </div>
        {/* <!--col-6 1st--> */}

        <div className="col-md-6 mb-5 ms-1">
          <div className="card" style={{boxShadow: "1px 1px 12px #020001"}}>
            <h5 className="mt-2 ms-4" style={{fontWeight: "400"}}>
              Share your Details
            </h5>
            <div className="card-body">
              <form action="">
                <div className="mb-4">
                  <label for="" className="mb-2">Your Name:</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>

                <div className="mb-4">
                  <label for="" className="mb-2">Your Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-4">
                  <label for="" className="mb-2">Your Phone:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-5 mt-4">
                  <label for="" className="mb-2">Message</label>
                  <input
                    type="message"
                    className="form-control"
                    placeholder="Message"
                  />
                </div>

                <div className="d-md-flex justify-content-md-cente">
                  <button className="btn btn-warning btn-lg text-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!--col-md 2nd--> */}
      </div>
      {/* <!--row--> */}
    </div>
    {/* <!--container--> */}

  </>
  )
}

export default Carrers
