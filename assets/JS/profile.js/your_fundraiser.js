let fundraiser = JSON.parse(localStorage.getItem("fundraiser_list"))
let login_status = JSON.parse(localStorage.getItem("login_status"))
let array = JSON.parse(localStorage.getItem("array"))


window.onload = removeitem();



function removeitem() {

    localStorage.removeItem("copy_player");
}



array.find(function (obj) {
    if (login_status[0]["user_id"] == obj["user_id"]) {
        name_obj = obj
    }
})




let fundraiser_list = fundraiser.filter(function (obj) {
    if (login_status[0]["user_id"] === obj["raiser_user_id"]) {

        return obj;
    }
    else {
        return false;
    }
})



function days_calculation(new_date,current_date){
    current_date = new Date();

 let next_date = new Date(new_date);
   
   diff = Math.abs(((next_date.getTime()))-(current_date.getTime()))
   d=(diff/(1000*3600*24).toFixed(2))
   let a =d.toFixed(0)

   return a
}

days_calculation("05/20/2023")




let detail_fund_raisers = document.getElementById("detail_fund_raisers")
let detail_fund_raisers_flex = document.getElementById("detail_fund_raisers_flex")

// create the main container element


function show_list() {


    let fundraiser_list_one = fundraiser.filter(function (obj) {

        if (login_status[0]["user_id"] === obj["raiser_user_id"]) {

            return "1";
        }
        else {
            return false;
        }
    })


    fundraiser_list_one.forEach((item, index) => {

        const detailsFundRaiserFlex = document.createElement('div');

        detailsFundRaiserFlex.className = 'details-fund-raiser_flex';
        detailsFundRaiserFlex.id = 'detail_fund_raisers_flex';

        const card_main_div = document.createElement("div")
        card_main_div.setAttribute("class", "card_main_div")
        // card_main_div.style.border = "2px solid black"
        detailsFundRaiserFlex.append(card_main_div)

        // const card_anchor = document.createElement("a")
        // card_anchor.setAttribute("src", "")
        // card_main_div.append(card_anchor)

        const card = document.createElement('div');
        card.className = 'card';



        const imagePlayers = document.createElement('div');
        imagePlayers.className = 'image-splayers';
        const playerImg = document.createElement('img');
        playerImg.setAttribute("data-keyword",item.emerging_player_id)
        playerImg.src = item["player_image_url"]
        playerImg.className = 'player-img';
        imagePlayers.appendChild(playerImg);

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = item.player_title;

        const name = document.createElement('div');
        name.className = 'name';
        const publisherImg = document.createElement('div');
        publisherImg.className = 'publisher-img';
        const publisherImgImg = document.createElement('img');
        publisherImgImg.src = item["player_image_url"]
        publisherImg.appendChild(publisherImgImg);
        const p1 = document.createElement('p');
        p1.textContent = item.player_name;
        name.appendChild(publisherImg);
        name.appendChild(p1);

        let number = Number(item.total_raised_value);
        let minimum_amount = Number(item.minimum_amount);

        let dived_value = (number/minimum_amount)*100;




        // console.log( number)

        // console.log(typeof number)

        const fundRs = document.createElement('p');
        fundRs.className = 'fund-rs';
        const iElement = document.createElement('i');
        iElement.className = 'fa-solid fa-indian-rupee-sign';
        fundRs.appendChild(iElement);
        fundRs.innerHTML += number.toLocaleString('en-IN', {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'INR'
        });


        const fundRaised = document.createElement('span');
        fundRaised.textContent = 'raised of';
        fundRs.appendChild(fundRaised);



        const initial_fundRaised = document.createElement('div');
        initial_fundRaised.innerHTML = `<b class="initial_fundRaised" style="color:black";>
${(minimum_amount).toLocaleString('en-IN', {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'INR'
        })
            }
</b>`;

        const range = document.createElement('div');
        range.className = 'range';

        const rangeValue = document.createElement('div');
        rangeValue.className = 'range_value';
        rangeValue.style.width = dived_value + "%"
        range.appendChild(rangeValue);

        const lastDateOfFund = document.createElement('p');
        lastDateOfFund.className = 'last-date-of-fund';
        lastDateOfFund.textContent = 'Last Donation 10 days ago';

        const supportsLastDateOfFund = document.createElement('div');
        supportsLastDateOfFund.className = 'supports-last-date-of-fund';


        const p2 = document.createElement('p');

        let total_days_left=days_calculation(item.days_left)

        const span1 = document.createElement('span');
        span1.textContent = total_days_left;
        p2.appendChild(span1);
        p2.innerHTML += ' Days left';

        localStorage.setItem("date",total_days_left)


        const p3 = document.createElement('p');

        const span2 = document.createElement('span');

        span2.textContent = '112';
        p3.appendChild(span2);
        p3.textContent += ' Supporters';
        supportsLastDateOfFund.appendChild(p2);
        supportsLastDateOfFund.appendChild(p3);

        card.appendChild(imagePlayers);
        card.appendChild(description);
        card.appendChild(name);
        card.appendChild(fundRs);
        card.appendChild(initial_fundRaised)
        card.appendChild(range);
        card.appendChild(lastDateOfFund);
        card.appendChild(supportsLastDateOfFund);

        card_main_div.append(card)

        const btn = document.createElement("button")
        btn.setAttribute("class", "edit_btn_form_creation_fundraiser")
        btn.setAttribute("id", "edit_btn_form_creation_fundraiser")
        btn.setAttribute("onclick", `editemerginplayer(${item.emerging_player_id})`)
        btn.innerText = "Edit"
        card_main_div.append(btn)

        const delete_btn = document.createElement("button")
        delete_btn.setAttribute("class","delete_btn_form_creation_fundraiser")
        delete_btn.setAttribute("id", "delete_btn_form_creation_fundraiser")
        delete_btn.setAttribute("onclick", `deleteemerplayer(${item.emerging_player_id})`)
        delete_btn.innerText = "Delete"
        card_main_div.append(delete_btn)



        const notificationShow = document.createElement('div');
        notificationShow.className = 'notification_show';
        notificationShow.id = 'notification_show';

        const message = document.createElement('p');
        message.className = 'message';
        message.id = 'message';
        message.textContent = 'Donations';

        const hr = document.createElement('hr');

        const notifyContainingDiv = document.createElement('div');
        notifyContainingDiv.className = 'notify_containing_div';
        notifyContainingDiv.id = 'notify_containing_div';


        let donar_list = item.donar_list;


        if (donar_list != null) {


            donar_list.forEach((item) => {

                array.find(function (arr_data) {


                    if (arr_data.user_id == item.user_id) {


                        const main = document.createElement('div');
                        main.className = 'main';

                        const specificNotificationDiv = document.createElement('div');
                        specificNotificationDiv.className = 'specific_notification_div';

                        const notificationImg = document.createElement('img');
                        notificationImg.className = 'notification_img';
                        notificationImg.src = arr_data["proile_image"];
                        notificationImg.alt = '';

                        const messageRecieveDiv = document.createElement('div');
                        messageRecieveDiv.className = 'message_recieve_div';

                        const messageRecieve = document.createElement('p');
                        messageRecieve.className = 'message_recieve';
                        messageRecieve.textContent = `${arr_data.first_name} has donated you ₹${item.donation_amount}`;

                        messageRecieveDiv.appendChild(messageRecieve);
                        specificNotificationDiv.appendChild(notificationImg)
                        specificNotificationDiv.appendChild(messageRecieveDiv)

                        main.appendChild(specificNotificationDiv)

                        notifyContainingDiv.appendChild(main)


                    }
                })

            });

        }

        else {

            notifyContainingDiv.innerHTML = `<h1>No donares</h1>`
        }



        notificationShow.appendChild(message)
        notificationShow.appendChild(hr)
        notificationShow.appendChild(notifyContainingDiv)



        // detailsFundRaiserFlex.appendChild(card)
        detailsFundRaiserFlex.appendChild(notificationShow)


        detail_fund_raisers.append(detailsFundRaiserFlex)


        btn.addEventListener('click', function (e) {

            form_creation_fundraiser.style.display = "block"
        })


    })

}

let form_creation_fundraiser1 = document.getElementById("form_creation_fundraiser1")
let cross_mark = document.getElementById("cross_mark")

cross_mark.addEventListener("click", e => {
    form_creation_fundraiser.style.display = "none"
})


let raise_fund = document.getElementById("raise_fund");
let form_creation_fundraiser = document.getElementById("form_creation_fundraiser")
let form_creation_fundraiser_specific_details = document.getElementById("form_creation_fundraiser_specific_details")

let minimum_amount = document.getElementById("minimum_amount");
let days_left = document.getElementById("days_left");
let show_bio = document.getElementById("Add_bio");
let certificate_button = document.getElementById("Add_certificates")
let certificate_whole_div = document.getElementById("certificate_whole_div");

let cert_form = document.getElementById("cer_form");
let certificate_image_url = document.getElementById("certificate_image_url")
let cerficate_number = document.getElementById("certificate_number")




let cer_append_div = document.querySelector(".display_cer_list");

let cer_output = "";


function deleteemerplayer(id){

    for(let i=0; i < fundraiser.length; i++){

        if(fundraiser[i].emerging_player_id == id){

            fundraiser.splice(i,1);

            alert("deleted");

            detail_fund_raisers.innerHTML = " ";

            localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser));
            
            show_list();

            break;
        }
    }

}



function editemerginplayer(id) {

    fundraiser_list.find(function (obj) {

        if (id == obj.emerging_player_id) {


            let copy_player = obj;

            localStorage.setItem("copy_player", JSON.stringify(copy_player));

            minimum_amount.value = copy_player.minimum_amount;
            days_left.value = copy_player.days_left;
            show_bio.value = copy_player.update_bio;



            console.log( minimum_amount.value);
            console.log(days_left.value);
            console.log(show_bio.value);

            displaycer();  //question to ask


        }
    })
}

function displaycer() {

    let get_copy = JSON.parse(localStorage.getItem("copy_player"));

    let get_cer = get_copy.certificate_arr;

    cer_output = "";

    let count = 0;

    get_cer.forEach((item, index) => {

        ++count;

        cer_output += ` <div class="cer_item">
        <div class="items_cert"><p>Certificate ${count}<p> <span onclick="deletecer(${index})">&#128465</span></div>
        <img src="${item.cer_img}" alt="Certificate number"${item.cer_num}>
    </div>`

        cer_append_div.innerHTML = cer_output
    });

}


function deletecer(index) {

    let get_copy = JSON.parse(localStorage.getItem("copy_player"));

    let get_cer = get_copy.certificate_arr;

    get_cer.splice(index, 1);

    localStorage.setItem("copy_player", JSON.stringify(get_copy));

    alert("deleted succes");

    displaycer();

}


cert_form.addEventListener("submit", function (e) {

    let get_copy_data = JSON.parse(localStorage.getItem("copy_player"));

    let get_cer = get_copy_data.certificate_arr;

    e.preventDefault();

    let cer_img_url = certificate_image_url.value.trim();
    let cer_num = cerficate_number.value.trim();

    if ((cer_img_url != "") && (cer_num != "")) {

        let cer_obj = {
            "cer_img": cer_img_url,
            "cer_num": cer_num,
            "cer_id": get_cer.length * 2 + 2 + 1
        }


        get_cer.push(cer_obj);

        localStorage.setItem("copy_player", JSON.stringify(get_copy_data));

        certificate_whole_div.style.display = "none";

        $("#form_creation_fundraiser").removeClass("background_blur");

        cert_form.reset();

        displaycer();

    }

    else {

        alert("Please enter valid detials");

    }

})


raise_fund.addEventListener("submit", function (e) {

    e.preventDefault();

    let get_copy = JSON.parse(localStorage.getItem("copy_player"));

    let get_amount = minimum_amount.value;
    let get_days = days_left.value;
    let get_bio = show_bio.value;


    fundraiser.find(function (obj) {

        if (obj.emerging_player_id == get_copy.emerging_player_id) {

            obj.minimum_amount = get_amount;
            obj.days_left = get_days;
            obj.update_bio = get_bio;

            obj.certificate_arr = get_copy.certificate_arr;

            alert("updated");

            localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser));

            // detail_fund_raisers.innerHTML = ""

            cer_append_div.innerHTML = "";

            raise_fund.reset();

            localStorage.removeItem("copy_player");

            // show_list();  //question to ask
        }
    })


})

//--------------------------------- function for add certificate button----------------------------------------




certificate_button.addEventListener("click", e => {
    certificate_whole_div.style.display = "block"
    $("#form_creation_fundraiser").addClass("background_blur")
})

//--------------------------------- function for cross mark----------------------------------------

let cross_mark_1 = document.getElementById("cross_mark_1")

cross_mark_1.addEventListener("click", e => {
    certificate_whole_div.style.display = "none"
    $("#form_creation_fundraiser").removeClass("background_blur")
})


show_list();

// let raised_value = document.querySelectorAll(".fund-rs")
// console.log(raised_value);
// for(let i = 0; i < raised_value.length;i++){

// }

// let delete_btn = document.querySelectorAll(".edit_btn_form_creation_fundraiser")
// let whole_div = document.querySelectorAll(".details-fund-raiser_flex")
// console.log(whole_div);
// let images = document.querySelectorAll(".player-img")
// let fund_arr = JSON.parse(localStorage.getItem("fundraiser_list"))
// for(let i = 0; i < delete_btn.length;i++){
//     delete_btn[i].addEventListener("click",function () {
        
//        let id = images[i].dataset.keyword
//        whole_div[i].remove();
//        let fund = fund_arr.filter(function (obj) {
//         if (id === obj["emerging_player_id"]+"") {
//             return false
//         }
//         else{
//             return true
//         }
//        })

       
//        localStorage.setItem("fundraiser_list",JSON.stringify(fund))
        
//     })
// }