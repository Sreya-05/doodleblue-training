// ----- Search box on the Events page -----
var searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    var text = searchBox.value.toLowerCase();
    var cards = document.getElementsByClassName("event-card");

    for (var i = 0; i < cards.length; i++) {
      var cardText = cards[i].innerText.toLowerCase();
      if (cardText.indexOf(text) > -1) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  });
}

// ----- Registration form validation -----
var form = document.getElementById("registerForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var eventName = document.getElementById("eventName").value;
    var message = document.getElementById("formMessage");

    // Phone must be exactly 10 digits
    var phonePattern = /^[0-9]{10}$/;

    if (name.length < 3) {
      showMessage("Please enter your full name (at least 3 letters).", "error");
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      showMessage("Please enter a valid email address.", "error");
    } else if (!phonePattern.test(phone)) {
      showMessage("Please enter a 10-digit phone number.", "error");
    } else {
      showMessage("Thank you, " + name + "! You have registered for " + eventName + ".", "success");
      form.reset();
    }
  });
}

function showMessage(text, type) {
  var message = document.getElementById("formMessage");
  message.innerText = text;
  message.className = "form-message " + type;
}