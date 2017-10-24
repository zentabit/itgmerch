simpleCart({
    checkout: {
        type: "SendForm" ,
        url: "/order/" ,
        // http method for form, "POST" or "GET", default is "POST"
        method: "POST" ,
        // an option list of extra name/value pairs that can
        // be sent along with the checkout data
        extra_data: {
          order: 'Oops'
        }
    }
});

function showDiv() {
    document.getElementById('show').style.display = "block";
}

function removeDiv() {
    document.getElementById('show').style.display = "none";
}