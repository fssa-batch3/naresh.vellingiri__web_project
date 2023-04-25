
let fundraiser_list = JSON.parse(localStorage.getItem("fundraiser_list"))
let login_status = JSON.parse(localStorage.getItem("login_status"))
let array = JSON.parse(localStorage.getItem("array"))


let get_obj;

// console.log(fundraiser_list)
let donar_list;

fundraiser_list.forEach( e=> {
    if(login_status[0]["user_id"]==e["raiser_user_id"]){
        donar_list =e["donar_list"]

    }
});

let donar_names=[]

array.forEach(e=>{
    donar_list.forEach(el=>{

        if(e["user_id"]==el["user_id"]){
            donar_names.push(e)

        }
    })
    
})
console.log( donar_names);

for(let i=0; i<donar_names.length; i++){

    let table_tr = document.createElement("tr");

        let td_pro_detail = document.createElement("td");
        table_tr.appendChild(td_pro_detail);
    
        let td_pro_div = document.createElement("div");
        td_pro_div.setAttribute("class", "show-order-items");
        td_pro_detail.appendChild(td_pro_div);
    
        let pro_img = document.createElement("img");
        pro_img.setAttribute("src", donar_names[i]["profile_image"]);
        pro_img.setAttribute("alt", `image of ${donar_names[i]["first_name"]}`);
        td_pro_div.appendChild(pro_img);
    
        let pro_name = document.createElement("p");
        pro_name.innerHTML = `${donar_names["first_name"]}`;
        td_pro_div.appendChild(pro_name);
    
        let pro_weight = document.createElement("p");
        pro_weight.innerHTML = `Qty: ${donar_names[i]["first_name"]}`;
        td_pro_div.appendChild(pro_weight);
    
        let unit_price_td = document.createElement("td");
        unit_price_td.innerHTML = `₹${donar_names[i]["first_name"]}`;
        table_tr.appendChild(unit_price_td);
    
        let qty_td = document.createElement("td");
        qty_td.innerHTML = `${donar_names[i]["first_name"]}`;
        table_tr.append(qty_td);
    
        let td_subtotal = document.createElement("td");
        td_subtotal.setAttribute("class", "place-item-money")
        td_subtotal.innerHTML= `₹${donar_names[i]["first_name"]}`;
        table_tr.appendChild(td_subtotal);
    
        document.querySelector(".body_table").append(table_tr);
    
}
// let donar_list = obj["donar_list"];
//     console.log(donar_list)
// console.log(get_obj)




//