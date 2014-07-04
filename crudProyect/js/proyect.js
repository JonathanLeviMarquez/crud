
$(document).ready(function() {

	

	/*$('#btnAccept').click(function() {
              alert("Te amo Mariela <3")  
		});*/

});


$("#btnAddOrUp").click(function() {
       $("#personTable").after(
        '<div class="alert alert-success alert-dismissable">'+
            '<button type="button" class="close" ' + 
                    'data-dismiss="alert" aria-hidden="true">' + 
                '&times;' + 
            '</button>' + 
            'Usuario Guardado correctamente' + 
         '</div>');
 }); 



     var app = angular.module("myapp", ["firebase"]);


      function MyController($scope, $firebase) {
        //var ref = new Firebase("https://qq5ggaimca7.firebaseio-demo.com/");
        var ref = new Firebase("https://dhr4eiieno1.firebaseio-demo.com/people");

        $scope.actualId="";
        
        $scope.people = $firebase(ref);
        $scope.addPerson = function(e) {
          
          
          
          if ($scope.actualId=="") {
            $scope.people.$add({name: $scope.name, lastName: $scope.lastName,lastName2: $scope.lastName2});
          } else{

              var itemRef = new Firebase("https://dhr4eiieno1.firebaseio-demo.com/people"+'/'+ $scope.actualId);  
              itemRef.set({name: $scope.name, lastName: $scope.lastName,lastName2: $scope.lastName2});  
              $scope.actualId="";
              
          };

          $scope.name="";
          $scope.lastName="";
          $scope.lastName2="";

        }

        $scope.destroy = function(e,key) {
            
          var itemRef = new Firebase("https://dhr4eiieno1.firebaseio-demo.com/people"+'/'+key);  
          itemRef.remove();
          
        }

        $scope.destroyAll = function(e) {

          $scope.people.$remove();
        }

        $scope.select = function(e,key) {
        
          $scope.actualId=key;    
          var itemRef = new Firebase("https://dhr4eiieno1.firebaseio-demo.com/people"+'/'+key);  
          var item=$firebase(itemRef);
          $scope.name=item.name;
          $scope.lastName=item.lastName;
          $scope.lastName2=item.lastName2;

          $("#btnAddOrUps").prop('value', 'Modificar');
          
        }

      }








