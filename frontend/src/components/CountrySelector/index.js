import React, { useContext, useEffect, useState } from "react";

function CountrySelector({ countries }) {
  console.log("CountrySelector: ",countries);
//   console.log(typeof(countries));
  return (
    <div>
    so lieu COVID-19
    <form className="row g-3 needs-validation" novalidate>
    <div className="col-md-3">
      <label for="validationCustom04" className="form-label">
        Country
      </label>
      <select className="form-select">
        {countries.map((country) => {
            return (
                <option value={country}>{country.Country}</option>
            )
        })}
      </select>
    </div>
  </form>
    </div>
  );
}

export default CountrySelector;
