const Application  = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron')
const path = require('path')
const exec = require('child_process').exec
const appPath = path.resolve(__dirname, '../main.js');

describe('Application launch', function(){
    this.timeout(10000)
    
    beforeEach(function(){
        this.app = new Application({
            path: electronPath,
            args: [path.join(__dirname, '..')]
        })
        return this.app.start()
    })

    afterEach(function(){

        if(this.app && this.app.isRunning())
        {
            this.app.stop().then(() => {
                exec(`pkill -f "${appPath}"`); // based off of arguments passed to node
            })
        }
    })

    //simple checking if application is showing 1 diplay
    it('shows an initial window', function(){
        return this.app.client.getWindowCount().then(function(count){
            assert.strictEqual(count, 1)
        })
    })
})