/* global Module */

/* Magic Mirror
 * Module: MMM-PIR-Notification
 *
 * By Alexander Haelbich
 * MIT Licensed.
 */

Module.register("MMM-PIR-Notification", {

    defaults: {
        pin: 23,
        timeoutDelay: 5000,
    },

    start: function () {
        this.sendSocketNotification('CONFIG', this.config);
        Log.info('THIS IS A VERY LONG TESTTEXT WITH MULTIPLE LINES Starting module: ' + this.name);
    },


    socketNotificationReceived: function (notification, payload) {
        const self = this;
        console.log(self);
        if (notification === "USER_MOVEMENT") {
            if (payload) {
                self.sendNotification('CURRENT_PROFILE', 'default');
            } else {
                self.sendNotification('CURRENT_PROFILE', 'empty');
            }
        }
    },
});
