import styles from './App.style';
import React, { useState } from 'react';
import { View, Text, useWindowDimensions, ScaledSize } from 'react-native';
import { black, light, orange } from './constants';
import { ButtonsRow } from '../../components/ButtonsRow/ButtonsRow';

const App = (): JSX.Element => {
	const { width }: ScaledSize = useWindowDimensions();
	const bcw = width / 4 - 5;
	const [firstValue, setFirstValue] = useState<string>('');
	const [operator, setOperator] = useState<string>('');
	const [secondValue, setSecondValue] = useState<string>('');
	const [clearLabel, setClearLabel] = useState<string>('AC');

	const onKeyPress = (key: string) => {
		switch (key) {
			case 'AC':
				setFirstValue('');
				setOperator('');
				setSecondValue('');
				break;
			case 'C':
				if (secondValue !== '') {
					setSecondValue('');
				} else {
					setFirstValue('');
				}
				setClearLabel('AC');
				break;
			case '+/-':
				if (firstValue !== '' || secondValue !== '') {
					if (firstValue !== '' && secondValue === '') {
						setFirstValue(parseFloat(firstValue * -1).toString());
					} else {
						setSecondValue(parseFloat(secondValue * -1).toString());
					}
				}
				break;
			case '%':
				calculate(firstValue, key, secondValue);
				break;
			case '/':
			case 'x':
			case '-':
			case '+':
				if (secondValue !== '') {
					calculate(firstValue, operator, secondValue);
				} else {
					setOperator(key);
				}
				break;
			case '=':
				calculate(firstValue, operator, secondValue);
				break;
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
			case ',':
				setClearLabel('C');
				if (operator === '') {
					setFirstValue(e => `${e}${key}`);
				} else {
					setSecondValue(e => `${e}${key}`);
				}
				break;
		}
	};
	const getDisplayText = () => {
		if (secondValue !== '') {
			return secondValue;
		}
		if (firstValue === '') {
			return '0';
		}
		return firstValue;
	};
	const calculate = (a = '', o = '', b = '') => {
		let result: number | string = 0;
		a = a.replace(',', '.');
		b = b.replace(',', '.');
		switch (o) {
			case '%':
				result = parseFloat(a) / 100;
				break;
			case '/':
				result = parseFloat(a) / parseFloat(b);
				break;
			case 'x':
				result = parseFloat(a) * parseFloat(b);
				break;
			case '-':
				result = parseFloat(a) - parseFloat(b);
				break;
			case '+':
				result = parseFloat(a) + parseFloat(b);
				break;
		}
		if (result % 1 !== 0) {
			const digitsValue = result.toString().split('.')[1];
			if (!digitsValue) {
				result = '';
			} else if (digitsValue.length > 6) {
				result = result.toFixed(6);
			}
		}
		result = result.toString().replace('.', ',');
		setFirstValue(result);
		setOperator('');
		setSecondValue('');
	};

	const data = [
		[
			{ t: clearLabel, bc: light, tc: black },
			{ t: '+/-', bc: light, tc: black },
			{ t: '%', bc: light, tc: black },
			{ t: '/', bc: orange },
		],
		[{ t: '7' }, { t: '8' }, { t: '9' }, { t: 'x', bc: orange }],
		[{ t: '4' }, { t: '5' }, { t: '6' }, { t: '-', bc: orange }],
		[{ t: '1' }, { t: '2' }, { t: '3' }, { t: '+', bc: orange }],
		[{ w: width / 2 - 10, h: bcw, t: '0' }, { t: ',' }, { t: '=', bc: orange }],
	];
	return (
		<View style={styles.container}>
			<View style={styles.displayContainer}>
				<Text style={styles.displayText}>{getDisplayText()}</Text>
			</View>
			<View style={styles.buttonsContainer}>
				{data.map((el, i) => (
					<ButtonsRow key={i} row={el} onKeyPress={onKeyPress} />
				))}
			</View>
		</View>
	);
};

export default App;
