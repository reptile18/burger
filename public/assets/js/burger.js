$(document).ready(()=> {
  $("#create-burger").on("submit",event => {
    event.preventDefault();
    const burger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: 0
    };

    $.ajax("api/burgers", {
      type: "POST",
      data: burger
    }).then(() => {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".devour-burger").on("click",event => {
    console.log(event.target);
    const id = $(event.target).data("id");
    console.log("put call with id " + id);
    $.ajax("api/burgers/" + id, {
      type: "PUT"
    }).then(() => {
      console.log("devoured burger");
      location.reload();
    });
  });
});

