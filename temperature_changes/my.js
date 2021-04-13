function getTemper() {
    let tem = +document.getElementById("temp").value;
    while (true) {
        if (tem > 100) {
            document.getElementById("kq").innerHTML = "giảm nhiệt độ";
            break
        } else if (tem < 20) {
            document.getElementById("kq").innerHTML = "tăng nhiệt độ";
            break
        }
        else {
            document.getElementById("kq").innerHTML = "nhiệt độ bt";
            break
        }
    }

}



