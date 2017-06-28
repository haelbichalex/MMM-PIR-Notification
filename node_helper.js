/* Magic Mirror
 * Node Helper: {{MODULE_NAME}}
 *
 * By {{AUTHOR_NAME}}
 * {{LICENSE}} Licensed.
 */

const NodeHelper = require("node_helper");
const Gpio = require('onoff').Gpio;

module.exports = NodeHelper.create({

    start: function () {
        var self = this;
        console.log("Starting node helper for: " + self.name);
        console.log('THIS IS A VERY LONG TESTTEXT WITH MULTIPLE LINES ' + this.name);
        this.started = false;
        self.sendSocketNotification('USER_MOVEMENT', true);
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "CONFIG" && this.started == false) {
            const self = this;
            this.config = payload;

            this.pir = new Gpio(this.config.pin, 'in', 'both');
            console.log(this.pir);

            self.wasMoving = true;
            this.pir.watch(function (err, value) {
                if (value == 1) {
                    if (!self.wasMoving) {
                        self.sendSocketNotification('USER_MOVEMENT', true);
                        clearTimeout(self.localTimeout);
                        self.wasMoving = true;
                    }
                } else if (value == 0) {
                    if (self.wasMoving) {
                        self.localTimeout = setTimeout(function () {
                            self.sendSocketNotification('USER_MOVEMENT', false);
                            self.wasMoving = false;
                        }, self.config.timeoutDelay * 1000);
                    }
                }
            });

            this.started = true;
        }
    },
});
