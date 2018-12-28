let timeObj = new Date();
time = {
    hours : (timeObj.getHours()),
    minutes : (timeObj.getMinutes()),
    seconds : (timeObj.getSeconds())
}
let now = (time.hours + ":" + time.minutes + ":" + time.seconds);

//setting wakeuptime object from the html inputs
$('html').on('click', '#setAlarm', function() {
        let wakeUpHours = ($('#hour').val());
        let wakeUpMinutes = ($("#minute").val());
    if(wakeUpHours == null || wakeUpMinutes == null){
        alert("invalid time");
    } else {
        let formatHours = wakeUpHours < 10 ? "0" + wakeUpHours : wakeUpHours;
        alert( formatHours + ":" + wakeUpMinutes);
        };
});

//alarm sounded - reloads on click of cancel
let audio = new Audio('../sounds/Wake-up-sounds.mp3');
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

/* todo
logic for REM sleep cycles to sound alarm either side as well as wake up time
REM calculator
HTML/CSS tool bar
*/
