import React from "react";
import logo from "./assets/logo.png";

export default function ComingSoon() {
  return (
    <div style={styles.page}>
      
      
      <div style={styles.center}>
        <img src={logo} alt="TS Logo" style={styles.logo} />

        <p style={styles.mainText}>Website is under development</p>
        <p style={styles.email}>Reach us at info@tanujasreekesh.com</p>
      </div>

      
      <p style={styles.footer}>© Tanujasreekesh | All rights reserved.</p>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#2c2c2c",
    color: "#e6e1c2",

    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",

    boxSizing: "border-box",

    
  },

  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },

  logo: {
    width: "220px",
    height: "220px",
    marginBottom: "50px",
  },

  mainText: {
    fontFamily: "'Poiret One', sans-serif",    
    fontSize: "20px",
    marginBottom: "10px",
    color: "white",
  },

  email: {
    fontFamily: "'Poiret One', sans-serif",     
    fontSize: "20px",
    marginBottom: "0px",
    color: "white",
  },

  footer: {
    fontSize: "16px",
    opacity: 0.55,
    marginBottom: "20px",
  }
};
