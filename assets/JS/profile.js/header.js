const register = document.getElementById("register");
const login = document.getElementById("login");

const header_main = document.querySelector(".header_main");

const array1 = JSON.parse(localStorage.getItem("array"));

const login_status1 = JSON.parse(localStorage.getItem("login_status"));

let header_name_obj;


  array1.find((obj) => {
    if(login_status1==false){
    }
    // (obj.user_id == login_status1[0].user_id || login_status1==false) 
    else if((obj.user_id == login_status1[0].user_id)){
      header_name_obj = obj;
    }

  });
  
  if (login_status1 == null) {
    register.style.display = "block";
    login.style.display = "block";
  } else if (login_status1 !== false) {
    register.style.display = "none";
    login.style.display = "none";
  
    const My_account = document.createElement("button");
    My_account.innerText = header_name_obj.first_name;
    My_account.setAttribute("class", "button_form");
    header_main.append(My_account);
  
    My_account.addEventListener("click", (e) => {
      window.location.href = "/pages/profile/profile_detail.html";
    });
  } else {
    register.style.display = "block";
    login.style.display = "block";
  }


