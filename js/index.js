   function on() {
        document.getElementById("overlay").style.display = "block";

        setTimeout(on, 3000);
    }

    function off() {
        document.getElementById("overlay").style.display = "none";

    }