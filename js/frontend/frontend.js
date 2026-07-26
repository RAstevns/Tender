$(function() {

    function generateCard() {
        let $card_container = $('<div class="container my-3"><div class="card"><div class="card-header">'+
            '<h4 class="card-title">'+
            RestaurantInfo["Name"]+
            '</h4></div><div class="card-body"><img class="card-img" '+
            'src='+RestaurantInfo["image"]+
            ' alt="Card image"><p class="card-text">'+
            RestaurantInfo["Cuisine"]+
            '</p><p class="card-text">'+
            RestaurantInfo["Hours"]+
            '</p><p class="card-text">'+
            RestaurantInfo["Address"]+
            '</p><p class="card-text">'+
            RestaurantInfo["Distance"]+
            '</p></div> </div></div>');

        $("body").append($card_container);
    }

    generateCard();

});