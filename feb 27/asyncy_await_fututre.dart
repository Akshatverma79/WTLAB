Future delayPrint(int seconds, String msg){
  final duration =Duration (seconds: seconds);
  return Future.delayed(duration).then((value) => msg);
}
void main() async{
  print('Life');
  await delayPrint(2,"Is").then((status){
    print(status);
  });
  print('Good');
}