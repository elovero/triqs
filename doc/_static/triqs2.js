// TODO: ADD Scrollfix function on internal page links to offset for navbar of 52px height.

function addPrismToCode() {
  // get all code elements
  var allCodeBlocksElements = $("div.synop-block").wrapInner(
    "<pre><code class='language-cpp'></code></pre>"
  );
  window.Prism = window.Prism || {};
  window.Prism.manual = false;

  Prism.highlightAll(false, function() {
    console.log("AUTO LOADED PRISM 🍕");
  });
}
$(document).ready(function() {
  // Once the DOM is loaded for the page, find all the tags
  // Now attach code elements with prism tags
  addPrismToCode();
});
