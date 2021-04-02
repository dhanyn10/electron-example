// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

//simple alert
document.getElementById('button-test').addEventListener('click', () => {
    bootbox.alert('button is clicked')
});

//alert with displaying input
document.getElementById('button-test2').addEventListener('click', () => {
    form_input = document.getElementById('form-input').value
    bootbox.alert('your input is : '+ form_input )
})