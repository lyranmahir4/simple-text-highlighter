//remove the event listener
//document.addEventListener("mouseup", highlight);

function highlight() {
    if (window.getSelection) {
        let bgColor = localStorage.getItem("bgColor");
        let textColor = localStorage.getItem("textColor");
        let sel = window.getSelection();
        let range = sel.getRangeAt(0);
        let newNode = document.createElement("span");
        newNode.style.backgroundColor = bgColor;
        newNode.style.color = textColor;
        range.surroundContents(newNode);
    }
}
