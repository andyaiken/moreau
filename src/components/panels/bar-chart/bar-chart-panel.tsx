import { Tooltip } from 'antd';
import { Collections } from '../../../utils/collections';

import './bar-chart-panel.scss';

interface Props {
	min: number;
	max: number;
	highlights?: { x: number, label: string }[];
	getValue: (x: number) => number;
}

const BarChartPanel = (props: Props) => {
	const values: { x: number, y: number, label: string }[] = [];
	for (let n = props.min; n <= props.max; ++n) {
		let label= '';
		if (props.highlights) {
			const highlight = props.highlights.find(h => h.x === n);
			if (highlight) {
				label = highlight.label;
			}
		}
		values.push({ x: n, y: props.getValue(n), label: label });
	}

	const max = Collections.max(values.map(value => value.y), n => n) as number;

	const bars = values.map(value => {
		const fraction = value.y / max;
		return (
			<Tooltip key={value.x} title={value.label}>
				<div className='column'>
					<div className='top' style={{ flex: `${1 - fraction} 0 0`}} />
					{value.y > 0 ? <div className='bar' style={{ flex: `${fraction} 0 0`}} /> : null}
					<div className='axis-container'>
						<div className={value.label ? 'axis has-label' : 'axis'}>{value.x}</div>
					</div>
				</div>
			</Tooltip>
		);
	});

	return (
		<div className='bar-chart-panel'>
			<div className='bars'>
				{bars}
			</div>
		</div>
	);
}

export { BarChartPanel };
