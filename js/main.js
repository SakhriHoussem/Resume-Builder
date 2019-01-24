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
        let to = document.getElementById('cv__' + inputID);
        divTag.appendChild(iTag);
        divTag.appendChild(linkTag);
        to.appendChild(divTag);
    });
}

function addSocialMedia(inputID) {
    // get elements
    let input = document.getElementById("input-" + inputID);
    let select = document.getElementById("select-" + inputID);
    let button = document.getElementById("button-" + inputID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();
        let divTag = document.createElement("div");

        // create <i class="fas"> &#x....; </i>
        let iTag = document.createElement("i");
        iTag.classList.add("fab");
        iTag.textContent = select.value;

        // create link tag
        let linkTag = document.createElement("a");
        let linkText = document.createTextNode(input.value);

        linkTag.appendChild(linkText);
        linkTag.title = input.value;
        linkTag.href = input.value;

        // get the element to write inside
        let to = document.getElementById('cv__' + inputID);
        divTag.appendChild(iTag);
        divTag.appendChild(linkTag);
        to.appendChild(divTag);
    });
}

function addSkill(inputID
    // get elements
    let input = document.getElementById("input-" + inputID);
    let select = document.getElementById("select-" + inputID + "_level");
    let button = document.getElementById("button-" + inputID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();
        let divTag = document.createElement("div");

        // create <progress class="secondary float-right" max="100" value="85"></progress>
        let progress = document.createElement("progress");
        progress.classList.add("secondary");
        progress.classList.add("float-right");
        progress.max = 100;
        progress.value = select.value;

        // create <span> ... </span>
        let spanTag = document.createElement("span");
        spanTag.textContent = input.value;

        // get the element to write inside
        let to = document.getElementById('cv__' + inputID + "s");
        divTag.appendChild(spanTag);
        divTag.appendChild(progress);
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
addSocialMedia("social-media");
addSkill("skill");



