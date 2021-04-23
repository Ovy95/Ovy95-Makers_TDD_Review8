describe("BandPass", function () {
  
  var bandPass
  beforeEach(function(){
    bandPass = new BandPass();
  })

  describe("Filter Method",function () {
    it("Returns array,value we give first hardcoded test",function() {
      expect(bandPass.filter([40])).toEqual([40])
    })

  })

})