function fetch(){
            
    $.get("https://api.covid19api.com/summary",  
    

    function (data){
       

       var tbval = document.getElementById('tbval');

       for(var i=1; i<(data['Countries'].length);i++)
       {
           var x =tbval.insertRow();

           x.insertCell(0);
           tbval.rows[i].cells[0].innerHTML = data['Countries'][i-1]['Country'];
           tbval.rows[i].cells[0].style.color ='white';

           x.insertCell(1);
           tbval.rows[i].cells[1].innerHTML = data['Countries'][i-1]['TotalConfirmed'];
          tbval.rows[i].cells[1].style.color = 'orange';
           tbval.rows[i].cells[1].style.background = 'rgba(247,224,139,.13449)';
          

           x.insertCell(2);
            tbval.rows[i].cells[2].innerHTML = data['Countries'][i-1]['TotalRecovered'];
            tbval.rows[i].cells[2].style.background = 'rgba(40,167,69,.12549)';
           tbval.rows[i].cells[2].style.color = '#28A745';

            x.insertCell(3);
            tbval.rows[i].cells[3].innerHTML = data['Countries'][i-1]['TotalDeaths'];
            tbval.rows[i].cells[3].style.background = 'rgba(255,7,58,.12549)';
           tbval.rows[i].cells[3].style.color = '#FF073a';
  

       }

     })

}