const display = document.getElementById('display');

const numberbuttons = document.querySelectorAll("[data-number]");

const clearbutton = document.querySelector("[data-action='clear']");

const deletebutton = document.querySelector("[data-action='delete']");

const alphabetsbutton = document.querySelector("[data-action='Alpabets']");


numberbuttons.forEach(function(button) {
    button.addEventListener("click", function() {
        
        const number = button.dataset.number;   

        if(display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        }
    });
});


clearbutton.addEventListener("click", function() {
    display.value = "0";
});


deletebutton.addEventListener("click", function() {
    if(display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
});

alphabetsbutton.addEventListener("click", function() {
    display.value = "TS";
});