import {MY_API_KEY} from './config.js';

async function loTable(table){
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/USA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
};

    $.ajax(settings).done(function (response) {
	    console.log(response);
        //$.each(response.projects, function (i, f) {
        for (var i = 0; i < response.length; i++) {
        var tblRow = '<tr>' + '<td>' + response[i].province + '</td>' + '<td>' + response[i].confirmed + '</td>' + '<td>' + response[i].deaths + '</td>' + '<td>' + response[i].Case_Fatality_Rate + '</td>' + '<td>' + response[i].active + '</tr>'
        $(tblRow).appendTo("table tbody");

        }
        $('#stats').DataTable()
    })
}

loTable(document.querySelector("table"));