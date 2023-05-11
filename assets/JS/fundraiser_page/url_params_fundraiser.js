let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list"));

// console.log(fundraiser_list);

let array = JSON.parse(localStorage.getItem("array"))
// console.log(array)

let login_status = JSON.parse(localStorage.getItem("login_status"))
console.log(login_status[0]["login_email"])

let user_id = login_status[0]["user_id"]

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const emer_id = urlparams.get("emer_id");


function days_calculation(new_date,current_date){
  current_date = new Date();

let next_date = new Date(new_date);
 
 diff = Math.abs(((next_date.getTime()))-(current_date.getTime()))
 d=(diff/(1000*3600*24).toFixed(2))
 let a =d.toFixed(0)

 return a
}

days_calculation("05/20/2023")


let get_obj;

fundraiser_list.find(function (obj) {



  if (obj["emerging_player_id"] == emer_id) {



    const headline = document.createElement("h1");
    headline.textContent = obj.player_title;
    headline.id = "headline";

    // Then you can append the element to its parent container
    let main_title = document.getElementById("main_title")
    main_title.append(headline)



    let main_container = document.getElementById("main_container")



    // Create left container div
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left_container");

    // Create kids image
    const kidsImg = document.createElement("img");
    kidsImg.src = obj.player_image_url;
    kidsImg.alt = "Kids Images";
    kidsImg.id = "kidsimg";
    leftContainer.appendChild(kidsImg);

    // Create share button
    const shareBtn = document.createElement("button");
    shareBtn.id = "ask_for_update";
    const shareIcon = document.createElement("i");
    shareIcon.classList.add("fa", "fa-share-alt");
    shareBtn.appendChild(shareIcon);
    shareBtn.innerHTML += "Ask for update";
    leftContainer.appendChild(shareBtn);

    // Create details div
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    // Create about button
    const aboutBtn = document.createElement("button");
    aboutBtn.id = "about_navbar";
    aboutBtn.classList.add("fa", "fa-globe");
    aboutBtn.innerHTML += "<i></i> About";
    detailsDiv.appendChild(aboutBtn);

    // Create certificates button
    const certificatesBtn = document.createElement("button");
    certificatesBtn.id = "certificates_navbar";
    certificatesBtn.innerHTML += "<i class='fa fa-edit'></i> Certificates";
    detailsDiv.appendChild(certificatesBtn);

    // Create images button
    const imagesBtn = document.createElement("button");
    imagesBtn.id = "images_navbar";
    imagesBtn.innerHTML += "<i class='fa fa-comment'></i> Images";
    detailsDiv.appendChild(imagesBtn);

    leftContainer.appendChild(detailsDiv);

    // Create horizontal rule
    const hr = document.createElement("hr");
    leftContainer.appendChild(hr);

    // Create about content div
    const aboutContentDiv = document.createElement("div");
    aboutContentDiv.classList.add("about_content");
    aboutContentDiv.id = "about_content";

    const aboutHeading = document.createElement("h3");
    aboutHeading.id = "aboutheading";
    aboutHeading.innerHTML = "About The Fundraisers";
    aboutContentDiv.appendChild(aboutHeading);




    const aboutPara = document.createElement("p");
    aboutPara.id = "aboutpara";
    aboutPara.innerHTML =obj.update_bio;
    aboutContentDiv.appendChild(aboutPara);

    // let update_button = document.createElement("button")
    // update_button.class = "update_button"
    // update_button.id="update_button"
    // update_button.innerText="Ask for update"
    // aboutContentDiv.appendChild(update_button)

    leftContainer.appendChild(aboutContentDiv);

    // Create certificates div
    const certificatesDiv = document.createElement("div");
    certificatesDiv.classList.add("certificates");

    const certificatesHeading = document.createElement("h3");
    certificatesHeading.id = "certificates_heading";
    certificatesHeading.innerHTML = "Certificates";
    certificatesDiv.appendChild(certificatesHeading);

    const containPlayersCertificateImageDiv = document.createElement("div");
    containPlayersCertificateImageDiv.classList.add("contain_players_certificate_image");

    let cert_arr = obj.certificate_arr;

    for (let i = 0; i < cert_arr.length; i++) {

      let certificateImg = document.createElement("img");
      certificateImg.src = cert_arr[i]["cer_img"];
      certificateImg.alt = "";
      containPlayersCertificateImageDiv.appendChild(certificateImg);
    }

    certificatesDiv.appendChild(containPlayersCertificateImageDiv);

    leftContainer.appendChild(certificatesDiv);

    // // Create achievemnts images div
    // const imagesDiv = document.createElement("div");
    // imagesDiv.classList.add("images");

    // const imagesPlayingHeading = document.createElement("h3");
    // imagesPlayingHeading.id = "images_playing";
    // imagesPlayingHeading.innerHTML = "Achievement Images";
    // imagesDiv.appendChild(imagesPlayingHeading);

    // const containPlayersAchievementsImageDiv = document.createElement("div");
    // containPlayersAchievementsImageDiv.classList.add("contain_players_achievements_image")


    // for (let i = 0; i < 5; i++) {
    //   const achievementImg = document.createElement("img");
    //   achievementImg.src = "../../assets/images/Certificate/running_medal_images.jfif";
    //   achievementImg.alt = "";
    //   containPlayersAchievementsImageDiv.appendChild(achievementImg);
    // }

    // imagesDiv.appendChild(containPlayersAchievementsImageDiv)

    // leftContainer.appendChild(imagesDiv)

    // add the whole container to the main_container
    main_container.appendChild(leftContainer)



    let number = Number(obj.minimum_amount);
    let total_raised_value=Number(obj.total_raised_value);
  


    // ---------------------------------right container-------------------------
    // create a div element with class 'right_container'
    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right_container');

    // create a button element with id 'contribute'
    const contributeButton = document.createElement('button');
    contributeButton.setAttribute('id', 'contribute');
    contributeButton.innerHTML = '<i class="fa fa-heart"></i> CONTRIBUTE NOW';
    rightContainer.appendChild(contributeButton);

    // create a div element with class 'banking' and four child button elements
    const bankingDiv = document.createElement('div');
    bankingDiv.classList.add('banking');

    const creditDebitButton = document.createElement('button');
    creditDebitButton.innerHTML = 'All Credit &amp; <br> Debit Cards';
    bankingDiv.appendChild(creditDebitButton);

    const netbankingButton = document.createElement('button');
    netbankingButton.setAttribute('id', 'netbanking');
    netbankingButton.innerHTML = 'Net <br> Banking';
    bankingDiv.appendChild(netbankingButton);

    const paytmButton = document.createElement('button');
    paytmButton.innerHTML = 'Paytm &amp; <br> UPI';
    bankingDiv.appendChild(paytmButton);

    const directBankButton = document.createElement('button');
    directBankButton.innerHTML = 'Direct Bank <br> Transfer';
    bankingDiv.appendChild(directBankButton);

    rightContainer.appendChild(bankingDiv);

    // create a div element with class 'share' and two child elements
    const shareDiv = document.createElement('div');
    shareDiv.classList.add('share');

    const fbShareButton = document.createElement('button');
    fbShareButton.setAttribute('id', 'fbshare');
    fbShareButton.innerHTML = '<i class="fa fa-facebook-f"></i> Spread The Sports';
    shareDiv.appendChild(fbShareButton);

    const fbShareText = document.createElement('p');
    fbShareText.setAttribute('id', 'fbsharetext');
    fbShareText.innerHTML = '<i>Every Social Media Share Can Bring ₹5000</i>';
    shareDiv.appendChild(fbShareText);

    rightContainer.appendChild(shareDiv);


    // create a h3 element with id 'amt' and a p element with text content
    const amtHeading = document.createElement('h3');
    amtHeading.setAttribute('id', 'amt');
    amtHeading.innerHTML = `<b style="color:black";>${obj.total_raised_value.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR'
    })}</b>`
    // ${number.toLocaleString('en-IN', {
    //     maximumFractionDigits:0,
    //     style: 'currency',
    //     currency: 'INR'
    // })
    //     }
    // </b>`
   


    rightContainer.appendChild(amtHeading);

    const goalText = document.createElement('p');
    goalText.innerHTML = `raised of  <strong>
    ${number.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR'
    })
      }</strong> goal`;
    rightContainer.appendChild(goalText);

    // create a div element with class 'supporterbar', two child elements and a progress bar
    const supporterBarDiv = document.createElement('div');
    supporterBarDiv.classList.add('supporterbar');

    const progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress');
    progressBarDiv.style.backgroundColor="rgba(1,191,189,.3)"

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    // progressBar.style.width += divided_value+"%";
    // progressBar.style.backgroundColor = '#01bfbd';


    const progressBarSpan = document.createElement('span');
    progressBarSpan.classList.add('sr-only');
    progressBarSpan.textContent = '70% Complete';
    progressBar.appendChild(progressBarSpan);

    progressBarDiv.appendChild(progressBar);
    supporterBarDiv.appendChild(progressBarDiv);

    // create a div element with class 'supporters'

    const supportersDiv = document.createElement('div');
    supportersDiv.classList.add('suporters');

    const supporters1Text = document.createElement('p');
    supporters1Text.setAttribute('id', 'suporters1');
    supportersDiv.appendChild(supporters1Text)

    const daysLeftText = document.createElement('p');
    daysLeftText.textContent = days_calculation(obj.days_left)+" days left";
    supportersDiv.appendChild(daysLeftText);

    supporterBarDiv.appendChild(supportersDiv);
    rightContainer.appendChild(supporterBarDiv);

    // create a div element with class 'sponsercard' and two child elements
    const sponsorCardDiv = document.createElement('div');
    sponsorCardDiv.classList.add('sponsercard');

    const profileIcon = document.createElement('img');
    profileIcon.setAttribute('src', '');
    profileIcon.setAttribute('alt', 'image_broken');
    profileIcon.setAttribute('id', 'profileicon');
    sponsorCardDiv.appendChild(profileIcon);

    const campaignerDiv = document.createElement('div');
    campaignerDiv.classList.add('campaigner');

    const campaignerText1 = document.createElement('p');
    campaignerText1.textContent = 'Campaigner';
    campaignerDiv.appendChild(campaignerText1);

    const sponserName = document.createElement('p');
    sponserName.setAttribute('id', 'sponsername');
    sponserName.textContent = 'NARESH';
    campaignerDiv.appendChild(sponserName);

    sponsorCardDiv.appendChild(campaignerDiv);
    rightContainer.appendChild(sponsorCardDiv);

    // add the whole container to the main_container
    main_container.appendChild(rightContainer)


    return get_obj = obj;

  }

})

function amount_calc(){


  let number = Number(get_obj.minimum_amount);
  let total_raised_value=Number(get_obj.total_raised_value);
  
  let divided_value = (total_raised_value/number)*100


  let progressBar = document.querySelector(".progress-bar")
  progressBar.style.width = `${divided_value}%`;
  progressBar.style.backgroundColor = '#01bfbd';


}

 amount_calc()




//--------------------------------- function for add certificate button----------------------------------------
let contribute_form = document.getElementById("contribute_form")

let contribute_btn = document.getElementById("contribute")


contribute_btn.addEventListener("click", e => {
  contribute_form.style.display = "block"
})

//--------------------------------- function for cross mark----------------------------------------

let cross_mark = document.getElementById("cross_mark")

cross_mark.addEventListener("click", e => {
  contribute_form.style.display = "none"
  // $("#form_creation_fundraiser").removeClass("background_blur")
})


// function for donation



let send_btn = document.getElementById("send_request");
// let form_submit=document.getElementById("contribute_form");




send_btn.addEventListener("click", e => {

  let donation_amount = Number(document.getElementById("deposit_amount").value.trim())

  get_obj.total_raised_value = Number(get_obj.total_raised_value)

  get_obj.total_raised_value += donation_amount

  console.log(get_obj.total_raised_value);



  if (user_id == get_obj.raiser_user_id) {
    alert("you can't fund raise yourself")
  }

  else {
    fundraiser_list.find(function (obj) {

      if (emer_id == obj.emerging_player_id) {

        let donar_array = obj.donar_list ?? [];

        let donation_obj = {
          "donation_amount": donation_amount,
          "user_id": user_id,
          "raiser_user_id": get_obj.raiser_user_id,

        }
        // "total_raised_amount";donation_amount,

        obj.donar_list = donar_array;

        donar_array.push(donation_obj);

        localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list));

        contribute_form.style.display = "none"
        console.log(get_obj["donar_list"]);
      }
      // setInterval(function () {
      //   location.reload()
      // }, 100)
    });

    let amt = document.getElementById("amt")
    amt.innerHTML= `<b style="color:black";>${get_obj.total_raised_value.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR'
    })}</b>`
    
  
    amount_calc()


    swal("Thanks for your donation")

  }
 

})

fundraiser_list.find(function(obj){

  if(obj.emerging_player_id == emer_id){

    let find_donar = obj.donar_list;

    if(find_donar !=undefined){
      document.getElementById("suporters1").innerHTML = find_donar.length + " Supporters";

    }
    else{
      document.getElementById("suporters1").innerHTML = 0 + " Supporters";

    }

  }
})


console.log(get_obj["raiser_user_id"])

let mail_details;

array.find(function (obj){
  if(obj.user_id==get_obj["raiser_user_id"]){
    console.log("1")

    mail_details=obj

  }
})

console.log(mail_details)



console.log(mail_details["email"])

// console.log(login_status["login_email"]);

let ask_for_update = document.getElementById("ask_for_update")

ask_for_update.addEventListener("click",e=>{

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nareshfreshworks@gmail.com",
    Password : "FE0DC2C5150B25AA5C7CE8D41EB366B451DB",
    To : mail_details["email"],
    From : "nareshfreshworks@gmail.com",
    Subject : "sucess",
    Body :`you are requested for your update from ${login_status[0]["login_email"]}.<br>
             Thank you.`
  }).then(
  message => swal("Your request has been sent")
  );  })


 






        // // scroll function for about section

        // let about_btn = document.getElementById("about_navbar")

        // about_btn.addEventListener("click", e => {
        //     window.scrollBy(0, 400)
        // })
        // // scroll function for certificate section
        // let certificates_btn = document.getElementById("certificates_navbar")

        // certificates_btn.addEventListener("click", e => {
        //     window.scrollBy(0, 800)
        // })
