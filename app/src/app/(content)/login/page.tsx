import { Metadata } from "next";
import React from "react";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
    title: "Login Page | Reach the Cairn",
    description: 'Gain access here to the Reach the Cairn app.',
  };
  
const Login = () => {
    return (
        <div className={styles.login}>
            <h1>Login</h1>
        </div>
    );
}

export default Login;