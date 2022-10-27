import React from "react";
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id={styles.wrapper}>
		<header id={styles.leftContents}>
			<nav>
				<Link to="/Login"><li>로그인</li></Link>
				<Link to="/SignUp"><li>회원가입</li></Link>
			</nav>
			<ul id={styles.topMenu}>
				<Link to="/"><img src={require('./images/logo/로고.png')} width="250px"/></Link>
				<Link to=""><li>초대장 만들기</li></Link>
				<Link to="/CardManagement"><li>내 초대장 관리</li></Link>
			</ul>
		</header>
	</div>
  );
}

export default Header;
