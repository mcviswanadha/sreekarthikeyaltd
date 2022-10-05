function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
              <a class="navbar-brand" href="#">
                <img class="BrandLogo" src="./Images/Logo-BgWhite.png" alt="" srcset="" />
              </a>
            </div>

            <div class="copyrights mt-4">
              © 2022 SREE KARTHIKEYA LIMITED. All rights reserved
            </div>
          </div>
        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
