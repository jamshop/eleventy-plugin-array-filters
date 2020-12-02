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
  return !isEmpty(value);
};

const flat = (value) => {
  return value.flat();
};

const count = (value) => {
  return value.length;
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

const sort = (value) => {
  value = [...value];
  return value.sort();
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

const unique = (value) => {
  return [...new Set(value)];
};

const reverse = (value) => {
  value = [...value];
  return value.reverse();
};

const first = (value) => {
  return value[0];
};

const last = (value) => {
  return value[value.length-1];
};

const pluginArrayFilters = (eleventyConfig) => {
  eleventyConfig.addFilter("isArray", isArray);
  eleventyConfig.addFilter("isNotArray", isNotArray);
  eleventyConfig.addFilter("isEmpty", isEmpty);
  eleventyConfig.addFilter("isNotEmpty", isNotEmpty);
  eleventyConfig.addFilter("flat", flat);
  eleventyConfig.addFilter("count", count);
  eleventyConfig.addFilter("ampersandList", ampersandList);
  eleventyConfig.addFilter("sentenceList", sentenceList);
  eleventyConfig.addFilter("sort", sort);
  eleventyConfig.addFilter("ul", ul);
  eleventyConfig.addFilter("ol", ol);
  eleventyConfig.addFilter("dl", dl);
  eleventyConfig.addFilter("sum", sum);
  eleventyConfig.addFilter("unique", unique);
  eleventyConfig.addFilter("reverse", reverse);
  eleventyConfig.addFilter("first", first);
  eleventyConfig.addFilter("last", last);
};

pluginArrayFilters.isArray = isArray;
pluginArrayFilters.isNotArray = isNotArray;
pluginArrayFilters.isEmpty = isEmpty;
pluginArrayFilters.isNotEmpty = isNotEmpty;
pluginArrayFilters.flat = flat;
pluginArrayFilters.count = count;
pluginArrayFilters.ampersandList = ampersandList;
pluginArrayFilters.sentenceList = sentenceList;
pluginArrayFilters.sort = sort;
pluginArrayFilters.ul = ul;
pluginArrayFilters.ol = ol;
pluginArrayFilters.dl = dl;
pluginArrayFilters.sum = sum;
pluginArrayFilters.unique = unique;
pluginArrayFilters.reverse = reverse;
pluginArrayFilters.first = first;
pluginArrayFilters.last = last;

module.exports = pluginArrayFilters;