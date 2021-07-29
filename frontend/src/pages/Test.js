import React, { useContext, useState } from 'react'
import { HSMContext } from '../context'
import {Redirect} from 'react-router-dom'

function Test() {
    const{patients,islogin,userinfo} = useContext(HSMContext);
    if(islogin === true) {
        GetUserinfo();
        console.log(GetUserinfo().address);
        return (
            <div>
                {/* <h1>{fullname}</h1> */}
                <h1>da dang nhap</h1>
            </div>
        );
    }
    else {
        alert("login fisrt!")
        return (
            <React.Fragment>
                <Redirect to='/login' />
            </React.Fragment>
        );
    }
    function GetUserinfo() {
        const tam = patients.find(patient => patient.username === userinfo[0].username);
        const [fullname, setFullname] = useState(tam.fullname);
        const [address, setAddress] = useState(tam.address)
        return(
            {fullname,address}
        )
        
    }
    
}

export default Test
