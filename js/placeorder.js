




document.getElementById("btn-place").onclick=function(){    
   orders.push(
    {
        "orderId":generateOrderId(),
        "customerId":document.getElementById("customer-id").value ,
        "name":document.getElementById("name-id").value,
        "date":document.getElementById("date-id").value,
        "total": document.getElementById("total-id").value,
        "discount": document.getElementById("discount-id").value,
        "amount": document.getElementById("amount-id").value

    }
   );
  

   document.getElementById("ord-id").value="",
   document.getElementById("customer-id").value="",
   document.getElementById("name-id").value="",
   document.getElementById("date-id").value="",
   document.getElementById("total-id").value="",
   document.getElementById("discount-id").value="",
   document.getElementById("amount-id").value=""

}

const orders=[]

console.log(orders);

const toastTrigger = document.getElementById('btn-place')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}