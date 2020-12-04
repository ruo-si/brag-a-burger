// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-yummy").on("click", function(event) {
    var id = $(this).data("id");
    var newYummy = $(this).data("newYummy");

    var newYummyState = {
      yummy: newYummy
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newYummyState
    }).then(
      function() {
        console.log("changed yummy to", newYummy);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#new-burger").val().trim(),
      yummy: $("[name=yummy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created a new burger");

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted a burger", id);

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
