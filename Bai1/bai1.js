/*
    +) Input
        nhập vào số ngày làm việc

    +) Thuật toán
        -nhập vào số ngày làm
        -lương 1 ngày = 100.000 vnd
        -lương tính được = lương 1 ngày * số ngày làm

    +) Output
        số tiền lương tính được
*/

var dayEl = document.getElementById("numberDay");
function tinhluong() {
    var luong1ngay = 100000
    var sotien = dayEl.value * luong1ngay
    console.log(sotien);
    document.getElementById("xuatLuong").innerText = "Số lương tính được: " + sotien + " vnd";
}