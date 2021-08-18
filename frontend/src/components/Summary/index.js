import React, { useContext } from "react";
import moment from "moment";
import { HSMContext } from "../../context";

function Summary() {
  const { summary } = useContext(HSMContext);
  
    return (
      <div className="cointainer">
        <h4>TRACKING COVID WUHAN CASES OVER THE WORLD</h4>
        <p>{moment().format("LLL")}</p>
        <div className="row">
          <div className="col-sm-4 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total cases</h5>
                <h6 className="card-subtitle mb-2 text-muted ">
                  Card subtitle
                </h6>
                <p className="card-text">{summary.Global.TotalConfirmed}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Recovered</h5>
                <h6 className="card-subtitle mb-2 text-muted ">
                  Card subtitle
                </h6>
                <p className="card-text">{summary.Global.TotalRecovered}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total deaths</h5>
                <h6 className="card-subtitle mb-2 text-muted ">
                  Card subtitle
                </h6>
                <p className="card-text">{summary.Global.TotalDeaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Summary;