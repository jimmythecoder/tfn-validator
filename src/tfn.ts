/// <reference path="./tfn.d.ts" />

namespace tfn {
	
	export class validator implements ValidatorClass {

		private eightDigitWeights: number[] = [10,7,8,4,6,3,5,1];
		private nineDigitWeights: number[] 	= [10,7,8,4,6,3,5,2,1];
		
		constructor() {

		}

		isValid(tfn: number): boolean {

			if(!this.isValidLength(tfn)) {
				return false;
			}

			let weightedVal = this.weightedProduct(tfn);
			let remainder = weightedVal % 11;

			return remainder === 0;
		}

		isValidLength(tfn: number): boolean {
			let len = tfn.toString().length;

			return (len < 8 || len > 9) ? false : true;
		}

		weightedProduct(tfn: number): number {

			let numArray = this.numToArray(tfn);

			if(numArray.length < 8 || numArray.length > 9) {
				throw Error('Invalid input length');
			}

			let weights = numArray.length === 8 ? this.eightDigitWeights : this.nineDigitWeights;
			let product: number = 0;

			numArray.forEach(function(num: number, index: number) {
				product += num * weights[index];
			});

			return product;
		}

		numToArray(number: number): number[] {
			return number.toString(10).split("").map(function(digit: string) {
				return parseInt(digit, 10);	
			});
		}
	}

}