document.addEventListener("DOMContentLoaded", ()=>{

});
//주사위 보기
const dice = () => {
    const adiv = document.querySelector("#adiv") ;
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n) ;

    // if (n === 1) adiv.innerHTML = "<img src='./img/1.png'>" ;
    // else if (n === 2) adiv.innerHTML = "<img src='./img/2.png'>" ;
    // else if (n === 3) adiv.innerHTML = "<img src='./img/3.png'>" ;
    // else if (n === 4) adiv.innerHTML = "<img src='./img/4.png'>" ;
    // else if (n === 5) adiv.innerHTML = "<img src='./img/5.png'>" ;
    // else if (n === 6) adiv.innerHTML = "<img src='./img/6.png'>" ;

    adiv.innerHTML = `<img src='./img/${n}.png'>` ;
}


//버튼 클릭시 주사위 보기
const dice2 = (seln) => {
    //주사위 숫자 1~6
    let n = Math.floor(Math.random() * 6) + 1;

    //주사위 이미지 넣을 위치
    //const adiv = document.getElementById("adiv"); //이거나 밑에거나 아무거나 쓰자
    const adiv = document.querySelector("#adiv");
    adiv.innerHTML = `<img src = './img/${n}.png'>`;

    //결과 출력을 위한 위치
    const h2 = document.querySelector("hgroup > h2");   //부모자식관계로 찾기
    h2.style.color = "red";
    if ( n === seln) h2.innerHTML = "맞음(승)";    //타입 달라도 쓸 수 있는게 ===
    else h2.textContent = "틀림(패)";

}


