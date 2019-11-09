$( document ).ready(function() {
    $(document).foundation();
    $("form").parsley();

// get elements ------------------------------

// functions ----------------------------------
    function addInfo(inputName) {
        $('#input-' + inputName).parsley().on('field:success', function() {
            // In here, `this` is the parlsey instance of #some-input
            let to = document.getElementById('cv__' + inputName);
            to.textContent = this.value;
        });
    }

    function addWebSite(inputName) {
        // get elements
        let input = document.getElementById("input-" + inputName);
        let button = document.getElementById("button-" + inputName + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ($('#input-' + inputName).parsley().isValid() && input.value !== "" ) {

                let divTag = document.createElement("div");

                // create <i class="fas fa-globe-europe"></i>
                let iTag = document.createElement("i");
                iTag.classList.add("fas");
                iTag.classList.add("fa-globe-europe");

                // create link tag
                // get the element to write inside

                let linkTag = document.createElement("a");
                let linkText = document.createTextNode(input.value);

                linkTag.appendChild(linkText);
                linkTag.title = input.value;
                linkTag.href = input.value;
                let to = document.getElementById('cv__' + inputName);
                divTag.appendChild(iTag);
                divTag.appendChild(linkTag);
                to.appendChild(divTag);
            }
        });
    }

    function addSocialMedia(inputName) {
        // get elements
        let input = document.getElementById("input-" + inputName);
        let select = document.getElementById("select-" + inputName);
        let button = document.getElementById("button-" + inputName + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ($('#input-' + inputName).parsley().isValid() && $('#select-' + inputName).parsley().isValid() && input.value !== "") {

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
                let to = document.getElementById('cv__' + inputName);
                divTag.appendChild(iTag);
                divTag.appendChild(linkTag);
                to.appendChild(divTag);
            }
        });
    }

    function addSkill(inputName) {
        // get elements
        let input = document.getElementById("input-" + inputName);
        let select = document.getElementById("select-" + inputName + "_level");
        let button = document.getElementById("button-" + inputName + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ( $('#input-' + inputName).parsley().isValid() && $('#select-' + inputName + "_level").parsley().isValid() && input.value !== "") {

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
                let to = document.getElementById('cv__' + inputName + "s");
                divTag.appendChild(spanTag);
                divTag.appendChild(progressTag);
                to.appendChild(divTag);
            }
        });
    }

    function addLanguage(inputName) {
        // get elements
        let input = document.getElementById("input-" + inputName);
        let select = document.getElementById("select-" + inputName + "_level");
        let button = document.getElementById("button-" + inputName + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            // create <small> Level </small>
            if ( $('#input-' + inputName).parsley().isValid() && $('#select-' + inputName + "_level").parsley().isValid() && input.value !== "") {

                let smallTag = document.createElement("small");
                smallTag.textContent = " ( " + select.value + " ) ";

                // create <div> ... </div>
                let divTag = document.createElement("div");
                divTag.textContent = input.value;

                // get the element to write inside
                let to = document.getElementById('cv__' + inputName + "s");
                divTag.appendChild(smallTag);
                to.appendChild(divTag);
            }
        });
    }

    function addInterest(inputName) {
        // get elements
        let input = document.getElementById("input-" + inputName);
        let button = document.getElementById("button-" + inputName + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ( $('#input-' + inputName).parsley().isValid() && input.value !== "") {
                // create <div> ... </div>
                let divTag = document.createElement("div");
                divTag.textContent = input.value;

                // get the element to write inside
                let to = document.getElementById('cv__' + inputName + "s");
                to.appendChild(divTag);
            }
        });
    }

    function addExperience(blockID) {
        // get elements
        let roleInput = document.getElementById(blockID + "_role");
        let companyInput = document.getElementById(blockID + "_company");
        let fromInput = document.getElementById(blockID + "_from");
        let toInput = document.getElementById(blockID + "_to");
        let descriptionInput = document.getElementById(blockID + "_description");
        let tagsInput = document.getElementById(blockID + "_tags");
        let button = document.getElementById("button-" + blockID + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ( $("#" + blockID + " form").parsley().isValid()) {
                // create <h2> ... </h2>
                let h2Tag = document.createElement("h2");
                h2Tag.textContent = roleInput.value;

                // create <small> ... </small>
                let smallTag = document.createElement("small");
                smallTag.textContent = fromInput.value + " - "  + (toInput.value ===! "" ? toInput.value : "Current");
                h2Tag.appendChild(smallTag); // <h2> ... <small> ... </small> </h2>

                // create <h3> Company Name</h3>
                let h3Tag = document.createElement("h3");
                h3Tag.textContent = companyInput.value;

                // create <p> ... </p>
                let pTags = document.createElement("p");
                // create <div class="tags"> ... </div>
                let tagsBlock = document.createElement("div");
                pTags.textContent = descriptionInput.value;
                let tags  = tagsInput.value.split(",");
                tagsBlock.classList.add("tags");
                for (let i=0; i<tags.length; i++) {
                    // <span class="label">tag[i]</span>
                    let spanTag = document.createElement("span");
                    spanTag.classList.add("label");
                    if (tags[i]) {
                        spanTag.textContent = tags[i];
                        tagsBlock.appendChild(spanTag);
                    }
                }

                // create <div class="cv__..." > ... </div>
                let divTag = document.createElement("div");
                divTag.classList.add("cv__" + blockID);
                divTag.appendChild(h2Tag);
                divTag.appendChild(h3Tag);
                divTag.appendChild(pTags);
                divTag.appendChild(tagsBlock);
                // get the element to write inside
                let to = document.getElementById('cv__' + blockID + "s");
                to.appendChild(divTag);
            } else {
                $("#" + blockID + " form").parsley().validate();
            }
        });
    }

    function addProject(blockID) {
        // get elements
        let nameInput = document.getElementById(blockID + "_name");
        let linkInput = document.getElementById(blockID + "_link");
        let fromInput = document.getElementById(blockID + "_from");
        let toInput = document.getElementById(blockID + "_to");
        let descriptionInput = document.getElementById(blockID + "_description");
        let tagsInput = document.getElementById(blockID + "_tags");
        let button = document.getElementById("button-" + blockID + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ( $("#" + blockID + " form").parsley().isValid()) {

                // create <h2> ... </h2>
                let h2Tag = document.createElement("h2");
                h2Tag.textContent = nameInput.value;

                // create <small> ... </small>
                let smallTag = document.createElement("small");
                smallTag.textContent = fromInput.value + " - " + (toInput.value ===! "" ? toInput.value : "Current");
                h2Tag.appendChild(smallTag); // <h2> ... <small> ... </small> </h2>

                // create <h3> ... </h3>
                let h3Tag = document.createElement("h3");
                h3Tag.textContent = linkInput.value;

                // create <p> ... </p>
                let pTags = document.createElement("p");
                pTags.textContent = descriptionInput.value;

                // create <div class="tags"> ... </div>
                let tagsBlock = document.createElement("div");
                tagsBlock.classList.add("tags");
                let tags = tagsInput.value.split(",");
                for (let i = 0; i < tags.length; i++) {
                    // <span class="label">tag[i]</span>
                    let spanTag = document.createElement("span");
                    spanTag.classList.add("label");
                    if (tags[i]) {
                        spanTag.textContent = tags[i];
                        tagsBlock.appendChild(spanTag);
                    }
                }

                // create <div class="cv__..." > ... </div>
                let divTag = document.createElement("div");
                divTag.classList.add("cv__" + blockID);
                divTag.appendChild(h2Tag);
                divTag.appendChild(h3Tag);
                divTag.appendChild(pTags);
                divTag.appendChild(tagsBlock);

                // get the element to write inside
                let to = document.getElementById('cv__' + blockID + "s");
                to.appendChild(divTag);
            } else {
                $("#" + blockID + " form").parsley().validate();
            }
        });
    }

    function addEducation(blockID) {
        // get elements
        let degreeInput = document.getElementById(blockID + "_degree");
        let schoolInput = document.getElementById(blockID + "_school");
        let fromInput = document.getElementById(blockID + "_from");
        let toInput = document.getElementById(blockID + "_to");
        let descriptionInput = document.getElementById(blockID + "_description");
        let button = document.getElementById("button-" + blockID + "_add");

        button.addEventListener("click", ($event) => {
            $event.preventDefault();
            if ( $("#" + blockID + " form").parsley().isValid()) {
                // create <h2> ... </h2>
                let h2Tag = document.createElement("h2");
                h2Tag.textContent = degreeInput.value;

                // create <small> ... </small>
                let smallTag = document.createElement("small");

                smallTag.textContent = fromInput.value + " - "  + (toInput.value ===! "" ? toInput.value : "Current");
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
            } else {
                $("#" + blockID + " form").parsley().validate();
            }
        });
    }

    function displayTheRequire(cssClassName) {
        let inputs = document.querySelectorAll("[required]");
        for (let i=0 ; i<inputs.length; i++) {
            let name = document.querySelector('label[for=' + inputs[i].id + ']');
            if ( name ) {
                let spanTag = document.createElement("span");
                spanTag.textContent = " * ";
                spanTag.classList.add(cssClassName);
                name.appendChild(spanTag);
            }
        }
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
    displayTheRequire("text-danger");
});


