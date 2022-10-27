import React from 'react';
import styles from "./Login.module.css";
import { Link } from 'react-router-dom';

function Login() {
    return (
		<div id={styles.wrapper}>
			<div id={styles.background}>
				<div id={styles.title}>
					<h1>로그인</h1>
					<p>In Card 홈페이지에 방문해주셔서 감사합니다.</p>
				</div>
				<div id={styles.loginBackground}>
					<form>
        	    		<input type="text" placeholder="아이디" id={styles.cust_id} class={styles.field}/><br/>
            			<input type="password" placeholder="비밀번호" id={styles.cust_pw} class={styles.field}/><br/>
          	  			<input type="checkbox" id={styles.checkBox}/>&nbsp;아이디 저장<br/>
            			<input type="submit" value="로그인" id={styles.loginButton}/>
          			</form>
          			<Link to="/SignUp"><div id={styles.signupButton}>회원가입</div></Link>
				</div>
			</div>
		</div>
    );
  }
  
  export default Login;
  