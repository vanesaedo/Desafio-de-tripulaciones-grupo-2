/* import React from "react";

const Login = () => {
  return <form action="" className="login-form">
    <label>EMAIL</label>
    <input type="" name="" />
    <label>CONTRASEÑA</label>
    <input type="text" />
    <button>ACCEDER</button>
  </form>;
};

export default Login; */


import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = (props) => { //estados para controlar el formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const request = await axios({
          method: 'get',
          url: 'api/test',
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    testConnection();
  }, [])

  useEffect(() => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
    } else {
      setPasswordMessage("");
    }
  }, [password])

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  const handleSignUp = async () => {
    try {
      console.log("ROLE SENDING", role);
      console.log("PASS SENDING", password);
      console.log("EMAIL SENDING", email);
      const request = await axios({
        method: 'post',
        url: 'api/users/signup', //para evitar poner la ruta completa HTTP:\\....se añade en el package Json la linea "PROXY" y esta ruta va al index.js principal
        data: { email, password, role }
      });
      console.log(request.data);
      setMessage(request.data.msg);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleLogin = async () => {
    try {
      console.log("handlelogin");
      const response = await axios({
        method: 'post',
        url: 'api/users/login',
        data: { email, password }
      });
      console.log("home: " + response);
      const authHeader = response.headers.authorization;

      axios.defaults.headers.common['Authorization'] = authHeader; // Aqui indicamos a axios que todas las peticiones que se hagan, manden el encabezado "Autorizacion" al encabezado recibido de respuesta 
      props.logged.setLogged(true); // cambiamos el estado logueado a True
      props.role.setRole(response.data.role); // cambiamos el rol
      setMessage(`Authorisation Header ${authHeader}`);

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios({
        method: 'get',
        url: 'api/users/logout'
      });
      props.logged.setLogged(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const resourceRequest = async () => {
    try {
      const request = await axios({
        method: 'get',
        url: 'api/resources/protectedresource',
        withCredentials: true
      }
      );
      console.log(request)
      if (request.status === 200) {
        setMessage(request.data.msg);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setMessage("Unauthorized");
      }
      if (error.response.status === 403) {
        setMessage("Unauthorized");
      }
    }

  };


  return <div className="login-form">
    <input type="email" placeholder="email" onChange={handleEmail} />
    {emailMessage ? <span>{emailMessage}</span> : ""}
    <input type="password" placeholder="password" onChange={handlePassword} />
    {passwordMessage ? <span>{passwordMessage}</span> : ""}
    <select disabled value={role} onChange={handleRole} >
      <option value="client">Client</option>
      <option value="admin">Admin</option>
    </select>
    <span>{message}</span>
    <button disabled onClick={handleSignUp}>Sign Up</button>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <button onClick={resourceRequest}>Protected resource request</button>
  </div>;

};

export default Login;