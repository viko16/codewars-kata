function myFunction () {
  const MyObject = {
    objProperty: 'string',
    objMethod: function () {
      return this.objProperty
    }
  }
  return MyObject
}
