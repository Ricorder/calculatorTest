import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScaledSize,
	useWindowDimensions,
} from 'react-native';
import styles from './Button.style';
import { ButtonPropsTypes } from './Button.interface';

export const Button = ({
	w = null,
	h = null,
	text = '',
	backgroundColor = '#333333',
	textColor = 'white',
	onPress = () => {},
	...props
}: ButtonPropsTypes): JSX.Element => {
	const { width }: ScaledSize = useWindowDimensions();
	const butContWidth = width / 4 - 5;
	const height = h ?? butContWidth;
	const butWidth = w ?? butContWidth;
	return (
		<View
			style={[styles.buttonContainer, { width: butWidth, height: height }]}
			{...props}>
			<TouchableOpacity
				style={[styles.button, { backgroundColor: backgroundColor }]}
				onPress={() => onPress(text)}>
				<Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};
