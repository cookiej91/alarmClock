//using an interval to keep checking the time and updating constantly
setInterval( _=>{
    let timeObj = new Date();
    time = {
        hours : checkTime(timeObj.getHours()),
        minutes : checkTime(timeObj.getMinutes()),
        seconds : checkTime(timeObj.getSeconds())
    }
    $("#clockDiv").html(time.hours + ":" + time.minutes + ":" + time.seconds);
},  10);

//check time and add zero infront of any minute/second that is less than 10
checkTime = (data)=>{
    return (data < 10 ? "0" + data : data);
}
