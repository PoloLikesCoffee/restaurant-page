import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadAbout from "./about.js"

//header
const createHeader = () => {
    const header = document.createElement('div');
    header.innerText = 'South Bank Coffee.';
    const slogan = document.createElement('p');
    slogan.innerHTML = 'Osaka, Japan. Fresh to order, for your coffee break.';
    header.appendChild(slogan);
    header.classList.add('header');

    return header;
}

//nav bar
const createNavBar = () => {
    const navBar = document.createElement('div');
    // navBar.classList.add('nav-bar');
    navBar.id = 'nav-bar';

    const navBarContent = ['Home', 'About', 'Menu'];
    navBarContent.forEach(item => {
        let navBarItem = document.createElement('div');
        navBarItem.classList.add('nav-bar-item');
        navBarItem.setAttribute('data-tab', item);
        navBarItem.innerText = item;
        if (item == navBarContent[0]) {
            navBarItem.classList.add('active');
        }
        navBar.appendChild(navBarItem);
    });

    // const icon = document.createElement('div');
    // icon.id = 'icon';
    // icon.setAttribute('href', `javascript:void(0);`);
    // icon.innerHTML = `下`;
    // icon.classList.add('icon');
    // icon.addEventListener('click', () => {
        
    //     if (navBar.className === "nav-bar") {
    //         navBar.className += " responsive";
    //     } else {
    //         navBar.className = "nav-bar";
    //     }
    // });
    // navBar.appendChild(icon);

    return navBar;
}

//nav bar items event
const clickOnNavItems = () => {
    const navItems = document.querySelectorAll('.nav-bar-item');
    navItems.forEach(item => {
        item.addEventListener('click', handlePage);
    });
}
const handlePage = (event) => {
    if (event.target.classList.contains('active')) {
        return;
    }
    const main = document.querySelector('.main');
    main.innerHTML = '';
    switch(event.target.dataset.tab) {
        case 'Home':
            loadHome();
            break;
        case 'About':
            loadAbout();
            break;
        case 'Menu':
            loadMenu();
            break;
    }
    let activeNavItem = document.querySelector('.active');
    activeNavItem.classList.remove('active');

    event.target.classList.add('active');
}

//mainContent
const createMainContent = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    return main;
}

//footer
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.id = 'footer';

    const footerText = document.createElement('div');
    footerText.classList.add('footer-inner');
    footerText.innerText = '© South Bank Coffee.';

    footer.appendChild(footerText);

    return footer;
}

//scroll top button
const createScrollTopBtn = () => {
    const btn = document.createElement('button');
    btn.setAttribute('title', "Go to top");
    btn.innerText = '上';
    btn.classList.add('scroll-button');
    btn.addEventListener('click', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    });
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }};

    return btn;
}


//function initializeWebsite, append all elements to content id html
const initializeWebsite = () => {
    const content = document.getElementById('content');
    const headerEl = createHeader();
    const navBarEl = createNavBar();
    const mainEl = createMainContent();
    const footerEl = createFooter();
    const btnEl = createScrollTopBtn();
    content.append(headerEl, navBarEl, mainEl, footerEl);
    content.appendChild(btnEl);
    clickOnNavItems();
    loadHome();
}


export default initializeWebsite 