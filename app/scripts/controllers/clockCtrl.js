(function() {
     function ClockCtrl($scope,$interval,$filter,WORK_TIME,BREAK_TIME,LONG_BREAK) {
         
         var vm = this;
         var countDown;
         vm.completedWorkSessions = 0;
         vm.onBreak = false;
         vm.timerRunning = false;
         vm.workButton = "Start";
         vm.breakButton = "Start Break";
         vm.totalTime = WORK_TIME;
         
         var mySound = new buzz.sound("/assets/sounds/Metroid.mp3", {
             preload: true
         });
         
         vm.stopTimer = function() {
              vm.timerRunning = false;
              $interval.cancel(countDown);
              vm.resetTimer();
              
         };
         
         vm.resetTimer = function(){
             if(vm.onBreak && vm.completedWorkSessions !== 4){
                 vm.totalTime = BREAK_TIME;
                 vm.breakButton = "Start Break";              
             } else if(vm.onBreak && vm.completedWorkSessions === 4){
                 vm.totalTime = LONG_BREAK;
                 vm.completedWorkSessions =0;
             }
             else if (!vm.onBreak){
                 vm.workButton = "Start";
                 vm.totalTime = WORK_TIME;
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
                vm.completedWorkSessions++;
                
                vm.onBreak = true;
                vm.stopTimer();
                mySound.play();
            }
                else if(vm.totalTime === 0 && vm.onBreak){
                    vm.onBreak = false;
                    vm.stopTimer();
                    mySound.play();
                }
                
            },1000);
            
         };
     }
         


     angular
         .module('timeApp')
         .controller('ClockCtrl', ClockCtrl);
 })();


 