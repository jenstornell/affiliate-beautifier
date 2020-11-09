class AffiliateBeautifier {
  init() {
    this.switchAll();
    this.eventClick();
  }

  eventClick() {
    ["mousedown", "touchstart"].forEach((event) => {
      document.querySelectorAll("a[data-href]").forEach((element) => {
        element.addEventListener(event, (e) => {
          this.switch(e.currentTarget);
          e.currentTarget.dataset.abSwitch = "";
        });
      });
    });
  }

  switchAll() {
    document
      .querySelectorAll("a[data-href]:not([data-ab-active])")
      .forEach((el) => {
        this.switch(el);
        el.dataset.abActive = "";
      });
  }

  switch(el) {
    console.log(el);
    if (el.hasAttribute("data-ab-switch")) return;

    console.log(el.getAttribute("data-ab-switch"));

    let href = el.getAttribute("href");
    let data_href = el.dataset.href;

    el.setAttribute("href", data_href);
    el.dataset.href = href;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let affiliate_beautifier = new AffiliateBeautifier();
  affiliate_beautifier.init();
});
