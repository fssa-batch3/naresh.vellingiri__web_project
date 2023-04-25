let user_data = JSON.parse(localStorage.getItem("array"))


let login_status = JSON.parse(localStorage.getItem("login_status"))


let first_name = document.getElementById("first_name")
let last_name = document.getElementById("last_name")
let email = document.getElementById("email")
let profile_image = document.getElementById("profile_image")
let address = document.getElementById("address")
let phone_number = document.getElementById("number")
let dob = document.getElementById("dob")
let url1 = document.getElementById("url1")

let res;

user_data.find(
  e => {
    if (e["email"] == login_status[0]["login_email"]) {
      return res = e;
    }
  }
)


first_name.value = res["first_name"]
last_name.value = res["last_name"]
email.value = res["email"]

if ((res["address"] != null) && (res["phone_number"] != null) && (res["dob"] != null) && (res["url1"] != null)) {

  address.value = res["address"];
  phone_number.value = res["phone_number"];
  profile_image.value= res["profile_image"];
  dob.value = res["dob"];
  url1.value = res["url1"];

}



// ------------------------------edit---------------------
let edit_button = document.getElementById("edit_button")

edit_button.addEventListener("click", e => {

  e.preventDefault()

  first_name.removeAttribute("disabled", "")
  last_name.removeAttribute("disabled", "")

})


// ------------------------------update---------------------
let save_change_button = document.getElementById("save_change_button")

save_change_button.addEventListener("click", e => {
  e.preventDefault()
  res["first_name"] = first_name.value
  res["last_name"] = last_name.value


  res["address"] = address.value
  res["phone_number"] = phone_number.value
  res["dob"] = dob.value
  res["url1"] = url1.value
  res["proile_image"]=profile_image.value

  Notify.success("Profile Updated");

  localStorage.setItem("array", JSON.stringify(user_data))
})


// ------------------------------delete---------------------
let delete_button = document.getElementById("del_button")

delete_button.addEventListener("click", e => {
  e.preventDefault()

  const logout = delete login_status;

  localStorage.setItem("login_status", logout)

  window.location.href = "../../index.html"
})