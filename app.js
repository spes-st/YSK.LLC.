// ロード時実行
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");
let hamburger = document.querySelectorAll(".burger");

const tl = gsap.timeline();

tl.fromTo(
	hero,
	1.3,
	{ height: "0%" },
	{ height: "100%", ease: Power2.easeInOut }
)
	.fromTo(
		hero,
		1.5,
		{ width: "50%" },
		{ width: "100%", ease: Power2.easeInOut }
	)
	.fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
	.fromTo(menu, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
	.fromTo(headline, 1, { opacity: 0, x: -100 }, { opacity: 1, x: 10 }, "-=0.5")
	.fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");

let targets = document.querySelectorAll(".fade-In-effect"); //アニメーションさせたい要素
//スクロールイベント
window.addEventListener("scroll", function () {
	var scroll = window.scrollY; //スクロール量を取得
	var windowHeight = window.innerHeight; //画面の高さを取得
	for (let target of targets) {
		//ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
		var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
		if (scroll > targetPos - windowHeight) {
			//スクロール量 > ターゲット要素の位置
			target.classList.add("is-animated"); //is-animatedクラスを加える
		}
	}
});

// リンクをtouchした際のスクロール制御
$(document).ready(function () {
	$('a[href^="#"]').on("click", function (event) {
		var target = $(this.getAttribute("href"));
		if (target.length) {
			event.preventDefault();
			$("html, body").stop().animate(
				{
					scrollTop: target.offset().top,
				},
				800
			); // アニメーションスピード指定
		}
	});
});

let burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav li");

burger.addEventListener("click", () => {
	nav.classList.toggle("nav-active");

	navLinks.forEach((link, index) => {
		link.style.animation = "navLinksFade 0.5s ease forwards ${index}s";
	});
});
