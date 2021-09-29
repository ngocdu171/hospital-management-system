import React, { useContext } from "react";
import { HSMContext } from "../context";
import { Button } from "reactstrap";

function Appointment() {
  const { appointments, userinfo, cancelAppointment } = useContext(HSMContext);
  const tam1 = appointments.filter((appointment) => appointment.username === userinfo[0].username);
  
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
        {tam1.map((item)=> {
            return (
                <tr key={item._id}>
            <td>{item.doctor}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.department}</td>
            <Button color="danger" onClick={()=>cancelAppointment(item._id)}>Cancel</Button>
            </tr>
        )})}
      </table>
    </div>
  );
}

export default Appointment;
