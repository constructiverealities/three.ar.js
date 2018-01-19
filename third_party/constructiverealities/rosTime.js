Date.prototype.getUnixTime = function () {
    return this.getTime() / 1000 | 0
};

if (!Date.now) {
    Date.now = function () {
        return new Date();
    };
}

var getRosTimeComponent = function () {
    //todo write the conversion process to ROS/python-esque time
    var nowTime = performance.now(),
        nowParts = nowTime.toString().split("."),
        unixTime = new Date(performance.timing.navigationStart + parseInt(nowParts[0])).getUnixTime();
    // console.log(unixTime);
    return {
        sec: unixTime,
        nsec: parseInt(nowParts[1])
    }
};

console.log("rosTime Loaded...");