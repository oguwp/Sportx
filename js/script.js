// VIDEO

// Get the video
const video = document.getElementById("myVideo");

// Controls video
video.muted = true;
video.loop = true;
video.autoplay = true;

// SMOOTH ANCHOR POINTS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GET API PRICE 1
const getPrice1BtnElement = document.getElementById("getPrice1");

getPrice1BtnElement.addEventListener("click", getPrice1);

function getPrice1() {
    fetch('./api/price1.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>extra priser</h2>';
            data.forEach(function (data) {
                output += `
              <ul>
                <li>${data.text1}</li>
                <li>${data.text2}</li>
                <li>${data.text3}</li>
                <li>${data.text4}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

// GET API ABOUT US
const getAboutBtnElement = document.getElementById("getAbout");

getAboutBtnElement.addEventListener("click", getAbout);

function getAbout() {
    fetch('./api/about.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (data) {
                output += `
              <h3 style="color: white">Vision</h3>
              <p style="color: white">${data.vision}</p>
              <h3 style="color: white">Mission</h3>
              <p style="color: white">${data.mission}</p>
            `;
            })
            document.getElementById('outputAbout').innerHTML = output;
        })
}