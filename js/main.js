$(document).foundation();

// get elements ------------------------------

// functions ----------------------------------
function addInfo(inputID) {
    let input = document.getElementById("input-" + inputID);
    input.addEventListener("keypress", () => {
        let to = document.getElementById('cv__' + inputID);
        to.textContent = input.value;
    });

    input.addEventListener("blur", () => {
        let to = document.getElementById('cv__' + inputID);
        to.textContent = input.value;
    });
}

function addWebSite(inputID) {
    // get elements
    let input = document.getElementById("input-" + inputID);
    let button = document.getElementById("button-" + inputID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();
        let divTag = document.createElement("div");

        // create <i class="fas fa-globe-europe"></i>
        let iTag = document.createElement("i");
        iTag.classList.add("fas");
        iTag.classList.add("fa-globe-europe");

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



