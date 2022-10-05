function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center mb-5">
          <h2 class="text-center fw-bold">GRB Products available</h2>
        </div>
<div
          class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-5 justify-content-center"
        >
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/Badam Drink Mix - 500g.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB Bajji Bonda_200g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB DOSA 200g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB DOSA 500g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB Payasam 200g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB RagiDosa 500g_FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB RAVA DOSA 500g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB Upma 200g_FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB Upma mix 500g_FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB VADA MIX 500g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_ Bisibele Bhath_100g.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_ Ghee 1Lr Jar (Buffalo).jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_ Puliogare_200g.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_ Vangi bhath_100g.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_Gulab Jamun_100gFOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_GULAB_JAMUN_160g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_PURE_GHEE_1kg FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_Raagidosa Mix 200g FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_Rava Idly_Mix 200g_FOP.jpg" alt="ClientLogo" srcset="" />
          </div>
          <div class="col d-flex justify-content-center ClientLogo">
            <img src="./Images/GRB_Sambar_200g.jpg" alt="ClientLogo" srcset="" />
          </div>

        </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
