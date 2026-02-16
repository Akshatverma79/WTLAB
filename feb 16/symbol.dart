void main(){
  Symbol sym1= #dart;
  Symbol sym2= #flutter;
  print(sym1);
  print(sym2);
  Map<Symbol, String> myMap={
    #language:"Dart",
    #framework:"Flutter",
  };
  print(myMap[#language]);
  print(myMap[#framework]);
}