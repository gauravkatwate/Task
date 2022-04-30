import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Summerydata = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({});

  const onback = () => {
    navigate("/");
  };
  useEffect(() => {
    const formdata = window.localStorage.getItem("formdata");
    setformdata(JSON.parse(formdata));
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">diagnosed problem</th>
            <th scope="col">physical trauma</th>
            <th scope="col">mental trauma</th>
            <th>experience problem</th>
            <th>average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formdata.Que1}</td>
            <td>{formdata.Que2}</td>
            <td>{formdata.Que3}</td>
            <td>{formdata.Que4}</td>
            <td>{formdata.Que6}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center my-5">
        <button className="btn btn-primary mx-2" onClick={onback}>
          BACK
        </button>
        <button className="btn btn-primary mx-2">NEXT</button>
      </div>
    </div>
  );
};

export default Summerydata;
