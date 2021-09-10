import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/add" component={AddContact} />

        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </>
  );
};

export default App;
