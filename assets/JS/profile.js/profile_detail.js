    let user_data = JSON.parse(localStorage.getItem("array"))


    let login_status =JSON.parse(localStorage.getItem("login_status")) 
    

    let first_name = document.getElementById("first_name")
    let last_name = document.getElementById("last_name")
    let email = document.getElementById("email")
    let address = document.getElementById("address")


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
      res["email"] = email.value
      res["address"] = address.value

      Notify.success("Profile Updated");

      localStorage.setItem("array", JSON.stringify(user_data))
    })


    // ------------------------------delete---------------------
    let delete_button = document.getElementById("del_button")

    delete_button.addEventListener("click", e => {
      e.preventDefault()

      const logout = delete login_status;

      localStorage.setItem("login_status",logout)

      window.location.href = "../../index.html"
    })