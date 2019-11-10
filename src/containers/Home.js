import React, {useState, useEffect} from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    </div>
  );
}