const Application  = require('spectron').Application
const assert = require('assert')
const { app } = require('electron')
const electronPath = require('electron')
const path = require('path')

describe('Application launch', function(){

    beforeEach(function(){
        this.app = new Application({
            path: electronPath,
            args: [path.join(__dirname, '..')],
            waitTimeout: 10000,
            startTimeout: 10000
        })
        return this.app.start()
    })

    afterEach(function(){

        if(this.app.isRunning())
        {
            this.app.stop()
            setTimeout(() => {
                console.log(this.app)
            }, 10000);
        }
    })

    //simple checking if application is showing 1 diplay
    it('shows an initial window', function(){
        return this.app.client.getWindowCount().then(function(count){
            assert.strictEqual(count, 1)
        })
    })
})