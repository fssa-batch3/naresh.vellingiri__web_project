let detail_fund_raisers = document.getElementById("detail_fund_raisers")
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




// create the main container element


for (let i = 0; i < fundraiser_list.length; i++) {



    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    // create the image element
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-splayers');

    const image = document.createElement('img');
    image.setAttribute('src', '../../assets/images/fundraiser_images/fundraiser_running.jpg');
    image.classList.add('player-img');

    imageDiv.appendChild(image);

    // create the description element
    const description = document.createElement('p');
    description.textContent = 'Help them for their upcoming career';
    description.classList.add('description');

    // create the name element
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');

    const publisherImgDiv = document.createElement('div');
    publisherImgDiv.classList.add('publisher-img');

    const publisherImg = document.createElement('img');
    publisherImg.setAttribute('src', '../../assets/images/fundraiser_images/fundraiser_running.jpg');

    publisherImgDiv.appendChild(publisherImg);

    const name = document.createElement('p');
    name.classList.add('beneficiary_name')
    name.textContent = fundraiser_list[i]["player_name"];

    nameDiv.appendChild(publisherImgDiv);
    nameDiv.appendChild(name);

    // create the fund amount element
    const fundRs = document.createElement('p');
    fundRs.classList.add('fund-rs');

    const fundIcon = document.createElement('i');
    fundIcon.classList.add('fa-solid', 'fa-indian-rupee-sign');

    fundRs.appendChild(fundIcon);

    const fundAmount = document.createElement('span');
    fundAmount.innerHTML = '<b style="color:#8a8a92";>16,000</b>';
    fundAmount.style.fontSize = "20px"
    fundAmount.style.marginRight = "10px"

    fundRs.appendChild(fundAmount);

    const fundRaised = document.createElement('span');
    fundRaised.textContent = 'raised of';
    fundRs.appendChild(fundRaised);

    const initial_fundRaised = document.createElement('div');
    initial_fundRaised.innerHTML = '<b style="color:black";>1,00,000</b>';
    initial_fundRaised.style.fontSize = "20px"
    initial_fundRaised.style.marginLeft = "5px"

    fundRs.appendChild(initial_fundRaised);



    // create the range element
    const rangeDiv = document.createElement('div');
    rangeDiv.classList.add('range');

    const rangeValue = document.createElement('div');
    rangeValue.classList.add('range_value');
    rangeDiv.appendChild(rangeValue);

    // create the last donation date element
    const lastDateOfFund = document.createElement('p');
    lastDateOfFund.textContent = 'Last Donation 10 days ago';
    lastDateOfFund.classList.add('last-date-of-fund');

    // create the supporters and days left element
    const supportsLastDateOfFund = document.createElement('div');
    supportsLastDateOfFund.classList.add('supports-last-date-of-fund');

    const daysLeft = document.createElement('p');
    const daysLeftSpan = document.createElement('span');
    daysLeftSpan.textContent = '20';
    daysLeft.appendChild(daysLeftSpan);
    daysLeft.appendChild(document.createTextNode(' Days left'));
    supportsLastDateOfFund.appendChild(daysLeft);

    const supporters = document.createElement('p');
    const supportersSpan = document.createElement('span');
    supportersSpan.textContent = '112';
    supporters.appendChild(supportersSpan);
    supporters.appendChild(document.createTextNode(' Supporters'));
    supportsLastDateOfFund.appendChild(supporters);

    // add all elements to the main container element
    cardDiv.appendChild(imageDiv);
    cardDiv.appendChild(description);
    cardDiv.appendChild(nameDiv);
    cardDiv.appendChild(fundRs);
    cardDiv.appendChild(rangeDiv);
    cardDiv.appendChild(lastDateOfFund);
    cardDiv.appendChild(supportsLastDateOfFund);

    let href_link = "../fundraiser_page/url_params_fundraiser_page.html?emer_id=" + fundraiser_list[i]["emerging_player_id"];

    let cardAnchor = document.createElement('a');
    cardAnchor.href = href_link;
    cardAnchor.appendChild(cardDiv);


    // add the main container element to the document body
    detail_fund_raisers.appendChild(cardAnchor)

    
}
