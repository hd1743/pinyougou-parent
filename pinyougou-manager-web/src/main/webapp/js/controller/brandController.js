app.controller('brandController',function ($scope,$http,$controller,brandService) {

    $controller('baseController',{$scope:$scope});//继承

    //查询品牌
    $scope.findAll=function () {
        brandService.findAll().success(
            function (response) {
                $scope.list=response;
            }
        );
    }


    $scope.findPage=function(page,size){
        brandService.findPage(page,size).success(
            function(response){
                $scope.list=response.rows;
                $scope.paginationConf.totalItems=response.total;//更新总记录数
            }
        );
    }

    //新增
    $scope.save=function () {
        var Object=null;//方法名称
        if($scope.entity.id!=null){
            Object=brandService.update($scope.entity);
        }else{
            Object=brandService.add($scope.entity);
        }
        Object.success(
            function (response) {
                if(response.success){
                    $scope.reloadList();//重新加载
                }else{
                    alert(response.message);
                }
            }
        );
    }


    //查询实体
    $scope.findOne=function (id) {
        brandService.findOne(id).success(
            function (response) {
                $scope.entity=response;
            }
        );
    }



    //删除
    $scope.dele=function () {
        brandService.dele($scope.selectIds).success(
            function (response) {
                if(response.success){
                    $scope.reloadList();//刷新
                }else{
                    alert(response.message);
                }
            }
        );
    }

    $scope.searchEntity={};//定义搜索对象
    //条件查询
    $scope.search=function (page,size) {
        brandService.search(page,size,$scope.searchEntity).success(
            function (response) {
                $scope.list=response.rows;//给列表变量赋值
                $scope.paginationConf.totalItems=response.total;//总记录数
            }
        );
    }
});