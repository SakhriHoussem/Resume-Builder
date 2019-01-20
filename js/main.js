$(document).foundation();
window.onload = function () {
    // events ----------------------------------
    write("name");
    write("job");
    write("phone");
    write("email");
    write("resume");
};

// get elements ------------------------------

// functions ----------------------------------
function write($inputID) {
    let input = document.getElementById($inputID);
    input.addEventListener("blur", () => {
        let $to = document.getElementById('cv_'+$inputID);
        $to.textContent = input.value;
    });
}


