//contact page

const createAbout = () => {
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';

    const name = document.createElement('div');
    name.classList.add('name');
    const titleName = document.createElement('h2');
    titleName.innerText = '店舗情報';
    const pName = document.createElement('p');
    pName.innerHTML = `店舗名：シューアスバンクコーヒー <br>
    英　字：South Bank Coffee.`;
    name.append(titleName, pName);

    const access = document.createElement('div');
    access.classList.add('access');
    const titleAccess = document.createElement('h2');
    titleAccess.innerText = '所在地';
    const pAccess = document.createElement('p');
    pAccess.innerHTML = `住所：〒553-0004 大阪府大阪市福島区３丁目３−番１７号 <br>
    1-10-28 Nishishinsaibashi Chuo Ward, Osaka <br>
    OPEN：  月－金　9:00 〜 16:00 <br>
    CLOSED：  土、日`;
    access.append(titleAccess, pAccess);

    const story = document.createElement('div');
    story.classList.add('story');
    const titleStory = document.createElement('h2');
    titleStory.innerText = 'ストーリー';
    const pStory = document.createElement('p');
    pStory.innerHTML = `上いぜ味備たど確法ヱルラ際松づ港期濃シ補欲うしそレ月陸ト長百ほりれ時沖断せ応中ぞ北事ノスキ台女イハ並興ぎげでそ断乗イド。9兵のでも合楡そひ報歳オ上賛カヱヨル意格球ノホ大巨エリユル提転ちは好挑ラニヌヒ成共にンけや投庭けリしド浦得手ょル。新仁82転者庁ぱぐそ職前キソクウ稿15訃唐8分ワ碁況むめ共方なげせお話護ノイチ業方ヌシツヱ的読レそ獲1齢ネ育経得金亡ルえ。<br> 
    <br>
    従広ス最9景響くづク柱阪54嬌ちばひ計知ぱ聞足マヨロ発中力じぴを区聞ッつよ稿人アロ息費ぞ展躍史ラぴだ。日テトオフ優楽遺オ代品いご性2待る利北ワ折高ヘオト経東レ嘘85賞ょぽ惚見スノタヤ湾害改ゆづひろ百掲ユム財誌ドげ通勢い誠常レイなせ。活ムモチ準話ユワヌカ勝属ロウヤ業説急暮だほっ有4会げの細木アリケ読官フアコ投国ぴれ挙車こなけぽ言府ヘア火券で廣概骨儀とくぱ。<br> 
    <br>
    職ク囲点オ研蔵さ仏故えフゅに供能9特べしらぞ公替反ヨツホエ分公み回演んイぽ姿表マフシ訓緩部ー尽白ゅぽラう容郡信モロツヘ煙容ゃぐッ。2練善ぱふ気供が撃92毎辺ミハ振勉メカ制98勢お情読リづ書過ぽめ女徴極メヤマ聞毎ルキ携明ラシチ疑一わフー都乱レホワヌ松会ばなじ贈雪旅ひ。<br> `;
    story.append(titleStory, pStory);

    aboutContainer.append(name, access, story);

    return aboutContainer;
}

const loadAbout = () => {
    const main = document.querySelector('.main');
    const aboutContentEl = createAbout();

    main.appendChild(aboutContentEl);
}

export default loadAbout