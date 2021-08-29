// React
import React from 'react';

// React Native
import { View, Text } from 'react-native';

// Styles
import { styles } from './styles';

// React Native Gesture Handler
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type KeypadProps = {
	setExpression: () => void;
}

export function Keypad({ setExpression, ...rest }: KeypadProps) {

	const keys = [...'123456789'];
	const operations = [...'+-*/='];

	function validateExpression(expression: string) {
		const regExp = /^\-{0,2}(\d)+((\+|\-{1,2}|\*|\/)(\d))*$/g;

		return expression.match(regExp);
	}

	function handleSetExpression(expression: string) {
		setExpression(oldValue => oldValue + expression);
	}

	function handleCalculateExpression() {
		setExpression(oldValue => 
			validateExpression(oldValue)
			? eval(oldValue)
			: oldValue
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.numbers}>
				{
					keys.map(number => (
						<RectButton 
							style={styles.key} 
							onPress={() => handleSetExpression(number)} 
							key={number}
							{...rest}
						>
							<Text>{number}</Text>
						</RectButton>
					))
				}
			</View>

			<View style={styles.operations}>
				{
					operations.map(signal => (
						signal !== '=' 
						? 	<RectButton 
								style={styles.operationKey} 
								onPress={() => handleSetExpression(signal)} 
								key={signal}
								{...rest}
							>
								<Text>{signal}</Text>
							</RectButton>

						: 	<RectButton 
								style={styles.operationKey} 
								onPress={() => handleCalculateExpression()} 
								key={signal}
								{...rest}
							>
								<Text>{signal}</Text>
							</RectButton>
					))
				}
			</View>
		</View>
	);
}