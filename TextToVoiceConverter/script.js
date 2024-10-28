function convertTextToSpeech() {
    const text = document.getElementById("textInput").value;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}