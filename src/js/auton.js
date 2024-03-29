import { goPage } from "./script.js"
import { saveToLocalStorage, loadFromLocalStorage, setCallback } from "./field.js"
let isTimerSet = false;

function formIsValid() {
    if (window.localStorage.getItem("attemptedPlace") == null || !Boolean) {
        alert("Congradulations, you broke the code. You diserve an award. The awrd is jail time. Potentially the death penalty. Depends on Colins mood today")
        return false;
    }
    if (window.localStorage.getItem("attemptedPlace") == null || !Boolean) {
        alert("Congradulations, you broke the code. You diserve an award. The awrd is jail time. Potentially the death penalty. Depends on Colins mood today")
        return false;
    }
    if (window.localStorage.getItem("leftCom") == null || !Boolean) {
        alert("Congradulations, you broke the code. You diserve an award. The awrd is jail time. Potentially the death penalty. Depends on Colins mood today")
        return false;
    }
    return true;
}

addEventListener('load', function () {
    document.getElementById("back").addEventListener("click", () => {
        saveToLocalStorage("auton")
        goPage("prematch");
    });
    document.getElementById("teleop").addEventListener("click", () => {
        nextPage()
    });
    // Yes, this is a little bit of a hack, but it works
    this.setTimeout(() => {
        loadFromLocalStorage("auton");
    }, 500)
    for( const icon of document.getElementsByClassName("icon")) {
        icon.addEventListener('click', () => {
            if(isTimerSet) {
                return;
            }
            isTimerSet = true;
            setTimeout(sendAlert, 15 * 1000) // 15 seconds (aka auton length)
        })
    }
    if(!isTimerSet) {
        setTimeout(remind, 45 * 1000);
    }
});

function nextPage() {
    saveToLocalStorage("auton")
    window.localStorage.setItem("moved", document.getElementById("moved").classList.contains("checked"))
    window.localStorage.setItem("left_community", document.getElementById("left_community").classList.contains("checked"))
    goPage("teleop");
}
function remind() {
    if(isTimerSet) {
        return;
    }
    if(!sendAlert()) {
        setTimeout(remind, 45 * 1000);
    }
}

function sendAlert() {
    if(confirm('Do you mean to still be on this screen? If so, press cancel, otherwise press ok to be sent to the next page.')) {
        nextPage();
    }
}
