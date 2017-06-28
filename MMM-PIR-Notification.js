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
        timeoutDelay: 60,
    },

    start: function () {
        this.sendSocketNotification('CONFIG', this.config);
        Log.info('THIS IS A VERY LONG TESTTEXT WITH MULTIPLE LINES Starting module: ' + this.name);
    },


    socketNotificationReceived: function (notification, payload) {
        if (notification === "USER_MOVEMENT") {
            if (payload) {
                this.sendAction(true);
            } else {
                this.sendAction(false);
            }
        }
    },

    sendAction: function (movement) {
        const self = this;
        if (movement) {
            Log.error('MOVEMENT');
            self.sendNotification('CURRENT_PROFILE', 'default');
        } else {
            Log.error('NO-MOVEMENT');
            self.sendNotification('CURRENT_PROFILE', 'empty');
        }
    }
});
