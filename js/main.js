var app = angular.module('myApp', [
    'pascalprecht.translate',
    'ngCookies'
])

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: './i18n/',
        suffix: '.json'
    });
    var lang = navigator.language || navigator.userLanguage;
    lang = lang.substr(0, 2);
    // Is this translate "on the fly" ?
    if (lang === 'zh') {
        $translateProvider.preferredLanguage('zh');
    } else if (lang === 'en') {
        $translateProvider.preferredLanguage('en');
    } else{
        $translateProvider.preferredLanguage('en');
    }
    $translateProvider.useCookieStorage();
}]);

app.controller('myCtrl', function($scope,$translate) {

    //get lang set up from
    $scope.lang =  navigator.language || navigator.userLanguage;

    // **************************** method ************************
    $scope.translate = function(lang){
        $translate.use(lang);
    }

});

