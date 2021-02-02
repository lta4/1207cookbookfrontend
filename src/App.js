import React, { useState } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
// import Display from "./Display";

function App() {
  // URL VARIABLE
  const url = "http://localhost:3001"
  // LIST OF COOKBOOKS
  const [cookbooks, setCookbooks] = React.useState([])
  // EMPTY COOKBOOK
  const emptyCookbook = {
    title: "",
    yearPublished: 0
  }

  // STATE TO TRACK COOKBOOK TO EDIT
  const [selectedCookbook, setSelectedCookbook] = React.useState
  (emptyCookbook);

  // FUNCTION TO GET LIST OF COOKBOOKS
  const getCookbooks = () => {
    fetch(url + "/cookbook")
    .then(response => response.json())
    .then(data => {
      setCookbooks(data)
    })
  }

  // FETCH DOGS WHEN PAGE LOADS
  React.useEffect(() => {
    getCookbooks()
  }, [])

  // HANDLECREATE FUNCTION FOR CREATING COOKBOOKS
  const handleCreate = (newCookbook) => {
    fetch(url + "/cookbook", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCookbook)
    })
    .then(() => {
      getCookbooks()
    })
  }
  
  const selectCookbook = (cookbook) => {
    setSelectedCookbook(cookbook)
  }

  // FUNCTION FOR WHEN DOG IS UPDATED
  const handleUpdate = (cookbook) => {
    fetch(url + "/cookbook/" + cookbook._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cookbook)
    })
    .then(() => {
      getCookbooks()
    })
  }

  // DELETES A COOKBOOK
  const deleteCookbook = (cookbook) => {
    fetch(url + "/cookbook/" + cookbook._id, {
      method: "delete"
    })
    .then(() => {
      getCookbooks()
    })
  }

  return (
    <div className="App">
      <h1>Cookbook List</h1>
      <button>Create a Cookbook</button>
    </div>
  );
}

export default App;
