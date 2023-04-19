if(JSON.parse(localStorage.getItem("fundraiser_list"))){

}
else{
    let fundraiser_list = [

        {
            "raiser_user_id": 234,

            "emerging_player_id": 0,

            "minimum_amount": "2000",
            "selected_option": "myself",
            "selected_option1": "tenth",
            "Employment_status": "student",
            "sports_type": "cricket",
             "city_name": "Erode",
            "player_name": "Kohli", "player_age": "22",
            "player_image_url": "https://iili.io/HvSRHRS.jpg",
            "player_title": "Funding for cricket",
            "days_left": "2023-04-30",
            "certificate_arr": []
        },
        {
            "emerging_player_id": 1,
            "raiser_user_id": 234,
            "minimum_amount": "2000",
            "selected_option": "myself",
            "selected_option1": "tenth",
            "Employment_status": "student",
            "sports_type": "cricket",
             "city_name": "Erode",
            "player_name": "Kohli",
             "player_age": "22",
            "player_image_url": "https://iili.io/HvSRHRS.jpg",
            "player_title": "Funding for cricket",
            "days_left": "2023-04-30",
            "certificate_arr": []
        },
        
        {
            "emerging_player_id": 2,
            "raiser_user_id": 235,
            "minimum_amount": "2000",
            "selected_option": "myself",
            "selected_option1": "tenth",
            "Employment_status": "student",
            "sports_type": "tfcghvjnk",
             "city_name": "Erode",
            "player_name": "Kohli",
             "player_age": "22",
            "player_image_url": "https://iili.io/HvSRHRS.jpg",
            "player_title": "Funding for cricket",
            "days_left": "2023-04-30",
            "certificate_arr": []
        },
    
    
    ]

    localStorage.setItem("fundraiser_list", JSON.stringify(fundraiser_list))
}

