import 'dart:io';

void main() {
  stdout.write('Enter Student Name: ');
  String studentName = stdin.readLineSync() ?? '';

  int rollNumber = _readRollNumber();

  List<double> marks = [];
  for (int i = 1; i <= 5; i++) {
    double mark = _readValidMark(i);
    marks.add(mark);
  }

  double total = marks.reduce((sum, mark) => sum + mark);
  double average = total / 5;

  bool hasFailedSubject = marks.any((mark) => mark < 35);
  String grade = _calculateGrade(average);
  bool isPass = !hasFailedSubject && average >= 40;

  stdout.writeln('\n--- Student Details ---');
  stdout.writeln('Student Name: $studentName');
  stdout.writeln('Roll Number: $rollNumber');
  stdout.writeln('Marks of 5 subjects: $marks');
  stdout.writeln('Total Marks: ${total.toStringAsFixed(2)}');
  stdout.writeln('Average Marks: ${average.toStringAsFixed(2)}');
  stdout.writeln('Grade: $grade');
  stdout.writeln('Result Status: ${isPass ? 'Pass' : 'Fail'}');

  if (hasFailedSubject) {
    stdout.writeln(
      'Note: Student is declared Fail because at least one subject mark is below 35.',
    );
  }
}

int _readRollNumber() {
  while (true) {
    stdout.write('Enter Roll Number: ');
    String? input = stdin.readLineSync();
    int? rollNumber = int.tryParse(input ?? '');

    if (rollNumber != null) {
      return rollNumber;
    }

    stdout.writeln('Invalid roll number. Please enter a valid integer.');
  }
}

double _readValidMark(int subjectNumber) {
  while (true) {
    stdout.write('Enter marks for subject $subjectNumber: ');
    String? input = stdin.readLineSync();
    double? mark = double.tryParse(input ?? '');

    if (mark == null) {
      stdout.writeln('Invalid input. Please enter a numeric value.');
      continue;
    }

    if (mark < 0 || mark > 100) {
      stdout.writeln('Invalid marks. Marks must be between 0 and 100.');
      continue;
    }

    return mark;
  }
}

String _calculateGrade(double average) {
  if (average >= 80) {
    return 'A';
  } else if (average >= 60) {
    return 'B';
  } else if (average >= 40) {
    return 'C';
  }

  return 'Fail';
}
