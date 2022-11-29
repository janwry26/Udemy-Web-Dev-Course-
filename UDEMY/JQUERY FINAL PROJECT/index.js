
$(document).ready(function() {
    $("button").on("click",function(){
        const randomize = Math.ceil(Math.random() * 88);
        $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomize}.json`, 
        function(data){
            $(".name").text(data['name'])   
            $(".char-img").attr("src",data['image'])
        })
    })
         
})