/*
//폭탄섞기 버튼 누르면 폭탄을 섞는다.(1-9사이에)(섞기 전에 누르면 안눌러짐) -> 누를 때마다 새로 리셋
//섞고나서 아홉칸중에 아무거나 누른다.
//그 자리 값이랑 폭탄 값이랑 같으면 폭탄 나옴. ( 실패 메시지 뜨고 안눌러짐 끝)
//다르면 누를 때 마다 하트나옴.
//마지막에 폭탄 맞추면 (누른 횟수가 9번이면) 폭탄 안나오고 하트로 바뀜. (성공 메시지 출력)
*/


// 전역변수
// 하트와 폭탄의 위치를 결정하는 배열
// 하트 : 0; 폭탄 : 1;
let arr = [0,0,0,0,0,0,0,0,1];

// 폭탄섞기 확인용 플래그
let flag = true;    // 아직 안섞였을 때

// 눌러진 박스 수
let cnt = 0;



// 초기화
const init = (boxs) => {
    // 초기화
    flag = true;
    cnt = 0;
    // 박스 숫자 초기화
    boxs.forEach(element => {
        let n = element.getAttribute("id").slice(-1);
        console.log(n);

        element.textContent = n;
    });
};

document.addEventListener("DOMContentLoaded",() => {
    // 컴포넌트 가져오기
    const boxs = document.querySelectorAll(".row > div");
    const bt = document.querySelector("button");
    const h2 = document.querySelector("h2");

  
    init(boxs);
    // 폭탄섞기 버튼처리( /배열 셔플처리 )
    bt.addEventListener('click', () => {
        // flag 변수 확인
        if(flag) {
            // 배열 suffle
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);

            //폭탄 섞일 때 다시 초기화
            init(boxs);

            h2.textContent = '폭탄을 피해 선택해주세요.'
            h2.style.color = 'red';
            flag = false;
        }
    });

    // 박스 클릭 처리
    boxs. forEach(element => {

        element.addEventListener('click', () => {
                    // 폭탄이 안섞였을 때
        if (flag) {
            h2.textContent = '폭탄을 섞어주세요.';
            h2.style.color = 'blue';
            return;
        }

        let idx = parseInt(element.textContent);
        // 숫자가 아닌 경우(이미지가 이미 있는 경우 처리 X)
        if (isNaN(idx)) return;

        // 해당 위치의 숫자가 0인지 1인지 확인
        if ((arr[idx-1]) == 0) {
            //하트
            element.innerHTML = '<img src="./img/hart.png">';//하트 사진 넣기
            console.log(element);
            //하트 개수 세아리기
            cnt ++;
            if (cnt == 8) {
                h2.textContent = '성공! 마지막 칸을 눌러보세용';
                h2.style.color = 'blue';
                element.innerHTML = '<img src="./img/hart.png">';//하트 사진 넣기
             }
        }
        else {
            if (cnt == 8) {
                h2.textContent = '축하해요~!';
                h2.style.color = 'blue';
                element.innerHTML = '<img src="./img/hart.png">';//하트 사진 넣기
             }
            else {
            //폭탄
            element.innerHTML = '<img src="./img/boom.png" width = "90%">'; //폭탄 사진 넣기
            h2.textContent = '실패! 폭탄을 다시 섞어보세용';
            h2.style.color = 'blue';
            }
            flag = true;
        }
        //document.queryselector("#box +(idx+1).innerHTML")
        //document.getElementById("box" + (idx+1)).innerHTML
        console.log(element);




    });

});
});
