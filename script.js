var productnames= [];
var productprices= [];
$(".addtocart").click(function(){
    var productName= $(".ProdName").val();
    $(".cart").append("<div>" + productName + "</div>");
    productnames.push(productName);
    var productPrice= $(".Price").val();
    $(".cart").append("<div>" + productPrice + "</div>");
    productprices.push(productPrice);
    // var image= $(".img").val()
    // $(".cart").append(
});

$(".purchase").click(function(){
    var numberofItems= productnames.length;
    
    var totalPrice= 0;
    productprices.forEach(function(price){
        var priceasNumber= parseInt(price);
        totalPrice= totalPrice +priceasNumber;
    });
    
    alert("You purchased " + numberofItems + " items and it cost $" + totalPrice);
});