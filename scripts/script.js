// Hamburgermenu
const hamMenu = document.querySelector(".ham-menu")
const hamMenuButton = document.querySelector(".ham-menu-button")

hamMenuButton.addEventListener("click", toggleHamMenu)


function toggleHamMenu() {
    hamMenuButton.classList.toggle("is-open")
    hamMenu.classList.toggle("is-open")
}

// Gemaakt met behulp van deze video, van Kevin Powell: https://www.youtube.com/watch?v=jZiZs8cZAKU&t=146s

// 1. Selecteer de knoppen om nieuwsartikelen te filteren
let filterList = document.querySelector('.news-articles-filter')
let filterButtons = filterList.querySelectorAll('.filter-btn')
let newsArticles = document.querySelectorAll('.news-article')


// 2. Wacht tot een gebruiker op een knop van de filters klikt

filterButtons.forEach((button) => {

    button.addEventListener('click', function() {

        // Laat 'filter' de html attribuut van een aangeklikte knop vinden 
        let filter = button.getAttribute('data-filter')

        // Verander de 'active' class op een knop, 'target' (een js term) is de knop waar op geklikt wordt
        updateActiveButton(button)

        // Filter de lijst
        filterNewsArticles(filter)

    })
})

// 3. Verander welke nieuwsartikelen worden laten zien

function updateActiveButton(newButton){
    // Vind de vorige knop met de 'active' class & verwijder de 'active' class van die button
    filterList.querySelector('.active').classList.remove('active')

    // Voeg de 'active' class toe aan de nieuwe knop
    newButton.classList.add('active')
}

function filterNewsArticles(articleFilter) {
    // Vind de data-category van elk nieuws artikel
    newsArticles.forEach((newsArticle) => {
        let newsArticleCategory = newsArticle.getAttribute('data-category')
    
        // Check of die data-category overeenkomt met de data-filter
        if (articleFilter === 'all' || articleFilter === newsArticleCategory){
            // Als die data-category overeenkomt, laat het nieuws artikel zien
            newsArticle.removeAttribute('hidden')
        } 
        else {
            // Als de data-category niet overeenkomt, verberg het nieuws artikel
            newsArticle.setAttribute('hidden', true)
        }
    })
}