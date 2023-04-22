

let fundraiser = JSON.parse(localStorage.getItem("fundraiser_list"))
let login_status = JSON.parse(localStorage.getItem("login_status"))

let fundraiser_list = fundraiser.filter(function (obj){
    if(login_status[0]["user_id"]===obj["raiser_user_id"]){
        return true;
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

let number =Number(fundraiser_list[i].minimum_amount) ;
console.log( number)

console.log(typeof number)

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
initial_fundRaised.innerHTML = `<b style="color:black";>
${number.toLocaleString('en-IN', {
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
card.appendChild(range);
card.appendChild(lastDateOfFund);
card.appendChild(supportsLastDateOfFund);

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



for(let i=0; i<fundraiser_list.length; i++){
    const main = document.createElement('div');
    main.className = 'main';
    
    const specificNotificationDiv = document.createElement('div');
    specificNotificationDiv.className = 'specific_notification_div';
    
    const notificationImg = document.createElement('img');
    notificationImg.className = 'notification_img';
    notificationImg.src = fundraiser_list[i]["player_image_url"];
    notificationImg.alt = '';
    
    const messageRecieveDiv = document.createElement('div');
    messageRecieveDiv.className = 'message_recieve_div';
    
    const messageRecieve = document.createElement('p');
    messageRecieve.className = 'message_recieve';
    messageRecieve.textContent = 'Hi you recieved donation of Rs.100 from Naresh.';
    
    messageRecieveDiv.appendChild(messageRecieve);
    specificNotificationDiv.appendChild(notificationImg)
    specificNotificationDiv.appendChild(messageRecieveDiv)
    
    main.appendChild(specificNotificationDiv)
    
    notifyContainingDiv.appendChild(main)
}


notificationShow.appendChild(message)
notificationShow.appendChild(hr)
notificationShow.appendChild(notifyContainingDiv)



detailsFundRaiserFlex.appendChild(card)
detailsFundRaiserFlex.appendChild(notificationShow)


detail_fund_raisers.append(detailsFundRaiserFlex)




    
//         // create the main container element   
//         const cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');

//         // create the image element
//         const imageDiv = document.createElement('div');
//         imageDiv.classList.add('image-splayers');

//         const image = document.createElement('img');
//         image.setAttribute('src', fundraiser_list[i]["player_image_url"]);
//         console.log(fundraiser_list[i]["player_image_url"]);
//         image.classList.add('player-img');

//         imageDiv.appendChild(image);

//         // create the description element
//         const description = document.createElement('p');
//         description.textContent =fundraiser_list[i].player_title;
//         description.classList.add('description');

//         // create the name element
//         const nameDiv = document.createElement('div');
//         nameDiv.classList.add('name');

//         const publisherImgDiv = document.createElement('div');
//         publisherImgDiv.classList.add('publisher-img');

//         const publisherImg = document.createElement('img');
//         publisherImg.setAttribute('src', fundraiser_list[i]["player_image_url"]);

//         publisherImgDiv.appendChild(publisherImg);

//         const name = document.createElement('p');
//         name.classList.add('beneficiary_name')
//         name.textContent = fundraiser_list[i].player_name

//         nameDiv.appendChild(publisherImgDiv);
//         nameDiv.appendChild(name);

//         // create the fund amount element
//         const fundRs = document.createElement('p');
//         fundRs.classList.add('fund-rs');

//         const fundIcon = document.createElement('i');
//         fundIcon.classList.add('fa-solid', 'fa-indian-rupee-sign');

//         fundRs.appendChild(fundIcon);

//         const fundAmount = document.createElement('span');
//         fundAmount.innerHTML = '<b style="color:#8a8a92";>16,000</b>';
//         fundAmount.style.fontSize = "20px"
//         fundAmount.style.marginRight = "10px"

//         fundRs.appendChild(fundAmount);

//         const fundRaised = document.createElement('span');
//         fundRaised.textContent = 'raised of';
//         fundRs.appendChild(fundRaised);

//         const initial_fundRaised = document.createElement('div');
//         initial_fundRaised.innerHTML = `<b style="color:black";>${fundraiser_list[i].minimum_amount}</b>`;
//         initial_fundRaised.style.fontSize = "20px"
//         initial_fundRaised.style.marginLeft = "5px"

//         fundRs.appendChild(initial_fundRaised);

//         // create the range element
//         const rangeDiv = document.createElement('div');
//         rangeDiv.classList.add('range');

//         const rangeValue = document.createElement('div');
//         rangeValue.classList.add('range_value');
//         rangeDiv.appendChild(rangeValue);

//         // create the last donation date element
//         const lastDateOfFund = document.createElement('p');
//         lastDateOfFund.textContent = 'Last Donation 10 days ago';
//         lastDateOfFund.classList.add('last-date-of-fund');

//         // create the supporters and days left element
//         const supportsLastDateOfFund = document.createElement('div');
//         supportsLastDateOfFund.classList.add('supports-last-date-of-fund');

//         const daysLeft = document.createElement('p');
//         const daysLeftSpan = document.createElement('span');
//         daysLeftSpan.textContent = '20';
//         daysLeft.appendChild(daysLeftSpan);
//         daysLeft.appendChild(document.createTextNode(' Days left'));
//         supportsLastDateOfFund.appendChild(daysLeft);

//         const supporters = document.createElement('p');
//         const supportersSpan = document.createElement('span');
//         supportersSpan.textContent = '112';
//         supporters.appendChild(supportersSpan);
//         supporters.appendChild(document.createTextNode(' Supporters'));
//         supportsLastDateOfFund.appendChild(supporters);

//         // add all elements to the main container element
//         cardDiv.appendChild(imageDiv);
//         cardDiv.appendChild(description);
//         cardDiv.appendChild(nameDiv);
//         cardDiv.appendChild(fundRs);
//         cardDiv.appendChild(rangeDiv);
//         cardDiv.appendChild(lastDateOfFund);
//         cardDiv.appendChild(supportsLastDateOfFund);

//         let href_link = "../fundraiser_page/url_params_fundraiser_page.html?emer_id=" + fundraiser_list[i]["emerging_player_id"];


//         const cardAnchor = document.createElement('a');
//         cardAnchor.href = href_link;
//         cardAnchor.appendChild(cardDiv);



//         // add the main container element to the document body
//         detail_fund_raisers_flex.appendChild(cardAnchor)
//         detail_fund_raisers.append(detail_fund_raisers_flex)







// // create notification_show div
// const notificationShowDiv = document.createElement('div');
// notificationShowDiv.classList.add('notification_show');
// notificationShowDiv.setAttribute('id', 'notification_show');

// // create message paragraph and set text content
// const messageParagraph = document.createElement('p');
// messageParagraph.classList.add('message');
// messageParagraph.setAttribute('id', 'message');
// messageParagraph.textContent = 'Donations';

// // create hr element
// const hrElement = document.createElement('hr');

// // create notify_containing_div
// const notifyContainingDiv = document.createElement('div');
// notifyContainingDiv.classList.add('notify_containing_div');
// notifyContainingDiv.setAttribute('id', 'notify_containing_div');

// for(i=0; i<10; i++){
// // create main div
// const mainDiv = document.createElement('div');
// mainDiv.classList.add('main');

// // create specific_notification_div
// const specificNotificationDiv = document.createElement('div');
// specificNotificationDiv.classList.add('specific_notification_div');

// // create image element and set src and alt attributes
// const imageElement = document.createElement('img');
// imageElement.classList.add('notification_img');
// imageElement.setAttribute('src', '../../assets/images/fundraiser_images/badminton.jpeg');
// imageElement.setAttribute('alt', '');

// // create message_recieve_div
// const messageReceiveDiv = document.createElement('div');
// messageReceiveDiv.classList.add('message_recieve_div');

// // create message_recieve paragraph and set text content
// const messageReceiveParagraph = document.createElement('p');
// messageReceiveParagraph.classList.add('message_recieve');
// messageReceiveParagraph.textContent = 'Hi you recieved donation of Rs.100 from Naresh.';

// // append child elements to their parent elements
// messageReceiveDiv.appendChild(messageReceiveParagraph);
// specificNotificationDiv.appendChild(imageElement);
// specificNotificationDiv.appendChild(messageReceiveDiv);
// mainDiv.appendChild(specificNotificationDiv);
// notifyContainingDiv.appendChild(mainDiv);
// notificationShowDiv.appendChild(messageParagraph);
// notificationShowDiv.appendChild(hrElement);
// notificationShowDiv.appendChild(notifyContainingDiv);
// }


// detail_fund_raisers_flex.appendChild(notificationShowDiv)

// detail_fund_raisers.append(detail_fund_raisers_flex)


    
}








































     // logic for getting notification when the sponsers give the request

    //  let notify_icon = document.getElementById("notify_icon")
    //  // notify_icon.innerText = notify_get.length
 
    //  let notify_icon_total = document.getElementById("notify_icon_total")
 
 
 
    //  // notification_show
    //  let notification_show = document.getElementById("notification_show")
    //  notification_show.style.display = "none"
    //  // notification_show.style.display = "block"
 
 
    //  // function for toggling notification
 
    //  function notification_show_toggle() {
    //    if (notification_show.style.display = "none") {
    //      notification_show.style.display = "block"
    //    }
 
    //  }
 
    //  notify_icon_total.addEventListener("click", e => {
 
    //    notification_show_toggle();
 
 
    //  })
