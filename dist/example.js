var app;
(function (app) {
    var validator = new tfn.validator();
    function validate(input) {
        var isValid = validator.isValid(parseInt(input.value, 10));
        if (isValid) {
            addClass('is-success', input);
            removeClass('is-danger', input);
        }
        else {
            addClass('is-danger', input);
            removeClass('is-success', input);
        }
    }
    app.validate = validate;
    function addClass(className, element) {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }
    function removeClass(className, element) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    }
})(app || (app = {}));
//# sourceMappingURL=example.js.map