(function() {
     function ClockCtrl($scope,$interval,$filter,WORK_TIME,BREAK_TIME) {
         
         var vm = this;
         var countDown;
         vm.onBreak = false;
         vm.timerRunning = false;
         vm.workButton = "Start";
         vm.breakButton = "Start Break";
         vm.totalTime = WORK_TIME;
         
         vm.stopTimer = function() {
              vm.resetTimer();
              vm.timerRunning = false;
              $interval.cancel(countDown);
              
         };
         
         vm.resetTimer = function(){
             if(vm.timerRunning && !vm.onBreak){
                 vm.totalTime = WORK_TIME;
                 vm.workButton = "Start";
             } else if (vm.timerRunning && vm.onBreak){
                 vm.breakButton = "Start Break";
                 vm.totalTime = BREAK_TIME;
             }
         };
         
         vm.startTimer = function(){
             if(vm.timerRunning === true){
                return vm.stopTimer();
             }
            countDown = $interval(function() {
                vm.totalTime--;
                vm.timerRunning = true;
                if(vm.timerRunning && !vm.onBreak){
                    vm.workButton = "Reset";
                } else if (vm.timerRunning && vm.onBreak){
                    vm.breakButton = 'Reset Break';
                }
                if(vm.totalTime === 0 && !vm.onBreak){
                vm.stopTimer();
                vm.timerRunning = false;
                vm.onBreak = true;
                vm.totalTime = BREAK_TIME;
            }
                else if(vm.totalTime === 0 && vm.onBreak){
                    vm.stopTimer();
                    vm.timerRunning = false;
                    vm.onBreak = false;
                    vm.totalTime = WORK_TIME;
                }
            },1000);
            
         };
     }
         


     angular
         .module('timeApp')
         .controller('ClockCtrl', ClockCtrl);
 })();


 