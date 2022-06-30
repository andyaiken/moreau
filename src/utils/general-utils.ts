import { v4 as uuid4 } from 'uuid';

export class GeneralUtils {
	public static guid() {
		return uuid4();
	}

	public static sort(collection: any[], sorts: { field: string, dir: 'asc' | 'desc' }[] = []) {
		if (sorts.length === 0) {
			sorts = [{ field: 'name', dir: 'asc' }];
		}

		const fn = (a: any, b: any, field: string): number => {
			if ((a[field] !== undefined) && (b[field] !== undefined)) {
				if (a[field] < b[field]) { return -1; }
				if (a[field] > b[field]) { return 1; }
			}
			return 0;
		};

		collection.sort((a, b) => {
			let order = 0;
			sorts.forEach(sort => {
				if (order === 0) {
					order = fn(a, b, sort.field) * (sort.dir === 'asc' ? 1 : -1);
				}
			});
			return order;
		});

		return collection;
	}

	public static distinct(list: any[], key: (item: any) => any = item => JSON.stringify(item)) {
		const seen = new Set();
		return list.filter(item => {
			const k = key(item);
			return seen.has(k) ? false : seen.add(k);
		});
	}

	public static debounce(func: () => void, delay = 500) {
		let timeout: any;
		return () => {
			clearTimeout(timeout);
			timeout = setTimeout(func, delay);
		};
	}

	public static randomNumber(max: number) {
		if (max <= 0) {
			return 0;
		}

		return Math.floor(Math.random() * max);
	}

	public static randomBoolean() {
		return GeneralUtils.randomNumber(2) === 0;
	}

	public static randomDecimal() {
		return GeneralUtils.randomNumber(100) / 100;
	}
}
