let clicks = 0;
let treesLeft = 13.505;
var setback = 0
function click1234() {
        if (setback == 1) {
                clicks += 0.001;
                document.getElementById("clicks").innerHTML = (Math.round(clicks * 100) / 100);
                document.getElementById("thousands").innerHTML = ("k");
            }
        else {
            if (clicks >= 999) {
                clicks = 1
                setback = 1
                document.getElementById("clicks").innerHTML = clicks;
                document.getElementById("thousands").innerHTML = "k";
                }
                else {
                    clicks += 1;
                    document.getElementById("clicks").innerHTML = clicks;
                }
            
        }
        console.log("4");
        treesLeft -= 0.001;
        document.getElementById("forestcount").innerHTML = Math.round(treesLeft * 10) / 10;
    }