

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
nav_mobile+="<a id='logo-container' href='index.html' class='brand-logo'><i class='material-icons dp48'>traffic</i> <span id='nom_ecole'></span></a>";
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
nav_mobile+="<li><a href='mes_tests.html'><i class='material-icons dp48'>assignment</i> Mes tests</a></li>";
nav_mobile+="<li><a href='chats.html'><i class='material-icons'>chat</i> Chat</a></li>";
nav_mobile+="<li><a href='a_propos.html'><i class='material-icons dp48'>info_outline</i> A propos</a></li>";
nav_mobile+="<li><a href='login.html'><i class='material-icons dp48'>settings_power</i> Déconnexion</a></li>";
nav_mobile+="</ul>";
nav_mobile+="<a href='#' data-activates='nav-mobile' class='button-collapse'><i class='material-icons'>menu</i></a>";
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

