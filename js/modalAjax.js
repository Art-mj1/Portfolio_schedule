$(function(){
//$(document).ready(function(){});와 같음

 $.ajax({
  url: "/schedule/php/read_json.php", 
  success: function(result){
    // console.log(result);

    const obj = JSON.parse(result);
    // console.log(obj);
    // console.log(typeof(obj[0].db_rate));

    const dbRATE = Number(obj[0].db_rate);
    const apiRATE = Number(obj[0].api_rate);
    const renRATE = Number(obj[0].ren_rate);
    const plaRATE = Number(obj[0].pla_rate);
   $(".rate-form").html(
    `<p>
    <label for="db_pro">DB Project</label>
    <input type="text" id="db_pro" value="${dbRATE}" name="db_pro">
   </p>
   <p>
    <label for="api_pro">API Project</label>
    <input type="text" id="api_pro" value="${apiRATE}" name="api_pro">
   </p>
   <p>
    <label for="ren_pro">Renewal Project</label>
    <input type="text" id="ren_pro" value="${renRATE}" name="ren_pro">
   </p>
   <p>
    <label for="pla_pro">Planning Project</label>
    <input type="text" id="pla_pro" value="${plaRATE}" name="pla_pro">
   </p>`
   );

  $(".each-graph").html(
     `<div class="db-pofol">
  <span class="chart" data-percent="${dbRATE}">
  <span class="percent"></span>
  </span>
  <b>DB Project</b>
  <i class="fa fa-database"></i>
</div>
<div class="api-pofol">
  <span class="chart" data-percent="${apiRATE}">
  <span class="percent"></span>
  </span>
  <b>API Project</b>
  <i class="fa fa-thermometer-half"></i>
</div>
<div class="renewal-pofol">
  <span class="chart" data-percent="${renRATE}">
  <span class="percent"></span>
  </span>
  <b>Renewal Project</b>
  <i class="fa fa-clone"></i>
</div>
<div class="planning-pofol">
  <span class="chart" data-percent="${plaRATE}">
  <span class="percent"></span>
  </span>
  <b>Planning Project</b>
  <i class="fa fa-bar-chart-o"></i>
</div>`
   );
  }
});
//비동기 통신을 함
});