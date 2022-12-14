import React from "react";
import styles from "./Home.module.css";

function Home() {
    return (
	    <div id={styles.wrapper}>
			<div id={styles.introBackground}>
				<div id={styles.intro}>
					<h1>About Invitation Card</h1>
					<p>여러가지 카드를 이용해서 편리하게 나만의 초대장을 만들어보세요!</p>
				</div>
			</div>
			<div id={styles.makeCardBackground}>
				<div id={styles.makeCard}>
					<h1>초대장 만들기</h1>
					<section class={styles.card}>
						<a id=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>
					<section class={styles.card}>
						<a id=""><img src={require('./images/cards/와인잔.png')}/></a>
					</section>
					<section class={styles.card}>
						<a id=""><img src={require('./images/cards/팡.png')}/></a>
					</section>
					<section class={styles.card}>
						<a id=""><img src={require('./images/cards/풍선.png')}/></a>
					</section>
				</div>
			</div>
		</div>
    );
  }
  
  export default Home;
  