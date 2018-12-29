# Affiiate beautifier

*Version 1.2*

Affiliate urls often looks like a mess, similar to below.

```html
http://affiliate-url.com/?ad=123122&amp;campaign=123&amp;id=213&amp;url=beautiful-url.com
```

This url looks better.

```html
http://beautiful-url.com
```

**In short**

- Inspired by Google. Google does the same thing to their links.
- Dependency free
- Only 1KB
- Uses ES6 version of javascript
- Tested in Chrome, Firefox and Edge

## Install

### Javascript

Put the script above `</body>`.

```html
<script src="assets/js/dist/script.min.js"></script>
<script>
affiliateBeautifier();
</script>
```

### HTML

```html
<a href="http://affiliate-url.com/long-and-not-nice" data-href="http://beautiful-url.com">Link text</a>
```

## Test it

Hover the url of the link. It should show the beautiful url, instead of the ugly affiliate url.

When you click the link, it should switch to the affiliate url on mousedown. To prevent a click when testing, you can drag the link instead. After that, hover it and you should see the affiliate url instead.

## Options

### selector

```js
affiliateBeautifier({
  selector: 'a[data-href]'
});
```

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT