import React from "react";
import styles from "./CardManagement.module.css";

function CardManagement() {
  return (
	<div id={styles.wrapper}>
		<div id={styles.contentsBackground}>
			<div id={styles.contents}>
			<div id={styles.intro}>
				<h1>내 초대장 관리하기</h1>
				<h3>지금까지 만들어 놓은 초대장들을 쉽게 관리 해보세요!</h3>
				<h3>아직 아무 초대장도 없나요? 그럼 초대장 만들기에서 멋지게 만들어보세요!</h3>
			</div>
				<div id ={styles.cardManage}>
				    <section class={styles.card}>
						<a href=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>					
				    <section class={styles.card}>
						<a href=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>					
				    <section class={styles.card}>
						<a href=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>
				    <section class={styles.card}>
						<a href=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>
                    <section class={styles.card}>
						<a href=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>					
				    <section class={styles.card}>
						<a href=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>
				</div>
			</div>		
		</div>
	</div>
  );
}

export default CardManagement;
