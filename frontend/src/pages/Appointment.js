import React, { useContext, useState } from "react";
import { HSMContext } from "../context";

function Appointment() {
  const { appointments, userinfo, cancelAppointment } = useContext(HSMContext);
  console.log(appointments);
  // console.log(userinfo);

  // const tam = appointments;
  // console.log(tam);
//   const tam1 = [];
  const tam1 = appointments.filter((appointment) => appointment.username === userinfo[0].username);
  console.log(tam1);
//   const [tam1, setTam1] = useState();
//   setTam1(
//     appointments.find(
//       (appointment) => appointment.username === userinfo[0].username
//     )
//   );
  // const tam = appointments.find(appointment => appointment.username === userinfo[0].username);
  // console.log(tam);
  return (
    <div>
      This is Appointment Page
      <table className="table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
        {/*{Object.keys(tam1[0]).map((item) => { */}
        {tam1.map((item)=> {
            return (
                <tr key={item._id}>
            <td>{item.doctor}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.department}</td>
            <button type="submit" className="btn btn-danger" onClick={()=>cancelAppointment(item._id)}>Cancel</button>
            </tr>
        )})}
        </tbody>
      </table>
    </div>
  );
}

export default Appointment;
