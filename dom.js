let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
let nums = ['1', '2', '3', '4', '5', '6', '7']
//th 제목, tr 행, td 열

function loadPage() {
    let $table = document.createElement("table");
    $table.setAttribute('border', '1');
    let $tr = document.createElement("tr");
    for(let day of days) {
        let $th = document.createElement("th");
        let text = document.createTextNode(day);
        $th.appendChild(text);
        $tr.appendChild($th);
    }

    let $tr1 = document.createElement("tr");
    for(let num of nums) {
        let $td = document.createElement("td");
        let text = document.createTextNode(num);
        $td.appendChild(text);
        $tr1.appendChild($td);
    }

    $table.appendChild($tr);
    $table.appendChild($tr1);
    document.getElementById("bdy").appendChild($table);
}
