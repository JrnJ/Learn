const para = new URLSearchParams(window.location.search);
const exerciseParam = para.get("exercise");

const StartWithSettings = () => {
    const modeValue = document.querySelector('input[name="langMode"]:checked').value;
    window.location = './learn.html?exercise=' + exerciseParam + '&mode=' + modeValue;
}