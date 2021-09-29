import { useState } from "react";
import React from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./main.css";
import icon from "leaflet/dist/images/marker-icon.png";
import Map from './Map.jsx'

export default function App() {
  const [position, setPosition] = useState(null);
  const [desc, setDesc] = useState(null);
  const [reports, setReports] = useState(null);

  // Configure leaflet Marker icon - without this it is broken 💩
  // Wow this kind of sucks and was super hard to find!
  const DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: null  });
  L.Marker.prototype.options.icon = DefaultIcon;

  console.log("BACKEND RUNNING AT " + process.env.REACT_APP_BACKEND);

  function findReports() {
    // Find previous abandoned bicycle reports from the backend
    fetch(`${process.env.REACT_APP_BACKEND}notifications`)
      .then(res => res.json())
      .then(data => setReports(data))
      .catch(err => console.warn(err));
  }

  function report() {
    // Send abandoned bicycle report to the backend
    fetch(`${process.env.REACT_APP_BACKEND}notifications`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "position": position,
            "description": desc
        })
    })
        .then(res => res.json())
        .catch(err => console.warn(err));
  }

  return (
    <div className="form">
      <Map position={position} setPosition={setPosition} />
      <div className="form-fields">
        <h3>Report abandoned bicycle</h3>
        {position && <>GPS: {position.lat}, {position.lng}</>}
        <br />
        <textarea
          onChange={e=>setDesc(e.target.value)}
          placeholder="Write short description here"
        >{desc}</textarea>
        <button onClick={report}>Send report</button>

        <div id="previousReports">
          <button onClick={findReports}>View previous reports:</button>
          {reports ?
          <ul>
            {reports.map(report => <li>
              <div>{report.description}</div>
              <div>lat:{report.position.lat.toFixed(5)} lng:{report.position.lng.toFixed(5)}</div>
            </li>)}
          </ul> :
          <></>}
        </div>
      </div>
    </div>
  );
}
