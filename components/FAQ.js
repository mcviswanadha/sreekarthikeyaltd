function FAQ() {
  const FAQ = document.getElementById("FAQ");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body">
        <h2 class='title fw-bold'>Contact us</h2>
      </div>
  <div class="accordion mt-5" id="accordionExample">
              <p>
                    <strong>Mani Ram Kumar</strong>
                <br>
                    Director
                <br>
                    Sree Karthikeya Limited
                <br>
                    34A Busby Street
                <br>
                    Blockhouse Bay
                <br>
                    Auckland - 0600
                <br>
                    New Zealand
                <br>
                <br>
                email: <a 
                  href = "mailto:SREEKARTHIKEYALTD@GMAIL.COM?subject = regarding GRB product = Message">
                    SREEKARTHIKEYALTD@GMAIL.COM
                  </a>
                <br>
                <br>
                ph: <a href="tel:+64 212451157">+64 212451157</a>
                <br>
              </p>
        </div>
  `;
  FAQ.appendChild(Container);
}
FAQ();
