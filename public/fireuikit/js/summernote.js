var SummernoteDemo = function () {
    var n = function () {
        $(".summernote").summernote({height: 150})
    };
    return {
        init: function () {
            n()
        }
    }
}();
jQuery(document).ready(function () {
    SummernoteDemo.init()
});
