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
			let output = '';
			data.forEach(function (data) {
				output += `
              <p class="textpakke">${data.freemiumpakke}</p>
            `;
			})
			document.getElementById('output').innerHTML = output;
		})
}

// GET API PRICE 2
const getPrice2BtnElement = document.getElementById("getPrice2");

getPrice2BtnElement.addEventListener("click", getPrice2);

function getPrice2() {
	fetch('./api/price2.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
			data.forEach(function (data) {
				output += `
              <p class="textpakke">${data.flexpakke}</p>
            `;
			})
			document.getElementById('output2').innerHTML = output;
		})
}

// GET API PRICE 3
const getPrice3BtnElement = document.getElementById("getPrice3");

getPrice3BtnElement.addEventListener("click", getPrice3);

function getPrice3() {
	fetch('./api/price3.json')
		.then((res) => res.json())
		.then((data) => {
			let output = '';
			data.forEach(function (data) {
				output += `
              <p class="textpakke"">${data.medlempakke}</p>
            `;
			})
			document.getElementById('output3').innerHTML = output;
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