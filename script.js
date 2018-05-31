angular.module("myApp", ["ngMaterial", "ngMessages"])
  .controller("MainCtrl", function(){
    this.items = [
      {
        label: "item1",
        description: "some item"
      },
      {
        label: "item2",
        description: "second item"
      },
      {
        label: "item3",
        description: "third item"
      }
    ];
  });
