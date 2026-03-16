import 'dart:io';

double add(double a, double b) {
	return a + b;
}

double subtract(double a, double b) {
	return a - b;
}

double multiply(double a, double b) {
	return a * b;
}

String divide(double a, double b) {
	if (b == 0) {
		return 'Error: Division by zero is not allowed.';
	}
	return (a / b).toString();
}

String calculate(double a, double b, String operator) {
	switch (operator) {
		case '+':
			return add(a, b).toString();
		case '-':
			return subtract(a, b).toString();
		case '*':
			return multiply(a, b).toString();
		case '/':
			return divide(a, b);
		default:
			return 'Error: Invalid operator. Use +, -, *, or /.';
	}
}

void main() {
	print('Hello User!');
	print('Simple Calculator');

	stdout.write('Enter first number: ');
	double? first = double.tryParse(stdin.readLineSync() ?? '');

	stdout.write('Enter operator (+, -, *, /): ');
	String operator = stdin.readLineSync() ?? '';

	stdout.write('Enter second number: ');
	double? second = double.tryParse(stdin.readLineSync() ?? '');

	if (first == null || second == null) {
		print('Error: Please enter valid numeric values.');
		return;
	}

	String result = calculate(first, second, operator);
	print('Result: $result');
}
