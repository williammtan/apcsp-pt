// Script for typeWriter 

let speed = 100; /* The speed/duration of the effect in milliseconds */
let wait = 500; /* Wait time between the first and last name */
let i = 0;


function typeWriter(txt, _callback) {
    if (i < txt.length) {
        document.getElementById("main-header").innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => typeWriter(txt, _callback), speed);
    } else {
        _callback();
    }
}


function writeName() {
    fname = "William"
    lname = " Tan."

    // This can be programmed better, maybe a general function to print text with time intervals in between the words

    typeWriter(fname, () => {
        setTimeout(() => {
            i = 0;
            typeWriter(lname, () => {})
        }, wait)
    });
}

window.addEventListener('load', writeName)