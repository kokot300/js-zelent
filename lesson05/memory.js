document.addEventListener('DOMContentLoaded', function () {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const cardsPermanent = [
        'ciri.png',
        'geralt.png',
        'jaskier.png',
        'triss.png',
        'yen.png',
        'iorweth.png',
        'ciri.png',
        'geralt.png',
        'jaskier.png',
        'triss.png',
        'yen.png',
        'iorweth.png',
    ];

    const cards = shuffleArray(cardsPermanent);

    const cardsOnBoard = document.querySelectorAll('.card');
    let oneCardVisible = false;
    let turnCounter = 0;
    let image1 = undefined;
    let image2 = undefined;
    let cell1 = undefined;
    let cell2 = undefined;
    let lock = false;
    let pairsLeft = 6;

    cardsOnBoard.forEach(function (el) {

        $(el).on('click', function () {
            const opacityValue = $(el).css('opacity');
            if (opacityValue == 1 && lock === false) {
                lock = true;
                const cardId = el.attributes.id.value;
                console.log(cardId);
                const image = `url(img/${cards[cardId]})`;
                $(`#${cardId}`).css('background-image', image);
                el.classList.remove('card');
                el.classList.add('cardActive');

                if (oneCardVisible === false) {
                    image1 = `url(img/${cards[cardId]})`
                    cell1 = el
                    oneCardVisible = true;
                    lock = false;
                } else {
                    cell2 = el;
                    image2 = `url(img/${cards[cardId]})`;
                    turnCounter++;
                    console.log(image1);
                    console.log(image2);
                    $('.score').text(`Turn counter ${turnCounter}`);
                    if (image1 === image2 && cell1 !== cell2) {
                        setTimeout(
                            x => {
                                cell1.style.opacity = 0;
                                cell2.style.opacity = 0;
                                lock = false;
                                pairsLeft--;
                                if (pairsLeft === 0) {
                                    $('.board').html(`<h1>You won in ${turnCounter} turns!</h1>`);
                                    setTimeout(x => location.reload(), 2000);
                                }
                            }, 1000
                        )
                        ;
                    } else {
                        setTimeout(
                            x => {
                                cell1.style.backgroundImage = '';
                                cell2.style.backgroundImage = '';
                                cell1.classList.add('card');
                                cell1.classList.remove('cardActive');
                                cell2.classList.add('card');
                                cell2.classList.remove('cardActive');
                                lock = false;
                            }, 2000
                        );
                    }
                    oneCardVisible = false;
                }
            }
        });
    })

});