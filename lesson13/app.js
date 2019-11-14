//Ваша задача написать приложение по распознаванию речи.
// Вы говорите, а приложение отрисовывает на странице то, что вы сказали.

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let voiceList =[];

const button = document.querySelector('#start');
const text = document.querySelector('[name="text"]');
const selectVoice = document.querySelector('[name="voice"]');

function generateVoice() {
    voiceList = speechSynthesis.getVoices();
    const option = voiceList.map(voice => `<option value='${voice.lang}'>${voice.name}</option>`).join('');
    selectVoice.insertAdjacentHTML('beforeend', option);
}

 selectVoice.addEventListener('change', function (){
     recognition.lang = selectVoice.value;
 });

button.addEventListener('click', function () {
    recognition.start();
    text.value='';
});

recognition.onspeechend =() => recognition.stop();
recognition.onerror = (event) => {console.log('ERROR', event.error)};

recognition.onresult = (event) => {
    let newText = event.results[0][0].transcript;
    text.value =  newText;
};

speechSynthesis.addEventListener('voiceschanged', generateVoice);
