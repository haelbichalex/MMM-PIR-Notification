/* Magic Mirror
 * Node Helper: {{MODULE_NAME}}
 *
 * By {{AUTHOR_NAME}}
 * {{LICENSE}} Licensed.
 */

const NodeHelper = require("node_helper");
const Gpio = require('pi-gpio');

module.exports = NodeHelper.create({

    start: function () {
        var self = this;
        console.log("Starting node helper for: " + self.name);
        this.started = false;
    },
});
