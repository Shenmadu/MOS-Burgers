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

document.getElementById("btn-add").onclick = function () {
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


}

console.log(itemlist);

const toastTrigger = document.getElementById('btn-add')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}