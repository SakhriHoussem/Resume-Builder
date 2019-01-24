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

function addSkill(inputID) {
    // get elements
    let input = document.getElementById("input-" + inputID);
    let select = document.getElementById("select-" + inputID + "_level");
    let button = document.getElementById("button-" + inputID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();
        let divTag = document.createElement("div");

        // create <progress class="secondary float-right" max="100" value="85"></progress>
        let progressTag = document.createElement("progress");
        progressTag.classList.add("secondary");
        progressTag.classList.add("float-right");
        progressTag.max = 100;
        progressTag.value = select.value;

        // create <span> ... </span>
        let spanTag = document.createElement("span");
        spanTag.textContent = input.value;

        // get the element to write inside
        let to = document.getElementById('cv__' + inputID + "s");
        divTag.appendChild(spanTag);
        divTag.appendChild(progressTag);
        to.appendChild(divTag);
    });
}

function addLanguage(inputID) {
    // get elements
    let input = document.getElementById("input-" + inputID);
    let select = document.getElementById("select-" + inputID + "_level");
    let button = document.getElementById("button-" + inputID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();
        // create <small> Level </small>
        let smallTag = document.createElement("small");
        smallTag.textContent = " ( " + select.value + " ) ";

        // create <div> ... </div>
        let divTag = document.createElement("div");
        divTag.textContent = input.value;

        // get the element to write inside
        let to = document.getElementById('cv__' + inputID + "s");
        divTag.appendChild(smallTag);
        to.appendChild(divTag);
    });
}

function addInterest(inputID) {
    // get elements
    let input = document.getElementById("input-" + inputID);
    let button = document.getElementById("button-" + inputID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();

        // create <div> ... </div>
        let divTag = document.createElement("div");
        divTag.textContent = input.value;

        // get the element to write inside
        let to = document.getElementById('cv__' + inputID + "s");
        to.appendChild(divTag);
    });
}

function addExperience(blockID) {
    // get elements
    let roleInput = document.getElementById(blockID + "_role");
    let fromInput = document.getElementById(blockID + "_from");
    let toInput = document.getElementById(blockID + "_to");
    let descriptionInput = document.getElementById(blockID + "_description");
    let button = document.getElementById("button-" + blockID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();

        // create <h2> ... </h2>
        let h2Tag = document.createElement("h2");
        h2Tag.textContent = roleInput.value;

        // create <small> ... </small>
        let smallTag = document.createElement("small");
        smallTag.textContent = fromInput.value + " - "  + toInput.value;
        h2Tag.appendChild(smallTag); // <h2> ... <small> ... </small> </h2>

        // create <p> ... </p>
        let pTags = document.createElement("p");
        pTags.textContent = descriptionInput.value;

        // create <div class="cv__..." > ... </div>
        let divTag = document.createElement("div");
        divTag.classList.add("cv__" + blockID);
        divTag.appendChild(h2Tag);
        divTag.appendChild(pTags);

        // get the element to write inside
        let to = document.getElementById('cv__' + blockID + "s");
        to.appendChild(divTag);
    });
}

function addProject(blockID) {
    // get elements
    let nameInput = document.getElementById(blockID + "_name");
    let linkInput = document.getElementById(blockID + "_link");
    let fromInput = document.getElementById(blockID + "_from");
    let toInput = document.getElementById(blockID + "_to");
    let descriptionInput = document.getElementById(blockID + "_description");
    let button = document.getElementById("button-" + blockID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();

        // create <h2> ... </h2>
        let h2Tag = document.createElement("h2");
        h2Tag.textContent = nameInput.value;

        // create <small> ... </small>
        let smallTag = document.createElement("small");
        smallTag.textContent = fromInput.value + " - "  + toInput.value;
        h2Tag.appendChild(smallTag); // <h2> ... <small> ... </small> </h2>

        // create <h3> ... </h3>
        let h3Tag = document.createElement("h3");
        h3Tag.textContent = linkInput.value;

        // create <p> ... </p>
        let pTags = document.createElement("p");
        pTags.textContent = descriptionInput.value;

        // create <div class="cv__..." > ... </div>
        let divTag = document.createElement("div");
        divTag.classList.add("cv__" + blockID);
        divTag.appendChild(h2Tag);
        divTag.appendChild(h3Tag);
        divTag.appendChild(pTags);

        // get the element to write inside
        let to = document.getElementById('cv__' + blockID + "s");
        to.appendChild(divTag);
    });
}

function addEducation(blockID) {
    // get elements
    let titleInput = document.getElementById(blockID + "_title");
    let schoolInput = document.getElementById(blockID + "_school");
    let fromInput = document.getElementById(blockID + "_from");
    let toInput = document.getElementById(blockID + "_to");
    let descriptionInput = document.getElementById(blockID + "_description");
    let button = document.getElementById("button-" + blockID + "_add");

    button.addEventListener("click", ($event) => {
        $event.preventDefault();

        // create <h2> ... </h2>
        let h2Tag = document.createElement("h2");
        h2Tag.textContent = titleInput.value;

        // create <small> ... </small>
        let smallTag = document.createElement("small");
        smallTag.textContent = fromInput.value + " - "  + toInput.value;
        h2Tag.appendChild(smallTag); // <h2> ... <small> ... </small> </h2>

        // create <h3> ... </h3>
        let h3Tag = document.createElement("h3");
        h3Tag.textContent = schoolInput.value;

        // create <p> ... </p>
        let pTags = document.createElement("p");
        pTags.textContent = descriptionInput.value;

        // create <div class="cv__..." > ... </div>
        let divTag = document.createElement("div");
        divTag.classList.add("cv__" + blockID);
        divTag.appendChild(h2Tag);
        divTag.appendChild(h3Tag);
        divTag.appendChild(pTags);

        // get the element to write inside
        let to = document.getElementById('cv__' + blockID + "s");
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
addLanguage("language");
addInterest("interest");
addExperience("experience");
addProject("project");
addEducation("education");



