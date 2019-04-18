
<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>affiliateBeautifier.js</title>
</head>
<body>
<ul>
  <li>
    <a href="http://affiliate-url.com/?ad=123122&amp;campaign=123&amp;id=213&amp;url=beautiful-url1.com" data-href="http://example.com/1">First</a>
  </li>
  <li>
    <a href="http://affiliate-url.com/?ad=123122&amp;campaign=123&amp;id=213&amp;url=beautiful-url2.com" data-href="http://example.com/2">Third</a>
  </li>
  <li>
    <a href="http://affiliate-url.com/?ad=123122&amp;campaign=123&amp;id=213&amp;url=beautiful-url3.com">Not affected</a>
  </li>
</ul>

<script src="assets/js/dist/script.js?<?= time(); ?>"></script>

</body>
</html>