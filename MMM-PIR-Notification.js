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
        console.log('THIS IS A VERY LONG TESTTEXT WITH MULTIPLE LINES ' + this.name);
        Log.log('THIS IS A VERY LONG TESTTEXT WITH MULTIPLE LINES ' + this.name);
    },


    getDom: function () {
        var wrapper = document.createElement("div");
        return wrapper;
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "USER_MOVEMENT") {
            console.log(notification + ':::' + payload);
            if (payload) {
                this.sendNotification('CURRENT_PROFILE', 'default');
            } else {
                this.sendNotification('CURRENT_PROFILE', 'empty');
            }
        }
    },
});
