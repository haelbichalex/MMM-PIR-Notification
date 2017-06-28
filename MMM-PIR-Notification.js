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
		timeout: 5000,
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
        Log.info('Starting module: ' + this.name);
	},


	getDom: function() {
		var wrapper = document.createElement("div");
		return wrapper;
	},

	// socketNotificationReceived from helper
	socketNotificationReceived: function (notification, payload) {
		if(notification === "PIR_MOTION_DETECTED") {
			this.dataNotification = payload;
		}
	},
});
