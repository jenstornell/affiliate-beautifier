# Affiiate beautifier

**Affiliate urls looks kind of like this:**

```html
http://affiliate-url.com/?ad=123122&campaign=123&id=213&url=beautiful-url.com
```

When hovering the url in the statusbar, how useful is that to the user?

**This is probably better:**

```html
http://beautiful-url.com
```

**About this plugin:**

- Inspired by Google. Yes, Google does the same thing to their links.
- Dependencies free (no depencencies, not even jQuery).

## Install

### 1. Add the script src

If possible put it just before `</body>`.

```html
<script src="http://example.com/affiliate-beautifier.js"></script>
```

### 2. Add the script

This script has to load after the script file above.

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
	affiliateBeautifier.init({
		selector: 'a'
	});
});
</script>
```

Read more about [selectors](http://www.w3schools.com/cssref/css_selectors.asp) if needed.

### 3. Add a link

```html
<a href="http://affiliate-url.com" data-href="http://beautiful-url.com">
	Link text
</a>
```

### 4. Test it

1. Hover the link and see if you have `http://beautiful-url.com` in the statusbar.
2. Hold down your mouse over the link and see if it changes to `http://affiliate-url.com`. Drag passed the link before you release.

## How it works

In the examples I've shorten the affiliate url to just `http://affiliate-url.com` but in real life it's probably longer.

### Before load

- `href` should be your affiliate url.
- `data-href` should be your beautiful url.

```html
<a href="http:/affiliate-url.com" data-href="http://beautiful-url.com">
```

### After load

- `href` and `data-href` has switched their place.'
- On hover you will see `beautiful-url.com` in your statusbar.

```html
<a href="http://beautiful-url.com" data-href="http:/affiliate-url.com">
```

### On mousedown

- On click the `data-href` will be set to `href` as well.
- You will go to `http:/affiliate-url.com`.

```html
<a href="http:/affiliate-url.com" data-href="http:/affiliate-url.com">
```

## License

MIT