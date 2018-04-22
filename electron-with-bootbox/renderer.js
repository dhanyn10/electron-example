// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//simple alert
$("#button-test").click(function(){
    bootbox.alert('button is clicked');
});

//alert with displaying input
$("#button-test2").click(function(){
    form_input = $("#form-input").val();
    bootbox.alert('your input is : '+ form_input );
});