// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let remote  = require('electron').remote;
let dialog  = remote.dialog;
let btn     = document.getElementById('browse');

btn.addEventListener('click', ()=>{
    //show open directory window
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then( result => {
        //insert result of filepath to #location
        console.log(result.filePaths)
    }).catch( error => {
        console.error(error)
    });
})