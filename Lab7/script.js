$(document).ready(function() {

// Start your code from here
let animals = ["dog","cat","rabbit","hamster","frog","bat","bird","fish","happy","angry"]

for (let i= 0;i<animals.length;i++){
    let a = $("<button>")
    a.attr("class","animal-button")
    a.attr("data-type",animals[i])
    a.text(animals[i])
    $("#animal-buttons").append(a)
}

$("#animal-buttons").on("click", ".animal-button", function() {
    $("#animals").empty()
    let search = $(this).attr("data-type")
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=HpcQLjAhs9TfptyNKkoiU3xB8ENBj4mF&limit=10";

    $.ajax({
        url: queryURL
        })
        .then (function(response){
         let results = response.data
        for (let i = 0; i < results.length; i++){
         let animalDiv = $("<div class= \"animal-item\">")
         let rating = results[i].rating
         let p = $("<p>").text("Rating: " + rating)
         let animalImage = $("<img>")
        animalImage.attr("src",results[i].images.fixed_height_still.url)
        animalImage.attr("data-still",results[i].images.fixed_height_still.url)
        animalImage.attr("data-animate",results[i].images.fixed_width_downsampled.url )
        animalImage.attr("data-state","still")
        animalDiv.append(p)
        animalDiv.append(animalImage)
        $("#animals").append(animalDiv)
         }
    }) 
        //alert(queryURL)
    });


    $('form').submit(function(event) {
        event.preventDefault();
    });



    $('#add-animal').on("click",function(){
        if($("#animal-input").val()){

            let adelement = $("<button>")
            adelement.attr("class","animal-button")
            adelement.attr("data-type",$("#animal-input").val())
            adelement.text($("#animal-input").val())
            $("#animal-buttons").append(adelement)

        }else{
            alert("Need data")
        }
    });


    $('#animals').on("click",".animal-item",function(){
        if($(this).attr("data-state") === "still"){
            //alert("normal")
            //$(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("data-state", "animate") 
            $(this).attr("src",$(this).attr("data-still"))
        }else {
            //alert("animate")
            //$(this).attr("src",$(this).attr("data-still"))
            $(this).attr("data-state", "still")
            $(this).attr("src", $(this).attr("data-animate"))
        }
    });


});



