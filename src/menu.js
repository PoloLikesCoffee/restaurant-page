//menu page
const createMenuContent = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    const coffeeContent = [
        {
            img: 'img/coffee.jpg',
            price: '400円',
            title: 'ドリップコーヒー (HOT)',
        },
        {
            img: 'img/coffee.jpg',
            price: '450円',
            title: 'ドリップコーヒー (ICE)',
        },
        {
            img: 'img/coffee.jpg',
            price: '500円',
            title: 'カフェ・オレ (HOT/ICE)',
        },
        {
            img: 'img/coffee.jpg',
            price: '300円',
            title: 'エスプレッソ (1shot)',
        },
        {
            img: 'img/coffee.jpg',
            price: '550円',
            title: 'カプチーノ (HOT)',
        },
        {
            img: 'img/coffee.jpg',
            price: '550円',
            title: 'カフェラテ (HOT/ICE)',
        },
        {
            img: 'img/coffee.jpg',
            price: '550円',
            title: 'キャラメルラテ (HOT/ICE)',
        },
        {
            img: 'img/coffee.jpg',
            price: '650円',
            title: 'カフェモカ (HOT/ICE)',
        },
        {
            img: '',
            price: '',
            title: '',
        }
    ]; 
    const coffee = document.createElement('div');
    coffee.classList.add('category');
    const coffeeName = document.createElement('h2');
    coffeeName.innerText = 'Coffee';
    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('category-container');
    coffee.append(coffeeName, coffeeContainer);
    coffeeContent.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.img;

        const price = document.createElement('span');
        price.innerText = item.price;

        const title = document.createElement('h2');
        title.innerText = item.title;

        itemCard.append(img, title, price);
        coffeeContainer.appendChild(itemCard);
    });

    const teaContent = [
        {
            img: 'img/matcha.jpg',
            price: '200円',
            title: 'コーヒー',
        },
        {
            img: 'img/matcha.jpg',
            price: '100円',
            title: 'コーヒー',
        },
        {
            img: 'img/matcha.jpg',
            price: '300円',
            title: 'コーヒー',
        },
        {
            img: 'img/matcha.jpg',
            price: '400円',
            title: 'コーヒー',
        },
        {
            img: 'img/matcha.jpg',
            price: '400円',
            title: 'コーヒー',
        },
        {
            img: '',
            price: '',
            title: '',
        }
    ]; 
    const tea = document.createElement('div');
    tea.classList.add('category');
    const teaName = document.createElement('h2');
    teaName.innerText = 'Tea';
    const teaContainer = document.createElement('div');
    teaContainer.classList.add('category-container');
    tea.append(teaName, teaContainer);
    teaContent.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.img;

        const price = document.createElement('span');
        price.innerText = item.price;

        const title = document.createElement('h2');
        title.innerText = item.title;

        itemCard.append(img, title, price);
        teaContainer.appendChild(itemCard);
    });

    const softDrinkContent = [
        {
            img: 'img/juice.jpg',
            price: '400円',
            title: 'ジュース',
        },
        {
            img: 'img/juice.jpg',
            price: '100円',
            title: 'コーラ',
        },
        {
            img: 'img/juice.jpg',
            price: '300円',
            title: 'コーラ',
        },
        {
            img: 'img/juice.jpg',
            price: '400円',
            title: 'コーラ',
        },
        {
            img: 'img/juice.jpg',
            price: '300円',
            title: 'コーラ',
        },
        {
            img: 'img/juice.jpg',
            price: '400円',
            title: 'コーラ',
        }
    ]; 
    const softDrink = document.createElement('div');
    softDrink.classList.add('category');
    const softDrinkName = document.createElement('h2');
    softDrinkName.innerText = 'Soft Drink';
    const softDrinkContainer = document.createElement('div');
    softDrinkContainer.classList.add('category-container');
    softDrink.append(softDrinkName, softDrinkContainer);
    softDrinkContent.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.img;

        const price = document.createElement('span');
        price.innerText = item.price;

        const title = document.createElement('h2');
        title.innerText = item.title;

        itemCard.append(img, title, price);
        softDrinkContainer.appendChild(itemCard);
    });

    const sweetContent = [
        {
            img: 'img/sweet.jpg',
            price: '200円',
            title: 'コーヒー',
        },
        {
            img: 'img/sweet.jpg',
            price: '100円',
            title: 'コーヒー',
        },
        {
            img: 'img/sweet.jpg',
            price: '300円',
            title: 'コーヒー',
        },
        {
            img: 'img/sweet.jpg',
            price: '400円',
            title: 'コーヒー',
        },
        {
            img: 'img/sweet.jpg',
            price: '400円',
            title: 'コーヒー',
        },
        {
            img: '',
            price: '',
            title: '',
        }
    ]; 
    const sweet = document.createElement('div');
    sweet.classList.add('category');
    const sweetName = document.createElement('h2');
    sweetName.innerText = 'Sweet';
    const sweetContainer = document.createElement('div');
    sweetContainer.classList.add('category-container');
    sweet.append(sweetName, sweetContainer);
    sweetContent.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.img;

        const price = document.createElement('span');
        price.innerText = item.price;

        const title = document.createElement('h2');
        title.innerText = item.title;

        itemCard.append(img, title, price);
        sweetContainer.appendChild(itemCard);
    });

    menuContainer.append(coffee, tea, softDrink, sweet);

    return menuContainer;
}

const loadMenu = () => {
    const main = document.querySelector('.main');
    const menuContentEl = createMenuContent();

    main.appendChild(menuContentEl);
}

export default loadMenu 