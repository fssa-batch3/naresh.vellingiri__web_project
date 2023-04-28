

let fundraiser = JSON.parse(localStorage.getItem("fundraiser_list"))
let login_status = JSON.parse(localStorage.getItem("login_status"))
let array = JSON.parse(localStorage.getItem("array"))



array.find(function(obj){
    if(login_status[0]["user_id"]==obj["user_id"]){
      name_obj = obj
    }
})



let fundraiser_list = fundraiser.filter(function (obj){
    if(login_status[0]["user_id"]===obj["raiser_user_id"]){
       
        return obj;
    }
    else{
        return false;
    }
})




let detail_fund_raisers = document.getElementById("detail_fund_raisers")
let detail_fund_raisers_flex = document.getElementById("detail_fund_raisers_flex")

// create the main container element


for (let i = 0; i < fundraiser_list.length; i++) {

const detailsFundRaiserFlex = document.createElement('div');
detailsFundRaiserFlex.className = 'details-fund-raiser_flex';
detailsFundRaiserFlex.id = 'detail_fund_raisers_flex';

const card_main_div = document.createElement("div")
card_main_div.setAttribute("class","card_main_div")
card_main_div.style.border = "2px solid black"
detailsFundRaiserFlex.append(card_main_div)

// const card_anchor = document.createElement("a")
// card_anchor.setAttribute("src", "")
// card_main_div.append(card_anchor)

const card = document.createElement('div');
card.className = 'card';





const imagePlayers = document.createElement('div');
imagePlayers.className = 'image-splayers';
const playerImg = document.createElement('img');
playerImg.src = fundraiser_list[i]["player_image_url"]
playerImg.className = 'player-img';
imagePlayers.appendChild(playerImg);

const description = document.createElement('p');
description.className = 'description';
description.textContent = fundraiser_list[i].player_title;

const name = document.createElement('div');
name.className = 'name';
const publisherImg = document.createElement('div');
publisherImg.className = 'publisher-img';
const publisherImgImg = document.createElement('img');
publisherImgImg.src =fundraiser_list[i]["player_image_url"]
publisherImg.appendChild(publisherImgImg);
const p1 = document.createElement('p');
p1.textContent = fundraiser_list[i].player_name;
name.appendChild(publisherImg);
name.appendChild(p1);

let number =Number(fundraiser_list[i].total_raised_value) ;
let minimum_amount =Number(fundraiser_list[i].minimum_amount) ;
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
    maximumFractionDigits:0,
    style: 'currency',
    currency: 'INR'
})
    }
</b>`;

const range = document.createElement('div');
range.className = 'range';
const rangeValue = document.createElement('div');
rangeValue.className = 'range_value';
range.appendChild(rangeValue);

const lastDateOfFund = document.createElement('p');
lastDateOfFund.className = 'last-date-of-fund';
lastDateOfFund.textContent = 'Last Donation 10 days ago';

const supportsLastDateOfFund = document.createElement('div');
supportsLastDateOfFund.className = 'supports-last-date-of-fund';


const p2 = document.createElement('p');


const span1 = document.createElement('span');
span1.textContent = '20';
p2.appendChild(span1);
p2.innerHTML += ' Days left';


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
btn.setAttribute("id","edit_btn_form_creation_fundraiser")
btn.innerText = "Edit"
card_main_div.append(btn)

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


let donar_list = fundraiser_list[i].donar_list;


if(donar_list !=null){


donar_list.forEach((item) => {

            console.log(item)
    array.find(function(arr_data){


        if(arr_data.user_id == item.user_id){

            console.log(arr_data);
           
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


// for(let i=0; i<10; i++){
    
// }


notificationShow.appendChild(message)
notificationShow.appendChild(hr)
notificationShow.appendChild(notifyContainingDiv)



// detailsFundRaiserFlex.appendChild(card)
detailsFundRaiserFlex.appendChild(notificationShow)


detail_fund_raisers.append(detailsFundRaiserFlex)


}

let form_creation_fundraiser=document.getElementById("form_creation_fundraiser")
let cross_mark = document.getElementById("cross_mark")

let edit_btn_form_creation_fundraiser=document.getElementById("edit_btn_form_creation_fundraiser")


edit_btn_form_creation_fundraiser.addEventListener("click", e=>{
    form_creation_fundraiser.style.display = "block"

})

cross_mark.addEventListener("click", e => {
  form_creation_fundraiser.style.display = "none"
})