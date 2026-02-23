class Person {
	String name;
	int age;

	Person(this.name, this.age);

	void displayInfo() {
		print('Name: $name');
		print('Age: $age');
	}
}

class Student extends Person {
	int rollNo;

	Student(String name, int age, this.rollNo) : super(name, age);

	@override
	void displayInfo() {
		print('Name: $name');
		print('Age: $age');
		print('Roll No: $rollNo');
	}
}

void main() {
	Student student = Student('Akshat', 20, 101);
	student.displayInfo();
}
