//main-image
const createHomeImage = () => {
    const homeImgContainer = document.createElement('div');
    homeImgContainer.classList.add('home-img-container');

    const img = document.createElement("img");
    img.src = 'img/home-img.jpg';
    img.alt = 'Coffee';
    img.classList.add('home-main-img');
    
    homeImgContainer.appendChild(img);

    return homeImgContainer;
}
//contact
const createHomeContact = () => {
    const contact = document.createElement('div');
    contact.innerHTML = `「電話番号」<br> 080-0000-0000 `;
    contact.classList.add('home-contact');

    return contact;
}
//blog content
const createBlogContent = () => {
    const blogContainer = document.createElement('div');
    blogContainer.id = 'blog-container';

    const blogContent = [
        {
            img: 'img/blog-1.jpg',
            date: '2021年05月25日',
            title: 'ロノ日等ろで選広',
            description: '宿じ州万立ざー済務ロノ日等ろで選広マヨ相値え線表壊チワイ牲三らゆ気負ヱ転83娘出スワツメ志52己我洗祝きッが。'
        },
        {
            img: 'img/blog-2.jpg',
            date: '2021年04月12日',
            title: 'ミトケワ民',
            description: '回ケス塞竹ユロミ年棄こやぶお日健びもリ様34志案べけずい。'
        },
        {
            img: 'img/blog-3.jpg',
            date: '2021年03月03日',
            title: '受レリぐこ響6紙セナ',
            description: '教カキ子3提65読シヲ耳京つやだず季難ルリ残観店。'
        },
        {
            img: 'img/blog-4.jpg',
            date: '2021年02月14日',
            title: '行ソロカ速児原',
            description: '上ユト住分よ族評ぽう刊50百シ最束情ロ題年だ談近月イ味段後ヲヒ上予体競シヒ。'
        }
    ]; 

    blogContent.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('blog-post');

        const img = document.createElement('img');
        img.src = post.img;

        const legend = document.createElement('span');
        legend.innerText = post.date;

        const title = document.createElement('h2');
        title.innerText = post.title;

        const description = document.createElement('p');
        description.innerText = post.description;

        postCard.append(img, legend, title, description);
        blogContainer.appendChild(postCard);
    });


    return blogContainer;
}

const loadHome = () => {
    const main = document.querySelector('.main');
    const homeImgEl = createHomeImage();
    const homeContactEl = createHomeContact();
    const blogContentEl = createBlogContent();

    main.append(homeImgEl, homeContactEl, blogContentEl);
}

export default loadHome 