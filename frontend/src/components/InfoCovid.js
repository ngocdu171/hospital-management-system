import React, { useContext } from "react";
import moment from "moment";
import { HSMContext } from "../context";
import load from "../load.gif";
import { Link } from "react-router-dom";

function Summary() {
  const { summary, loading } = useContext(HSMContext);
  
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
                  {loading
                  ? <p className="card-text">{summary.Global.TotalConfirmed}</p>
                  : <img src={load} width="50" height="50" alt="loading" />
                  }
                  
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
                  {loading
                    ? <p className="card-text">{summary.Global.TotalRecovered}</p>
                    : <img src={load} width="50" height="50" alt="loading" />
                    }
                  
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
                  {loading
                    ? <p className="card-text">{summary.Global.TotalDeaths}</p>
                    : <img src={load} width="50" height="50" alt="loading" />
                    }
                  
                </div>
              </div>
            </div>
          </div>
          <Link to="/trackcovid">Get more...</Link>
        </div>
    );
  }

export default Summary;