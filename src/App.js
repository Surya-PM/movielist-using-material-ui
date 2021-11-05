import { useState } from "react";
import "./App.css";


function App() {

  return (
     <div className="App">
      <Pricingcard />
    </div>
  );
}
function Pricingcard() {
  const value = [
    {
      name: "Free",
      price: "0",
      users: "Single Users",
      storage: "5GB"
    },
    {
      name: "Plus",
      price: "9",
      users: "5 Users",
      storage: "50GB"
    },
    {
      name: "Pro",
      price: "49",
      users: "Unlimited Users",
      storage: "150GB"
    }
  ];
  return (
    <div>
      <section class="pricing py-5">
        <div className="container">
          <div className="row">
            {value.map((val, index) => (
              <Card value={val} />
            ))}

            {/* <Card value={value} /> */}
          </div>
        </div>
      </section>
    </div>
  );
}


function Card({ value, type }) {
  const { name, price, users, storage } = value;
  if (name === "Free") var styles = { opacity: 0.5 };
  else if (name === "Plus") var style1 = { opacity: 0.5 };

  return (
    <div className="col-lg-4 ">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {name}
        </h5>
        <h6 className="card-price text-center">
          ${price}
          <span class="period">/month</span>
        </h6>
        <hr></hr>
        <ul>
          <li>
            {/* <span class="fa-li"> */}
            <i class="fa fa-check" aria-hidden="true"></i>
            {/* </span> */}
            {users}
          </li>
          <li>
            {/* <span class="fa-li"> */}
            <i class="fa fa-check" aria-hidden="true"></i>
            {/* </span> */}
            {storage} Storage
          </li>
          <li>
            {/* <span class="fa-li"> */}
            <i class="fa fa-check" aria-hidden="true"></i>
            {/* </span> */}
            Unlimited Public Projects
          </li>
          <li>
            {/* <span class="fa-li"> */}
            <i class="fa fa-check" aria-hidden="true"></i>
            {/* </span> */}
            Community Access
          </li>

          <div
            //  class="text-muted"
            style={styles}
          >
            <li>
              {/* <span class="fa-li"> */}
              <i class="fa fa-times" aria-hidden="true"></i>
              {/* </span> */}
              Unlimited Private Projects
            </li>
            <li>
              {/* <span class="fa-li"> */}
              <i class="fa fa-times" aria-hidden="true"></i>
              {/* </span> */}
              Dedicated Phone Support
            </li>
            <li>
              {/* <span class="fa-li"> */}
              <i class="fa fa-times" aria-hidden="true"></i>
              {/* </span> */}
              Free Subdomain
            </li>
            <li style={style1}>
              {/* <span class="fa-li"> */}
              <i class="fa fa-times" aria-hidden="true"></i>
              {/* </span> */}
              Monthly Status Reports
            </li>
          </div>
        </ul>
        <div class="d-grid">
          <button class="btn btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
