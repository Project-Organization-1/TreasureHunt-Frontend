import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./style.css";
function Login() { 

  const [gruopId, setGruopId] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    submitUser(gruopId, email);
  }
  function submitUser(groupId,email){
        fetch("http://localhost:5000/user/add/",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":true
            },
            mode: "cors",
            body: JSON.stringify({
                groupId: groupId,
                email: email,
            })
        })
        .then(()=>{
            // after adding the note, reload the page to reflect the changes
          console.log("User Logged In");
          
        })
        .catch(err => {
            throw(err)
        });
    }

  return (
    <section className="login">
      <div className="loginContainer">
        <h3>Log In</h3>
        <label>Group ID</label>
        <input type="text" autoFocus required onChange={e => setGruopId(e.target.value)}/>
        <label>Email</label>
        <input type="email" required onChange={e => setEmail(e.target.value)} />
        <div className="btnContainer">
          <Link to="/level1">
            <button onClick= {handleClick}>Sign In</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
