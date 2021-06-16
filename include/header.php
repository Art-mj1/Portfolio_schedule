<header>
 <h2><a href="/schedule/index.php"><i class="custom-font"></i></a></h2>
 <ul class="gnb">
  <li class="active">
   <a href="/schedule/index.php"><i class="fa fa-trello"></i></a>
   <span class="nav-top"></span>
   <span class="nav-middle"></span>
   <span class="nav-effect"></span>
   <span class="nav-bottom"></span>
  </li>
  <li>
   <a href="/schedule/pages/sp_insert_form.php"><i class="fa fa-pencil"></i></a>
   <span class="nav-top"></span>
   <span class="nav-middle"></span>
   <span class="nav-effect"></span>
   <span class="nav-bottom"></span>
  </li>
  <li>
   <a href="/schedule/pages/sp_detail_form.php?key=all"><i class="fa fa-search"></i></a>
   <span class="nav-top"></span>
   <span class="nav-middle"></span>
   <span class="nav-effect"></span>
   <span class="nav-bottom"></span>
  </li>
 </ul>
 <a href="#" class="sign-out"><i class="fa fa-sign-out"></i></a>
 <script>
 const pathName2 = window.location.href
 const tabBtns2 = document.querySelectorAll('.gnb li');
 const tabElements2 = ['index', 'sp_insert_form', 'sp_detail_form']
 for (let i = 0; i < tabBtns2.length; i++) {
  tabBtns2[i].classList.remove('active');
  if (pathName2.includes(tabElements2[i])) {
   tabBtns2[i].classList.add('active');
  }
 }
 </script>
 <div class="mobile-menu">
  <span></span>
  <span></span>
 </div>
</header>