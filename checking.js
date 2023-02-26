let register_1 = document.getElementById("register");
register_1.addEventListener("submit", e => {
    e.preventDefault();
    isac();
})
function move() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
function isac() {
    let Name = document.getElementById("name").value
    let mobileno = document.getElementById("mobileno").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmpassword = document.getElementById("confirmpassword").value
    let aadhar = document.getElementById("aadhar").value
    let role1 = document.getElementById("user").checked
    let role2 = document.getElementById("volunteer").checked
    let address = document.getElementById("address").value
    // script for register while user radio button clikced
    if (role1) {
        // for first user when no user in localStorage
        let arr;
        arr = JSON.parse(localStorage.getItem("user")) ?? []
        if (arr == "" && password == confirmpassword) {
            console.log("1");
            let user_data = {
                "user_name": Name,
                "password": password,
                "mobileno": mobileno,
                "user_email": email,
                "address": address,
                "aadhar": aadhar,
                "user": role1,
                // "volunteer":role2
            }
            // arr = JSON.parse(localStorage.getItem("user")) ?? []
            arr.push(user_data)
            localStorage.setItem("user", JSON.stringify(arr))
            move();
            // login();
        }
        // else for more users
        else {
            console.log("2");
            if (password == confirmpassword) {
                let email_check = JSON.parse(localStorage.getItem("user"));
                //         login();
                let checkmail;
                email_check.find(function (e) {
                    if (e["user_email"] == email) {
                        return checkmail = 1
                    }
                    else {
                        return checkmail = 0
                    }
                })
                if (checkmail == 1) {
                    swal("sorry!", "the email is already registered", "error");
                }
                else {
                    let user_data = {
                        "user_name": Name,
                        "password": password,
                        "mobileno": mobileno,
                        "user_email": email,
                        "address": address,
                        "aadhar": aadhar,
                        "user": role1,
                        // "volunteer":role2
                    }
                    arr = JSON.parse(localStorage.getItem("user")) ?? []
                    arr.push(user_data)
                    localStorage.setItem("user", JSON.stringify(arr))
                    move();
                }
            }
            else {
                swal("sorry!", "new password and confirm password or not matchced", "error");
            }
        }
    }
    // else for radio button volunteer clicked
    else  {
        // when ther is no volunteer in local storage
        let arr;
        arr = JSON.parse(localStorage.getItem("volunteer")) ?? []
        if (arr == "" && password == confirmpassword) {
            console.log("1");
            let volunteer_data = {
                "user_name": Name,
                "password": password,
                "mobileno": mobileno,
                "user_email": email,
                "address": address,
                "aadhar": aadhar,
                // "user":role1,
                "volunteer": role2
            }
            arr = JSON.parse(localStorage.getItem("volunteer")) ?? []
            arr.push(volunteer_data)
            localStorage.setItem("volunteer", JSON.stringify(arr))
            move();
            // login();
        }
        else {
            // when ther is no volunteer iin local storage
            console.log("2");
            if (password == confirmpassword) {
                let email_check = JSON.parse(localStorage.getItem("volunteer"));
                //         login();
                let checkmail;
                email_check.find(function (e) {
                    if (e["user_email"] == email) {
                        return checkmail = 1
                    }
                    else {
                        return checkmail = 0
                    }
                })
                if (checkmail == 1) {
                    swal("sorry!", "the email is already registered", "error");
                }
                else {
                    let volunteer_data = {
                        "user_name": Name,
                        "password": password,
                        "mobileno": mobileno,
                        "user_email": email,
                        "address": address,
                        "aadhar": aadhar,
                        // "user":role1,
                        "volunteer": role2
                    }
                    arr = JSON.parse(localStorage.getItem("volunteer")) ?? []
                    arr.push(volunteer_data)
                    localStorage.setItem("volunteer", JSON.stringify(arr))
                    move();
                }
            }
            else {
                swal("sorry!", "new password and confirm password or not matchced", "error");
            }
        }
    }
}
//   script for login page
let login_1 = document.getElementById("login");
login_1.addEventListener("submit", e => {
    e.preventDefault();
    deva();
})
function deva() {
    let userloginmail = (document.getElementById("logemail").value);
    let userloginpassword = (document.getElementById("logpassword").value);
    const userdatas = JSON.parse(localStorage.getItem("user"));
    let check;
    userdatas.find(element => {
        // checking the registerd email and password and login email and login password are same
        if (element["user_email"] == userloginmail && element["password"] == userloginpassword) {
            const userprofile_name = JSON.stringify(element);
            localStorage.setItem("userprofile_name", userprofile_name)
            return check = 1
        }
        else {
            return check = 0
        }
    })
    if (check == 1) {
        window.location.href = "profile.html"
    }
    else {
        swal("sorry!", "password wrong", "error");
    }
}
