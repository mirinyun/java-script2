const toggle = (v1, v2, v3, v4,) => {
    txt1.value = "";
    txt2.value = "";
    sel1.value = v1;
    sel2.value = v2;
    div1.textContent = v3;
    div2.textContent = v4;
}

//섭씨온도 화씨온도
const cTof = (c) => {
    txt2.value=(c * 9/5) + 32;
}
//화씨온도 섭씨온도
const fTof = (f) => {
    txt2.value=(f-32) * 5/9;
}

document.addEventListener("DOMContentLoaded", () => {

    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    //온도 입력
    txt1.addEventListener("input", () => {
        if(sel1.value === "C") {
            cTof(parseFloat(txt1.value));
        }
        else {
            fTof(parseFloat(txt1.value));
        }
    })
    //select box 제어
    sel1.addEventListener("change", () => {
        if (sel1.value == "C") {
            toggle("C", "F", "℃", "℉");
        }
        else {
            toggle("F", "C", "℉", "℃");
        }
    })
    sel2.addEventListener("change", () => {
        if (sel2.value == "C") {
            toggle("F", "C", "℉", "℃");
        }
        else {
            toggle("C", "F", "℃", "℉");
        }
    })
})








    // //섭씨누르면 화씨/화씨누르면 섭씨로 고정
    // const bt = document.querySelector("button");
    // const radios = document.querySelectorAll("input[type = radio]");

    // //버튼 가져오기
    // bt.addEventListener("click", ()=> {
    //     for(let item of radios) {
    //         if(sel1.value == "C") {
    //             sel2.value = "F";
    //             //foreach()sms break구문 안됨
    //         }
    //         else
    //         sel2.value = "C";
    //     }
    // })
