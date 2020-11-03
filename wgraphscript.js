 
$(document).ready(function(){
    var url = "https://api.covid19api.com/summary"

    $.getJSON(url,function(data){

        var total_active, total_recovered, total_deaths, total_cases;

        var Country=[]
        var TotalConfirmed=[]
        var TotalRecovered=[]
        var TotalDeaths=[]

        $.each(data.Countries,function(id,obj){
            Country.push(obj.Country)
            TotalConfirmed.push(obj.TotalConfirmed)
            TotalRecovered.push(obj.TotalRecovered)
            TotalDeaths.push(obj.TotalDeaths)
        })


        total_cases = data.Global.TotalConfirmed
        total_recovered = data.Global.TotalRecovered
        total_deaths = data.Global.TotalDeaths


        $("#TotalConfirmed").append(total_cases)
        $("#TotalRecovered").append(total_recovered)
        $("#TotalDeaths").append(total_deaths)

        
        var myChart=document.getElementById("mychart").getContext("2d");

        var chart = new Chart(myChart, {
            type:"line",
            data: {
                labels:Country,
                datasets: [
                    {
                        label:"Total Cases",
                        data: TotalConfirmed,
                        backgroundColor: "#f1c40f",
                        minBarLength: 500
                    },
                   {
                        label:"Recovered",
                        data: TotalRecovered,
                        backgroundColor: '#2ecc71',
                        minBarLength: 500
                    },
                    {
                        label:"Deaths",
                        data: TotalDeaths,
                        backgroundColor: '#e74c3c',
                        minBarLength: 500
                    }
                ]
            },
            options:{}

        })

    })
})