<!-- 2.모달 박스 UI 제작 --style.css 590번줄> 
 < !--The Modal -->
<div id="myModal" class="modal">

 <!-- Modal content -->
 <div class="modal-content">
  <!-- <span class="close">&times;</span>
   <p>Some text in the Modal..</p>-->
  <div class="close" id="close">
   <span></span>
   <span></span>
  </div>
  <form action="/schedule/php/sp_rate_insert.php" class="rate-form" name="rate_form">

  </form>
  <div class="updateBtnbox">
   <button type="button" id="updateBtn">Update Rate </button>
  </div>
 </div>
 <script>
 const updateBtn = document.querySelector('#updateBtn');
 const closeBtn = document.querySelector('#close');
 updateBtn.onclick = function() {
  //  alert('abc');
  document.rate_form.submit();
  modal.style.display = "none";
 }
 closeBtn.onclick = function() {
  modal.style.display = "none";
 }
 </script>