let tutorialbutton = document.querySelector('div.card-body a')

tutorialbutton.addEventListener('click', function() {
    mixpanel.track('started tutorial', {'topic': 'bootstrap 5'})
})