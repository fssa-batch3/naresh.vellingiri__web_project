
let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list")) ?? []

let certificate_list = JSON.parse(localStorage.getItem("certificate_list")) ?? []


// --------------------------------inputs for next_button_1------------------------------------------------------

let minimum_amount = document.getElementById("minimum_amount");
let selected_option = document.getElementById("selected_option");
let selected_option1 = document.getElementById("selected_option1")
let Employment_status = document.getElementById("Employment_status");
let sports_type = document.getElementById("sports_type");
let city_name = document.getElementById("city_name");

// -------------------------------------inputs for next_button_2--------------------------------------------------------------------

let player_name = document.getElementById("player_name");
let player_age = document.getElementById("player_age");
let player_image_url = document.getElementById("player_image_url");
let player_title = document.getElementById("player_title");
let days_left = document.getElementById("days_left");

// -------------------------------------inputs for certificates--------------------------------------------------------------------





// function for next button
let next_button = document.getElementById("next_button");
let form_creation_fundraiser = document.getElementById("form_creation_fundraiser")
let form_creation_fundraiser_specific_details = document.getElementById("form_creation_fundraiser_specific_details")

next_button.addEventListener("click", e => {
    e.preventDefault()

    let fundraiser_form = {

        "emerging_player_id": "",
        "minimum_amount": minimum_amount.value.trim(),
        "selected_option": selected_option.value,
        "selected_option1": selected_option1.value,
        "Employment_status": Employment_status.value.trim(),
        "sports_type": sports_type.value.trim(),
        "city_name": city_name.value.trim(),
        "player_name": player_name.value.trim(),
        "player_age": player_age.value.trim(),
        "player_image_url": player_image_url.value.trim(),
        "player_title": player_title.value.trim(),
        "days_left": days_left.value.trim(),

    }

    fundraiser_list.push(fundraiser_form);
    localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list));


});



//--------------------------------- function for add certificate button----------------------------------------

let certificate_button = document.getElementById("Add_certificates")
let certificate_whole_div = document.getElementById("certificate_whole_div")


certificate_button.addEventListener("click", e => {
    certificate_whole_div.style.display = "block"
    $("#form_creation_fundraiser").addClass("background_blur")
})

//--------------------------------- function for cross mark----------------------------------------

let cross_mark = document.getElementById("cross_mark")

cross_mark.addEventListener("click", e => {
    certificate_whole_div.style.display = "none"
    $("#form_creation_fundraiser").removeClass("background_blur")


})