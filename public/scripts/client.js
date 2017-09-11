var $ = jQuery;

$(document).ready(onReady);

function onReady() {
  console.log('Document Ready');
  getPeople();
  $('button').click(addPerson);
}

function getPeople() {
  $.ajax({
    method: 'GET',
    url: '/person',
    success: function(database) {
      $('#people').empty();
      var people = database.people;
      for (var index = 0; index < people.length; index++) {
        var person = people[index];
        $('#people').append(
          '<div>' +
            '<h4>Name: ' +
            person.name +
            '</h4>' +
            '<p>Fact: ' +
            person.fact +
            '</p>' +
            '</div>'
        );
      }
    }
  });
}

function addPerson() {
  var person = {
    name: $('#name').val(),
    fact: $('#fact').val()
  };

  $.ajax({
    method: 'POST',
    url: '/person',
    data: person,
    success: function(data) {
      getPeople();
    }
  });
}
