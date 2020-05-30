module.exports = function(lodash) {
  return {
    SetRouting: function(router) {
      router.get("/", this.indexPage);
    },
    indexPage: function(req, res) {
      return res.render("index", { test: "this is a test" });
    }
  }; 
};
