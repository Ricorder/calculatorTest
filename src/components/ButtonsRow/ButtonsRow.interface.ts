import { ViewProps } from 'react-native';
interface Row {
	w?: number;
	h?: number | null;
	t: string;
	bc?: string;
	tc?: string;
}
export interface ButtonsRowPropsTypes extends ViewProps {
	row: Row[];
	onKeyPress: <T extends string>(a: T) => void;
}
