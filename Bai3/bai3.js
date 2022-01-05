/*
    +) Input 
        nhập vào số tiền USD
    
    +) Các bước xử lý
        - dom tới số tiền nhập vào
        - số tiền quy đổi vnd: 
            vnd = số tiền nhập vào * 23500
    
    +) Output
        số tiền quy đổi vnd
*/
var usdEl = document.getElementById("tienusd")

function quydoivnd() {
    var tienvnd = usdEl.value * 23500
    console.log(tienvnd, "vnd");
    document.getElementById("xuatSoTien").innerText = "Số tiền VND tương ứng là: " + tienvnd + " vnd";
}
