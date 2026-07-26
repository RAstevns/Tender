$(function() {

    function generateCard() {
        // declaring variables and setting attributes
        let $card_container = $("<div></div>");
        let $card = $("<div></div>");
        let $card_header = $("<div></div>");
        let $card_body = $("<div></div>");
        $card_container.addClass("container my-3");
        $card.addClass("card");
        $card_header.addClass("card-header");
        $card_body.addClass("card-body");
        let $card_title = $("<h4></h4>");
        let $img = $("<img>")
        let $card_text_cuisine = $("<p></p>");
        let $card_text_hours = $("<p></p>");
        let $card_text_address = $("<p></p>");
        let $card_text_distance = $("<p></p>");
        $card_title.addClass("card-title");
        $card_title.html("Restuarant name");
        $img.addClass("card-img");
        $img.attr("src", "data/panera.jpeg");
        $img.attr("alt", "Card image");
        $card_text_cuisine.addClass("card-text");
        $card_text_hours.addClass("card-text");
        $card_text_address.addClass("card-text");
        $card_text_distance.addClass("card-text");
        $card_text_cuisine.html("Cuisine");
        $card_text_hours.html("Hours");
        $card_text_address.html("Address");
        $card_text_distance.html("Distance");

        // putting them in order
        $("body").append($card_container);
        $card_container.append($card);
        $card.append($card_header);
        $card.append($card_body);
        $card_header.append($card_title);
        $card_body.append($img);
        $card_body.append($card_text_cuisine);
        $card_body.append($card_text_hours);
        $card_body.append($card_text_address);
        $card_body.append($card_text_distance);
    }

    generateCard();

});