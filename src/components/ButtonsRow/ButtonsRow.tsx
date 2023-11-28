import React from 'react';
import { View } from 'react-native';
import styles from './ButtonsRow.style';
import { Button } from '../Button/index';
import { ButtonsRowPropsTypes } from './ButtonsRow.interface';

export const ButtonsRow = ({
	row,
	onKeyPress,
	...props
}: ButtonsRowPropsTypes): JSX.Element => {
	return (
		<View style={styles.buttonsRow} {...props}>
			{row.map((el, i) => {
				return (
					<Button
						key={i}
						w={el.w}
						h={el.h}
						text={el.t}
						backgroundColor={el.bc}
						textColor={el.tc}
						onPress={key => onKeyPress(key)}
					/>
				);
			})}
		</View>
	);
};
