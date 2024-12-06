const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");
const modeParam = para.get("mode");

const finishedText = document.getElementById("finishedText");

document.addEventListener('DOMContentLoaded', () => {
    finishedText.textContent = "Finished " + exerciseParam + "!";

    // Buttons
    document.querySelector('#startRedo').addEventListener('click', () => {
        StartRedo();
    });

    document.querySelector('#startRedoCustomize').addEventListener('click', () => {
        StartRedoCustomize();
    });

    document.querySelector('#toHomePage').addEventListener('click', () => {
        HomePage();
    });
});

const StartRedo = () => {
    window.location = './learn.html?exercise=' + exerciseParam + '&mode=' + modeParam;
}

const StartRedoCustomize = () => {
    window.location = './customize.html?exercise=' + exerciseParam;
}

const HomePage = () => {
    window.location = './index.html';
}