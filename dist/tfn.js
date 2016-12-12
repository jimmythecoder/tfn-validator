var tfn;
(function (tfn_1) {
    var validator = (function () {
        function validator() {
            this.eightDigitWeights = [10, 7, 8, 4, 6, 3, 5, 1];
            this.nineDigitWeights = [10, 7, 8, 4, 6, 3, 5, 2, 1];
        }
        validator.prototype.isValid = function (tfn) {
            if (!this.isValidLength(tfn)) {
                return false;
            }
            var weightedVal = this.weightedProduct(tfn);
            var remainder = weightedVal % 11;
            return remainder === 0;
        };
        validator.prototype.isValidLength = function (tfn) {
            var len = tfn.toString().length;
            return (len < 8 || len > 9) ? false : true;
        };
        validator.prototype.weightedProduct = function (tfn) {
            var numArray = this.numToArray(tfn);
            if (numArray.length < 8 || numArray.length > 9) {
                throw Error('Invalid input length');
            }
            var weights = numArray.length === 8 ? this.eightDigitWeights : this.nineDigitWeights;
            var product = 0;
            numArray.forEach(function (num, index) {
                product += num * weights[index];
            });
            return product;
        };
        validator.prototype.numToArray = function (number) {
            return number.toString(10).split("").map(function (digit) {
                return parseInt(digit, 10);
            });
        };
        return validator;
    }());
    tfn_1.validator = validator;
})(tfn || (tfn = {}));
//# sourceMappingURL=tfn.js.map