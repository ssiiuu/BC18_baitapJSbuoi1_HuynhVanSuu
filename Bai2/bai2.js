/*
    +) Input 
        nhập vào 5 số thực
    
    +) Các bước xử lý
        - tính tổng 5 số nhập vào
        - lấy tổng 5 số chia cho 5
    
    +) Output
        Giá trị trung bình của 5 số
*/

var num1El = document.getElementById("num1")
var num2El = document.getElementById("num2")
var num3El = document.getElementById("num3")
var num4El = document.getElementById("num4")
var num5El = document.getElementById("num5")

function tinhTB() {
    var sum = num1El.value * 1 + num2El.value * 1 + num3El.value * 1 + num4El.value * 1 + num5El.value * 1
    var TB = sum / 5
    console.log(TB);
    document.getElementById("xuatTB").innerText = "Số trung bình của 5 số là : " + TB;
}
