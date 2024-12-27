import React from 'react'

function Contact() {
  return (
    <> 
       <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-5 mb-3">SEND US MESSAGE</h2>
          <form action="">
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" placeholder="name" />
            </div>
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" placeholder="phone" />
            </div>
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" placeholder="Message" />
            </div>
            <div>
              <button className="btn bg-warning btn-lg text-light">submit</button>
            </div>
          </form>
          {/* <!-- form end --> */}
        </div>
        <div className="col-md-6">
          <h2 className="mt-5 mb-3">CONTACT INFO</h2>
          <h6 style={{color: "orange"}}>Address</h6>
          <p>
            6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021
          </p>

          <h6 style={{color: "orange"}}>For Franchise Enquiry</h6>
          <p>MOBILE: <b style={{color: "orange"}}>+91 7509602066</b></p>
          <p>EMAIL: <b style={{color: "orange"}}> franchise@firstfiddle.in</b></p>

          <h6 style={{color: "orange"}}>For HR Enquiry</h6>
          <p>MOBILE: <b style={{color: "orange"}}>+91 7509602066</b></p>
          <p>EMAIL: <b style={{color: "orange"}}>hr@firstfiddle.in</b></p>

          <h6 style={{color: "orange"}}>For Other Enquiry</h6>
          <p>PHONE: <b style={{color: "orange"}}>7509602066</b></p>
          <p>EMAIL: <b style={{color: "orange"}}>customercare@firstfiddle.in</b></p>
          <p>Open: Monday - Saturday 10:30 - 19:30</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact
