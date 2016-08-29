// public/js/controllers/NerdCtrl.js
angular.module('ItemCtrl', []).controller('ItemController', function($scope, Item){
    $scope.inserirItem = function(){
        Item.create({description : $scope.descricaoItem, status: false})
        .success(function(data){
            $scope.itens.push(data);
            $scope.descricaoItem = '';
        });
    };

    $scope.atualizarItens = function(){
        Item
        .get()
        .success(function(data) {
            $scope.itens = data;
        });
    };

    $scope.removerItem = function(id){
        Item.delete(id);

        $scope.atualizarItens();
    };

    $scope.finalizarItem = function(item){
        item.status = !item.status;
        Item.update(item).success(function(data) {
            item = data;
        });
    };

    $scope.atualizarItens();
});