declare namespace tfn {

	interface ValidatorClass {

		isValid(tfn: number): boolean;

		isValidLength(tfn: number): boolean;

		weightedProduct(tfn: number): number;

		numToArray(number: number): number[];
	}

	interface validatorStatic {
		new (): ValidatorClass;
	}

}
