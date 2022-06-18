const ACT_CLASSNAME = "act";

const quoteSpan = document.querySelector("#quote");
const authorSpan = document.querySelector("#author");

const API_KEY = "guest";

const getQuote = async () => {
  let res = await fetch(
    `https://api.qwer.pw/request/helpful_text?apikey=${API_KEY}`
  );
  let _data = await res.json();
  const respond = _data[1].respond;
  const quote = respond.split(/-|–/)[0];
  const author = respond.split(/-|–/)[1];
  if (quote.length > 25) {
    return getQuote();
  }
  quoteSpan.innerText = `"${quote}"`;
  authorSpan.innerText = `- ${author} -`;
};

getQuote();

const toggleAuthor = () => {
  authorSpan.classList.toggle(ACT_CLASSNAME);
};
const openAuthor = () => {
  authorSpan.classList.add(ACT_CLASSNAME);
};
const closeAuthor = () => {
  authorSpan.classList.remove(ACT_CLASSNAME);
};

quoteSpan.addEventListener("mouseenter", toggleAuthor);
quoteSpan.addEventListener("mouseleave", toggleAuthor);
authorSpan.addEventListener("mouseenter", openAuthor);
authorSpan.addEventListener("mouseleave", closeAuthor);
