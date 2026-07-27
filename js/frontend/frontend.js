$(function() {

    function generateCard() {

        let current = 1;
        let total = 4;

        let $card_container = $('<div class="card ">'+
            '<p class="card-title fs-2 fw-bold m-3 position-absolute">'+
            RestaurantInfo["Name"]+
            '</p><p class="card-text fs-5 text-secondary float-end text-end m-4 ">'+
            //  filler because it is not implemented in data structure yet
            current+' of '+total+
            '</p><div class="card-body"><img class="card-img-top img-fluid mx-auto border-bottom border-1 pb-4" '+
            'src='+RestaurantInfo["image"]+
            ' alt="Card image"><p class="card-text fw-bold fs-3 mt-2">'+
            RestaurantInfo["Cuisine"]+
            '</p><p class="card-text">'+
            RestaurantInfo["Hours"]+
            '</p><p class="card-text text-success fw-bold float-start">'+
            RestaurantInfo["Address"]+
            '</p><p class="card-text text-danger fw-bold float-end text-end">'+
            RestaurantInfo["Distance"]+
            '</p></div></div>');

        $("#cardfront").append($card_container);
    }
    generateCard();
});