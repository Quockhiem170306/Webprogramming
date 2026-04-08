<script>
    // Hàm lấy giá trị và kiểm tra điều kiện (isNumber, default 0)
    function getValue(id) {
        let val = document.getElementById(id).value.trim();
        
        // Nếu người dùng không nhập, mặc định là 0
        if (val === "") return 0;
        
        // Chuyển sang số
        let num = Number(val);
        
        // Kiểm tra xem có phải là số hợp lệ không (isNaN = Is Not a Number)
        if (isNaN(num)) {
            alert("Vui lòng nhập số hợp lệ cho " + id);
            return null;
        }
        return num;
    }

    // Hàm hiển thị kết quả
    function showResult(res) {
        document.getElementById('gt').value = res;
    }

    // Các hàm tính toán chính
    function tinhTong() {
        let a = getValue('a');
        let b = getValue('b');
        if (a !== null && b !== null) showResult(a + b);
    }

    function tinhHieu() {
        let a = getValue('a');
        let b = getValue('b');
        if (a !== null && b !== null) showResult(a - b);
    }

    function tinhTich() {
        let a = getValue('a');
        let b = getValue('b');
        if (a !== null && b !== null) showResult(a * b);
    }

    function tinhThuong() {
        let a = getValue('a');
        let b = getValue('b');
        if (a !== null && b !== null) {
            if (b === 0) {
                alert("Không thể chia cho 0!");
                showResult("Lỗi");
            } else {
                showResult(a / b);
            }
        }
    }

    function resetForm() {
        document.getElementById('a').value = "";
        document.getElementById('b').value = "";
        document.getElementById('gt').value = "";
    }

    // Gán sự kiện cho các nút bấm (để tránh form tự reload trang)
    document.querySelectorAll('button').forEach((btn, index) => {
        btn.onclick = (e) => {
            e.preventDefault(); // Ngăn form submit lại trang
            if (btn.innerText === '+') tinhTong();
            if (btn.innerText === '-') tinhHieu();
            if (btn.innerText === '*') tinhTich();
            if (btn.innerText === '/') tinhThuong();
            if (btn.innerText === 'reset') resetForm();
        }
    });
</script>