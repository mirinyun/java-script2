//회문처리
const palindrome = (x) => {
    console.log("문자열길이 :", x.length);
    if (x.length == 0) return;
    //문자열 한글자씩
    for (let i = 0; i < x.length; i++) {
        console.log[i];
        //}
    }

    //회문확인
    const txt2 = document.querySelector("#txt2");
    s = "";
    for (let i = x.length - 1; i >= 0; i--) {
        s = s + x[i];
    }

    console.log("x=", x);
    s = x.split("").reverse().join("");

    if (x === s) txt2.value = "회문입니다";
    else txt2.value = "회문이 아닙니다";
};

//숫자합계
const numSum = (x) => {

    const txt2 = document.querySelector("#txt2")
    let sum = 0;

    for (let i of x) {
        if (isNaN(i)) sum = sum + parseInt(i);
    }
    txt2.value = sum;
    console.log(sum);
};


document.addEventListener("DOMContentLoaded", () => {
    //버튼 가져오기
    const bts = document.querySelectorAll("input[type=button]");
    const txt1 = document.querySelector("#txt1");
    const rbt = document.querySelector("input[type=reset]");
    rbt.addEventListener('click', () => {
        //배열 내용 지우기
        arr.length = 0;
    });

    //각버튼에 이벤트 달기
    console.log(bts);
    bts.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.value === "회문확인") palindrome(txt1.value);
            else numSum();
        });
    });


    //배열 확인
    let arr = [];

    const bt1s = document.querySelectorAll(".bt1");
    bt1s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); //홈에 안먹히려고. 자꾸 새로고침 된다.
            console.log(item.textContent);
            switch (item.textContent) {
                case '사과': arr.push('🍏'); break;
                case '바나나': arr.push('🍌'); break;
                case '당근': arr.push('🥕'); break;
                case '수박': arr.push('🍉'); break;
            }
            console.log(arr);
            txt1.value = arr.join(',');
        });
    });

    const bt2s = document.querySelectorAll(".bt2");
    bt2s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); //홈에 안먹히려고. 자꾸 새로고침 된다.
            switch (item.textContent) {
                case '사과삭제': arr = arr.filter((item) => item != '🍏'); break;   // 필터는 골라서 새로운 배열로 반환!!!
                case '바나나삭제': arr = arr.filter((item) => item != '🍌'); break;   // 필터는 골라서 새로운 배열로 반환
                case '당근삭제': arr = arr.filter((item) => item != '🥕'); break;   // 필터는 골라서 새로운 배열로 반환
                case '수박삭제': arr = arr.filter((item) => item != '🍉'); break;   // 필터는 골라서 새로운 배열로 반환
            }
            console.log(arr);
            txt1.value = arr.join(',');
        });
    });

    const bt3s = document.querySelectorAll(".bt3");
    bt3s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); //홈에 안먹히려고. 자꾸 새로고침 된다.
            console.log(item.textContent.slice(0,2));
            switch (item.textContent) {
                case '사과->오이': arr = arr.map((item) => item === '🍏'?'🥒':item); break;   // 필터는 골라서 새로운 배열로 반환!!!
                case '바나나->브로콜리': arr = arr.map((item) => item === '🍌'?'🥦':item); break;   // 필터는 골라서 새로운 배열로 반환
                case '당근->오렌지': arr = arr.map((item) => item === '🥕'?'🍊':item); break;   // 필터는 골라서 새로운 배열로 반환
                case '수박->포도': arr = arr.map((item) => item === '🍉'?'🍇':item); break;   // 필터는 골라서 새로운 배열로 반환
            }
            txt1.value = arr.join("");
        });
    });
});