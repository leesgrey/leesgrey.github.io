let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var currentPage = "landing"
var progressBar = document.getElementById("bar");
var cursor = document.getElementById("cursor");
var cursorTail = document.getElementById("cursor-tail");

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

var clickables = document.getElementsByClassName("clickable")
for (let i = 0; i < clickables.length; i++) {
    clickables[i].addEventListener("mouseenter", () => {
        cursorTail.classList.add("point")
    })
    clickables[i].addEventListener("mouseleave", () => {
        cursorTail.classList.remove("point")
    })
    clickables[i].addEventListener("mousedown", () => {
        cursorTail.classList.add("click")
    })
    clickables[i].addEventListener("mouseup", () => {
        cursorTail.classList.remove("click")
    })
}


document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px"
    cursorTail.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
    cursorTail.style.left = e.pageX + "px"
})

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

    var nextButtons = document.getElementsByClassName("navbutton");
    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", (e) => {
            e.preventDefault();
            var nextPageName = nextButtons[i].getAttribute('href').slice(1)
            currentPage = nextPageName
            scrollToPage(nextPageName)
        });
    }

    var barButtons = document.querySelectorAll("#progress .links p")
    for (let i = 0; i < barButtons.length; i++) {
        barButtons[i].addEventListener("click", () => {
            scrollToPage(barButtons[i].innerHTML.toLowerCase())
        })
    }
}

var emailLink = document.getElementsByClassName("copy")[0]
var copyNotif = document.getElementById("copy-notif");
emailLink.addEventListener("click", () => {
    navigator.clipboard.writeText("greysv.lee@gmail.com")
        .then(() => {
            copyNotif.style.maxWidth = "10rem"
            copyNotif.style.padding = "0 0.5rem 0"
            setTimeout(() => {
                copyNotif.style.maxWidth = "0"
                copyNotif.style.padding = "0"
            }, 3000)
        })
    }
)



setUpAboutButtons();
setUpProgressBar();