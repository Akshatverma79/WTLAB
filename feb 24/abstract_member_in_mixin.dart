mixin Musician{
  void playInstrument(String instrumentName);
  void playPiano(){
    playInstrument('Piano');
  }
  void playGuitar(){
    playInstrument('Guitar');
  }
}
class Virtuoso with Musician{
  @override
  void playInstrument(String instrumentName) {
    print('Playing $instrumentName');
  }
}
void main(){
  Virtuoso virtuoso = Virtuoso();
  virtuoso.playPiano();
  virtuoso.playGuitar();
}