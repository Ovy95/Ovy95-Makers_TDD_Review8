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

    it("given [30,20] return [40,40]",function() {
      expect(bandPass.filter([30,20])).toEqual([40,40])
    })

    it("given [1003,20,57] returns [1000,40,57]",function() {
      expect(bandPass.filter([1003,20,57])).toEqual([1000,40,57])
    })



  })

  describe("user gives own min and max values ",function () {
    it("Given array plus users min and max values ",function() {
      expect(bandPass.filter([20,50],20 ,50)).toEqual([20,50])
    })

    it("Given array plus users min and max values ",function() {
      expect(bandPass.filter([20,50],20)).toEqual([20,50])
    })

    it("check max single value ",function() {
      expect(bandPass.filter([20,55],undefined,50)).toEqual([40,50])
    })
    it("check min value set ",function() {
      expect(bandPass.filter([20,55],30,undefined)).toEqual([30,55])
    })

    
  })


})