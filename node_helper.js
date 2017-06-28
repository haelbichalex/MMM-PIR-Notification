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
        this.started = false;
        self.sendSocketNotification('USER_MOVEMENT', true);
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "CONFIG") {
            const self = this;
            this.config = payload;

            this.pir = new Gpio(this.config.pin, 'in', 'both');
            this.pir.watch(function (err, value) {
                if (value == 1) {
                    self.sendSocketNotification('USER_MOVEMENT', true);
                    clearTimeout(self.timeout);
                } else if (value == 0) {
                    self.timeout = setTimeout(function () {
                        self.sendSocketNotification('USER_MOVEMENT', false);
                    }, self.config.timeoutDelay);
                }
            });

            this.started = true;
        }
    },
});
