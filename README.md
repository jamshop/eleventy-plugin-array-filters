# Eleventy Plugin - Array filters

A bunch of useful array filters for 11ty.

Install:

```
npm install @jamshop/eleventy-plugin-array-filters
```

## Usage

In your main config `.eleventy.js`: 

```js
const pluginArrayFilters = require("@jamshop/eleventy-plugin-array-filters");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginArrayFilters);
  // and the rest of your config
};
```

Or import an individual filter:

```js
const { unique } = require("@jamshop/eleventy-plugin-array-filters");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("unique", unique);
  // and the rest of your config
};
```

Filters include:

 - `isArray`
 - `isNotArray`
 - `isEmpty`
 - `isNotEmpty`
 - `flat`
 - `ampersandList`
 - `sentenceList`
 - `ul`
 - `ol`
 - `dl`
 - `sum`

### Examples

All examples assume the following front-matter data is available and use nunjucks templates.

```
---
fruits: ["banana", "mango", "peach", "apple", "apple", "kiwi", "strawberry"]
count: [1, 3, 5, 1, 2, 3]
empty: []
nested: [["banana"], ["mango","peach"]]
--- 
```

#### `isArray`

```
{% if fruits | isArray %}
  <p>Yes, "fruits" is an array</p>
{% endif %}
```

#### `isNotArray`

```
{% if "notArray" | isNotArray %}
  <p>Yes, the string "notArray" is not an array.</p>
{% endif %}
```

#### `isEmpty`

```
{% if empty | isEmpty %}
  <p>Yes, "empty" is empty.</p>
{% endif %}
```

#### `isNotEmpty`

```
{% if fruits | isNotEmpty %}
  <p>Yes, "fruits" is not empty.</p>
{% endif %}
```

Result: `<p>There are 7 fruits in the array.</p>`

#### `flat`

```
<p>
  nested has {{ nested | count }} items, 
  but "nested | flat: has {{ nested | flat | count }} items.
</p>

```

Result: `<p>nested has 2 items, but "nested | flat" has 3 items</p>`

#### `ampersandList`

```
<p>{{ fruits | ampersandList }}</p>
```
Result: `banana, mango, peach, apple, apple, kiwi & strawberry`

#### `sentenceList`

```
<p>{{ fruits | sentenceList }}</p>
```
Result: `banana, mango, peach, apple, apple, kiwi and strawberry`
#### `ul`

```
{{ fruits | ul | safe }}
```
Result: 

```html
<ul>
  <li>banana</li>
  <li>mango</li>
  <li>peach</li>
  <li>apple</li>
  <li>apple</li>
  <li>kiwi</li>
  <li>strawberry</li>
</ul>
```

#### `ol`

```
{{ fruits | ol | safe }}
```
Result: 

```html
<ol>
  <li>banana</li>
  <li>mango</li>
  <li>peach</li>
  <li>apple</li>
  <li>apple</li>
  <li>kiwi</li>
  <li>strawberry</li>
</ol>
```
#### `dl`

```
{{ fruits | dl | safe }}
```
Result: 

```html
<dl>
  <dt>banana</dt>
  <dt>mango</dt>
  <dt>peach</dt>
  <dt>apple</dt>
  <dt>apple</dt>
  <dt>kiwi</dt>
  <dt>strawberry</dt>
</dl>
```

#### `sum`

```
<p>The sum of count is: {{ count | sum }}</p>
```
Result: `The sum of count is: 15`