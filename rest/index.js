"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
function isInstalled(id) {
    try {
        require(id);
        return true;
    }
    catch (error) {
        return false;
    }
}
if (!isInstalled("stormbeatz-lavaclient"))
    throw new Error("Please install Lavaclient.");
__export(require("./Plugin"));
__export(require("./RESTManager"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTLFdBQVcsQ0FBQyxFQUFVO0lBQzdCLElBQUk7UUFDRixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQztLQUNiO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQztBQUVELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRTlFLDhCQUF5QjtBQUN6QixtQ0FBOEIifQ==