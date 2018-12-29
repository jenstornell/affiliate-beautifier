class AffiliateBeautifier {
  constructor(options) {
    this.o = Object.assign({}, this.defaults(), options);

    document.addEventListener('DOMContentLoaded', () => {
      this.switchAll();
      this.eventClick();
    });
  }

  defaults() {
    return {
      selector: 'a[data-href]'
    };
  }

  eventClick() {
    ['mousedown', 'touchstart'].forEach((event) => {
      document.querySelectorAll(this.o.selector).forEach((element) => {
        element.addEventListener(event, (e) => {
          this.switch(e.target);
        });
      });
    });
  }

  switchAll() {
    document.querySelectorAll(this.o.selector).forEach((el) => {
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

function affiliateBeautifier(args) {
  new AffiliateBeautifier(args);
}