/*import {MY_API_KEY} from './config.js';*/

async function loadNews(){
const response = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": process.env.MY_API_KEY
	}
})

.then(response => response.json())

.then(response => {
    //imageBody.innerHTML = "";
    
    //data to be displayed
   for (var i = 0; i < response.news.length; i++) {
        var div = $("<div>");
        var span = $("<span>");
        var article = $("<article>");

       var x = document.createElement("IMG"); //make into <img> type
       x.setAttribute('src', response.news[i].urlToImage); //place link into src in <img>
       x.setAttribute('class', "center");

        //create a line space
        $(div).append(document.createTextNode('\u00A0'));
        //have multiple lines added
        var space = $("<p>").text('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
        $(div).append(space);

        // create a closure to pass to set interval
       var appendImg = function(x){ //for every image do the following and save each into div
            return function(){
            document.getElementById("top").appendChild(x); //place into 'top' <p>
            };
        }//(x);

        setTimeout(appendImg, 1000); 

        //Setup a default image when the src return an error
        x.addEventListener("error", function(event) {
            event.target.src = "ishere.jpg"
            event.onerror = null
        })

       $(div).append(x); //place image into div
       $('#top').append(div); //place that div into top to display

        var a = document.createElement("A"); 
        a.setAttribute('href', response.news[i].link); 
        a.setAttribute('class', "center");

        var p1 = document.createElement("P"); 
        var label = $(p1).append("Title : " + response.news[i].title + "\n");
        p1.setAttribute('class', "center");
        p1.setAttribute('align', "left");

        var p2 = document.createElement("P"); 
        var context = $(p2).append("Story Preview : " + response.news[i].content);
        p2.setAttribute('class', "center");
        p2.setAttribute('align', "left");
        
        //var label = $("<p>").text("Title : " + response.news[i].title + "\n");
        //var context = $("<p>").text("Story Preview : " + response.news[i].content);

        //ar place = $("<a>").text("Click to read the full story");
        var place = "Click to read the full story";
 
        //var arc = document.querySelector("article");
        //arc.setAttribute("class", "center");


        $(article).append(label);
        $(article).append(context);
        $(div).append(article); 

        //$(div).append(label); 
        //$(div).append(context);
        $(a).append(place);
        $(span).append(a);
        $(article).append(span);
        //$(div).append(span);
        $(div).append(article);


        var space = $("<p>").text('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
        $(div).append(space);

        $('#top').append(div);

    }

})

    .catch(err => {
	    console.error(err);
    });
}

window.onload = loadNews();