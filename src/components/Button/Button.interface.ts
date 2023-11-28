import { ViewProps } from 'react-native';

export interface ButtonPropsTypes extends ViewProps {
	w?: number | null;
	h?: number | null;
	text: string;
	backgroundColor?: string;
	textColor?: string;
	onPress: <T>(a: T) => void;
}
