import { Metadata } from "next";
import React from "react";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
    title: "Reach the Art",
    description: 'A door into the artist nature of reach the cairn community',
  };

const Art = () => {
    return (
        <div className={styles.contact}>
            <h1>Reach the art</h1>
        </div>
    );
}

export default Art;