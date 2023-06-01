import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./logout.module.css";

export default function Logout({ onLogout, active }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    setShowConfirmation(false);
    onLogout();
    navigate("/login");
  }

  function handleLogoutConfirmation() {
    setShowConfirmation(true);
  }

  return (
    <div>
      {showConfirmation ? (
        <div className={styles.logoutconfirmation}>
          <div className={styles.Logout} onClick={handleLogout}>
            <p>logout ayushw@gmail.com</p>
          </div>
          <div className={styles.Logout}>
            <p>Add another existing account</p>
          </div>

          <button className={styles.btn}>
            <b>Logout ...</b>
          </button>
        </div>
      ) : (
        <button className={styles.btn} onClick={handleLogoutConfirmation}>
          <b>Logout ...</b>
        </button>
      )}
    </div>
  );
}
