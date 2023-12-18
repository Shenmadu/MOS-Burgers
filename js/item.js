let codeError = document.getElementById("code-error");
let nameError = document.getElementById("name-error");
let catagoryError = document.getElementById("catagory-error");
let expDateError = document.getElementById("date-error");
let priceError = document.getElementById("price-error");
let qtyError = document.getElementById("qty-error");
let discountError = document.getElementById("discount-error");

function validateCode() {
    let code = document.getElementById("txt-code").value;
    let box = document.getElementById("txt-code");

    if (code.length == 0) {
        box.style.borderColor = '#ef1504';
        codeError.innerHTML = "code is required";
        return false;
    }
    box.style.borderColor = '#4caf50';
    codeError.innerHTML = "";
    return true;
}

function validateName() {
    let id = document.getElementById("txt-name").value;
    let box = document.getElementById("txt-name");

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

function validateCatagory() {
    let id = document.getElementById("txt-catagory").value;
    let box = document.getElementById("txt-catagory");

    if (id.length == 0) {
        box.style.borderColor = '#ef1504';
        catagoryError.innerHTML = " Catagery is required";
        return false;
    }
    if (!id.match(/^[A-Za-z]+$/)) {
        box.style.borderColor = '#ef1504';
        catagoryError.innerHTML = " Catagery is not valid";
        return false;
    }
    box.style.borderColor = '#4caf50';
    catagoryError.innerHTML = "";
    return true;

}

function validateDate() {
    let date = document.getElementById("txt-expdate").value;
    let box = document.getElementById("txt-expdate");

    if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        box.style.borderColor = '#ef1504';
        expDateError.innerHTML = "Date is not valid (use YYYY-MM-DD)";
        return false;
    }
    box.style.borderColor = '#4caf50';
    expDateError.innerHTML = "";
    return true;

}

function validatePrice() {
    let price = document.getElementById("txt-price").value;
    let box = document.getElementById("txt-price");

    if (price.length == 0) {
        priceError.innerHTML = "Price is required";
    }

    if (!price.match(/^\d*\.?\d+$/)) {
        box.style.borderColor = '#ef1504';
        priceError.innerHTML = "Price is not valid";
        return false;
    }
    box.style.borderColor = '#4caf50';
    priceError.innerHTML = "";
    return true;
}

function validateQty() {
    let qty = document.getElementById("txt-qty").value;
    let box = document.getElementById("txt-qty");

    if (qty.length == 0) {
        qtyError.innerHTML = "Quantity is required";
    }

    if (!qty.match(/^\d*\.?\d+$/)) {
        box.style.borderColor = '#ef1504';
        qtyError.innerHTML = "Quantity is not valid";
        return false;

    }
    box.style.borderColor = '#4caf50';
    qtyError.innerHTML = "";
    return true;
}

function validateDiscount() {
    let id = document.getElementById("txt-discount").value;
    let box = document.getElementById("txt-discount");

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


// save item

document.getElementById("btn-add").onclick = function () {
    if (validateName() == true && validateCode() == true && validateDate() == true &&
        validateCatagory() == true && validateDiscount() == true && validateQty() == true &&
        validatePrice() == true) {

        itemlist.push(
            {
                "code": document.getElementById("txt-code").value,
                "name": document.getElementById("txt-name").value,
                "price": document.getElementById("txt-price").value,
                "expdate": document.getElementById("txt-expdate").value,
                "discount": document.getElementById("txt-discount").value,
                "catagory": document.getElementById("txt-catagory").value

            }

        );

        document.getElementById("txt-code").value = "",
            document.getElementById("txt-name").value = "",
            document.getElementById("txt-price").value = "",
            document.getElementById("txt-expdate").value = "",
            document.getElementById("txt-discount").value = "",
            document.getElementById("txt-catagory").value = "",
            document.getElementById("txt-qty").value = "",
            document.getElementById("avatar").value = ""

        const toastBootstrap = new bootstrap.Toast(document.getElementById('liveToast1'));
        toastBootstrap.show();
    } else {
        const toastBootstrap = new bootstrap.Toast(document.getElementById('liveToast2'));
        toastBootstrap.show();
    }
}


const itemlist = [
    {
        "code": "B01001",
        "name": "Classic Burger (Large)",
        "price": "Rs.750.00",
        "expdate": "2024-01-03",
        "discount": "0",
        "catagory": "Burgers"

    },
    {
        "code": "B01002",
        "name": "Classic Burger (Regular)",
        "price": "Rs.1500.00",
        "expdate": "2024-01-03",
        "discount": "15",
        "catagory": "Burgers"

    },
    {
        "code": "B01003",
        "name": "Turkey Burger",
        "price": "Rs.1600.00",
        "expdate": "2024-01-03",
        "discount": "0",
        "catagory": "Burgers"

    },
    {
        "code": "B01004",
        "name": "Chicken Burger (Large)",
        "price": "Rs.1400.00",
        "expdate": "2024-01-03",
        "discount": "0",
        "catagory": "Burgers"

    }


]



console.log(itemlist);

