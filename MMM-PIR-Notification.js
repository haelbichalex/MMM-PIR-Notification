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
        Log.info('THIS IS A VERY LONG TESTTEXT WITH MULTIPLE LINES Starting module: ' + this.name);
    },


    socketNotificationReceived: function (notification, payload) {
        if (notification === "USER_MOVEMENT") {
            Log.info(notification + 'LOLOLOOLOLOLO' + payload);
            console.log(notification + 'LOLOLOOLOLOLO' + payload);
            if (payload) {
                this.sendNotification('CURRENT_PROFILE', 'default');
            } else {
                this.sendNotification('CURRENT_PROFILE', 'empty');
            }
        }
    },
});
