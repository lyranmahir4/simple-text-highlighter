const bgColorInput = document.getElementById('bg-color');
const textColorInput = document.getElementById('text-color');
const highlightButton = document.getElementById('highlight-button');

highlightButton.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.executeScript(tabs[0].id, {
            code: `localStorage.setItem("bgColor", "${bgColorInput.value}");
                   localStorage.setItem("textColor", "${textColorInput.value}");
                   highlight();`
        });
    });
});
