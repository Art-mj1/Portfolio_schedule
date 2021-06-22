$(function(){$.ajax({
 url: "/schedule/php/read_json.php", 
 success: function(result){

 console.log(result);
 const total_obj = JSON.parse(result);
 console.log(total_obj);
  const dbRate = Number (total_obj[0].db_rate);
  const apiRate = Number (total_obj[0].api_rate);
  const renRate = Number (total_obj[0].ren_rate);
  const plaRate = Number (total_obj[0].pla_rate);


  const spAvg= (dbRate * 0.4) + (apiRate * 0.2) + (renRate * 0.1) + (plaRate * 0.3) ;
  console.log(spAvg);
  $(".total-pofol .total-chart").html(
   `<span class="chart" data-percent="${spAvg}">
   <span class="percent"></span>
  </span>`
  );

  if(spAvg>0 && spAvg <=33){
  $("#total_msg").html(`Your process rate is very low...<br>Plz Hurry Up!`);
  } else if(spAvg>34 && spAvg <=66){
   $("#total_msg").html(`Don't forget the Github Backup!<br>Hurry Up!`);
  }else if(spAvg>67 && spAvg <=90){
   $("#total_msg").html(`Maybe Now You have to deploy first <br>then check rests.`);
  } else{
   $("#total_msg").html(`Almost Done!! <br>Check your detail process!`);
  }
  //0~33 :Your process rate is very low...<br>Plz Hurry Up!
  // 34~66: Don't forget the Github Backup!<br>Hurry Up!
  //66~90: Maybe Now You have to deploy first <br>then check rests.
  //90~: Almost Done!! <br>Check your detail process!
 }
 
});
});