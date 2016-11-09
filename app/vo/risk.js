"use strict";
var Risk = (function () {
    function Risk(riskId, possibility, impact, threshold, creatorName, followerName, description, riskType, projectId) {
        this.riskId = riskId;
        this.possibility = possibility;
        this.impact = impact;
        this.threshold = threshold;
        this.creatorName = creatorName;
        this.followerName = followerName;
        this.description = description;
        this.riskType = riskType;
        this.projectId = projectId;
    }
    return Risk;
}());
exports.Risk = Risk;
//# sourceMappingURL=risk.js.map