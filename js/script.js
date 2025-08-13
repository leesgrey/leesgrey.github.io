console.log("hi")

const popupWindow = document.getElementById("popup");
const popupHeader = document.getElementById("popup-header");

var dragOffset

popupHeader.addEventListener("mousedown", (e) => {
    // get window offset from mouse
    const rect = popupWindow.getBoundingClientRect();
    dragOffset = [e.clientY - rect.top, e.clientX - rect.left]
    popupHeader.style.cursor = "grabbing"

    document.addEventListener("mousemove", onMouseMove)
})

function onMouseMove(e) {
    popupWindow.style.top = e.clientY - dragOffset[0] + "px"
    popupWindow.style.left = e.clientX - dragOffset[1] + "px"
}

popupHeader.addEventListener("mouseup", (e) => {
    document.removeEventListener("mousemove", onMouseMove)
    popupHeader.style.cursor = "pointer"
})