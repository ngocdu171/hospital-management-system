import React, { useContext } from "react";
import { Container } from "reactstrap";
import { HSMContext } from "../context";
import load from "../load.gif";

function Highlight() {
  const { summary, report, loading } = useContext(HSMContext);
  console.log("in o Highlight", report);
    const data = report && report.length ? report[report.length - 1] : [];
    // const data = report[report.length - 1];
    // console.log(data);

  return (
    <Container>
      <div className="row">
        <div className="col-sm-4 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total cases</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p className="card-text">{data.Confirmed}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Recovered</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p className="card-text">{data.Recovered}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total deaths</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                <p className="card-text">{data.Deaths}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Highlight;
