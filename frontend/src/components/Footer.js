import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid text-center">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-6 ">
          <h5>Hospital System Management</h5>
          </div>
          <div className="col-6 ">
            <h5>Puh: 045.000.0001</h5>
            <h5>Address: Oulu, Finland</h5>
          </div>
        </div>
        <div className="copyright">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-sm ">
            <h5>2021 Copyright DuPham
            </h5>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
