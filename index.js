window.dongvatcontroller = function ($scope, $http) {
  $scope.listdongvat = [];
  $http.get("  http://localhost:3000/dongvat").then(function (response) {
    $scope.listdongvat = response.data;
  });
  $scope.delete = function (id) {
    $http
      .delete("  http://localhost:3000/dongvat/" + id)
      .then(function (response) {
        if (response.status === 200) {
          alert("success");
        }
      });
  };
  $scope.add = function () {
    $http.post("  http://localhost:3000/dongvat", {
      id: $scope.id,
      ten: $scope.ten,
      gioitinh: $scope.gioitinh,
      xuatxu: $scope.xuatxu,
    });
  };
  $scope.update = function () {
    $http.put("  http://localhost:3000/dongvat/" + $scope.id, {
      id: $scope.id,
      ten: $scope.ten,
      gioitinh: $scope.gioitinh,
      xuatxu: $scope.xuatxu,
    });
  };
  $scope.detail = function (id) {
    $http
      .get("  http://localhost:3000/dongvat/" + id)
      .then(function (response) {
        $scope.id = response.data.id;
        $scope.ten = response.data.ten;
        $scope.gioitinh = response.data.gioitinh;
        $scope.xuatxu = response.data.xuatxu;
      });
  };
};
window.detail = function ($scope, $http, $routeParams) {
  var id = $routeParams.id;
  $http.get("  http://localhost:3000/dongvat/" + id).then(function (response) {
    $scope.id = response.data.id;
    $scope.ten = response.data.ten;
    $scope.gioitinh = response.data.gioitinh;
    $scope.xuatxu = response.data.xuatxu;
  });
};
