// Hàm bổ trợ để lấy giá trị và kiểm tra điều kiện (số, mặc định là 0)
function layGiaTri(id) {
    let val = document.getElementById(id).value;
    
    // Nếu rỗng hoặc không phải là số (isNaN) thì trả về 0
    if (val.trim() === "" || isNaN(val)) {
        return 0;
    }
    return parseFloat(val);
}

function hienThiKetQua(kq) {
    document.getElementById("gt").value = kq;
}

function tinhTong() {
    let a = layGiaTri("a");
    let b = layGiaTri("b");
    hienThiKetQua(a + b);
}

function tinhHieu() {
    let a = layGiaTri("a");
    let b = layGiaTri("b");
    hienThiKetQua(a - b);
}

function tinhTich() {
    let a = layGiaTri("a");
    let b = layGiaTri("b");
    hienThiKetQua(a * b);
}

function tinhThuong() {
    let a = layGiaTri("a");
    let b = layGiaTri("b");
    
    if (b === 0) {
        alert("Không thể chia cho 0!");
        hienThiKetQua("Lỗi");
    } else {
        hienThiKetQua(a / b);
    }
}