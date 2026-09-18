/* Current Date & Time */

function showDateTime() {

    let now = new Date();

    let dateTime =
        now.toLocaleDateString() +
        " " +
        now.toLocaleTimeString();

    let element =
        document.getElementById("dateTime");

    if (element) {
        element.innerHTML = dateTime;
    }
}

showDateTime();

setInterval(showDateTime, 1000);


/* Plant Matchmaker */

function matchPlant() {

    let sunlight =
        document.getElementById("sunlight").value;

    let care =
        document.getElementById("care").value;

    let pets =
        document.getElementById("pets").value;

    let result =
        document.getElementById("quizResult");


    if (sunlight === "" ||
        care === "" ||
        pets === "") {

        result.innerHTML =
        "<div class='alert alert-warning'>" +
        "Please answer all questions." +
        "</div>";

        return;
    }


    let plant;


    if (pets === "yes") {

        plant = "Spider Plant 🌿";

    }

    else if (sunlight === "low" &&
             care === "easy") {

        plant = "Snake Plant 🪴";

    }

    else if (sunlight === "bright" &&
             care === "medium") {

        plant = "Monstera 🌱";

    }

    else {

        plant = "Peace Lily 🌸";

    }


    result.innerHTML =
    "<div class='alert alert-success'>" +
    "<h4>Your Match: " +
    plant +
    "</h4>" +
    "<p>This plant may be a good match for your preferences.</p>" +
    "</div>";
}


/* Contact Form Confirmation Popup */

function submitContact(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been submitted successfully."
    );

}


/* Plant Specialist */

function startChat() {

    alert(
        "🌿 Hello! Welcome to Blooming Oasis Plant Specialist Chat.\n\n" +
        "Please describe your plant-care question."
    );

}


/* Add to Cart */

function addToCart() {

    let pot =
        document.getElementById("pot");

    let stand =
        document.getElementById("stand");


    let message =
        "Monstera added to cart.";

    if (pot && pot.checked) {

        message +=
        "\n+ Plant Pot";

    }

    if (stand && stand.checked) {

        message +=
        "\n+ Plant Stand";

    }


    alert(message);

}