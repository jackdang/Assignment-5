$(document).ready(function(){
    $("form").submit(function(e){
    e.preventDefault();
    var city = $("#city-type").val();
    if (city == "nyc" || city == "New York" || city == "New York city") {
        $("body").attr("class","nyc");
    }
    else if (city =="sf" || city =="San Fransisco" || city =="Bay Area"){
        $("body").attr("class","sf");
    }
    else if (city =="LA" || city =="Los Angeles" || city =="LAX"){
        $("body").attr("class","la");
    }
    else if (city =="austin" || city =="ATX" ){
        $("body").attr("class","austin");
    }
    else if (city =="sydney" || city =="SYD"){
        $("body").attr("class","sydney");
    }
    else{
        alert("error!");
    }
    });
});
