const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navItems.forEach((anotherNavItem) => {
            anotherNavItem.classList.remove('nav__item--active');
            const anotherNavItemIcon = anotherNavItem.querySelector('.nav__item-icon');
            anotherNavItemIcon.classList.remove('nav__item-icon--active');
            navItem.classList.add('nav__item--active');
            const navItemIcon = navItem.querySelector('.nav__item-icon');
            navItemIcon.classList.add('nav__item-icon--active');
        })
    })
})