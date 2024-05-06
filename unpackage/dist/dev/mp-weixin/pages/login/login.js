"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toRegister: function() {
      common_vendor.index.navigateTo({
        url: "../register/register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.login()),
    b: common_vendor.o(($event) => $options.toRegister())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Nreal/emos/emos-PreEnd/emos-PreEnd/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
