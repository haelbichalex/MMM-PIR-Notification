/* global Module */

/* Magic Mirror
 * Module: {{MODULE_NAME}}
 *
 * By {{AUTHOR_NAME}}
 * {{LICENSE}} Licensed.
 */

Module.register("MMM-PIR-Notification", {

    defaults: {
        pin: 4,
        timeoutDelay: 5000,
    },

    requiresVersion: "2.1.0", // Required version of MagicMirror

    start: function () {
        this.sendSocketNotification('CONFIG', this.config);
        Log.info('Starting module: ' + this.name);
    },


    getDom: function () {
        var wrapper = document.createElement("div");
        return wrapper;
    },

    // socketNotificationReceived from helper
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
