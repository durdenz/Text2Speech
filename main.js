let btn = document.querySelector('.btn');

btn.addEventListener('click', (ea) => {
    btn.classList.add('fade');

    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.addEventListener('result', (e) => {
        document.querySelector('.text').value = e.results[0][0].transcript;
        btn.classList.remove('fade');
    });
});