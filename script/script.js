const header = document.querySelector("header");
const sectionOne = document.querySelector("main>section");
const sectionTwo = document.querySelectorAll("main>section")[1];
const sectionThree = document.querySelectorAll("main>section")[2];

//create tags
const headerTags = [
    "h1",
    "p"
];

const sectionOneTags = [
    "h2",
    "figure",
    "p"
];

const figureTags = [
    "img",
    "figcaption"
];

const sectionTwoTags = [
    "h2",
    "table"
];

const tableTags = [
    "thead",
    "tbody"
];

const theadTags = [
    "tr"
];

const theadTrTags = [
    "th"
];

const tbodyTags = [
    "tr",
    "tr",
    "tr",
    "tr",
    "tr"
];

const tbodyTrTags = [
    "th",
    "td"
];

const sectionThreeTags = [
    "h2",
    "ul"
];

const ulTags = [
    "li",
    "li",
    "li"
];

const liTags = [
    "a"
];

//texts
const headerText = [
    "Exercício sobre Funções JavaScript",
    "Crie uma página HTML para apresentar um animal que você se identifica"
];

const sectionOneText = [
    "Golfinho",
    "",
    "Os golfinhos, delfins, peixes-botos, botos ou toninhas são animais cetáceos pertencentes às famílias Delphinidae e Platanistidae. São perfeitamente adaptados para viver no ambiente aquático, sendo que existem 37 espécies conhecidas de golfinhos de água salgada e água doce. A espécie mais comum é a Delphinus delphis."
];

const figureText = [
    "",
    "Delphinus delphis em seu hábitat natural"
];

const sectionTwoText = [
    "Informações sobre Golfinhos",
    ""
];

const theadTrText = [
    "Classificação Científica"
];

const tbodyTrOneText = [
    "Reino",
    "Animalia"
];

const tbodyTrTwoText = [
    "Filo",
    "Chordata"
];

const tbodyTrThirdText = [
    "Classe",
    "Mammalia"
];

const tbodyTrFourthText = [
    "Ordem",
    "Cetacea"
];

const tbodyTrFifthText = [
    "Família",
    "Delphinidae"
];

const sectionThreeText = [
    "Links para consulta",
    ""
];

const liFirstText = [
    "Golfinhos no Brasilescola"
];

const liSecondText = [
    "Curiosidades sobre Golfinhos"
];

const liThirdText = [
    "Onde ver golfinhos no Brasil"
];

//functions for create tags and write text
fillHeader();
fillSectionOne();
fillFigure();
fillSectionTwo();
fillTable();
fillThead();
filltheadTr();
fillTbody();
fillTbodyFirstRow();
fillTbodySecondRow();
fillTbodyThirdRow();
fillTbodyFourthRow();
fillTbodyFifthRow();
fillSectionThree();
fillUl();
fillFirstLi();
fillSecondLi();
fillThirdLi();

function fillHeader() {
    headerTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = headerText[index];
        header.appendChild(childTag);
    })    
};

function fillSectionOne() {
    sectionOneTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = sectionOneText[index];
        sectionOne.appendChild(childTag);
    })
};

function fillFigure() {
    const figure = document.querySelector("main>section>figure");
    figureTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = figureText[index];
        figure.appendChild(childTag);
    })
};

function fillSectionTwo() {
    sectionTwoTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = sectionTwoText[index];
        sectionTwo.appendChild(childTag);
    })
};

function fillTable() {
    const table = document.querySelector("section:nth-child(2) table");
    tableTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        table.appendChild(childTag);
    })
};

function fillThead() {
    const thead = document.querySelector("section:nth-child(2) table>thead");
    theadTags.forEach(function(element) {
        let childTag = document.createElement(element);
        thead.appendChild(childTag);
    })
};

function filltheadTr() {
    const theadTr = document.querySelector("section:nth-child(2) table>thead>tr");
    theadTrTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = theadTrText[index];
        theadTr.appendChild(childTag);
    })
};

function fillTbody() {
    const tbody = document.querySelector("section:nth-child(2) table>tbody");
    tbodyTags.forEach(function(element) {
        let childTag = document.createElement(element);
        tbody.appendChild(childTag);
    })
};

function fillTbodyFirstRow() {
    const tbodyTrOne = document.querySelector("section:nth-child(2) table>tbody>tr");
    tbodyTrTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = tbodyTrOneText[index];
        tbodyTrOne.appendChild(childTag);
    })
};

function fillTbodySecondRow() {
    const tbodyTrSecond = document.querySelector("section:nth-child(2) table>tbody>tr:nth-child(2)");
    tbodyTrTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = tbodyTrTwoText[index];
        tbodyTrSecond.appendChild(childTag);
    })
};

function fillTbodyThirdRow() {
    const tbodyTrThird = document.querySelector("section:nth-child(2) table>tbody>tr:nth-child(3)");
    tbodyTrTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = tbodyTrThirdText[index];
        tbodyTrThird.appendChild(childTag);
    })
};

function fillTbodyFourthRow() {
    const tbodyTrFourth = document.querySelector("section:nth-child(2) table>tbody>tr:nth-child(4)");
    tbodyTrTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = tbodyTrFourthText[index];
        tbodyTrFourth.appendChild(childTag);
    })
};

function fillTbodyFifthRow() {
    const tbodyTrFifth = document.querySelector("section:nth-child(2) table>tbody>tr:nth-child(5)");
    tbodyTrTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = tbodyTrFifthText[index];
        tbodyTrFifth.appendChild(childTag);
    })
};

function fillSectionThree() {
    sectionThreeTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = sectionThreeText[index];
        sectionThree.appendChild(childTag);
    })
};

function fillUl() {
    const ul = document.querySelector("section:nth-child(3)>ul");
    ulTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        ul.appendChild(childTag);
    })
};

function fillFirstLi() {
    const liFirst = document.querySelector("section:nth-child(3)>ul>li");
    liTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = liFirstText[index];
        liFirst.appendChild(childTag);

    })
};

function fillSecondLi() {
    const liSecond = document.querySelector("section:nth-child(3)>ul>li:nth-child(2)");
    liTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = liSecondText[index];
        liSecond.appendChild(childTag);
    })
};

function fillThirdLi() {
    const liThird = document.querySelector("section:nth-child(3)>ul>li:nth-child(3)");
    liTags.forEach(function(element , index) {
        let childTag = document.createElement(element);
        childTag.innerText = liThirdText[index];
        liThird.appendChild(childTag);
    })
};

//Attributes
document.querySelector("main>section>figure>img").setAttribute("src", "https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/g/golfinho-mar-peixes-0916-1400x800.jpg");
document.querySelector("main>section>figure>img").setAttribute("alt", "Golfinho no mar com peixes no fundo");
document.querySelector("section:nth-child(2) table>thead>tr>th").setAttribute("colspan" , 2);
document.querySelector("section:nth-child(3)>ul>li>a").setAttribute("href" , "https://brasilescola.uol.com.br/animais/golfinhos.htm");
document.querySelector("section:nth-child(3)>ul>li>a").setAttribute("target" , "_blank");
document.querySelector("section:nth-child(3)>ul>li:nth-child(2)>a").setAttribute("href" , "https://canaldopet.ig.com.br/curiosidades/2017-10-31/golfinhos-curiosidades.html");
document.querySelector("section:nth-child(3)>ul>li:nth-child(2)>a").setAttribute("target" , "_blank");
document.querySelector("section:nth-child(3)>ul>li:nth-child(3)>a").setAttribute("href" , "https://turismo.ig.com.br/destinos-nacionais/2017-08-06/golfinhos-brasil.html");
document.querySelector("section:nth-child(3)>ul>li:nth-child(3)>a").setAttribute("target" , "_blank");