//(function() {
//  function Tasks($firebaseArray,$scope) {
//      
//    var ref = firebase.database().ref();
//
//    
//      
//    var tasks = $firebaseArray(ref);
//
//    return {
//      all: tasks,
//      addTask: function () {
//        tasks.$add({ text: 'hello'});
//          console.log(tasks)
//     }
//        
//  };
//    
//  }
//
//
//
//  angular
//    .module('timeApp')
//    .factory('Tasks', ['$firebaseArray', Tasks]);
//})();