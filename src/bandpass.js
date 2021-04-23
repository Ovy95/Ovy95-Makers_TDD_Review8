
class BandPass {

  filter(soundWaveArray,min = 40,max=1000){

    for (let index = 0; index < soundWaveArray.length; index++) {
        

      if(soundWaveArray[index] < min) {
        soundWaveArray[index] = min 
      }
      if(soundWaveArray[index] > max) {
        soundWaveArray[index] = max
      }
    }

    return soundWaveArray

  }



}