function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5 mt-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
                Sree Karthikeya Limited
              </h1>
              <p class="mt-3">
               Sree Karthikeya Limited is a wholesale trade nec and registered in Auckland as a NZ Limited Company. 
              </p>
            </div>
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
