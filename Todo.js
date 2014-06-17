function todoController($scope) {
    
    $scope.todos = [{Text: "learn angularJS", done: false},
                    {Text: "build an app", done: false}
                   ];
    
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };
    
    $scope.clearTodo = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return!todo.done;           
        });    
    };
   
    $scope.addTodo = function () {  
       if ($scope.inputTodoText == null) {
           window.alert("don't have any task to do?!");
       } else {
                $scope.todos.push({Text: $scope.inputTodoText, done: false}); 
                $scope.inputTodoText = "";                
              };
          
    };    
        
};
