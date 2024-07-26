window.onload = function() {
    document.getElementById('card').style.display = 'none';
  };

document.querySelector("button").addEventListener("click",foo);
async function foo(){
    try {
        document.getElementById('card').style.display = 'block';
        var res = document.getElementById("Text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${res}`);
        var data1 = await data.json();
        console.log(data1);

        var img = data1[0].show.image.medium;
         console.log(img);
document.getElementById("img").src =img;
        var name = data1[0].show.name;
        console.log(name);
        document.getElementById("title").innerHTML=  name;
        var genres = data1[0].show.genres[0] + "," + data1[0].show.genres[1];
        console.log(genres);
        document.getElementById("genres").innerHTML= "<b>Genre</b> :" + " " + genres;
        var premiered = data1[0].show.premiered;
        console.log(premiered);
        document.getElementById("premiered").innerHTML= "<b>Premiered</b> :" + " " + premiered;
        var rating = data1[0].show.rating.average;
        console.log(rating);
        document.getElementById("rating").innerHTML= "<b>Rating</b> :" + " " + rating;
        var runtime = data1[0].show.runtime;
        console.log(runtime);
        document.getElementById("runtime").innerHTML= "<b>Runtime</b> :" + " " + runtime;
        var schedule = data1[0].show.schedule.days + "," + data1[0].show.schedule.time ;
        console.log(schedule);
        document.getElementById("schedule").innerHTML= "<b>Show Schedule</b> :" + " " + schedule;
        var officialsite = data1[0].show.officialSite;
        console.log(officialsite);
        document.getElementById("officialsite").innerHTML= "<b>OfficialSite</b> :" + " " + officialsite;
        var network = data1[0].show.network.name;
        console.log(network);
        document.getElementById("network").innerHTML= "<b>Network</b> :" + " " + network;
        var summary = data1[0].show.summary;
        var summary1=summary.replace(/<.*?>/gm, '');
        console.log(summary1);
        document.getElementById("summary").innerHTML= "<b>Summary</b> :" + " " + summary1;
    } catch (error) {
        console.log(error);
    }
}