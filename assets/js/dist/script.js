class AffiliateBeautifier {
  init() {
    this.switchAll();
    this.eventClick();
  }
  
  eventClick() {
    ['mousedown', 'touchstart'].forEach((event) => {
      document.querySelectorAll('a[data-href]').forEach((element) => {
        element.addEventListener(event, (e) => {
          this.switch(e.target);
        });
      });
    });
  }

  switchAll() {
    document.querySelectorAll('a[data-href]').forEach((el) => {
      this.switch(el);
    });
  }

  switch(el) {
    let href = el.getAttribute('href');
    let data_href = el.dataset.href;

    el.setAttribute('href', data_href);
    el.dataset.href = href;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let affiliate_beautifier = new AffiliateBeautifier();
  affiliate_beautifier.init();
});