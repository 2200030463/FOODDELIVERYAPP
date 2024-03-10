import React from "react";
import styles from "./Footer.module.css";
import BorderBox from "../common-styles/BorderBox";

function Footer() {
  return (
    <BorderBox>
      <div className={styles.footer}>
        <div>
          <h2>Delicious Foods</h2>
          <p>
            KL University,<br></br>
            Vaddeswaram,<br></br>
            Tadepalle,<br></br>
            522502,<br></br>

            Phone: 8688763435,<br></br>
            Email: sriramgorrepati620@gmail.com
          </p>
        </div>
        <div >
          <a target="_blank" href="https://www.instagram.com/skull_crusher._?igsh=MTc1N2U2OWFoeXVnag%3D%3D&utm_source=qr">
          <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
            <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: "rgb(28,173,254)" }}

          ></i>
          </button>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sriram-gorrepati-a6834a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#337eff" }}
                  ></i>
                </button>
              </a>
              <a target="_blank" href="https://github.com/2200030463">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fa-brands fa-github"></i>
                  
                </button>
              </a>
        </div>
      </div>
    </BorderBox>
  );
}

export default Footer;