import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./ForgotPassword.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");


  function handleChange(e) {
    setPassword(password);
  }
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.Icon}>
          <RxCross2 />

          <FaTwitter color="#50b7f5" />
        </div>

        <div className={styles.body}>
          <h1>Find your Twitter account</h1>
          <p>
            Enter the email, phone number, or username associate with your
            account to change your password
          </p>
          <div className={styles.textinput}>
            <TextField
              id="filled-multiline-flexible"
              fullWidth
              label="Email, phone number, or username"
              variant="filled"
              style={{ width: "19rem", marginTop: "30px" }}
            />
          </div>
          <Button className={styles.btn} variant="contained" onClick={handleChange}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
