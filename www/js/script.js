var url_ws="http://admin.freetestmobile.com/ws/index.php";
var url_ws_chat="http://admin.freetestmobile.com/ws/transactions.php";
var $_GET = {}; 
if(document.location.toString().indexOf('?') !== -1) {  
    var query = document.location
                   .toString()
                   // get the query string
                   .replace(/^.*?\?/, '')
                   // and remove any existing hash string (thanks, @vrijdenker)
                   .replace(/#.*$/, '')
                   .split('&');

    for(var i=0, l=query.length; i<l; i++) {
       var aux = decodeURIComponent(query[i]).split('=');
       $_GET[aux[0]] = aux[1];
    }
}
//get the 'index' query parameter

