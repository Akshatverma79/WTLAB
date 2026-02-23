class Employee {
	String _name;
	double _salary;

	Employee(this._name, this._salary);

	String get name => _name;
	double get salary => _salary;

	set name(String newName) {
		_name = newName;
	}

	set salary(double newSalary) {
		if (newSalary >= 0) {
			_salary = newSalary;
		} else {
			print('Salary cannot be negative.');
		}
	}

	void displayInfo() {
		print('Employee Name: $_name');
		print('Employee Salary: $_salary');
	}
}

class Teacher extends Employee {
	String _subject;

	Teacher(String name, double salary, this._subject) : super(name, salary);

	String get subject => _subject;

	set subject(String newSubject) {
		_subject = newSubject;
	}

	@override
	void displayInfo() {
		print('Teacher Name: $name');
		print('Teacher Salary: $salary');
		print('Subject: $_subject');
	}
}

void main() {
	Teacher teacher = Teacher('Default', 0, 'None');

	teacher.name = 'Akshat';
	teacher.salary = 50000;
	teacher.subject = 'Mathematics';

	teacher.salary = 55000;

	teacher.displayInfo();
}
