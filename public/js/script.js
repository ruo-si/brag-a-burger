$(document).ready(function () {

    // burger create button
    const $devouredBtn = $("#devoured-btn")

    // form event listener
    $devouredBtn.on("submit", function (e) {
        e.preventDefault();

        // get reference to the requested burger
        console.log(this);
        const burgerID = $(this).children(".burger_id").val();

        // post the requested burger in devoured column in db
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function (data) {
            
            // reload page to show burgers
            location.reload();
        });
    });


    // clear devoured data
    const $clearBtn = $("#clear-btn");

    $clearBtn.on("click", function (e){

        // delete request

    });

});