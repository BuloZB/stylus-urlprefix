# stylus-urlprefix

NPM module for transparent prefixing for `url()` calls in your `.styl` files. For example:

```stylus
body
  background white url('rainbow.png') 0 0 no-repeat

@font-face
  font-family 'Graublau Web'
  src url('GraublauWeb.ttf')
```

  yelds by default

```css
body {
  background: #fff url("rainbow.png") 0 0 no-repeat;
}
@font-face {
  font-family: 'Graublau Web';
  src: url("GraublauWeb.ttf");
}
```

But what if you want to prefix all `url()` calls with your custom string? Your images can be placed in some commond place defined by your web framework, and writing full path every time is annoying. One ugly solution is using prefix variable like this:

```stylus
urlprefix = '/static/images/'

body
  background white url(urlprefix + 'rainbow.png') 50% top
```

But this is even worser than repeating yourself every time. More systematic approach is configuring of the prefix for the compiler.

## Installation

```bash
$ npm install stylus-urlprefix
```
*not ready yet!*

or

```bash
$ git clone git@github.com:srigi/stylus-urlprefix.git
```
*to your `$NODE_PATH`*

## Usage

`stylus-urlprefix` is regular Stylus plugin. Compile all your `.styl` files (in `styl/` folder) into `.css` (in `css/` folder) with use of the plugin like this:

```bash
$ stylus --use stylus-urlprefix -o css/ styl/
```

All `url()` calls will be by default expanded to:

```css
body {
  background: #fff url('images/rainbow.png') 0 0 no-repeat;
}
@font-face {
  font-family: 'Graublau Web';
  src: url('fonts/GraublauWeb.ttf');
}
```

You can see that font files are handled by seperate prefix. You can of course customize prefix on commandline:

```bash
$ stylus --use stylus-urlprefix --with "{ imagePrefix:'/static/images/', fontPrefix:'/static/fonts/' }" -o css/ styl/
```

yelds

```css
body {
  background: #fff url('/static/images/rainbow.png') 0 0 no-repeat;
}
@font-face {
  font-family: 'Graublau Web';
  src: url('/static/fonts/GraublauWeb.ttf');
}
```

## Contributors

  - Igor Hlina (srigi)

## License

(The MIT License)

Copyright (c) 2012 Igor Hlina &lt;srigi@srigi.sk&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
