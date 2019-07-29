var addScore, deductScore, finalScore1, finalScore2
init ()
   
   document.querySelector(".btnPlus1").addEventListener('click', function(){
    addScore = 10;
    finalScore1 += addScore;
    document.querySelector('#Score1').textContent = finalScore1;
   })
   
   document.querySelector(".btnPlus2").addEventListener('click', function(){
    addScore = 10;
    finalScore2 += addScore;
    document.querySelector('#Score2').textContent = finalScore2;
   })

   document.querySelector(".btnMinus1").addEventListener('click', function(){
    deductScore = 5;
    if (finalScore1 <= 0) {
       finalScore1 = finalScore1 
    }
    else{
        finalScore1 -= deductScore;
    }
    
    document.querySelector('#Score1').textContent = finalScore1;
   })
   
   document.querySelector(".btnMinus2").addEventListener('click', function(){
    deductScore = 5;
    if (finalScore2 <= 0) {
        finalScore2 = finalScore2 
     }
     else{
         finalScore2 -= deductScore;
     }


    document.querySelector('#Score2').textContent = finalScore2;
   })

    function init (){

        finalScore1 = 0;
        finalScore2 = 0;

        // Team name
        document.getElementById('Team1').textContent = 'Team 1';
        document.getElementById('Team2').textContent = 'Team 2';
        
        //Team score
        document.getElementById('Score1').textContent = '0';
        document.getElementById('Score2').textContent = '0';

    }