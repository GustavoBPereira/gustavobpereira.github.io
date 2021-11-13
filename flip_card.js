const card = document.getElementById('card')

card.addEventListener('click', flipCard)

function flipCard() {
    back_card_title = document.querySelector('div#back p.card-title').textContent = 'Favores de um pirata'
    back_card_title = document.querySelector('div#back p.card-content').textContent = 'Você pode roubar uma moeda de outro jogador'
    card.classList.toggle('flip-card')

    document.getElementById('back').classList.toggle('d-none')
    document.getElementById('front').classList.toggle('d-none')
}