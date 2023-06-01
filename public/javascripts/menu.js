function showPriceSC() {
  document.getElementById('sc').style.background = "rgb(72,159,45)"
  document.getElementById('mc').style.background = ""
  document.getElementById('lc').style.background = ""
  document.getElementById('pricec').innerHTML = "$10.00"
}
function showPriceMC() {
  document.getElementById('sc').style.background = ""
  document.getElementById('mc').style.background = "rgb(72,159,45)"
  document.getElementById('lc').style.background = ""
  document.getElementById('pricec').innerHTML = "$11.00"
}
function showPriceLC() {
  document.getElementById('sc').style.background = ""
  document.getElementById('mc').style.background = ""
  document.getElementById('lc').style.background = "rgb(72,159,45)"
  document.getElementById('pricec').innerHTML = "$12.00"
}
document.getElementById("sc").addEventListener("click", showPriceSC);
document.getElementById("mc").addEventListener("click", showPriceMC);
document.getElementById("lc").addEventListener("click", showPriceLC);

function showPriceSP() {
  document.getElementById('sp').style.background = "rgb(72,159,45)"
  document.getElementById('mp').style.background = ""
  document.getElementById('lp').style.background = ""
  document.getElementById('pricep').innerHTML = "$11.00"
}
function showPriceMP() {
  document.getElementById('sp').style.background = ""
  document.getElementById('mp').style.background = "rgb(72,159,45)"
  document.getElementById('lp').style.background = ""
  document.getElementById('pricep').innerHTML = "$12.00"
}
function showPriceLP() {
  document.getElementById('sp').style.background = ""
  document.getElementById('mp').style.background = ""
  document.getElementById('lp').style.background = "rgb(72,159,45)"
  document.getElementById('pricep').innerHTML = "$13.00"
}
document.getElementById("sp").addEventListener("click", showPriceSP);
document.getElementById("mp").addEventListener("click", showPriceMP);
document.getElementById("lp").addEventListener("click", showPriceLP);

function showPriceSS() {
  document.getElementById('ss').style.background = "rgb(72,159,45)"
  document.getElementById('ms').style.background = ""
  document.getElementById('ls').style.background = ""
  document.getElementById('prices').innerHTML = "$12.00"
}
function showPriceMS() {
  document.getElementById('ss').style.background = ""
  document.getElementById('ms').style.background = "rgb(72,159,45)"
  document.getElementById('ls').style.background = ""
  document.getElementById('prices').innerHTML = "$13.00"
}
function showPriceLS() {
  document.getElementById('ss').style.background = ""
  document.getElementById('ms').style.background = ""
  document.getElementById('ls').style.background = "rgb(72,159,45)"
  document.getElementById('prices').innerHTML = "$14.00"
}
document.getElementById("ss").addEventListener("click", showPriceSS);
document.getElementById("ms").addEventListener("click", showPriceMS);
document.getElementById("ls").addEventListener("click", showPriceLS);

function showPriceSH() {
  document.getElementById('sh').style.background = "rgb(72,159,45)"
  document.getElementById('mh').style.background = ""
  document.getElementById('lh').style.background = ""
  document.getElementById('priceh').innerHTML = "$13.00"
}
function showPriceMH() {
  document.getElementById('sh').style.background = ""
  document.getElementById('mh').style.background = "rgb(72,159,45)"
  document.getElementById('lh').style.background = ""
  document.getElementById('priceh').innerHTML = "$14.00"
}
function showPriceLH() {
  document.getElementById('sh').style.background = ""
  document.getElementById('mh').style.background = ""
  document.getElementById('lh').style.background = "rgb(72,159,45)"
  document.getElementById('priceh').innerHTML = "$15.00"
}
document.getElementById("sh").addEventListener("click", showPriceSH);
document.getElementById("mh").addEventListener("click", showPriceMH);
document.getElementById("lh").addEventListener("click", showPriceLH);

function showPriceSM() {
  document.getElementById('sm').style.background = "rgb(72,159,45)"
  document.getElementById('mm').style.background = ""
  document.getElementById('lm').style.background = ""
  document.getElementById('pricem').innerHTML = "$100.00"
}
function showPriceMM() {
  document.getElementById('sm').style.background = ""
  document.getElementById('mm').style.background = "rgb(72,159,45)"
  document.getElementById('lm').style.background = ""
  document.getElementById('pricem').innerHTML = "$200.00"
}
function showPriceLM() {
  document.getElementById('sm').style.background = ""
  document.getElementById('mm').style.background = ""
  document.getElementById('lm').style.background = "rgb(72,159,45)"
  document.getElementById('pricem').innerHTML = "$300.00"
}
document.getElementById("sm").addEventListener("click", showPriceSM);
document.getElementById("mm").addEventListener("click", showPriceMM);
document.getElementById("lm").addEventListener("click", showPriceLM);

function showPriceST() {
  document.getElementById('st').style.background = "rgb(72,159,45)"
  document.getElementById('mt').style.background = ""
  document.getElementById('lt').style.background = ""
  document.getElementById('pricet').innerHTML = "$100.00"
}
function showPriceMT() {
  document.getElementById('st').style.background = ""
  document.getElementById('mt').style.background = "rgb(72,159,45)"
  document.getElementById('lt').style.background = ""
  document.getElementById('pricet').innerHTML = "$200.00"
}
function showPriceLT() {
  document.getElementById('st').style.background = ""
  document.getElementById('mt').style.background = ""
  document.getElementById('lt').style.background = "rgb(72,159,45)"
  document.getElementById('pricet').innerHTML = "$300.00"
}
document.getElementById("st").addEventListener("click", showPriceST);
document.getElementById("mt").addEventListener("click", showPriceMT);
document.getElementById("lt").addEventListener("click", showPriceLT);