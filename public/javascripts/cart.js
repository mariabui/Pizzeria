let $delivery = false
let $carryout = false
let $card = false
let $cash = false
let $coupon = false

function renderCart(items) {
  const $cart = document.querySelector(".cart")
  const total = document.querySelector(".total")

  $cart.innerHTML = items.map((item) => `
    <tr>
    <td>${item.name}</td>              
    <td style="width: 60px;">	
      <button type="button" class="btn btn-block btn-sm btn-outline-primary"
        onClick="cartLS.quantity(${item.id},-1)">-</button>
    </td>
    <td>${item.quantity}</td>
    <td style="width: 60px;">	
      <button type="button" class="btn btn-block btn-sm btn-outline-primary"
        onClick="cartLS.quantity(${item.id},1)">+</button>
    </td>
    <td class="text-right">$${item.price}</td>
    <td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})"><i class="fa-solid fa-trash"></i></Button></td>
    </tr>`).join("")

  total.innerHTML = "$" + cartLS.total().toFixed(2)

  if (cartLS.total() != 0) {
    let delivery = (
      <button class="btn btn-primary" type="button">Delivery</button>
    );
    ReactDOM.render(
      delivery,
      document.getElementById('delivery')
    );
    let carryout = (
      <button class="btn btn-primary" type="button">Carryout</button>
    );
    ReactDOM.render(
      carryout,
      document.getElementById('carryout')
    );
    document.getElementById('dorc').innerHTML = 'or'
    let card = (
      <button class="btn btn-primary" type="button">Card</button>
    );
    ReactDOM.render(
      card,
      document.getElementById('card')
    );
    let cash = (
      <button class="btn btn-primary" type="button">Cash</button>
    );
    ReactDOM.render(
      cash,
      document.getElementById('cash')
    );
    document.getElementById('corc').innerHTML = 'or'
    let couponinput = (
      <div>
        <input type="text" class="form-control coupon" placeholder="Coupon code" id="couponcode"></input>
      </div>
    );
    ReactDOM.render(
      couponinput,
      document.getElementById('couponinput')
    );
    let applycoupon = (
      <div>
        <button class="btn btn-primary btn-apply coupon" id="apply">Apply</button>
      </div>
    );
    ReactDOM.render(
      applycoupon,
      document.getElementById('applycoupon')
    );
  }
  else {
    let element = (
      <div></div>
    );
    ReactDOM.render(
      element,
      document.getElementById('placeorder')
    );
    ReactDOM.render(
      element,
      document.getElementById('delivery')
    );
    ReactDOM.render(
      element,
      document.getElementById('carryout')
    );
    document.getElementById('dorc').innerHTML = ''
    ReactDOM.render(
      element,
      document.getElementById('card')
    );
    ReactDOM.render(
      element,
      document.getElementById('cash')
    );
    document.getElementById('corc').innerHTML = ''
    ReactDOM.render(
      element,
      document.getElementById('address')
    );
    ReactDOM.render(
      element,
      document.getElementById('city')
    );
    ReactDOM.render(
      element,
      document.getElementById('state')
    );
    ReactDOM.render(
      element,
      document.getElementById('delzip')
    );
    ReactDOM.render(
      element,
      document.getElementById('phonenum')
    );
    ReactDOM.render(
      element,
      document.getElementById('cardnum')
    );
    ReactDOM.render(
      element,
      document.getElementById('expdate')
    );
    ReactDOM.render(
      element,
      document.getElementById('securitycode')
    );
    ReactDOM.render(
      element,
      document.getElementById('cardname')
    );
    ReactDOM.render(
      element,
      document.getElementById('cardzip')
    );
    ReactDOM.render(
      element,
      document.getElementById('couponinput')
    );
    ReactDOM.render(
      element,
      document.getElementById('applycoupon')
    );
    document.getElementById('error1').innerHTML = ''
    document.getElementById('error2').innerHTML = ''
    document.getElementById('error3').innerHTML = ''
    document.getElementById('error4').innerHTML = ''
    $coupon = false
  }
}
window.addEventListener('load', renderCart(cartLS.list()))
cartLS.onChange(renderCart)

function addC() {
  if (document.getElementById('pricec').innerHTML == '$10.00') {
    cartLS.add({ id: 1, name: 'S Cheese Pizza', price: 10 })
  }
  else if (document.getElementById('pricec').innerHTML == '$11.00') {
    cartLS.add({ id: 2, name: 'M Cheese Pizza', price: 11 })
  }
  else if (document.getElementById('pricec').innerHTML == '$12.00') {
    cartLS.add({ id: 3, name: 'L Cheese Pizza', price: 12 })
  }
}

function addP() {
  if (document.getElementById('pricep').innerHTML == '$11.00') {
    cartLS.add({ id: 4, name: 'S Pepperoni Pizza', price: 11 })
  }
  else if (document.getElementById('pricep').innerHTML == '$12.00') {
    cartLS.add({ id: 5, name: 'M Pepperoni Pizza', price: 12 })
  }
  else if (document.getElementById('pricep').innerHTML == '$13.00') {
    cartLS.add({ id: 6, name: 'L Pepperoni Pizza', price: 13 })
  }
}

function addS() {
  if (document.getElementById('prices').innerHTML == '$12.00') {
    cartLS.add({ id: 7, name: 'S Supreme Pizza', price: 12 })
  }
  else if (document.getElementById('prices').innerHTML == '$13.00') {
    cartLS.add({ id: 8, name: 'M Supreme Pizza', price: 13 })
  }
  else if (document.getElementById('prices').innerHTML == '$14.00') {
    cartLS.add({ id: 9, name: 'L Supreme Pizza', price: 14 })
  }
}

function addH() {
  if (document.getElementById('priceh').innerHTML == '$13.00') {
    cartLS.add({ id: 10, name: 'S Hawaiian Pizza', price: 13 })
  }
  else if (document.getElementById('priceh').innerHTML == '$14.00') {
    cartLS.add({ id: 11, name: 'M Hawaiian Pizza', price: 14 })
  }
  else if (document.getElementById('priceh').innerHTML == '$15.00') {
    cartLS.add({ id: 12, name: 'L Hawaiian Pizza', price: 15 })
  }
}

function addM() {
  if (document.getElementById('pricem').innerHTML == '$100.00') {
    cartLS.add({ id: 13, name: "S Maria's Specialty Pizza", price: 100 })
  }
  else if (document.getElementById('pricem').innerHTML == '$200.00') {
    cartLS.add({ id: 14, name: "M Maria's Specialty Pizza", price: 200 })
  }
  else if (document.getElementById('pricem').innerHTML == '$300.00') {
    cartLS.add({ id: 15, name: "L Maria's Specialty Pizza", price: 300 })
  }
}

function addT() {
  if (document.getElementById('pricet').innerHTML == '$100.00') {
    cartLS.add({ id: 16, name: "S Tim's Specialty Pizza", price: 100 })
  }
  else if (document.getElementById('pricet').innerHTML == '$200.00') {
    cartLS.add({ id: 17, name: "M Tim's Specialty Pizza", price: 200 })
  }
  else if (document.getElementById('pricet').innerHTML == '$300.00') {
    cartLS.add({ id: 18, name: "L Tim's Specialty Pizza", price: 300 })
  }
}
document.getElementById('addc').addEventListener('click', addC)
document.getElementById('addp').addEventListener('click', addP)
document.getElementById('adds').addEventListener('click', addS)
document.getElementById('addm').addEventListener('click', addM)
document.getElementById('addt').addEventListener('click', addT)
document.getElementById('addh').addEventListener('click', addH)

function delivery() {
  $delivery = true
  $carryout = false
  let address = (
    <div>
      <input type="text" id="deladdress" name="address" placeholder="Street Address"></input><br />
    </div>
  )
  ReactDOM.render(
    address,
    document.getElementById('address')
  );
  let city = (
    <div>
      <input type="text" id="delcity" name="city" placeholder="City"></input><br />
    </div>
  )
  ReactDOM.render(
    city,
    document.getElementById('city')
  );
  let state = (
    <div>
      <input type="text" id="delstate" name="state" placeholder="State (e.g., MA)"></input><br />
    </div>
  )
  ReactDOM.render(
    state,
    document.getElementById('state')
  );
  let zip = (
    <div>
      <input type="text" id="dzip" name="zipcode" placeholder="Zip Code"></input><br />
    </div>
  )
  ReactDOM.render(
    zip,
    document.getElementById('delzip')
  );
  let phone = (
    <div>
      <input type="text" id="phone" name="phone" placeholder="Phone No. (ddd-ddd-dddd)"></input>
    </div>
  )
  ReactDOM.render(
    phone,
    document.getElementById('phonenum')
  );
  document.getElementById("error1").innerHTML = ""
  document.getElementById("error3").innerHTML = ""
}
function carryout() {
  $delivery = false
  $carryout = true
  let phone = (
    <div>
      <input type="text" id="phone" placeholder="Phone No. (ddd-ddd-dddd)"></input>
    </div>
  )
  ReactDOM.render(
    phone,
    document.getElementById('phonenum')
  );
  let element = (
    <div></div>
  );
  ReactDOM.render(
    element,
    document.getElementById('address')
  );
  ReactDOM.render(
    element,
    document.getElementById('city')
  );
  ReactDOM.render(
    element,
    document.getElementById('state')
  );
  ReactDOM.render(
    element,
    document.getElementById('delzip')
  );
  document.getElementById("error1").innerHTML = ""
  document.getElementById("error3").innerHTML = ""
}
document.getElementById('delivery').addEventListener('click', delivery)
document.getElementById('carryout').addEventListener('click', carryout)

function card() {
  $card = true
  $cash = false
  let cardnum = (
    <div>
      <br />
      <input type="text" id="cardno" placeholder="Card Number"></input><br />
    </div>
  );
  ReactDOM.render(
    cardnum,
    document.getElementById('cardnum')
  );
  let expdate = (
    <div>
      <input type="text" id="exp" placeholder="Exp. Date (MM/YY)"></input><br />
    </div>
  );
  ReactDOM.render(
    expdate,
    document.getElementById('expdate')
  );
  let securitycode = (
    <div>
      <input type="text" id="cvv" placeholder="Security Code"></input><br />
    </div>
  );
  ReactDOM.render(
    securitycode,
    document.getElementById('securitycode')
  );
  let name = (
    <div>
      <input type="text" id="name" placeholder="Cardholder Name"></input><br />
    </div>
  );
  ReactDOM.render(
    name,
    document.getElementById('cardname')
  );
  let zip = (
    <div>
      <input type="text" id="czip" placeholder="Zip Code"></input><br />
    </div>
  )
  ReactDOM.render(
    zip,
    document.getElementById('cardzip')
  );
  document.getElementById("error2").innerHTML = ""
  document.getElementById("error3").innerHTML = ""
}
function cash() {
  $card = false
  $cash = true
  let element = (
    <div></div>
  );
  ReactDOM.render(
    element,
    document.getElementById('cardnum')
  );
  ReactDOM.render(
    element,
    document.getElementById('expdate')
  );
  ReactDOM.render(
    element,
    document.getElementById('securitycode')
  );
  ReactDOM.render(
    element,
    document.getElementById('cardname')
  );
  ReactDOM.render(
    element,
    document.getElementById('cardzip')
  );
  document.getElementById("error2").innerHTML = ""
  document.getElementById("error3").innerHTML = ""
}
document.getElementById('card').addEventListener('click', card)
document.getElementById('cash').addEventListener('click', cash)

function clear() {
  cartLS.destroy()
  $delivery = false
  $carryout = false
  $card = false
  $cash = false
  $coupon = false
}
document.getElementById('clear').addEventListener('click', clear)

function applyCoupon() {
  console.log($coupon)
  let total = document.querySelector(".total")
  let couponCode = document.getElementById('couponcode').value
  if ($coupon == false) {
    if (couponCode == 'hello') {
      error4.innerHTML = ''
      total.innerHTML = "$" + (cartLS.total() - cartLS.total()*0.10).toFixed(2)
      $coupon = true
    }
    else if (couponCode == '') {
      error4.innerHTML = 'Please enter a valid coupon code.'
    }
    else {
      error4.innerHTML = 'Invalid coupon code.'
    }
  }
  else {
    if (total.innerHTML == ("$" + cartLS.total().toFixed(2))) {
      if (couponCode == 'hello') {
        error4.innerHTML = ''
        total.innerHTML = "$" + (cartLS.total() - cartLS.total()*0.10).toFixed(2)
      }
    }
    else if (couponCode == '') {
      error4.innerHTML = 'Please enter a valid coupon code.'
    }
    else if (couponCode != 'hello') {
      error4.innerHTML = 'Invalid coupon code.'
    }
    else {
      error4.innerHTML = 'Coupon code already applied.'
    }
  }
}
document.getElementById('applycoupon').addEventListener('click', applyCoupon)