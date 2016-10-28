var running = 0;
var time = 0;

function increment(){
    if(running == 1){
        setTimeout(function(){

            time++;
            let mins = Math.floor((time / 10) / 60);
            let secs = Math.floor(time/10);
            let tenths = time % 10;
            console.log(mins);
            console.log(secs);
            console.log(tenths);

            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10){
                secs = "0" + secs;
            }
            $("#output").html(mins + ":" + secs + ":" + "0" + tenths);

            increment();
        }, 100);
    }
}

$("#startPause").click(function() {
    if (running == 0) {
        running = 1;
        increment();
        $("#startPause").html("Pause");
    } else {
        running = 0;
        $("#startPause").html("Resume");
    }
});

$("#reset").click(function(){
    running = 0;
    timer = 0;
    $("#output").html("00:00:00");
    $("#startPause").html("Start");

});
