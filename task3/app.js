const region = (name) => {
  const url = `https://restcountries.com/v3.1/region/${name}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayRegion(data))
};

const displayRegion = regionName => {
const listItem = document.getElementById("region-name");
  regionName.forEach(region => {
  //  data[0].name.common;
    console.log(region.name.common);

    const countryName = document.createElement("li");
    countryName.innerHTML = '';
    countryName.classList.add("dropdown-item");
    countryName.innerHTML = `
    <li><a class="dropdown-item" href="#">${region.name.common} </a></li>
    `;
    listItem.appendChild(countryName);

 });
};
region("asia")