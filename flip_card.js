const card = document.getElementById('card')

card.addEventListener('click', flipCard)

function flipCard() {
    let new_card_element = document.querySelector('div#card div.d-none')
    let new_card = getCard()
    new_card_element.querySelector('p.card-title').textContent = new_card['title']
    new_card_element.querySelector('p.card-content').textContent = new_card['content']

    card.classList.toggle('flip-card')
    toggleDisplayNoneCards()
    updateRemainingCards(remainingCards())
}


function toggleDisplayNoneCards() {
    document.getElementById('back').classList.toggle('d-none')
    document.getElementById('front').classList.toggle('d-none')
}