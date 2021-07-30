import React, { useContext } from 'react'
import { HSMContext } from '../context'

function Appointment() {
    const {appointments, userinfo} = useContext(HSMContext);
    // console.log(appointments);
    // console.log(userinfo);

    //const tam = appointments;
    const tam = appointments.find(appointment => appointment.username === userinfo[0].username);
    console.log(tam);
    return (
        <div>
            This is Appointment Page
            jhhkjkhjikkjahwsdkahjskjdhaskdhjaskdhjaskdjaskdjaskdjaksdjaskdjaskd
            adasdasdasd
            asadsasdasdasdasdasd
            dadasdasdasdas
            asdasdasdasdasdasdasda
            <table className="table">
            <thead>
            <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Department</th>
            </tr>
            </thead>
            {tam.map(item => (
                <tbody key={item.id}>
            <td>{item.doctor}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.department}</td>
            <td>e</td>
            <td>f</td>
            </tbody>
            ))}
            </table>
        </div>
    )
}

export default Appointment