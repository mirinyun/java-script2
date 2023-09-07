/*
const funA = () => {
    console.log("a")
};

console.log("1");
console.log("2");
setTimeout(() => {
   console.log("B")}, 1000);    //timmeout 하면 1000ms 후에 실행할건데 ★3먼저★ 나온다.    //1,2,3,B 순 -> 비동기 처리
console.log("3");
*/
document.addEventListener("DOMContentLoaded", () => {
    // 날짜 가져오기
    const dt = document.querySelector("#dt1");      //id 있을 때는 그냥 "#id_num" or "input[type-date]"
    const divCon = document.querySelector("#divCon");
    dt.addEventListener("change", () => {
        console.log(dt.value);                       //input type 있을 때는 value 찍어야한다.


        // 날짜 변경 시 날짜 가져오기
        let apikey = "f5eef3421c602c6cb7ea224104795888";
        let tDt = dt.value.replaceAll("-", "");
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
        url = url + `?key=${apikey}`;
        url = url + `&targetDt=${tDt}`;
        console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then((item) => {
                let dailyBoxOfficeList = item.boxOfficeResult.dailyBoxOfficeList;
                // let conTag = "<ul>"
                // for(let item of dailyBoxOfficeList) {
                //     conTag = conTag + `<li>${item.movieNm}</li>`
                //     console.log(item.movieNm)
                //     }
                // conTag = conTag + "</ul>";
                let conTag = `<table>
                                <thead>
                                    <tr>  
                                        <th scope = "col" style="text-align:center;">순위</th>
                                        <th scope = "col" style="text-align:center;">영화명</th>
                                        <th scope = "col" style="text-align:right;right:100%;">관객수</th>
                                        <th scope = "col" style="text-align:center;">개봉일</th>
                                    </tr>
                                </thead>`;
                conTag = conTag + '<tbody>';
                for(let item of dailyBoxOfficeList) {
                    conTag = conTag + "<tr>";
                    conTag = conTag + `<td style="text-align:center;">${item.rank}</td>`;
                    conTag = conTag + `<td style="text-align:center;">${item.movieNm}</td>`;
                    conTag = conTag + `<td style="text-align:right;width:15%;">${item.audiCnt}</td>`
                    conTag = conTag + `<td style="text-align:center;">${item.openDt}</td>`;
                    conTag = conTag + "</tr>";
                }
                conTag = conTag + "</tbody></table>";
                divCon.innerHTML = conTag;
            })
            .catch((err) => console.log(err));
    });
});
