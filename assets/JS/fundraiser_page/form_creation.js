// logic to find the user find the user arr;

let user_arr = JSON.parse(localStorage.getItem("array"));

let user_email = JSON.parse(localStorage.getItem("login_status"));

let user_id;

user_arr.find(function (obj) {

    if (user_email[0]["login_email"] == obj["email"]) {

        user_id = obj.user_id;
    }

    return user_id;

});

window.onload = removeitems();

function removeitems() {

    localStorage.removeItem("certificate_list");
}



let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list")) ?? [];

let certificate_list = JSON.parse(localStorage.getItem("certificate_list")) ?? [];


// --------------------------------inputs for next_button_1------------------------------------------------------

let minimum_amount = document.getElementById("minimum_amount");
let selected_option = document.getElementById("selected_option");
let selected_option1 = document.getElementById("selected_option1");
let Employment_status = document.getElementById("Employment_status");
let sports_type = document.getElementById("selected_option_sports_type");
let city_name = document.getElementById("city_name");

// -------------------------------------inputs for next_button_2--------------------------------------------------------------------

let player_name = document.getElementById("player_name");
let player_age = document.getElementById("player_age");
let player_image_url = document.getElementById("player_image_url");
let player_title = document.getElementById("player_title");
let days_left = document.getElementById("days_left");

let update_bio = document.getElementById("Add_bio")

// -------------------------------------inputs for certificates--------------------------------------------------------------------


// function for next button
let raise_fund = document.getElementById("raise_fund");
let form_creation_fundraiser = document.getElementById("form_creation_fundraiser")
let 
 = document.getElementById("form_creation_fundraiser_specific_details")



//--------------------------------- function for add certificate button----------------------------------------

let certificate_button = document.getElementById("Add_certificates")
let certificate_whole_div = document.getElementById("certificate_whole_div")
let background = document.querySelector(".background");

certificate_button.addEventListener("click", e => {
    certificate_whole_div.style.display = "block"
    background.style.display = "block"
    // $(".background").add("background")
})

//--------------------------------- function for cross mark----------------------------------------

let cross_mark = document.getElementById("cross_mark")

cross_mark.addEventListener("click", e => {
    certificate_whole_div.style.display = "none"
    background.style.display = "none"
    // $(".background").removeClass("background")
})
//--------------------------------- function for cross mark----------------------------------------

let certificate_image_url = document.getElementById("certificate_image_url")
let cerficate_number = document.getElementById("certificate_number")




let cer_form = document.getElementById("cer_form");

let cer_append_div = document.querySelector(".display_cer_list");

let cer_output = "";


cer_form.addEventListener("submit", e => {

    e.preventDefault();

    let cer_img_url = certificate_image_url.value.trim();
    let cer_num = cerficate_number.value.trim();

    if ((cer_img_url != "") && (cer_num != "")) {

        let cer_obj = {
            "cer_img": cer_img_url,
            "cer_num": cer_num,
            "cer_id": certificate_list.length*2+2+1
        }

        certificate_list.push(cer_obj);

        localStorage.setItem("certificate_list", JSON.stringify(certificate_list));

        certificate_whole_div.style.display = "none";
        background.style.display = "none"

        // $("#form_creation_fundraiser").removeClass("background");

        cer_form.reset();

        displaycer();

    }

    else {

        alert("Please enter valid detials");

    }

});

function displaycer() {

    cer_output = "";

    let count = 0;

    certificate_list.forEach((item, index) => {

        ++count;

        cer_output += ` <div class="cer_item">
        <div class="items_cert"><p>Certificate ${count}<p> <span onclick="deletecer(${index})">&#128465</span></div>
        <img src="${item.cer_img}" alt="Certificate number"${item.cer_num}>
    </div>`

        cer_append_div.innerHTML = cer_output
    });

}



function deletecer(index) {

    certificate_list.splice(index, 1);

    localStorage.setItem("certificate_list", JSON.stringify(certificate_list));

    alert("deleted succes");

    displaycer();



}


raise_fund.addEventListener("submit", e => {
    e.preventDefault()



    let fundraiser_form = {

        "emerging_player_id": fundraiser_list.length,
        "raiser_user_id" : user_id,
        "minimum_amount": minimum_amount.value.trim(),
        "selected_option": selected_option.value,
        "selected_option1": selected_option1.value,
        "Employment_status": Employment_status.value.trim(),
        "sports_type":sports_type.value.trim(),
        "city_name": city_name.value.trim(),
        "player_name": player_name.value.trim(),
        "player_age": player_age.value.trim(),
        "player_image_url": player_image_url.value.trim(),
        "player_title": player_title.value.trim(),
        "days_left": days_left.value.trim(),
        "total_raised_value":0,
        "certificate_arr": certificate_list,
        "update_bio": update_bio.value,
        "status":false

    }

    fundraiser_list.push(fundraiser_form);

    localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list));

    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nareshfreshworks@gmail.com",
        Password : "FE0DC2C5150B25AA5C7CE8D41EB366B451DB",
        To : 'nareshdev03@gmail.com',
        From : "nareshfreshworks@gmail.com",
        Subject : "sucess",
        Body : "Its working"
    }).then(
      message => alert(message)
    );    

    // location.reload();

});






