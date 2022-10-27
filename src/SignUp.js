import React from 'react';
import "./SignUp.css";

function SignUp() {
    return (
		<div id="wrapper">
			<div id="background">
				<div id="title">
					<h1>회원가입</h1>
					<p>In Card 홈페이지에 방문해주셔서 감사합니다.</p>
				</div>
				<div id="signUpBackground">
					<form>
            			<p>아이디</p> <input type="text" class="field"/><br/>
            			<p>비밀번호</p> <input type="password" class="field"/><br/>
            			<p>이름</p> <input type="text" class="field"/><br/>
            			<p>성별</p> <input type="radio" value="남" id="radio"/>&nbsp;남자&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="cust_gender" value="여" id="radio" />&nbsp;여자<br/>
            			<p>이메일</p> <input type="text" class="field2"/><br/>
            			<p>휴대전화</p> <input type="tel" class="field"/><br/>
            			<input type="submit" value="가입 하기" class="button" />
            			<input type="reset" value="다시 작성" class="button" />
          			</form>
				</div>
			</div>
		</div>
    );
  }
  
  export default SignUp;
  