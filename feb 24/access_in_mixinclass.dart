mixin NameIdentity{
  String get name;
  @override
  int get hashCode => name.hashCode;
  @override
  bool operator==(other)=> other is NameIdentity && other.name == name;
}
class Person with NameIdentity{
  final String name;
  Person(this.name);
}
void main(){
  Person person1 = Person('Akshat');
  Person person2 = Person('Akshat');
  print(person1 == person2);
}