import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="wrapper">
		<header id="leftContents">
			<nav>
				<Link to="/Login"><li>로그인</li></Link>
				<Link to=""><li>회원가입</li></Link>
			</nav>
			<ul id="topMenu">
				<Link to="/Home"><img src={require('./images/logo/로고.png')} width="250px"/></Link>
				<Link to=""><li>초대장 만들기</li></Link>
				<Link to=""><li>내 초대장 관리</li></Link>
			</ul>
		</header>
	</div>
  );
}

export default Header;
