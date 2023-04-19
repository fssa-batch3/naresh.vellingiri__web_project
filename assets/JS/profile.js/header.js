

let register = document.getElementById("register")
let login = document.getElementById("login")

let header_main = document.querySelector(".header_main")

let login_status1 = JSON.parse(localStorage.getItem("login_status"))

if(login_status1!==false){
    register.style.display="none"
    login.style.display="none"


    let My_account = document.createElement("button")
    My_account.innerText="My Account"
    My_account.setAttribute("class", "button_form")
    header_main.append(My_account)

  My_account.addEventListener("click",e=>{
    window.location.href="../../../naresh.vellingiri__web_project/pages/profile/profile_detail.html"
  })

}
else{
    register.style.display="block"
    login.style.display="block"
}


