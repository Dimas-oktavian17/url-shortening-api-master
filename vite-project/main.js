import "./output.css";
//  Hamburger active
document
  .querySelector("[data-collapse-toggle]")
  .addEventListener("click", () => {
    document.querySelector("[data-collapse-toggle]").classList.toggle("active");
    document.getElementById("mobile-menu-3").classList.toggle("hidden");
    // console.error("sudah klik")
  });
// menu
document.getElementById("mobile-menu-3").addEventListener("click", () => {
  document.getElementById("mobile-menu-3").classList.toggle("hidden");
  document.querySelector("[data-collapse-toggle").classList.toggle("active");
});

// call query selector
let form = document.querySelector('[aria-label="form"]');
let inputUrl = document.querySelector('[id="text"]');
let result = document.querySelector(".result");
// fecht api
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = inputUrl.value;
  // short
  shortenUrl(url);
});

async function shortenUrl(url) {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    const newUrl = document.createElement(`section`);
    newUrl.classList.add("item");
    newUrl.innerHTML = `

 

  <div class="flex flex-col items-center ">
  <div class="max-w-xs lg:max-w-7xl  ">
  <div class="max-w-xs lg:max-w-7xl ">

   <div class="resShort lg:w-[1024px]">
   <div class="resBoxOne lg:text-base truncate">
   ${url}
   </div>
    <div class="resBoxTwo">
        <p class="text-primaryCyan ">${data.result.short_link}</p>
    <button class="newUrl-btn w-full ">copy</button> 
    </div>
   </div>

      </div>
      </div>
      </div>
    `;
    result.prepend(newUrl);
    const copyBtn = result.querySelector(".newUrl-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
    });
    inputUrl.value = "";
  } catch (error) {
    console.error("error");
  }
}
