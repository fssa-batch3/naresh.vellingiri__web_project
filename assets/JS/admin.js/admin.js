let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list"))

console.log(fundraiser_list);

// let detail_fund_raisers = document.getElementById("detail_fund_raisers");

// let array = []



function days_calculation(new_date,current_date){
    current_date = new Date();

 let next_date = new Date(new_date);
   
   diff = Math.abs(((next_date.getTime()))-(current_date.getTime()))
   d=(diff/(1000*3600*24).toFixed(2))
   let a =d.toFixed(0)
   console.log(a);

   return a
}

// days_calculation(fundraiser_list[3]["days_left"]);






let request_div = document.querySelector(".request_div")



function list_raiser(array) {

    request_div.innerHTML = "";

    array.forEach((item) => {

        // if(item.status==true){


              // create the main container element   
              const card_main_div = document.createElement("div")
              card_main_div.setAttribute("class", "card_main_div")
              // card_main_div.style.border = "2px solid black"
              request_div.append(card_main_div)
      
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
              btn.setAttribute("class", "accept_btn_form_creation_fundraiser")
              btn.setAttribute("id", "accept_btn_form_creation_fundraiser")
              btn.setAttribute("onclick", `updatestatus(${item.emerging_player_id})`)
              btn.innerText = "Accept"
              card_main_div.append(btn)
      
              const delete_btn = document.createElement("button")
              delete_btn.setAttribute("class","reject_btn_form_creation_fundraiser")
              delete_btn.setAttribute("id", "reject_btn_form_creation_fundraiser")
              delete_btn.setAttribute("onclick", `reject_status(${item.emerging_player_id})`)
              delete_btn.innerText = "Reject"
              card_main_div.append(delete_btn)


              let href_link = "../fundraiser_page/url_params_fundraiser_page.html?emer_id=" + item["emerging_player_id"];


              // console.log(href_link);

      
              const cardAnchor = document.createElement('a');
              cardAnchor.href = href_link;
              cardAnchor.appendChild(card);

              card_main_div.prepend(cardAnchor)


        // add the main container element to the document body
        request_div.appendChild(card_main_div)
        

      


    });



}

list_raiser(fundraiser_list)

function updatestatus(id){

    fundraiser_list.find(function(obj){

        if(id == obj.emerging_player_id){

            obj.status = true;

            localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list));
        }
    })


}

function reject_status(id){

    fundraiser_list.find(function(obj){
        if(id==obj.emerging_player_id){
            obj.status=false;

            localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list))
        }
    })
}



// let filter_array;
// let data;



// let checkboxes = document.querySelectorAll("input[type=checkbox][name=filter_by_cat]");

// list_raiser(fundraiser_list);

// checkboxes.forEach((checkbox, index) => {
//     checkbox.addEventListener('click', function (e) {

//         console.log(e.target);

//         let map_input;


//         // list_raiser(fundraiser_list);

//         if (checkbox.checked) {

//             filter_array = [];


//             let convert_array = Array.from(checkboxes);

//             let checked_input = convert_array.filter(i => i.checked);

//             map_input = checked_input.map(i => i.value);

//             map_input.forEach(item => {


//                 fundraiser_list.filter(function (obj) {


//                     sports_type = obj.sports_type.toLowerCase();

//                     if (item === sports_type) {
//                         filter_array.push(obj);

//                         list_raiser(filter_array);

//                     }

//                 });


//             });


//         }
//         else {
//             if (filter_array == null) {
//                 list_raiser(fundraiser_list)
//             }
//             else {

//                 let uncheck;
//                 filter_array.find((el) => {
//                     if (el["sports_type"] == e.target.value) {
//                         return uncheck = el
//                     }
//                 })
//                 let curr = filter_array.indexOf(uncheck)
//                 filter_array.splice(curr, 1)
//                 if (filter_array.length > 0) {
//                     list_raiser(filter_array)
//                 }
//                 else {
//                     // location.reload()
//                     list_raiser(fundraiser_list)

//                 }


//             }


//         }

//     });





// });




// let total_array = [];
// let after_checked_arr = [];

// //search
// const searchBar = document.getElementById("searchbar");


// searchBar.addEventListener("input", (e) => {

//     let searchQuery = searchBar.value.toLowerCase();

//     if ((filter_array.length) === 0) {

//         total_array = fundraiser_list.filter((item) => {
//             return item.player_name.toLowerCase().includes(searchQuery)
//         });

//         list_raiser(total_array);
//     }

//     else if ((filter_array.length) > 0) {

//         after_checked_arr = filter_array.filter((item) => {
//             return item.player_name.toLowerCase().includes(searchQuery)
//         })

//         list_raiser(after_checked_arr);;
//     }


// });


