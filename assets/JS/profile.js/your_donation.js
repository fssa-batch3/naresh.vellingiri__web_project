
let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list"))
let login_status = JSON.parse(localStorage.getItem("login_status"))
let array = JSON.parse(localStorage.getItem("array"))


// console.log(fundraiser_list)
let donated_fundraiser_user = [];
let donar_names_array = [];
let donar_list_array = [];


fundraiser_list.forEach(e => {


    let check = e["donar_list"]

    if (check != undefined) {
        // console.log(check);

        check.forEach(el => {

            let donar_user_id = el["user_id"]
            if (login_status[0]["user_id"] == donar_user_id) {
                array.forEach((ell) => {
                    fundraiser_array = e  //the speciality of javascript is declaring variable without naming the variable keyword
                    donar_list = el;
                    donar_names = ell;

                    if (ell["user_id"] == el["raiser_user_id"]) {
                        donated_fundraiser_user.push(fundraiser_array)
                        donar_list_array.push(donar_list)
                        donar_names_array.push(donar_names)
                        // console.log(ell);
                    }
                })

            }
        })

    }
    else {
        // return none
    }
});


console.log(donated_fundraiser_user);
console.log(donar_list_array);
console.log(donar_names_array);










for (let i = 0; i < donar_list_array.length; i++) {
    let rs = donar_list_array[i]["donation_amount"]



    let table_tr = document.createElement("tr");

    let sl_no = document.createElement("td");
    sl_no.innerText = i + 1;
    table_tr.appendChild(sl_no);

    let pro_email_name_td = document.createElement("td");
    let pro_email_name_p = document.createElement("p");
    pro_email_name_p.innerText = donar_names_array[i]["first_name"];
    pro_email_name_td.append(pro_email_name_p);
    table_tr.appendChild(pro_email_name_td);

    

    let pro_name_td = document.createElement("td");
    let pro_name_p = document.createElement("p");
    pro_name_p.innerText = donar_names_array[i]["first_name"];
    pro_name_td.append(pro_name_p);
    table_tr.appendChild(pro_name_td);

    let pro_img = document.createElement("img");
    pro_img.setAttribute("src", donated_fundraiser_user[i]["player_image_url"]);
    pro_img.setAttribute("alt", ` ${donar_list_array[i]["raiser_user_id"]}`);
    table_tr.appendChild(pro_img)




    let donated_amount_td = document.createElement("td")
    let donated_amount_amt = document.createElement("p")
    donated_amount_amt.innerText = rs.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    })
    donated_amount_td.append(donated_amount_amt)
    table_tr.appendChild(donated_amount_td)




    // let td_pro_detail = document.createElement("td");
    // table_tr.appendChild(td_pro_detail);

    // // let td_pro_div = document.createElement("div");
    // // td_pro_div.setAttribute("class", "show-order-items");
    // // td_pro_detail.appendChild(td_pro_div);





    // // let pro_weight = document.createElement("p");
    // // pro_weight.innerHTML = `Qty: ${donar_list_array[i]["first_name"]}`;
    // // td_pro_div.appendChild(pro_weight);

    // let unit_price_td = document.createElement("td");
    // unit_price_td.innerHTML = `₹${donar_names[i]["first_name"]}`;
    // table_tr.appendChild(unit_price_td);

    // let qty_td = document.createElement("td");
    // qty_td.innerHTML = `${donar_names[i]["first_name"]}`;
    // table_tr.append(qty_td);

    // let td_subtotal = document.createElement("td");
    // td_subtotal.setAttribute("class", "place-item-money")
    // td_subtotal.innerHTML = `₹${donar_names[i]["first_name"]}`;
    // table_tr.appendChild(td_subtotal);

    document.querySelector(".body_table").append(table_tr);

}





//