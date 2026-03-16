// Complete Execution-Ready Dart Program (All Concepts)
int globalValue = 50;

void main() {
  // Variables & Data Types
  int a = 10;
  int b = 5;

  // Control Flow
  if (a > b) {
    print("a is greater than b");
  }

  // Loop
  for (int i = 1; i <= 3; i++) {
    print("Loop count: $i");
  }

  // Function call
  int sum = addNumbers(a, b);
  print("Sum: $sum");

  // Scope
  print("Global Value: $globalValue");
}

int addNumbers(int x, int y) {
  return x + y;
}


//Declaring Integer ( int)


// Method 1: Declaring an integer variable int age = 25;

// Method 2: Nullable integer declaration int? count;

// Method 3: Using 'var' keyword (automatically detects type)
// Dart infers it as int var year = 2024;

Declaring Decimal Numbers ( double)


// Method 1: Explicit declaration double pi = 3.1415;

// Method 2: Nullable double double? percentage;

// Method 3: Using 'var' keyword
// Dart infers it as double var temperature = 36.6;


void main() {

// Declare an integer
int num1 = 2;

// Declare a double value
double num2 = 1.5;
// Print the integer and
// double values
print("$num1");
print("$num2");

// Perform addition
// (int + double results in a double)
var sum = num1 + num2;

// Print the sum of
// num1 and num2
print("Sum = $sum");
}




// Lexicals
// Declaring a variable whose scope is global
var outter_most;

void main() {
// This variable is inside main and can be accessed within
var inside_main;

void Lex1() {
// This variable is inside Lex1 and can be accessed within
var inside_Lex1;

void Lexi() {
// This variable is Lexi and can be accessed within
var inside_Lexi;

}
}
}


//Lexical Closures:
Function Lex1(num add) {
return (num i) => add + i;
}

void main() {
// Create a function that adds 2.
var Lexi1 = Lex1(2);

// Create a function that adds 4.
var Lexi2 = Lex1(4);

print(Lexi1(3));
print(Lexi2(3));
}



// Mixins
class Musician extends Performer with Musical {
// ···
}


class Maestro extends Person with Musical , Aggressive , Demented { Maestro(String maestroName) {
name = maestroName; canConduct = true;
}
}

////////////
mixin Musical {
bool canPlayPiano = false; bool canCompose = false; bool canConduct = false;

void entertainMe() { if (canPlayPiano) {
print('Playing piano');
} else if (canConduct) { print('Waving hands');
} else {
print('Humming to self');
}}}



// Define abstract members in the mixin
mixin Musician {
void playInstrument(String instrumentName); // Abstract method.


void playPiano() { playInstrument('Piano');
}
void playFlute() { playInstrument('Flute');
}
}


class Virtuoso with Musician {


@override
void playInstrument(String instrumentName) { // Subclass must define. print('Plays the $instrumentName beautifully');
}
}


// Await Sync
// Function that returns a Future that
// completes after a given delay
Future delayedPrint(int seconds, String msg) {

// Create a Duration object representing the delay time
final duration = Duration(seconds: seconds);

// Return a Future that completes after the
// specified duration and then returns the message
return Future.delayed(duration).then((value) => msg);
}

void main() async { print('Life');
// Prints immediately

// Waits for 2 seconds before printing "Is"
await delayedPrint(2, "Is").then((status) { print(status);
});

// Prints immediately after "Is", since
// the previous Future was awaited
print('Good');
}

