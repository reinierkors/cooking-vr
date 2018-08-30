/**
 * Swap template with mask animation.
 */
AFRAME.registerComponent("template-swap", {
  schema: {},
  init: function() {
    console.log("init");
    var template = document.getElementById("template");
    var el = this.el;

    el.addEventListener("mouseenter", function() {
      setTimeout(function() {
        template.setAttribute("template", "src", "scenes/cooking.html");
      }, 200);
    });
  }
});