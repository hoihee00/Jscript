class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;
    }
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
} // end of class

// DB 연결 대신 배열에 값 저장해보기
let boardDB = [];
boardDB.push(new Board(1, '자바스크립트', '웹언어임', '최형준'));
boardDB.push(new Board(2, '자바', '컴파일임', '문선애'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리임', '김다희'));
let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];

let table, tr, td, text, button;

function createTitle() {
    // title 영역
    tr = document.createElement("tr");
    for (let field of titles) {
        td = document.createElement("th");
        if (field == 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.onchange = function () {
                let chks = document.querySelectorAll('td input[type="checkbox"');
                console.log(chks);
                for (let i = 0; i < chks.length; i++) {
                    chks[i].checked = this.checked; //checked 속성 : frue or false
                }
            }
            td.append(checkbox);
        } else if (field === 'button') {
            // button = document.createElement('button');
            td.append('상세보기');
        } else {
            text = document.createTextNode(field);
            td.append(text);
        }
        tr.append(td);
    }
    return tr;
}

function getBoardList() {
    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.append(createTitle()); // title row

    // data 영역
    boardDB.forEach(function (obj, jdx) {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj._boardNo);
        table.append(tr);
        for (let field of titles) {
            td = document.createElement('td');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.onchange = function () {
                    syncCheckbox(); // checkbox 동기화 function 연결
                }
                td.append(checkbox);
            } else if (field === 'button') {
                button = document.createElement('button');
                button.innerHTML = '상세보기';
                td.append(button);
                button.onclick = showDetail;
            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }
    });
    document.getElementById('main').append(table);
}

function insertData() {
    let boardNo = document.getElementById('boardNo').value;
    boardNo = boardDB[boardDB.length - 1].boardNo + 1;
    // console.log(boardDB);

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;
    boardDB.push(new Board(boardNo, title, content, writer));

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id', boardNo);
    //체크박스 부분
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.append(checkbox);
    tr.append(td);
    //게시글번호
    td = document.createElement('td');
    td.append(boardNo);
    tr.append(td);
    //제목
    td = document.createElement('td');
    td.append(title);
    tr.append(td);
    //내용
    td = document.createElement('td');
    td.append(content);
    tr.append(td);
    //직성자
    td = document.createElement('td');
    td.append(writer);
    tr.append(td);
    //상세보기 버튼
    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML = '상세보기';
    button.onclick = showDetail;
    td.append(button);
    tr.append(td);

    tbl.append(tr);
    document.getElementById('boardNo').value = boardDB[boardDB.length - 1].boardNo + 1;
    console.log(boardDB);
}

// ?????????????
function getBoard(id) {
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            oneBoard = board;
        }
    }
    return oneBoard;
}

function showDetail() {
    let id = this.parentNode.parentNode.id;
    let board = getBoard(id);
    document.getElementById('boardNo').value = board.boardNo;
    document.getElementById('title').value = board.title;
    document.getElementById('content').value = board.content;
    document.getElementById('writer').value = board.writer;
}

// 데이터 수정
function updateData() {
    // 배열에서 수정
    let boardNo = document.getElementById("boardNo").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let writer = document.getElementById("writer").value;

    for (let i = 0; i < boardDB.length; i++) {
        if (boardDB[i].boardNo == boardNo) {
            boardDB[i] = new Board(boardNo, title, content, writer)
            break;
        }
    }
    // 화면에서 수정
    let trs = document.querySelectorAll('#tbl tr[id]');
    for (let i = 0; i < trs.length; i++) {
        console.log(trs[i].id, boardNo)
        if (trs[i].id == boardNo) {
            trs[i].children[2].innerHTML = title;
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
            break;
        }
    }
}

// 전체 선택 checkbox와 각 데이터별 checkbox의 동기화
function syncCheckbox() {
    // 1) chexkAll true 가정. 데이터 영역에 있는 값 중 하나라도 false
    // 2) checkAll flase;
    let th_ckb = document.querySelectorAll('th input[type="checkbox"]');
    let td_ckb = document.querySelectorAll('td input[type="checkbox"]');
    th_ckb[0].checked = true;
    for (let i = 0; i < td_ckb.length; i++) {
        if (!td_ckb[i].checked) {
            th_ckb[0].checked = false;
            break;
        }
    }
}

// 선택한 데이터 삭제
function deleteChecked() {
    // 화면에서 삭제
    let checkedNo = [];
    let chks = document.querySelectorAll('td input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) { // check한 값만 가지고 옴
            checkedNo.push(chks[i].parentNode.parentNode.id);
            chks[i].parentNode.parentNode.remove();
        }
    }
    // 배열에서 삭제
    checkedNo.forEach(function (obj, idx) { // 삭제할 대상 배열 반복
        for (let i = 0; i < boardDB.length; i++) {
            if (boardDB[i].boardNo == obj) {
                boardDB.splice(i, 1); // splice를 사용하여 값과 차지하던 공간까지 모두 삭제
                break;
            }
        }
    });
    console.log(boardDB);
    document.querySelectorAll('th input[type="checkbox"]')[0].checked = false;
}