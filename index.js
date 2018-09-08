const sciFiNovels = [
    {title: "Revelation Space", author: "Alastair Reynolds"},
    {title: "Redemption Ark", author: "Alastair Reynolds"},
    {title: "Absolution Gap", author: "Alastair Reynolds"},
    {title: "Consider Phlebas", author: "Iain M. Banks"},
    {title: "Surface Detail", author: "Iain M. Banks"},
    {title: "The Reality Dysfunction", author: "Peter F. Hamilton"}
]

const printIt = sciFiNovels.map(x => x.author + " wrote " + x.title);
console.log(printIt);

const someThing = sciFiNovels.filter(x => x.author !== 'Iain M. Banks');
console.log(someThing);