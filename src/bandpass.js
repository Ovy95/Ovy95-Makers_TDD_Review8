
class BandPass {

  filter(soundWaveArray){

    for (let index = 0; index < soundWaveArray.length; index++) {
        

      if(soundWaveArray[index] < 40) {
        soundWaveArray[index] = 40 
      }
      if(soundWaveArray[index] > 1000) {
        soundWaveArray[index] = 1000
      }
    }

    return soundWaveArray

  }



}