$(document).foundation();

// get elements ------------------------------

// functions ----------------------------------
function addInfo(inputName) {
    let input = document.getElementById("input-" + inputName);
    input.addEventListener("keypress", ($event) => {
        let to = document.getElementById('cv__' + inputName);
        to.textContent = $event.target.value;
    });

    input.addEventListener("blur", ($event) => {
        let to = document.getElementById('cv__' + inputName);
        to.textContent = $event.target.value;
    });
}
function addWebSite(inputName) {
    // get elements
    let input = document.getElementById("input-" + inputName);
    let button = document.getElementById("button-" + inputName + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();
        let divTag = document.createElement("div");

        // create <i class="fas fa-globe-europe"></i>
        let iTag = document.createElement("i");
        iTag.classList = "fas fa-globe-europe";

        // create link tag
        let linkTag = document.createElement("a");
        let linkText = document.createTextNode(input.value);

        linkTag.appendChild(linkText);
        linkTag.title = input.value;
        linkTag.href = input.value;

        // get the element to write inside
        let to = document.getElementById('cv__' + inputName);
        divTag.appendChild(iTag);
        divTag.appendChild(linkTag);
        to.appendChild(divTag);
    });
}

// events ----------------------------------
addInfo("name");
addInfo("job");
addInfo("phone");
addInfo("email");
addInfo("resume");
addWebSite("web-sites");



