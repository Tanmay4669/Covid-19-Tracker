
function fetch(){
            
    $.get("https://api.covid19india.org/data.json",  
            
        

        function (data){
               

            var tbval = document.getElementById('tbval');

            for(var i=1; i<(data['statewise'].length);i++)
            {
                var x =tbval.insertRow();

                x.insertCell(0);
                tbval.rows[i].cells[0].innerHTML = data['statewise'][i-1]['state'];
                tbval.rows[i].cells[0].style.color ='white';

                x.insertCell(1);
                tbval.rows[i].cells[1].innerHTML = data['statewise'][i-1]['confirmed'];
                tbval.rows[i].cells[1].style.color = 'orange';
                tbval.rows[i].cells[1].style.background = 'rgba(247,224,139,.13449)';
                  

                x.insertCell(2);
                tbval.rows[i].cells[2].innerHTML = data['statewise'][i-1]['recovered'];
                tbval.rows[i].cells[2].style.background = 'rgba(40,167,69,.12549)';
                tbval.rows[i].cells[2].style.color = '#28A745';

                x.insertCell(3);
                tbval.rows[i].cells[3].innerHTML = data['statewise'][i-1]['deaths'];
                tbval.rows[i].cells[3].style.background = 'rgba(255,7,58,.12549)';
                tbval.rows[i].cells[3].style.color = '#FF073a';

                x.insertCell(4);
                tbval.rows[i].cells[4].innerHTML = data['statewise'][i-1]['active'];
                tbval.rows[i].cells[4].style.background = 'rgba(0,123,255,.0627451)';
                tbval.rows[i].cells[4].style.color = '#007bff';

            }

     })
}