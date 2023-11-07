let originalLink = document.getElementById("userInput");
let generateShortLink = document.getElementById("shorter");

generateShortLink.addEventListener("click", () => {
  let url = originalLink.value;
  const link = `https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`;
  fetch(link)
    .then((res) => res.json())
    .then((value) => displayShortLink(value));
});
const updateLinkContainer = document.getElementById("new-URl");
const displayShortLink = (data) => {
  const update = document.createElement("div");
  update.innerHTML = `
    <div class="container-fluid bg-p Success rounded-circle">
              <h2 id="copyText"class="bg-Success fw-bold fst-italic text-center text-white-50"> ${data.result.full_short_link}</h2>
            </div>
  `;

  updateLinkContainer.appendChild(update);
  const copy = document.getElementById("copy");
  copy.addEventListener("click", () => {
    let copyText = document.getElementById("copyText").innerText;
    console.log(copyText);
    
  });
};
