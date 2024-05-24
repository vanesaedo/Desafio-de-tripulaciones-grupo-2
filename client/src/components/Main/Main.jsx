import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const Main = () => {
  
  return <main className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </main>;
};

export default Main; */

import React, { useState } from "react";
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import Client from './Client';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import RoleManager from "../../utils/RoleManager/RoleManager";
import Login from "./Login";

const Main = () => {

  const [logged, setLogged] = useState(false); //si está o no logueado
  const [role, setRole] = useState(''); //rol de usuario

  return <main className="main">
    <Login />
    <Routes>
     {/*  <Route element={
        <Home
          logged={{ logged, setLogged }}
          role={{ role, setRole }} />}
        path="/" /> */}

      <Route>
        <Route path="admin/*">
          <Route
            path=""
            element={<ProtectedRoutes
              component={<RoleManager
                component={<AdminDashboard />}
                role={role}
                allowedRoles={["admin"]} />}
              logged={logged} />} />
        </Route>

        <Route path="employee/*">
          <Route
            path=""
            element={<ProtectedRoutes
              component={<RoleManager
                component={<Client />}
                role={role}
                allowedRoles={["client"]} />}
              logged={logged} />} />
          <Route element={<Home />} />
        </Route>
      </Route>
    </Routes>

  </main>;
};

export default Main;