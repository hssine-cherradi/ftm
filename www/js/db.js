

function get_l_s_by_name(name){
	
var item=window.localStorage.getItem(name);	

if (typeof item === 'undefined' || item === null){
item="";	
}

return item;
}
 
 function set_l_s_by_name(name,value){
   localStorage.setItem(name, value);
 }
   
function logout(){
    return localStorage= null;
}

$( document ).ready(function() {
	
var nav_mobile="";
 
nav_mobile+="<div class='nav-wrapper container'>";


nav_mobile+="<a id='logo-container' href='index.html' class='brand-logo'><span id='nom_ecole'></span></a>";
nav_mobile+="<ul id='nav-mobile' class='side-nav'>";
nav_mobile+="<li class='sidenav-avatar bg-material'>";
nav_mobile+="<div class='opacity-overlay-gradient'></div>";
nav_mobile+="<div class='bottom'>";
nav_mobile+="<img src='images/avatar_user.png' alt='' class='avatar circle'>";
nav_mobile+="<span class='dropdown-button waves-effect waves-light' data-activates='dropdown1'><span id='nav_nom_famille'></span> <i class='ion-android-arrow-dropdown right'></i></span>";
nav_mobile+="</div>";
nav_mobile+="</li>";

nav_mobile+="<li><a href='mon_compte.html'><i class='material-icons dp48'>account_box</i> Mon compte</a></li>";
nav_mobile+="<li><a href='permis.html'><i class='material-icons dp48'>playlist_play</i> Nouveau test</a></li>";
nav_mobile+="<li><a href='dashboard.html'><i class='material-icons dp48'>insert_chart</i> Progression</a></li>";
nav_mobile+="<li><a href='mes_tests.html'><i class='material-icons dp48'>assignment</i> Mes tests</a></li>";
nav_mobile+="<li><a href='chats.html'><i class='material-icons'>chat</i> Chat</a></li>";
nav_mobile+="<li><a href='a_propos.html'><i class='material-icons dp48'>info_outline</i> A propos</a></li>";
nav_mobile+="<li><a href='messages.html'><i class='material-icons dp48'>mode_comment</i> Messages <span id='c_messages'>0</span></a></li>";
nav_mobile+="<li><a href='login.html'><i class='material-icons dp48'>settings_power</i> Déconnexion</a></li>";
nav_mobile+="</ul>";
nav_mobile+="<a href='#' data-activates='nav-mobile' class='button-collapse'><i class='material-icons'>menu</i></a>";
nav_mobile+="<button type='button'  class='waves-effect waves-light btn-small btn-back' onclick='window.history.back();' ><i class='material-icons'>&#xE314;</i></button>";

nav_mobile+="</div>";

$("#nav_mobile").html(nav_mobile);


   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );
  
  
  		
	var nav_nom=get_l_s_by_name("nom");
	var nom_famille=get_l_s_by_name("nom_famille");
	
	$("#nav_nom_famille").text(nav_nom+" "+nom_famille);
	var nom_ecole=get_l_s_by_name("nom_ecole");
	$("#nom_ecole").html(nom_ecole);
      
});

	var ecole_id=get_l_s_by_name("ecole_id");
    var user_id=get_l_s_by_name("id_user");
	$.post(url_ws,{method:"messages",ecole_id:ecole_id,user_id:user_id}, function() {
	},"json")
  .done(function(result) {
 

    var data_res=result.data;
	var count=data_res.length;
	var count_messages=data_res.count_messages;
	$("#c_messages").text(count_messages);
	if(count>0){
	for(i=0;i<count;i++){

	}
	
	 $("#loading").hide();
	}else{
	

  $("#loading").hide();
	}
	
  })
  .fail(function() {
  
 
	var $toastContent = $("<span > Pas de connexion internet   </span>");
  Materialize.toast($toastContent, 3000,"alert-danger","top");
    $("#loading").hide(); 
  });
  