mixin Musical{
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;
  void entertainMe(){
    if(canPlayPiano){
      print('Playing piano');
    } else if(canCompose){
      print('Composing music');
    } else if(canConduct){
      print('Conducting an orchestra');
    }
  }
}
class Musician with Musical {}

void main(){
  Musician musician = Musician();
  musician.canPlayPiano = true;
  musician.entertainMe();
}