const usernamesList = [];

function searchAndLog() {

  const divs = document.querySelectorAll('div.css-175oi2r.r-1iusvr4.r-16y2uox');

  divs.forEach((div, index) => {

    const innerElements = div.querySelectorAll('.css-175oi2r.r-1awozwy.r-z2wwpe.r-6koalj.r-1q142lx');

    if (innerElements.length === 0) {

      const usernames = div.querySelectorAll('span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3');

      const usernameSpans = Array.from(usernames).filter(span => span.textContent.startsWith('@'));

      usernameSpans.forEach((span) => {
        usernamesList.push(span.textContent);
      });
    }
  });

  window.scrollTo(0, document.body.scrollHeight);
}

const intervalId = setInterval(searchAndLog, 5000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Collected Usernames:", usernamesList);
}, 30000);
