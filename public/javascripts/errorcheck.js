let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

function chkPhone() {
  var phone = document.getElementById("phone");
  var pos = phone.value.search(/^\d{3}-\d{3}-\d{4}$/);
  if (pos === -1) {
    error1.innerHTML = "Incorrect form.<br /> Re-enter as: ddd-ddd-dddd."
    return false;
  }
  else
    error1.innerHTML = ""
    return true;
}
document.getElementById("phonenum").addEventListener('change', chkPhone);

function chkDelZip() {
  var zip = document.getElementById("dzip");
  var pos = zip.value.search(/^\d{5}$/);
  if (pos === -1) {
    error1.innerHTML = "Incorrect form.<br /> Re-enter as: ddddd."
    return false;
  }
  else
    error1.innerHTML = ""
    return true;
}
function chkCardZip() {
  var zip = document.getElementById("czip");
  var pos = zip.value.search(/^\d{5}$/);
  if (pos === -1) {
    error2.innerHTML = "Incorrect form.<br /> Re-enter as: ddddd."
    return false;
  }
  else
    error2.innerHTML = ""
    return true;
}
document.getElementById("delzip").addEventListener('change', chkDelZip);
document.getElementById("cardzip").addEventListener('change', chkCardZip);

function chkName() {
  var name = document.getElementById("name");
  var pos = name.value.search(/^[A-Z][a-z]+ [A-Z][a-z]+$/);
  if (pos === -1) {
    error2.innerHTML = "Incorrect form.<br /> Re-enter as: Firstname Lastname."
    return false;
  }
  else
    error2.innerHTML = ""
    return true;
}
document.getElementById("cardname").addEventListener('change',chkName);

function chkCVV() {
  var cvv = document.getElementById("cvv");
  var pos = cvv.value.search(/^\d{3}$/);
  if (pos === -1) {
    error2.innerHTML = "Incorrect form.<br /> Re-enter as: ddd."
    return false;
  }
  else
    error2.innerHTML = ""
    return true;
}
document.getElementById("securitycode").addEventListener('change', chkCVV);

function chkCardNo() {
  var cardno = document.getElementById("cardno");
  var pos = cardno.value.search(/^\d{4} \d{4} \d{4} \d{4}$/);
  if (pos === -1) {
    error2.innerHTML = "Incorrect form.<br /> Re-enter as: dddd dddd dddd dddd."
    return false;
  }
  else
    error2.innerHTML = ""
    return true;
}
document.getElementById("cardnum").addEventListener('change', chkCardNo);

function chkExpDate() {
  var expdate = document.getElementById("exp");
  var pos = expdate.value.search(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
  if (pos === -1) {
    error2.innerHTML = "Invalid date."
    return false;
  }
  else
    error2.innerHTML = ""
    return true;
}
document.getElementById("expdate").addEventListener('change', chkExpDate);

function chkState() {
  var state = document.getElementById("delstate");
  var pos = state.value.search(/^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/i);
  if (pos === -1) {
    error1.innerHTML = "Invalid state."
    return false;
  }
  else
    error1.innerHTML = ""
    return true;
}
document.getElementById("state").addEventListener('change',chkState);

function chkCity() {
  var city = document.getElementById("delcity");
  /*var pos = city.value.search(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/);*/
  var pos = city.value.search(/^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/);
  if (pos === -1) {
    error1.innerHTML = "Invalid city."
    return false;
  }
  else
    error1.innerHTML = ""
    return true;
}
document.getElementById("city").addEventListener('change',chkCity);

function chkAddress() {
  var address = document.getElementById("deladdress");
  var pos = address.value.search(/^\s*\S+(?:\s+\S+){2}/);
  if (pos === -1) {
    error1.innerHTML = "Invalid address."
    return false;
  }
  else
    error1.innerHTML = ""
    return true;
}
document.getElementById("address").addEventListener('change',chkAddress);

function placeorder() {
  if (($delivery || $carryout) & ($card || $cash)) {
    let placeorder = (
      <div>
        <input class="btn btn-success" type="submit" value="Place order"></input>
      </div>
    )
    ReactDOM.render(
      placeorder,
      document.getElementById('placeorder')
    );
  }
}
document.getElementById('delivery').addEventListener('click', placeorder)
document.getElementById('carryout').addEventListener('click', placeorder)
document.getElementById('card').addEventListener('click', placeorder)
document.getElementById('cash').addEventListener('click', placeorder)


function confirmOrder() {
  let confirmorder = (
    <a class="btn btn-danger" href="/placeorder" role="button">Confirm order</a>
  );
  if ($carryout & $cash) {
    if (chkPhone()) {
      error3.innerHTML = ""
      ReactDOM.render(
        confirmorder,
        document.getElementById('placeorder')
      );
    }
    else {
      error3.innerHTML = "Please correct input errors."
    }
  }
  else if ($carryout & $card) {
    if (chkPhone() & chkCardNo() & chkExpDate() & chkCVV() & chkName() & chkCardZip()) {
      error3.innerHTML = ""
      ReactDOM.render(
        confirmorder,
        document.getElementById('placeorder')
      );
    }
    else {
      if (!chkPhone()) {chkPhone()}
      if (!chkCardNo()) {chkCardNo()}
      else if (!chkExpDate()) {chkExpDate()}
      else if (!chkCVV()) {chkCVV()}
      else if (!chkName()) {chkName()}
      else if (!chkCardZip()) {chkCardZip()}
      error3.innerHTML = "Please correct input errors."
    }
  }
  else if ($delivery & $card) {
    if (chkAddress() & chkCity() & chkState() & chkDelZip() & chkPhone() & chkCardNo() & chkExpDate() & chkCVV() & chkName() & chkCardZip()) {
      error3.innerHTML = ""
      ReactDOM.render(
        confirmorder,
        document.getElementById('placeorder')
      );
    }
    else {
      if (!chkAddress()) {chkAddress()}
      else if (!chkCity()) {chkCity()}
      else if (!chkState()) {chkState()}
      else if (!chkDelZip()) {chkDelZip()}
      else if (!chkPhone()) {chkPhone()}
      if (!chkCardNo()) {chkCardNo()}
      else if (!chkExpDate()) {chkExpDate()}
      else if (!chkCVV()) {chkCVV()}
      else if (!chkName()) {chkName()}
      else if (!chkCardZip()) {chkCardZip()}
      error3.innerHTML = "Please correct input errors."
    }
  }
  else if ($delivery & $cash) {
    if (chkAddress() & chkCity() & chkState() & chkDelZip() & chkPhone()) {
      error3.innerHTML = ""
      ReactDOM.render(
        confirmorder,
        document.getElementById('placeorder')
      );
    }
    else {
      if (!chkAddress()) {chkAddress()}
      else if (!chkCity()) {chkCity()}
      else if (!chkState()) {chkState()}
      else if (!chkDelZip()) {chkDelZip()}
      else if (!chkPhone()) {chkPhone()}
      error3.innerHTML = "Please correct input errors."
    }
  }
}
document.getElementById('placeorder').addEventListener('click', confirmOrder)