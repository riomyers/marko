"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_defineWidget_legacy = legacy_helpers.w,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-include-attr/index", function() {
      return marko_defineWidget_legacy(require("./"));
    }),
    marko_rendererLegacy = legacy_helpers.r,
    marko_renderComponent = require("marko/src/components/taglib/helpers/renderComponent"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    _preserve_tag = marko_loadTag(require("marko/src/components/taglib/preserve-tag"));

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div><h1>Header</h1>");

  var __key3 = __component.___nextKey("2");

  out.w("<div>");

  _preserve_tag({
      bodyOnly: true,
      if: !__component.b,
      key: __key3,
      renderBody: function renderBody(out) {
        marko_renderComponent(include_tag, {
            _target: __component.b
          }, out, "4");
      }
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    split: true,
    type: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        },
      {
          type: "require",
          path: "marko/src/components"
        }
    ],
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/preserve-tag"
    ]
  };
