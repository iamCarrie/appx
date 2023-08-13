module.exports = {
  ieVersion: false, // true 或 false
  https: true,
  port: 20222,
  // proxy: {
  //   "/api": {
  //     target: "",
  //     secure: false,
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ""),
  //   },
  // },
  desktopMinWidth: 1366,
  mobileMaxWidth: 768,
  basicMobileWidth: 320,
  components: "_components",
  css: "assets/css",
  imgs: "assets/imgs",
  svg: "_svg",
  static: "static",
  js: "scripts",
  fonts: null,
};
