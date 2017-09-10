var $ = jQuery;

$(document).ready(function onReady() {
  console.log("Document Ready");
  $.ajax({
    method: "GET",
    url: "/getsomeinfo",
    success: function(data) {
      $("body").append(`<img src="${data}" />`);
    }
  });
});

// function addPerson() {
//   var nametoAdd = $("#name").val();
//   var factToAdd = $("#fact").val();
//   console.log(nametoAdd, factToAdd);

//   var person = {
//     name: nametoAdd,
//     fact: factToAdd
//   };

//   $(".person").val("");

//   $.ajax({
//     type: "POST",
//     url: "/personlist",
//     data: person,
//     success: function(response) {
//       console.log(response);
//       getPersonList();
//     }
//   });
// }

$(document).ready(readyNow);
