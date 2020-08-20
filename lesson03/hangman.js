document.addEventListener('DOMContentLoaded', function () {
    let password = 'Takie tam';
    password = password.toUpperCase();
    let encryptedPassword = '';

    const alphabet = document.getElementById('alphabet');
    const word = document.getElementById('word');
    const img = document.getElementById('hang');
    let img_count = 0;

    const letters = [
        'A',
        'Ą',
        'B',
        'C',
        'Ć',
        'D',
        'E',
        'Ę',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'Ł',
        'M',
        'N',
        'Ń',
        'O',
        'Ó',
        'P',
        'Q',
        'R',
        'S',
        'Ś',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'Ż',
        'Ź',
    ];

    function checkLetter(event) {
        if (img_count === 9) {
            event.target.removeEventListener('click', checkLetter);
            return 'stop';
        }
        let flag = 0;
        for (let i = 0; i < password.length; i++) {
            let letter = event.path[0].innerText;
            if (letter === password[i]) {
                encryptedPassword = encryptedPassword.substring(0, i) + letter + encryptedPassword.substring(i + 1);
                word.innerText = encryptedPassword;
                event.path[0].style.color = 'green';
                event.path[0].style.border = '3px solid green';
                event.path[0].style.backgroundColor = 'darkgreen';
                event.path[0].style.cursor = 'default';
                flag = 1;
                const yesAudio = new Audio('./audio/yes.wav');
                yesAudio.addEventListener('canplaythrough', function () {
                    yesAudio.play();
                });
            }
        }
        if (flag === 0) {
            event.path[0].style.color = 'red';
            event.path[0].style.border = '3px solid red';
            event.path[0].style.backgroundColor = 'darkred';
            event.path[0].style.cursor = 'default';
            const noAudio = new Audio('./audio/no.wav');
                noAudio.addEventListener('canplaythrough', function () {
                    noAudio.play();
                });
            img_count++;
            if (img_count === 9) {
                alphabet.innerText = 'You lost!';
                const btn = document.createElement('button');
                const br = document.createElement('br');
                btn.classList.add('reset');
                btn.innerText = 'Retry';
                alphabet.appendChild(br);
                alphabet.appendChild(btn);
                btn.addEventListener('click', function () {
                    location.reload();
                });
            }
            img.src = 'img/s' + img_count + '.jpg';
        }
        event.target.removeEventListener('click', checkLetter);
        if (password === encryptedPassword) {
            alphabet.innerText = 'You won!';
            const btn = document.createElement('button');
            const br = document.createElement('br');
            btn.innerText = 'Retry';
            btn.classList.add('reset');
            alphabet.appendChild(br);
            alphabet.appendChild(btn);
            btn.addEventListener('click', function () {
                location.reload();
            });
        }
    }

    function createAlphabet() {
        for (let i = 0; i < 35; i++) {
            let div = document.createElement('div');
            div.classList.add('letter');
            div.innerText = letters[i];

            div.addEventListener('click', checkLetter);

            alphabet.appendChild(div);
            if ((i + 1) % 7 === 0) {
                let div2 = document.createElement('div');
                div2.style = 'clear:both';
                alphabet.appendChild(div2);
            }
        }
    }

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.placeholder = 'enter password';
    const submit = document.createElement('button');
    submit.type = 'button';
    submit.innerText = 'submit';
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        password = input.value;
        password = password.toUpperCase();
        console.log(password);
        for (let i = 0; i < password.length; i++) {
            if (password.charAt(i) === ' ') {
                encryptedPassword += ' ';
            } else {
                encryptedPassword += '-'
            }
        }

        function showPassword() {
            word.innerText = encryptedPassword;
        }

        alphabet.removeChild(form);
        showPassword();
        createAlphabet();
    });
    form.appendChild(input);
    form.appendChild(submit);
    alphabet.appendChild(form);
});