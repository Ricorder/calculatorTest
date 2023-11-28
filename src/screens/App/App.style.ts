import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		flex: 1,
	},
	displayContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		paddingHorizontal: 30,
	},
	displayText: {
		fontSize: 70,
		color: 'white',
	},
	buttonsContainer: {
		paddingHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 30,
	},
	buttonsRow: {
		flexDirection: 'row',
	},
});

export default styles;
