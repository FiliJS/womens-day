const superPowersList = [
    "Engineer",
    "Teacher",
    "Programmer",
    "Architect",
    "Mom",
    "Psychologist",
    "Dentist",
    "Astronaut",
    "Superheroine",
    "Chingona",
    "Veterinary",
    "Lawyer",
    "CEO",
    "CTO",
    "Entrepreneur",
    "Politician",
    "Designer"
];

const $image = document.createElement("img"),
      $imageContainer = document.getElementById("image-container"),
      $superPower = document.getElementById("superpower"),
      imagePath = `./images/women-0${Math.round(Math.random() * (4 - 1)) + 1}.png`;

$image.src = imagePath;
$imageContainer.appendChild($image);
$superPower.innerText = superPowersList[Math.round(Math.random() * (superPowersList.length - 1))];
