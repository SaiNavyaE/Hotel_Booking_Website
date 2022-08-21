let urlParams = new URLSearchParams(window.location.search);

const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = 'd75478417fmshb27b0e68e9621e6p16520ejsncdcb5781d4ea';


let fetchAPI = () => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let result = JSON.parse(this.responseText).data[0];

            let toDate = new Date(urlParams.get('toDate'));
            let fromDate = new Date(urlParams.get('fromDate'));
            let days = (toDate - fromDate)/(24*60*60*1000);

            document.getElementById("hotel-image").src = result.photo.images.medium.url;
            document.getElementById("hotel-name").innerText = result.name;
            document.getElementById("ranking").innerHTML = "<b>" + result.ranking + "</b>";
            document.getElementById("address").innerText = result.address;
            document.getElementById("name").innerHTML = "<strong class='heading'>Name:</strong>&nbsp;" + urlParams.get('name');
            document.getElementById("adult").innerHTML = "<strong class='heading'>Number of Adults:</strong>&nbsp;" + urlParams.get('adult');
            document.getElementById("from-date").innerHTML = "<strong class='heading'>Check-in Date:</strong>&nbsp;" + urlParams.get('fromDate');
            document.getElementById("to-date").innerHTML =  "<strong class='heading'>Check-out Date:</strong>&nbsp;" + urlParams.get('toDate');
            document.getElementById("tariff").innerHTML = "<strong class='heading'>Tariff Breakdown:</strong>&nbsp;Rs.1000 x " + urlParams.get('adult') + " Adults x " + days + " Nights";
            document.getElementById("amount").innerHTML = "<strong class='heading'>Total Amount:</strong>&nbsp;" + urlParams.get('price');
            disableLoader();
        }
    });

    xhr.open("GET", API_URL + "hotels/get-details?lang=en_US&location_id=" + urlParams.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", tripAdvisorHost);
    xhr.setRequestHeader("x-rapidapi-key", tripAdvisorKey);

    xhr.send();
}

fetchAPI();



if (!isLogin || isLogin === 'false') {
    document.getElementById('paynow').disabled = true;
} else if (isLogin === 'true') {
document.getElementById('paynow').disabled = false;
}

let payNow = e => {
	e.preventDefault();
	alert('Hi your booking is successfull!');
};
