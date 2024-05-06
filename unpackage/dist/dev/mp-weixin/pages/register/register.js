"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    register: function() {
      common_vendor.index.login({
        provider: "weixin",
        success: function(resp) {
          console.log(resp.code);
          let code = resp.code;
          common_vendor.index.getUserInfo({
            provider: "weixin",
            success: function(resp2) {
              let nickName = resp2.userInfo.nickName;
              let avatarUrl = resp2.userInfo.avatarUrl;
              ({
                code,
                nickname: nickName,
                photo: avatarUrl,
                registerCode: that.registerCode
              });
            }
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.registerCode,
    b: common_vendor.o(($event) => _ctx.registerCode = $event.detail.value),
    c: common_vendor.o(($event) => $options.register())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Nreal/emos/emos-PreEnd/emos-PreEnd/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
