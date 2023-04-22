let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list"))


let detail_fund_raisers = document.getElementById("detail_fund_raisers");

let array=[]


function list_raiser(array) {

    document.querySelector(".details-fund-raiser").innerHTML = "";

    array.forEach((item) => {

        let number = Number(item.minimum_amount);


        // create the main container element   
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        // create the image element
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-splayers');

        const image = document.createElement('img');
        image.setAttribute('src', item.player_image_url);
        image.classList.add('player-img');

        imageDiv.appendChild(image);

        // create the description element
        const description = document.createElement('p');
        description.textContent = item.player_title;
        description.classList.add('description');

        // create the name element
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');

        const publisherImgDiv = document.createElement('div');
        publisherImgDiv.classList.add('publisher-img');

        const publisherImg = document.createElement('img');
        publisherImg.setAttribute('src', item.player_image_url);

        publisherImgDiv.appendChild(publisherImg);

        const name = document.createElement('p');
        name.classList.add('beneficiary_name')
        name.textContent = item.player_name

        nameDiv.appendChild(publisherImgDiv);
        nameDiv.appendChild(name);

        // create the fund amount element
        const fundRs = document.createElement('p');
        fundRs.classList.add('fund-rs');

        const fundIcon = document.createElement('i');
        fundIcon.classList.add('fa-solid', 'fa-indian-rupee-sign');

        fundRs.appendChild(fundIcon);

        const fundAmount = document.createElement('span');
        fundAmount.innerHTML = fundAmount.innerHTML+ `<b style="color:#8a8a92";> 
           ${number.toLocaleString('en-IN', {
            maximumFractionDigits: 0,
            style: 'currency',
            currency: 'INR'
        })
            }</b>`;
        fundAmount.style.fontSize = "20px"
        fundAmount.style.marginRight = "10px"

        fundRs.appendChild(fundAmount);

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

        let href_link = "../fundraiser_page/url_params_fundraiser_page.html?emer_id=" + item["emerging_player_id"];


        const cardAnchor = document.createElement('a');
        cardAnchor.href = href_link;
        cardAnchor.appendChild(cardDiv);



        // add the main container element to the document body
        detail_fund_raisers.appendChild(cardAnchor)


    });


}

let filter_array = [];


let checkboxes = document.querySelectorAll("input[type=checkbox][name=filter_by_cat]");


checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        console.log(checkbox)

        if (checkbox.checked) {

            filter_array = [];


            let convert_array = Array.from(checkboxes);

            let checked_input = convert_array.filter(i => i.checked);
            console.log(checked_input)

            let map_input = checked_input.map(i => i.value);
            console.log(map_input)



            map_input.forEach(item => {



                fundraiser_list.filter(function (obj) {


                    let sports_type = obj.sports_type.toLowerCase();



                    if (item === sports_type) {

                        filter_array.push(obj);

                        list_raiser(filter_array);


                    }

                });


            });
        }
        else {
            list_raiser(fundraiser_list);


        }

    });





});


list_raiser(fundraiser_list);



let total_array = [];
let after_checked_arr = [];

//search
const searchBar = document.getElementById("searchbar");


searchBar.addEventListener("input", (e) => {

    let searchQuery = searchBar.value.toLowerCase();

    if ((filter_array.length) === 0) {

        total_array = fundraiser_list.filter((item) => {
            return item.player_name.toLowerCase().includes(searchQuery)
        });

        list_raiser(total_array);
    }

    else if ((filter_array.length) > 0) {

        after_checked_arr = filter_array.filter((item) => {
            return item.player_name.toLowerCase().includes(searchQuery)
        })

        list_raiser(after_checked_arr);;
    }


});


