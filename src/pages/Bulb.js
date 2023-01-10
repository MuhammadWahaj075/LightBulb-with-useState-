import React, { useState } from "react";

import styles from "./Bulb.module.css";
import img from "../assets/bulb.jpg";

const Bulb = () => {
  const [turnOn, setTurnOn] = useState(false);
  const [turnOff, setTurnOff] = useState(false);
  const [flicker, setFlicker] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <img
        src={img}
        className={
          turnOn
            ? styles.bulbOn
            : turnOff
            ? styles.bulbOff
            : flicker
            ? styles.flicker
            : styles.img
            ? toggle
              ? styles.bulbOn
              : styles.bulbOff
            : styles.img
        }
        alt="bulb-img"
      />
      <div className={styles.buttons}>
        <button
          className={styles.buttonOn}
          onClick={() => {
            setTurnOn(true);
          }}
        >
          On
        </button>
        <button
          className={styles.buttonOff}
          onClick={() => {
            setTurnOff(true);
            setTurnOn(false);
          }}
        >
          Off
        </button>
        <button
          className={styles.buttonFlicker}
          onClick={() => {
            setFlicker(true);
            setTurnOn(false);
            setTurnOff(false);
          }}
        >
          Flicker
        </button>

        <button
          className={styles.buttonOn}
          onClick={() => {
            setToggle(!toggle);
            setFlicker(false);
            setTurnOn(false);
            setTurnOff(false);
          }}
        >
          {toggle ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
};

export default Bulb;
