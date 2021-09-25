import React from "react";
import { Link } from "react-router-dom";
import InfoCovid from "../components/InfoCovid";


function Home() {
    return (
      <div>
        <section>
          <div className="container  !direction !spacing">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center}">
              <div className="col-2 ">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col-10 ">
                <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/931B/production/_111195673_corona_whatyouneedtodo_without_title-nc.png" />
              </div>
            </div>
          </div>
        </section>
        
        <InfoCovid />

        <section>
          <div className="container  !direction !spacing">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
              <div className="col-6 ">
                <h1>Book Appointment</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link to="/book">Click me!</Link>
              </div>
              <div className="col-6 ">
                <img src="https://caodangyduocpasteurtphcm.edu.vn/wp-content/uploads/2016/12/dieu-duong-1.jpg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
export default Home;