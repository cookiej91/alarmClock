//onclick setAlarm make noise when reaches that time
//after achieved write logic to go off for the correct cycle (from the time you set the alarm)
var audio = new Audio('Wake-up-sounds.mp3');
var timeObj = new Date();
time = {
    hours : (timeObj.getHours()),
    minutes : (timeObj.getMinutes()),
    seconds : (timeObj.getSeconds())
}

var now = (time.hours + ":" + time.minutes + ":" + time.seconds);

//setting wakeuptime object from the html inputs
$('html').on('click', '#setAlarm', function() {
        var wakeUpHours = ($('#hour').val());
        var wakeUpMinutes = ($("#minute").val());
    if(wakeUpHours == null || wakeUpMinutes == null){
        alert("invalid time");
    } else {
        let formatHours = wakeUpHours < 10 ? "0" + wakeUpHours : wakeUpHours;
        alert( formatHours + ":" + wakeUpMinutes);
        };
});

//alarm sounded - reloads on click of cancel
setInterval( _=>{
    if (($('#hour').val()) == time.hours && ($('#minute').val()) == time.minutes){
        audio.play();
        $('#setAlarm').text('Cancel');
        $('html').on('click', '#setAlarm', function() {
            audio.pause();
            location.reload();
        })
    }
}, 10);
