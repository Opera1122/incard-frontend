import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div id={styles.wrapper}>
		<footer>
			(C) 2022 이용민, 김산하, 조성민, 임채성 all rights reserved.
		</footer>
	</div>
  );
}

export default Footer;
