function SearchDatasetsController ($scope, $element, $rootScope, $location, LocationSearchService) {
    $scope.search = function() {
        if ($scope.query) {
            $rootScope.showNavbarSearch = false;
            $location.path('datasets').search('query', $scope.query);
        } else {
            LocationSearchService.deleteFilter('query');
        }
    };
    $scope.$watch('isActive', function(isActive){
      isActive && $($element).find('input').focus();
    });
}