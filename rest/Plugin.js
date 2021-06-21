"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lavaclient_1 = require("stormbeatz-lavaclient");
const RESTManager_1 = require("./RESTManager");
class RESTPlugin extends lavaclient_1.Plugin {
    constructor(rest) {
        super();
        this.rest = rest ?? RESTManager_1.REST;
    }
    init() {
        const rest = this.rest;
        lavaclient_1.Structures.extend("socket", (socket) => class Socket extends socket {
            constructor() {
                super(...arguments);
                this.rest = new rest(this);
            }
        });
    }
}
exports.RESTPlugin = RESTPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFnRDtBQUNoRCwrQ0FBcUM7QUFFckMsTUFBYSxVQUFXLFNBQVEsbUJBQU07SUFTcEMsWUFBbUIsSUFBaUI7UUFDbEMsS0FBSyxFQUFFLENBQUE7UUFFUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxrQkFBSSxDQUFDO0lBQzNCLENBQUM7SUFFTSxJQUFJO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV2Qix1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNyQyxNQUFNLE1BQU8sU0FBUSxNQUFNO1lBQTNCOztnQkFDUyxTQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQXZCRCxnQ0F1QkMifQ==