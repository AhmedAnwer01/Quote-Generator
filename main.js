var quote = document.getElementById("quote")
var author = document.getElementById("author")

var quotes = {
    "― Oscar Wilde": "“Be yourself; everyone else is already taken.”",
    "― Frank Zappa": "“So many books, so little time.”",
    "― Marcus Tullius Cicero": "“A room without books is like a body without a soul.”",
    "― Mark Twain": "“If you tell the truth, you don't have to remember anything.”",
    "― Warren Buffett": "“Honesty is a very expensive gift, Don't expect it from cheap people.”",
    "― Warren Buffett": "“Price is what you pay. Value is what you get.”",
}
var quoteContent = Object.values(quotes)
var authorName = Object.keys(quotes)
var len = quoteContent.length;
function addQuote(){
    var random = Math.floor(Math.random() * len);
    quote.innerHTML = quoteContent[random];
    author.innerHTML = authorName[random];
}