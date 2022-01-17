import {MY_API_KEY} from './config.js';

fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})

.then(response => response.json())

.then(response => {
	console.log(response);

    var div = $("<div>");
    var row = $("<row>").text(" State " +  "| Confirmed Cases " + "|  Deaths " );
    $(div).append(row);
    $('#top').append(div);
    
    //data to be displayed
    for (var i = 0; i < response.length; i++) {
    //document.getElementById('place').innerHTML = response[i].province;
    var div = $("<div>");
    var label = $("<label>").text(response[i].province + " | " + response[i].confirmed + " | " + response[i].deaths);
    $(div).append(label);
    //$('#result').append(div);
    $('#top').append(div);
    }

})

.catch(err => {
	console.error(err);
});