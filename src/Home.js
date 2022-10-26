import React from "react";
import "./Home.css";
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
	    <div id="wrapper">
			{/* <Header /> */}
			<div id="introBackground">
				<div id="intro">
					<h1>About Invitation Card</h1>
					<p>여러가지 카드를 이용해서 편리하게 나만의 초대장을 만들어보세요!</p>
				</div>
			</div>
			<div id="makeCardBackground">
				<div id="makeCard">
					<h1>초대장 만들기</h1>
					<section class="card">
						<a id=""><img src={require('./images/cards/선물상자2.png')}/></a>
					</section>
					<section class="card">
						<a id=""><img src={require('./images/cards/와인잔.png')}/></a>
					</section>
					<section class="card">
						<a id=""><img src={require('./images/cards/팡.png')}/></a>
					</section>
					<section class="card">
						<a id=""><img src={require('./images/cards/풍선.png')}/></a>
					</section>
				</div>
			</div>
			<Footer />
		</div>
    );
  }
  
  export default Home;
  