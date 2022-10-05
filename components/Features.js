function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">GRB</h2>
  <p class="">
    GRB has become synonymous with ‘Purity’ in the Indian market, and over the years we have built a reputation & legacy for authentic traditional taste.
  </p>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/grb-global-map.jpg" alt="" width="200" height="100" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">GRB Global</div>
      <div class="description text-center">
       All GRB products are highly accepted and savored across the globe for its quality and taste.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/tree.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">100% Natural</div>
      <div class="description text-center">
        GRB products are 100% Natural.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/green-leaf.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Traditional Indian Flavors</div>
      <div class="description text-center">
        GRB products are traditional Indian flavors.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/premium-quality.png" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Highest Quality Standards</div>
      <div class="description text-center">
        GRB products are highest quality standards.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
