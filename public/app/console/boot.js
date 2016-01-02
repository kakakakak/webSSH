System.register(['angular2/platform/browser', './index.component'], function(exports_1) {
    var browser_1, index_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(index_component_1.IndexComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map