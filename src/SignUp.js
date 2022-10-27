import React from 'react';
import styles from "./SignUp.module.css";

function SignUp() {
    return (
		<div id={styles.wrapper}>
			<div id={styles.background}>
				<div id={styles.title}>
					<h1>회원가입</h1>
					<p>In Card 홈페이지에 방문해주셔서 감사합니다.</p>
				</div>
				<div id={styles.signUpBackground}>
					<form>
            			<p>아이디</p> <input type="text" class={styles.field}/><br/>
            			<p>비밀번호</p> <input type="password" class={styles.field}/><br/>
            			<p>이름</p> <input type="text" class={styles.field}/><br/>
            			<p>성별</p> <input type="radio" value="남" id={styles.radio}/>&nbsp;남자&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="cust_gender" value="여" id={styles.radio} />&nbsp;여자<br/>
            			<p>이메일</p> <input type="text" class={styles.field2}/><br/>
            			<p>휴대전화</p> <input type="tel" class={styles.field}/><br/>
            			<input type="submit" value="가입 하기" class={styles.button} />
            			<input type="reset" value="다시 작성" class={styles.button} />
          			</form>
				</div>
			</div>
		</div>
    );
  }
  
  export default SignUp;
  