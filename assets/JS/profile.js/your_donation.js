const fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list"));
const login_status = JSON.parse(localStorage.getItem("login_status"));
const array = JSON.parse(localStorage.getItem("array"));

// console.log(fundraiser_list)
const donated_fundraiser_user = [];
const donar_names_array = [];
const donar_list_array = [];

fundraiser_list.forEach((e) => {
  const check = e.donar_list;

  if (check != undefined) {
    // console.log(check);

    check.forEach((el) => {
      const donar_user_id = el.user_id;
      if (login_status[0].user_id == donar_user_id) {
        array.forEach((ell) => {
          fundraiser_array = e; // the speciality of javascript is declaring variable without naming the variable keyword
          donar_list = el;
          donar_names = ell;

          if (ell.user_id == el.raiser_user_id) {
            donated_fundraiser_user.push(fundraiser_array);
            donar_list_array.push(donar_list);
            donar_names_array.push(donar_names);
            // console.log(ell);
          }
        });
      }
    });
  } else {
    // return none
  }
});

console.log(donated_fundraiser_user);
console.log(donar_list_array);
console.log(donar_names_array);

for (let i = 0; i < donar_list_array.length; i++) {
  const rs = donar_list_array[i].donation_amount;

  const table_tr = document.createElement("tr");

  const sl_no = document.createElement("td");
  sl_no.innerText = i + 1;
  table_tr.appendChild(sl_no);

  const pro_email_name_td = document.createElement("td");
  const pro_email_name_p = document.createElement("p");
  pro_email_name_p.innerText = donated_fundraiser_user[i].raiser_user_id;
  pro_email_name_td.append(pro_email_name_p);
  table_tr.appendChild(pro_email_name_td);

  const pro_name_td = document.createElement("td");
  const pro_name_p = document.createElement("p");
  pro_name_p.innerText = donated_fundraiser_user[i].player_name;
  pro_name_td.append(pro_name_p);
  table_tr.appendChild(pro_name_td);

  const pro_sports_td = document.createElement("td");
  const pro_sports_p = document.createElement("p");
  pro_sports_p.innerText = donated_fundraiser_user[i].sports_type;
  pro_sports_td.append(pro_sports_p);
  table_tr.appendChild(pro_sports_td);

  const pro_img = document.createElement("img");
  pro_img.setAttribute("src", donated_fundraiser_user[i].player_image_url);
  pro_img.setAttribute("alt", ` ${donar_list_array[i].raiser_user_id}`);
  table_tr.appendChild(pro_img);

  const donated_amount_td = document.createElement("td");
  const donated_amount_amt = document.createElement("p");
  donated_amount_amt.innerText = rs.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });
  donated_amount_td.append(donated_amount_amt);
  table_tr.appendChild(donated_amount_td);

  document.querySelector(".body_table").append(table_tr);
}
