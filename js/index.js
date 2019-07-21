init ()
   
   
   function on() {
        document.getElementById("overlay").style.display = "block";

        setTimeout(on, 3000);
    }

    function off() {
        document.getElementById("overlay").style.display = "none";

    }

    function enableButton(){
        document.getElementById("teamName").disabled = true;
    }

    document.querySelector()


    function init (){

        // Team name
        document.getElementById('Team1').textContent = 'Team 1';
        document.getElementById('Team2').textContent = 'Team 2';
        
        //Team score
        document.getElementById('Score1').textContent = '0';
        document.getElementById('Score2').textContent = '0';

        //Team current score
        document.getElementById('current1').textContent = '0';
        document.getElementById('current2').textContent = '0';
    }