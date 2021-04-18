const appplication = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron')
const path = require('path')

describe('Application launch', function () {
    this.timeout(10000)

    beforeEach(function () {
        this.app = new appplication({
            path: electronPath,
            args: [path.join(__dirname, '..')]
        })
        return this.app.start()
    })
    afterEach(function() {
        if(this.app && this.app.isRunning())
            return this.app.stop()
    })
    it('show an initial window', function () {
        return this.app.client.getWindowCount()
        .then(function (count) {
            assert.equal(count, 2)
        }).catch(function (error) {
            console.error("Error: ", error.message)
        })
    })
})