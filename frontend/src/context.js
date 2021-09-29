import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import myURL from "./myURL";

const HSMContext = createContext();

const HSMProvider = (props) => {
  const [patients, setPatients] = useState();
  const [appointments, setAppointments] = useState();
  const [userinfo, setUserinfo] = useState(null);
  const [islogin, setIslogin] = useState(false);
  const [summary, setSummary] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState([]);

  useEffect(() => {
    getAllPatient();
    getAppointment();
  }, [islogin]);

  useEffect(() => {
    setTimeout(() => {
      getSummary();
    }, 10000);
  }, [loading]);

  useEffect(() => {
    getCountries();
  }, []);

  /////covid19
  function getSummary() {
    axios.get(`https://api.covid19api.com/summary`).then((response) => {
      setSummary(response.data);
      setLoading(true);
    });
  }

  function getCountries() {
    axios.get(`https://api.covid19api.com/countries`).then((response) => {
      setCountries(response.data);
    });
  }

  function getReportByCountry(ISO2) {
    // console.log("ISO2:",ISO2);
    const tam = "ID";
    if (ISO2) {
      const { Slug } = countries.find((country) => country.ISO2 === ISO2);
      // console.log(Slug);
      //console.log(countries);

      axios
        .get(`https://api.covid19api.com/dayone/country/` + Slug)
        .then((response) => {
          //xoa di item cuoi cung vi chua het ngay nen du lieu con sai sot
          response.data.pop();
          setReport(response.data);
        });
    } else {
      const { Slug } = countries.find((country) => country.ISO2 === tam);
      // console.log(Slug);
      //console.log(countries);

      axios
        .get(`https://api.covid19api.com/dayone/country/` + Slug)
        .then((response) => {
          //xoa di item cuoi cung vi chua het ngay nen du lieu con sai sot
          response.data.pop();
          setReport(response.data);
        });
    }
  }

  ///////
  function getAllPatient() {
    axios
      .get(myURL + `/patient`)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function loginSuccess(tam) {
    setUserinfo(tam);
    setIslogin(true);
    setTimeout(() => {
      getSummary();
    }, 10000);
  }
  function logout() {
    setIslogin(false);
    setUserinfo(null);
  }

  function updateInfo(_id, newInfo) {
    axios.put(myURL + `/patient/` + _id, newInfo).then((response) => {
      getAllPatient();
    });
  }

  function bookAppointment(date, time, department, doctor) {
    const filterUser = patients.find(
      (patient) => patient.username === userinfo[0].username
    );
    var username = userinfo[0].username;
    var fullname = filterUser.fullname;
    var address = filterUser.address;
    var phone = filterUser.phone;
    var city = filterUser.city;
    var blood = filterUser.blood;
    var gender = filterUser.gender;
    axios
      .post(myURL + `/patient/book`, {
        username,
        fullname,
        address,
        phone,
        city,
        blood,
        gender,
        date,
        time,
        department,
        doctor,
      })
      .then((response) => {
        alert(response.data.message);
        getAppointment();
      });
  }

  function getAppointment() {
    axios
      .get(myURL + `/patient/appointment`)
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function cancelAppointment(idcancel) {
    axios
      .delete(myURL + `/patient/` + idcancel)
      .then((response) => {
        getAppointment();
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <HSMContext.Provider
      value={{
        patients,
        islogin: islogin,
        userinfo,
        setUserinfo: setUserinfo,
        loginSuccess: loginSuccess,
        logout: logout,
        updateInfo: updateInfo,
        bookAppointment: bookAppointment,
        appointments: appointments,
        cancelAppointment: cancelAppointment,
        summary,
        loading,
        countries,
        getReportByCountry: getReportByCountry,
        report,
      }}
    >
      {props.children}
    </HSMContext.Provider>
  );
};

export { HSMContext, HSMProvider };
