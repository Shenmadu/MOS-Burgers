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


//save item

function addItem() {
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

//cart 
let addItemId = 0;
let count1 = 1;
let setTotal = document.getElementById("total-id");

function addToCart(item, code) {

    addItemId += 1;
    selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);

    let img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    selectedItem.append(img);

    for (let i = 0; i < itemlist.length; i++) {
        if (code === itemlist[i].code) {
            cart.push(itemlist[i]);

            let name = document.createElement('p');
            name.textContent = itemlist[i].name;
            selectedItem.append(name);

            let count = document.createElement('p');
            count.textContent = count1;
            selectedItem.append(count);

            let delBtn = document.createElement('button')
            delBtn.innerText = 'Delete'
            delBtn.setAttribute('onclick', 'del(' + addItemId + ')')
            delBtn.style.width = '100px';
            delBtn.style.height = '30px';
            delBtn.style.backgroundColor = 'red';

            selectedItem.append(delBtn);
        }
    }

    selectedItem.style.display = 'flex';
    selectedItem.style.marginBottom = '10px';

    let cartItems = document.getElementById('title');
    cartItems.append(selectedItem);


    setTotal.innerHTML = findTotal();
}
function del(item) {
    document.getElementById(item).remove();
}

function findTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price;
        let disc = cart[i].discount;

        total += (price - price * disc / 100);
    }
    return total;
}



function isAdded(code) {
    for (let i = 0; i < cart.length; i++) {
        if (code === cart[i].code) {
            return true;
        }
    }
    return false;
}

const cart = []

console.log(cart);

//cart 

function removeCart() {
    cart.pop();

}

const itemlist = [
    {
        "code": "B1001",
        "name": "Classic Burger (Large)",
        "price": 750.00,
        "expdate": "2024-01-03",
        "discount": 0,
        "catagory": "Burgers",
        "qty": 30

    },
    {
        "code": "B1002",
        "name": "Classic Burger (Regular)",
        "price": 1500.00,
        "expdate": "2024-01-03",
        "discount": 15,
        "catagory": "Burgers",
        "qty": 45

    },
    {
        "code": "B1003",
        "name": "Turkey Burger",
        "price": 1600.00,
        "expdate": "2024-01-03",
        "discount": 0,
        "catagory": "Burgers",
        "qty": 25

    },
    {
        "code": "B1004",
        "name": "Chicken Burger (Large)",
        "price": 1400.00,
        "expdate": "2024-01-03",
        "discount": 0,
        "catagory": "Burgers",
        "qty": 38

    },
    {
        "code": "B1005",
        "name": "Chicken Burger (Regular)",
        "price": 800.00,
        "expdate": "2024-01-03",
        "discount": 20,
        "catagory": "Burgers",
        "qty": 12

    }
    ,
    {
        "code": "B1006",
        "name": "Cheese Burger (Large)",
        "price": 1000.00,
        "expdate": "2024-01-03",
        "discount": 0,
        "catagory": "Burgers",
        "qty": 25

    }



]


console.log(itemlist);

//item table loard

function generateDataTable() {
    var itemTable = document.getElementById("Item-list");

    var tableInnerHtml = `<tr>
                        <td>Itemcode </td>
                        <td>ItemName</td>
                        <td>ItemQty</td>
                        <td>ExpDate</td>
                    </tr>`

    itemlist.forEach(element => {
        var tableRow = `<tr>
                        <td>${element.code}</td>
                        <td>${element.name}</td>
                        <td>${element.qty}</td>
                        <td>${element.expdate}</td>
                    </tr>`

        tableInnerHtml += tableRow;

    });

    itemTable.innerHTML = tableInnerHtml;
}