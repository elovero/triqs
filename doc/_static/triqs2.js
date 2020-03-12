// TODO: ADD Scrollfix function on internal page links to offset for navbar of 52px height.

function addPrismToCode() {
  // Get all code elements in OL's
  let allCPPSynop = Array.from(document.getElementsByClassName("cppsynopsis"));
  let cpplines = allCPPSynop
    .map(cpp => Array.from(cpp.querySelectorAll("div.line")))
    .flat();
  // Collect all the links
  let allLinks = cpplines
    .map(line => {
      let links = Array.from(line.getElementsByTagName("a"));
      if (links.length) {
        return links;
      }
    })
    .flat();
  //Wrap every line for Prism
  var lineCodeBlocks = $(".cppsynopsis").find("div.line");
  lineCodeBlocks.wrapInner("<pre><code class='language-cpp'></code></pre>");

  window.Prism = window.Prism || {};
  window.Prism.manual = false;

  Prism.highlightAll(false, function() {
    // Add back in the links.
    allLinks.forEach(link => {
      $.each(lineCodeBlocks, function(i, line) {
        if (line.innerText.includes(link.innerText)) {
          // add in the link.
          // remove the text
          let theBit = $(" > pre > code", line).wrapInner(link);
        }
      });
    });
    console.log("Moby");
    // Add back the numbers
  });
}
$(document).ready(function() {
  // Once the DOM is loaded for the page, find all the tags
  // Now attach code elements with prism tags
  console.log("START PRISM 🏴‍☠️");
  addPrismToCode();
});
