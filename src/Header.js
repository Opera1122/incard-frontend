import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="wrapper">
		<header id="leftContents">
			<nav>
				<a href="login.jsp"><li>로그인</li></a>
				<a href="signUp.jsp"><li>회원가입</li></a>
			</nav>
			<ul id="topMenu">
				<a href="index.jsp"><img src={require('./images/logo/로고.png')} width="250px"/></a>
				<a href="#makeCard"><li>초대장 만들기</li></a>
				<a href=""><li>내 초대장 관리</li></a>
			</ul>
		</header>
	</div>
  );
}

export default Header;
