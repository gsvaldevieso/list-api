// public/js/services/ItemService.js
angular.module('ItemService', [])
.factory('Item', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/item');
        },
        create : function(itemData) {
            return $http.post('/api/item', itemData);
        },
        delete : function(id) {
            return $http.delete('/api/item/' + id);
        },
        update: function(item){
            return $http.put('/api/item', item);
        }
    }       
}]);