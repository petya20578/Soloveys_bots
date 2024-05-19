let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let item_none1 = document.getElementById("item_none1");
let item_none2 = document.getElementById("item_none2");
let item_none3 = document.getElementById("item_none3");
let item_none4 = document.getElementById("item_none4");
let item_none5 = document.getElementById("item_none5");
let item_none6 = document.getElementById("item_none6");
let btn_close1 = document.getElementById("btn_close1");
let btn_close2 = document.getElementById("btn_close2");
let btn_close3 = document.getElementById("btn_close3");
let btn_close4 = document.getElementById("btn_close4");
let btn_close5 = document.getElementById("btn_close5");
let btn_close6 = document.getElementById("btn_close6");
let btn_foto1 = document.getElementById("btn_foto1")
let img_block1 = document.getElementById("img_block1")
let img_none1 = document.getElementById("img_none1")

btn1.addEventListener("click", () => {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    document.getElementById("item_none1").style.display = "block";
});

btn2.addEventListener("click", () => {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    document.getElementById("item_none2").style.display = "block";
});

btn3.addEventListener("click", () => {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    document.getElementById("item_none3").style.display = "block";
});

btn4.addEventListener("click", () => {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    document.getElementById("item_none4").style.display = "block";
});

btn5.addEventListener("click", () => {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    document.getElementById("item_none5").style.display = "block";
});

btn6.addEventListener("click", () => {
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    document.getElementById("img6").style.display = "none";
    document.getElementById("item_none6").style.display = "block";
});

btn_close1.addEventListener("click", () => {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";
    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    document.getElementById("item_none1").style.display = "none";
});

btn_close2.addEventListener("click", () => {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";
    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    document.getElementById("item_none2").style.display = "none";
});

btn_close3.addEventListener("click", () => {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";
    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    document.getElementById("item_none3").style.display = "none";
});

btn_close4.addEventListener("click", () => {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";
    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    document.getElementById("item_none4").style.display = "none";
});

btn_close5.addEventListener("click", () => {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";
    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    document.getElementById("item_none5").style.display = "none";
});

btn_close6.addEventListener("click", () => {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "block";
    document.getElementById("img4").style.display = "block";
    document.getElementById("img5").style.display = "block";
    document.getElementById("img6").style.display = "block";
    document.getElementById("item_none6").style.display = "none";
});

btn_foto1.addEventListener("click", () => {
    document.getElementById("img_block1").style.display = "none";
    document.getElementById("img_none1").style.display = "block";
});