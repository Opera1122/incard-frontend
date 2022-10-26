import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div id="wrapper">
			<div id="background">
				<div id="title">
					<h1>로그인</h1>
					<p>In Card 홈페이지에 방문해주셔서 감사합니다.</p>
				</div>
				<div id="loginBackground">
					<form>
        	    		<input type="text" placeholder="아이디" id="cust_id" class="field"/><br/>
            			<input type="password" placeholder="비밀번호" id="cust_pw" class="field"/><br/>
          	  			<input type="checkbox" id="checkBox"/>&nbsp;아이디 저장<br/>
            			<input type="submit" value="로그인" id="loginButton"/>
          			</form>
          			<a href="signUp.jsp"><div id="signupButton">회원가입</div></a>
				</div>
			</div>
		</div>
    );
  }
  
  export default Login;
  