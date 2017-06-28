/* global Module */

/* Magic Mirror
 * Module: MMM-PIR-Notification
 *
 * By Alexander Haelbich
 * MIT Licensed.
 */

Module.register("MMM-PIR-Notification", {

    defaults: {
        pin: 17,
        timeoutDelay: 5000,
    },

    start: function () {
        this.sendSocketNotification('CONFIG', this.config);
        Log.info('Starting module: ' + this.name);
    },


    getDom: function () {
        var wrapper = document.createElement("div");
        return wrapper;
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "USER_MOVEMENT") {
            Log.info(notification + ':::' + payload);
            if (payload) {
                this.sendNotification('CURRENT_PROFILE', 'default');
            } else {
                this.sendNotification('CURRENT_PROFILE', 'empty');
            }
        }
    },
});
