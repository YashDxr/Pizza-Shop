var options = {
  key: "rzp_test_XVqu8Bxp358sd1",
  amount: "50000", 
  currency: "INR",
  name: "Pizza Shop",
  description: "Test Transaction",
  image: "https://example.com/your_logo",
  handler: function (response) {
    alert("Payment Successful!");
  },
  prefill: {
    //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
    name: "Customer Name", 
    email: "customer@example.com",
    contact: "0000090000", 
  },
  notes: {
    address: "Razorpay Corporate Office",
  },
  theme: {
    color: "#3399cc",
  },
};
var rzp1 = new Razorpay(options);
rzp1.on("payment.failed", function (response) {
  alert("Payment Failed!")
  alert(response.error.code);
  alert(response.error.description);
});
document.getElementById("rzp-button1").onclick = function (e) {
  rzp1.open();
  e.preventDefault();
};
