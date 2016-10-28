//onclick setAlarm make noise when reaches that time
//after achieved write logic to go off for the correct cycle (from the time you set the alarm)
var timeObj = new Date();
time = {
    hours : (timeObj.getHours()),
    minutes : (timeObj.getMinutes()),
    seconds : (timeObj.getSeconds())
}

var now = (time.hours + ":" + time.minutes + ":" + time.seconds);

//need a way to parse information from setLater.html into a time object

//setting wakeuptime object from the html inputs
$('html').on('click', '#setAlarm', function() {
    var wakeUpHours = ($('#hour').val());
    var wakeUpMinutes = ($("#minute").val());
    var amorpm = ($("#ampm").val());
    if(wakeUpHours == null || wakeUpMinutes == null){
        alert("invalid time");
    } else {
        let formatHours = wakeUpHours < 10 ? "0" + wakeUpHours : wakeUpHours;
        alert( formatHours + ":" + wakeUpMinutes + amorpm );

    }
    alert( hours + ":" + minutes);
});

// //time that the alarm will go off
// var alarmTime = (wakeUpTime.hours + ":" + wakeUpTime.minutes);
//
// //if now == wakeUpTime { use sound to wake up }
//
if (time.hours === wakeUpTime.hours && time.minutes === wakeUpTime.minutes){
    Alert("Wake up");
};
