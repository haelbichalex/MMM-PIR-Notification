/* global Module */

/* Magic Mirror
 * Module: MMM-PIR-Notification
 *
 * By Alexander Haelbich
 * MIT Licensed.
 */

Module.register("MMM-PIR-Notification", {

    defaults: {
        pin: 4,
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
});
