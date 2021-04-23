
class BandPass {

  filter(soundWaveArray){
    if(soundWaveArray[0] < 40) {
      soundWaveArray[0] = 40 
    }
    return soundWaveArray

  }



}