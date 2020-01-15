function addWishlist(ele,call){
var p = ele.getAttribute('data-prdct');
var a = new XMLHttpRequest();
a.onreadystatechange = function(){
if(a.readyState == 4){
var av = a.responseText;
$().createToast(av);
}
}
a.open("GET","addwishlist.php?p="+p,true);
a.send(null);
call();
}
function removeWishlist(ele,call){
var p = ele.getAttribute('data-prdct');
var a = new XMLHttpRequest();
a.onreadystatechange = function(){
if(a.readyState == 4){
var av = a.responseText;
$().createToast(av);
}
}
a.open("GET","removewishlist.php?p="+p,true);
a.send(null);
call();
}
//XMLHttpRequest search
window.onload = function(){
document.getElementById('axsearchdata').style.display = "none";
var s = document.getElementById('searchprdct');
s.addEventListener('keyup',axsearch);
}
function axsearch(){
var val = this.value,
display = document.getElementById('axsearchdata');
if(val!=""){
display.style.display = "block";
var a = new XMLHttpRequest();
a.onreadystatechange = function(){
if(a.readyState == 4){
display.innerHTML = a.responseText;
}
}
a.open("GET","axsearch.php?q="+val,true);
a.send(null);
}
else{
display.innerHTML="";
display.style.display = "none";
}
}
function refresh(){
setInterval(function(){document.location = document.location ;},200);
}