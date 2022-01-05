/*
    +) Input 
        nhập vào số n có 2 chữ số
    
    +) Các bước xử lý
        - tách số hàng chục : ten = n/10
        - tách số hàng đơn vị : unit = n%10
        - tổng ký số = ten + unit
    +) Output
        Giá trị tổng của 2 ký số
*/

var numEl = document.getElementById("num")
function tongKySo() {
    var ten = Math.floor(numEl.value / 10)
    var unit = numEl.value % 10
    var sumkyso = ten + unit
    console.log(sumkyso);
    document.getElementById("xuatTongKySo").innerText = "Tổng 2 ký số là:" + sumkyso
}