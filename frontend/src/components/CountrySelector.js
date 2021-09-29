import React, { useContext } from "react";
import { HSMContext } from "../context";
import { FormGroup, Label, Input, Container } from "reactstrap";

function CountrySelector() {
  const { countries, getReportByCountry } = useContext(HSMContext);
  //   console.log(countries);
  // console.log(report);
  return (
    <Container>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          onChange={(event) => getReportByCountry(event.target.value)}
        >
          {countries.map((country) => {
            return <option value={country.ISO2}>{country.Country}</option>;
          })}
        </Input>
      </FormGroup>
    </Container>
  );
}

export default CountrySelector;
