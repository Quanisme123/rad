var login = document.querySelector(".login-box")

function getinfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Lấy mảng objUser từ local storage và chuyển đổi từ chuỗi JSON thành mảng
    var storedObjUser = JSON.parse(localStorage.getItem("objUser"));

    // Kiểm tra mật khẩu trong mảng objUser
    var loggedInUser = storedObjUser[username] === password

    if (loggedInUser) {
        console.log(username + " is logged in!");

        // Điều hướng người dùng sau khi đăng nhập thành công
        // window.location.href = "./test.html";
    } else {
        document.getElementById("warning").innerHTML = "The passwords not match"
    }
    // document.getElementById("testp").innerHTML = username;

}

function signUp() {
    var susername = document.getElementById("sign-username").value;
    var spassword = document.getElementById("sign-password").value;
    var sspassword = document.getElementById("2sign-password").value;


    if (spassword == sspassword) {
        var storedObjUser = JSON.parse(localStorage.getItem("objUser"));
        if (storedObjUser == null) {
            storedObjUser = {};
        }
        storedObjUser[susername] = spassword


        // Lưu mảng objUser vào local storage sau khi thêm người dùng mới
        localStorage.setItem("objUser", JSON.stringify(storedObjUser));

        // Log để kiểm tra
        // console.log("New user added:", newUser);

        // Điều hướng người dùng sau khi đăng ký
        window.location.href = "./login.html";
    }
    else {
        document.getElementById("warning").innerHTML = "The passwords not match"
    }
}

// document.getElementById("testp").innerHTML = localStorage.getItem("username");


