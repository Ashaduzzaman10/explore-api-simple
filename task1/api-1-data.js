const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
};
  console.log("🚀 ~ file: api-1-data.js:31 ~ person:", person.result[1].age)
  

const personContainer = document.getElementById("person-container");
const displayPerson = document.createElement("div");
displayPerson.classList.add("row");
displayPerson.innerHTML = `
  <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Person Name : ${person.result[0].name.common} </h5>
              <hr class"btn btn-primary">
              <p class="card-text">
                <h4>age : ${person.result[0].age}</h4>
              </p>
             <h4> street : ${person.result[0].address.street}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Person Name : ${person.result[1].name.common}</h5>
               <hr class"btn btn-primary">
              <p class="card-text">
               <h4>Age : ${person.result[1].age}</h4>
               <h4>Street: ${person.result[1].address.street}</h4>
              </p>
            </div>
          </div>
        </div>`;
          personContainer.appendChild(displayPerson)