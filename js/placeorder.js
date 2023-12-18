const orders = []

let ordError = document.getElementById("id-error");
let customerError = document.getElementById("phone-error");
let nameError = document.getElementById("name-error");
let dateError = document.getElementById("date-error");
let totalError = document.getElementById("total-error");
let discountError = document.getElementById("discount-error");
let amountError = document.getElementById("amount-error");

function validateId() {
  let id = document.getElementById("ord-id").value;
  let box = document.getElementById("ord-id");

  if (id.length == 0) {
    box.style.borderColor = '#ef1504';
    ordError.innerHTML = "Id is required";
    return false;
  }
  box.style.borderColor = '#4caf50';
  ordError.innerHTML = "";
  return true;
}
function validateCustomerId() {
  let id = document.getElementById("customer-id").value;
  let box = document.getElementById("customer-id");

  if (id.length == 0) {
    box.style.borderColor = '#ef1504';
    customerError.innerHTML = " Customer id is required";
    return false;
  }
  if (id.length != 10) {
    box.style.borderColor = '#ef1504';
    customerError.innerHTML = "Customer id shoud be 10 digit";
    return false;
  }
  if (!id.match(/^[0-9]{10}$/)) {
    box.style.borderColor = '#ef1504';
    customerError.innerHTML = "Customer id not valid";
    return false;
  }
  box.style.borderColor = '#4caf50';
  customerError.innerHTML = "";
  return true;

}
function validateName() {
  let id = document.getElementById("name-id").value;
  let box = document.getElementById("name-id");

  if (id.length == 0) {
    box.style.borderColor = '#ef1504';
    nameError.innerHTML = " Name is required";
    return false;
  }
  if (!id.match(/^[A-Za-z]+$/)) {
    box.style.borderColor = '#ef1504';
    nameError.innerHTML = " Name is not valid";
    return false;
  }
  box.style.borderColor = '#4caf50';
  nameError.innerHTML = "";
  return true;

}

function validateDate() {
  let date = document.getElementById("date-id").value;
  let box = document.getElementById("date-id");

  if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
    box.style.borderColor = '#ef1504';
    dateError.innerHTML = "Date is not valid (use YYYY-MM-DD)";
    return false;
  }
  box.style.borderColor = '#4caf50';
  dateError.innerHTML = "";
  return true;

}
function validateTotal() {
  let total = document.getElementById("total-id").value;
  let box = document.getElementById("total-id");

  if (total.length == 0) {
    totalError.innerHTML = "Total is required";
  }

  if (!total.match(/^\d*\.?\d+$/)) {
    box.style.borderColor = '#ef1504';
    totalError.innerHTML = "Total is not valid";
    return false;
  }
  box.style.borderColor = '#4caf50';
  totalError.innerHTML = "";
  return true;
}

function validateDiscount() {
  let id = document.getElementById("discount-id").value;
  let box = document.getElementById("discount-id");

  if (id.length == 0) {
    box.style.borderColor = '#ef1504';
    discountError.innerHTML = " Discount is required";
    return false;
  }
  if (!id.match(/^\d+(\.\d+)?%?$/)) {
    box.style.borderColor = '#ef1504';
    discountError.innerHTML = "Discount is not valid";
    return false;
  }
  box.style.borderColor = '#4caf50';
  discountError.innerHTML = "";
  return true;
}

function validateAmount() {
  let amount = document.getElementById("amount-id").value;
  let box = document.getElementById("amount-id");

  if (amount.length == 0) {
    amountError.innerHTML = "Amount is required";
  }

  if (!amount.match(/^\d*\.?\d+$/)) {
    box.style.borderColor = '#ef1504';
    amountError.innerHTML = "Amount is not valid";
    return false;
  }
  box.style.borderColor = '#4caf50';
  amountError.innerHTML = "";
  return true;

}



// saving process



document.getElementById("btn-place").onclick = function (){
  if (validateName() == true && validateId() == true && validateAmount() == true &&
    validateCustomerId() == true && validateDate() == true && validateDiscount() == true &&
    validateTotal() == true) {

    orders.push(
      {
        "orderId": document.getElementById("ord-id").value,
        "customerId": document.getElementById("customer-id").value,
        "name": document.getElementById("name-id").value,
        "date": document.getElementById("date-id").value,
        "total": document.getElementById("total-id").value,
        "discount": document.getElementById("discount-id").value,
        "amount": document.getElementById("amount-id").value

      }
    );


      document.getElementById("ord-id").value = "",
      document.getElementById("customer-id").value = "",
      document.getElementById("name-id").value = "",
      document.getElementById("date-id").value = "",
      document.getElementById("total-id").value = "",
      document.getElementById("discount-id").value = "",
      document.getElementById("amount-id").value = ""

      const toastBootstrap = new bootstrap.Toast(document.getElementById('liveToast'));
      toastBootstrap.show();
  }else{
    const toastBootstrap = new bootstrap.Toast(document.getElementById('liveToast2'));
      toastBootstrap.show();
  }


}
// saving process

console.log(orders);


