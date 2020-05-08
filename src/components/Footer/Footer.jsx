import React from "react";
import { Typography } from "@material-ui/core";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography variant="p" color="inherit">
        This project was made by <strong>ARFI Nadir</strong>
      </Typography>
    </footer>
  );
};

export default Footer;
