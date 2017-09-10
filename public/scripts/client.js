console.log("client-side source");

function readyNow() {
  $("#addPerson").on("click", addPerson);
  getPersonList();
}

function addPerson() {
  var nametoAdd = $("#name").val();
  var factToAdd = $("#fact").val();
  console.log(nametoAdd, factToAdd);

  var person = {
    name: nametoAdd,
    fact: factToAdd
  };

  $(".person").val("");

  $.ajax({
    type: "POST",
    url: "/personlist",
    data: person,
    success: function(response) {
      console.log(response);
      getPersonList();
    }
  });
}

// $.ajax({
//   method: "GET",
//   url: "/",
//   success: function(response) {
//     console.log("page load");
//   }
// });

$(document).ready(readyNow);
