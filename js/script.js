function menu() {
    const menuButton = document.getElementById('headerMenuButton')
    const contactsButton = document.querySelector('#contacts')
    const menu = document.getElementById('navMenu')
    const contactsWrapper = document.querySelector('.header_contacts-links')

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('openMenu')
        menuButton.classList.toggle('close')
        contactsWrapper.classList.remove('openContacts')
    })

    document.addEventListener('click', function (event) {
        if (event.target === contactsButton) {
            contactsWrapper.classList.toggle('openContacts')
            menu.classList.remove('openMenu')
            menuButton.classList.remove('close')
        } else {
            contactsWrapper.classList.remove('openContacts')
        }
    })

}

menu()
