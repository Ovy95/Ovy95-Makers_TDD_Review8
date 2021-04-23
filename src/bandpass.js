
class BandPass {

  filter(soundWaveArray){
    if(soundWaveArray[0] < 40) {
      soundWaveArray[0] = 40 
    }
    if(soundWaveArray[0] > 1000) {
      soundWaveArray[0] = 1000
    }
    return soundWaveArray

  }



}