var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();


var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    var rooms = JSON.parse(xhr2.responseText);
    var roomsHTML = '<ul class="rooms">';
    for (var i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        roomsHTML += '<li class="empty">';
      } else {
        roomsHTML += '<li class="full">';
      }
      roomsHTML += rooms[i].room;
      roomsHTML += '</li>';
    }
    roomsHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomsHTML;
  }
};
xhr2.open('GET', 'data/rooms.json');
xhr2.send();
