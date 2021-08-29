// React Native
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '50%',
		flexDirection: 'row'
	},
	numbers: {
		width: '75%',
		maxWidth: 270,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5
	},
	key: {
		width: 70,
		height: 70,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	operations: {
		width: '25%',
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10,
		gap: 5
	},
	operationKey: {
		width: 50,
		height: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	}
});