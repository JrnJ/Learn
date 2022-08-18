const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");
const modeParam = para.get("mode");

const finishedText = document.getElementById("finishedText");

const StartRedo = () => {
    window.location = './learn.html?exercise=' + exerciseParam + '&mode=' + modeParam;
}

const StartRedoCustomize = () => {
    window.location = './customize.html?exercise=' + exerciseParam;
}

const OnWindowLoaded = () => {
    finishedText.textContent = "Finished " + exerciseParam + "!";
}

window.onload = OnWindowLoaded();