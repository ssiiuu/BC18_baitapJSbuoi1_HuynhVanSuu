/*
    +) Input 
        nhập vào chiều dài, chiều dài 
    
    +) Các bước xử lý
        - diện tích = dài * rộng
        - chu vi = (dài + rộng)*2
    
    +) Output
        Giá trị diện tích và chu vi hình chữ nhật
*/

var daiEl = document.getElementById("dai")
var rongEl = document.getElementById("rong")

function dientichhcn() {
    var dientichHcn = daiEl.value * rongEl.value
    console.log(dientichHcn);
    document.getElementById("xuatDienTich").innerText = "Diện tích hình chữ nhật : " + dientichHcn;
}
function chuvihcn() {
    var chuviHcn = (daiEl.value * 1 + rongEl.value * 1) * 2
    console.log(chuviHcn);
    document.getElementById("xuatChuVi").innerText = "Chu vi hình chữ nhật : " + chuviHcn;
}
