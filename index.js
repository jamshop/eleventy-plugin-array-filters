// Some of these exist in nunjucks, but including 
// anything that is not possible with default 
// liquid filters: https://shopify.github.io/liquid/

const isArray = (value) => {
  return Array.isArray(value);
};

const isNotArray = (value) => {
  return !Array.isArray(value);
};

const isEmpty = (value) => {
  return Array.isArray(value) && value.length === 0;
};

const isNotEmpty = (value) => {
  return Array.isArray(value) && value.length;
};

const flat = (value) => {
  return value.flat();
};

const ampersandList = (value) => {
  value = [...value];
  const lastItem = value.pop();
  return value.length ? value.join(", ") + " & " + lastItem : lastItem;
};

const sentenceList = (value) => {
  value = [...value];
  const lastItem = value.pop();
  return value.length ? value.join(", ") + " and " + lastItem : lastItem;
};

const ul = (value) => {
  return `<ul>${value.map((item) => "<li>" + item + "</li>").join("")}</ul>`;
};

const ol = (value) => {
  return `<ol>${value.map((item) => "<li>" + item + "</li>").join("")}</ol>`;
};

const dl = (value) => {
  return `<dl>${value.map((item) => "<dt>" + item + "</dt>").join("")}</dl>`;
};

const sum = (value) => {
  return value.reduce((a, b) => a + b, 0);
};

const pluginArrayFilters = (eleventyConfig) => {
  eleventyConfig.addFilter("isArray", isArray);
  eleventyConfig.addFilter("isNotArray", isNotArray);
  eleventyConfig.addFilter("isEmpty", isEmpty);
  eleventyConfig.addFilter("isNotEmpty", isNotEmpty);
  eleventyConfig.addFilter("flat", flat);
  eleventyConfig.addFilter("ampersandList", ampersandList);
  eleventyConfig.addFilter("sentenceList", sentenceList);
  eleventyConfig.addFilter("ul", ul);
  eleventyConfig.addFilter("ol", ol);
  eleventyConfig.addFilter("dl", dl);
  eleventyConfig.addFilter("sum", sum);
};

pluginArrayFilters.isArray = isArray;
pluginArrayFilters.isNotArray = isNotArray;
pluginArrayFilters.isEmpty = isEmpty;
pluginArrayFilters.isNotEmpty = isNotEmpty;
pluginArrayFilters.flat = flat;
pluginArrayFilters.ampersandList = ampersandList;
pluginArrayFilters.sentenceList = sentenceList;
pluginArrayFilters.ul = ul;
pluginArrayFilters.ol = ol;
pluginArrayFilters.dl = dl;
pluginArrayFilters.sum = sum;

module.exports = pluginArrayFilters;