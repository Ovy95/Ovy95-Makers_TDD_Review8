describe("BandPass", function () {
  
  var bandPass
  beforeEach(function(){
    bandPass = new BandPass();
  })

  describe("Filter Method",function () {
    it("Returns single array,value",function() {
      expect(bandPass.filter([40])).toEqual([40])
    })
    it("give a [0] return the minimum limit (40) default",function() {
      expect(bandPass.filter([39])).toEqual([40])
    })
    it("give a [1020] return the max limit (1000) default",function() {
      expect(bandPass.filter([1020])).toEqual([1000])
    })

  })

})