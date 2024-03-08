export class Format {
	static sanitize = (text: string) => {
		// Capitalise the first character
		if (text.length > 0) {
			text = text[0].toUpperCase() + text.substring(1);
		}

		// If the string ends with something odd [;:,] replace it with a full stop
		if (text.endsWith(';') || text.endsWith(':') || text.endsWith(',')) {
			text = text.substring(0, text.length - 1) + '.';
		}

		return text;
	};

	static capitalize = (text: string) => {
		return text
			.split(' ')
			.filter(token => token.length > 0)
			.map(token => `${token[0].toUpperCase()}${token.substring(1)}`)
			.join(' ');
	};

	static toText = (value: number) => {
		return value.toLocaleString();
	};

	static toSize = (value: number) => {
		let str = `${value} B`;

		if (value > 1024) {
			value /= 1024;
			str = `${value.toFixed(2)} kB`;
		}

		if (value > 1024) {
			value /= 1024;
			str = `${value.toFixed(2)} MB`;
		}

		if (value > 1024) {
			value /= 1024;
			str = `${value.toFixed(2)} GB`;
		}

		return str;
	};

	static toCurrency = (value: number, symbol: string) => {
		if (value <= 0) {
			return 'FREE';
		}

		return `${symbol}${value.toFixed(2)}`;
	};
	
	static toModifier = (score: number) => {
		return Math.floor((score - 10) / 2);
	}

	static toSigned = (value: number) => {
		return (value >= 0 ? '+' : '') + value;
	};
}
