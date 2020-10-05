// create a request object
var xhr = new XMLHttpRequest();

// callback function
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if ( && xhr.status === 200) {
      document.getElementById('ajax').innerHTML = xhr.responseText;
    } else {
      alert(xhr.statusText);
    }
  }
};

// open request
xhr.open('GET', 'sidebar.html');

// send request
xhr.send();
