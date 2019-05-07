// Select all links with hashes
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){
// On-page links
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
// Figure out element to scroll to
var e=$(this.hash);
// Does a scroll target exist?
(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(
// Only prevent default if animation is actually gonna happen
t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){
// Callback after animation
// Must change focus!
var t=$(e);if(t.focus(),t.is(":focus"))// Checking if the target was focused
return!1;t.attr("tabindex","-1"),// Adding tabindex for elements not focusable
t.focus()}))}});