if(JSON.parse(localStorage.getItem("fundraiser_list"))){

}
else{

    let fundraiser_list=

    [

        {"emerging_player_id":0,
        "raiser_user_id":193,
        "minimum_amount":"20000" , "selected_option":"myself","selected_option1":"tenth","Employment_status":"Student","sports_type":"cricket","city_name":"Erode","player_name":"Kohli","player_age":"20","player_image_url":"https://iili.io/HvSRHRS.jpg","player_title":"Funding for Football","days_left":"2023-04-29", "total_raised_value":0,"certificate_arr":[]},
        
        {"emerging_player_id":1,"raiser_user_id":288,"minimum_amount":"18644","selected_option":"myself","selected_option1":"tenth","Employment_status":"Student","sports_type":"Football","city_name":"Erode","player_name":"Ronaldo","player_age":"12","player_image_url":"https://freeimghost.net/images/2023/04/20/Ronaldo.jpeg","player_title":"Funding for Football","days_left":"2023-04-28", "total_raised_value":0,"certificate_arr":[]},
        
        {"emerging_player_id":2,"raiser_user_id":94,"minimum_amount":"20200","selected_option":"myself","selected_option1":"tenth","Employment_status":"student","sports_type":"badminton","city_name":"Erode","player_name":"Lee Chong Wee","player_age":"12","player_image_url":"https://freeimghost.net/images/2023/04/20/badminton.jpeg","player_title":"Funding for badminton","days_left":"2023-04-22", "total_raised_value":0,"certificate_arr":[]},
        
        {"emerging_player_id":3,"raiser_user_id":263,"minimum_amount":"20000","selected_option":"myself","selected_option1":"tenth","Employment_status":"Student","sports_type":"hockey","city_name":"Erode","player_name":"Rinvat Singh","player_age":"12","player_image_url":"https://freeimghost.net/images/2023/04/20/hockey.jpeg","player_title":"Funding for Hockey","days_left":"2023-04-29", "total_raised_value":0,"certificate_arr":[]},
        
        
        {"emerging_player_id":4,"raiser_user_id":256,"minimum_amount":"20200","selected_option":"myself","selected_option1":"tenth","Employment_status":"Student","sports_type":"kabadi","city_name":"Erode","player_name":"Pawan","player_age":"12","player_image_url":"https://freeimghost.net/images/2023/04/20/kabadi.jpeg","player_title":"Funding for Kabadi","days_left":"2023-04-28", "total_raised_value":0,"certificate_arr":[]}
        
        ]

    localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list))
}

