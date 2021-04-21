if (document.getElementById('countdownTimer')) {
    var min = document.getElementById('countdownTimer').getAttribute('data-minutes');
    var sec = document.getElementById('countdownTimer').getAttribute('data-seconds');

    function countDown() {
        sec--;
        if (sec == -01) {
            sec = 59;
            min = min - 1;
        } else {
            min = min;
        }

        if (sec <= 9) {
            sec = "0" + sec;
        }

        time = (min <= 9 ? "" + min : min) + ":" + sec;

        if (document.getElementById) {
            document.getElementById('countdownTimer').innerHTML = time;
        }

        SD = window.setTimeout("countDown();", 1000);
        if (min == '00' && sec == '00') {
            sec = "00";
            window.clearTimeout(SD);
        }
    }

    window.onload = countDown;
}