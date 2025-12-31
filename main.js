let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var currentPage = "landing"
var progressBar = document.getElementById("bar");

function setUpAboutButtons() {
    var aboutButtonContainer = document.getElementById("about-buttons");
    var aboutButtons = aboutButtonContainer.querySelectorAll(".button");
    var aboutPages = document.querySelectorAll("#about .page");

    for (let i = 0; i < aboutButtons.length; i++) {
        aboutButtons[i].addEventListener("click", () => {

            for (let j = 0; j < aboutPages.length; j++) {
                if (j == i) {
                    aboutButtons[j].classList.add("selected");
                    aboutPages[j].classList.add("visible");
                }
                else {
                    aboutPages[j].classList.remove("visible");
                    aboutButtons[j].classList.remove("selected");
                }
            }
        })
    }
}

document.addEventListener("scrollend", () => {
    var panels = document.getElementsByClassName("panel")
    const st = Math.round(window.pageYOffset || document.documentElement.scrollTop);

    if (Math.abs(st - prevScrollTop) < 80) {
        scrollToPage(currentPage)
        return
    }

    if (st > prevScrollTop) {
        // downscroll: go to first panel >= st
        for (let i = 0; i < panels.length; i++) {
            if (panels[i].offsetTop == st) {
                updateProgressBar(panels[i].id)
                break
            }
            else if (panels[i].offsetTop > st) {
                scrollToPage(panels[i].id)
                break
            }
        }
    }
    else if (st < prevScrollTop) {
        // upscroll: go to first panel <= st
        for (let i = 0; i < panels.length; i++) {
            if (panels[i].offsetTop == st) {
                updateProgressBar(panels[i].id)
                break
            }
            else if (panels[i].offsetTop > st) {
                scrollToPage(panels[i - 1].id)
                break
            }
        }
    }

    prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
})

function scrollToPage(pageName) {
    currentPage = pageName
    document.getElementById(pageName).scrollIntoView();
    updateProgressBar(pageName)
}

var progressBarButtons = document.getElementsByClassName("progress-link")
function updateProgressBar(pageName) {
    var passed = (pageName != "landing")
    for (let i = 0; i < progressBarButtons.length; i++) {
        console.log("i:", i, "passed:", passed)
        if (passed) {
            progressBarButtons[i].classList.add("passed")
        }
        else {
            progressBarButtons[i].classList.remove("passed")
        }
        if (progressBarButtons[i].innerHTML.toLowerCase() == pageName) {
            passed = false
        }
    }

    if (pageName == "landing") {
        progressBar.style.width = 0;
        return
    }


    progressBar.style.width = document.getElementById("progress-" + pageName).getBoundingClientRect().right.toString() + "px"
}

function setUpProgressBar() {
    document.getElementsByClassName("panel")

    var nextButtons = document.getElementsByClassName("next");
    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", () => {
            var nextPageName = nextButtons[i].getAttribute('href').slice(1)
            currentPage = nextPageName
            updateProgressBar(nextPageName)
        });
    }

    var barButtons = document.querySelectorAll("#progress .links p")
    for (let i = 0; i < barButtons.length; i++) {
        barButtons[i].addEventListener("click", () => {
            scrollToPage(barButtons[i].innerHTML.toLowerCase())
        })
    }
}

setUpAboutButtons();
setUpProgressBar();

if (window.location.hash) {
    updateProgressBar(window.location.hash.substring(1))
}