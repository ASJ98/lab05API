// import express module as express
const express = require("express");

// import axios module since I don't have the 'fetch' function by default in Node v16
const axios = require("axios");

// create express application
const app = express();

// set view engine to EJS
app.set("view engine", "ejs");

// set up routes
app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/australia", async (req, res) => {
  let url = `http://universities.hipolabs.com/search?country=australia`;

  // let response = await fetch(url); // use the fetch method
  let response = await axios.get(url);
  // let unis = await response.json(); // read the response body and parse as json
  let unis = response.data;
  //console.table(unis[0].name);
  // let firstuni = unis[0];
  res.render("unis", { uni_data: unis, country: "Australia" });
});

app.get("/denmark", async (req, res) => {
  let url = `http://universities.hipolabs.com/search?country=denmark`;

  // let response = await fetch(url); // use the fetch method
  let response = await axios.get(url);
  // let unis = await response.json(); // read the response body and parse as json
  let unis = response.data;
  //console.table(unis[0].name);
  // let firstuni = unis[0];
  res.render("unis", { uni_data: unis, country: "Denmark" });
});

app.get("/france", async (req, res) => {
  let url = `http://universities.hipolabs.com/search?country=france`;

  // let response = await fetch(url); // use the fetch method
  let response = await axios.get(url);
  // let unis = await response.json(); // read the response body and parse as json
  let unis = response.data;
  //console.table(unis[0].name);
  // let firstuni = unis[0];
  res.render("unis", { uni_data: unis, country: "France" });
});

app.get("/usa", async (req, res) => {
  let url = `http://universities.hipolabs.com/search?country=united+states`;

  // let response = await fetch(url); // use the fetch method
  let response = await axios.get(url);
  // let unis = await response.json(); // read the response body and parse as json
  let unis = response.data;
  //console.table(unis[0].name);
  // let firstuni = unis[0];
  res.render("unis", { uni_data: unis, country: "USA" });
});

// get app to listen to port 3000 for requests
app.listen(3000, () => {
  console.log("Server is listening on port localhost:3000");
});
