define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['list-video.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <a href=\"#/view/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">    \n        <img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\" class='poster'/>\n    </a>              \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!-- <script id=\"video-lib-template\" type=\"text/x-handlebars-template\"> -->\n<p> vid template works </p>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div><span id=\"next\">Page "
    + container.escapeExpression(((helper = (helper = helpers.limit || (depth0 != null ? depth0.limit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"limit","hash":{},"data":data}) : helper)))
    + " </span> </div>\n<!-- </script> -->";
},"useData":true});
});