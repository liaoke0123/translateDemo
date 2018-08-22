var app = angular.module('myApp', [
    'pascalprecht.translate',
    'ngCookies'
])

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: './i18n/',
        suffix: '.json'
    });

    var lang = getLangSetString();

    if (lang.startWith('zh')) {
        $translateProvider.preferredLanguage('zh_CN');
    } else if (lang.startWith('en') && lang === 'en-CA') {
        $translateProvider.preferredLanguage('en_CA');
    } else if (lang.startWith('en') && lang === 'en-US'){
        $translateProvider.preferredLanguage('en_US');
    } else {
        throw new Error("no default set");
    }
    $translateProvider.useCookieStorage();
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escape');
}]);

app.controller('myCtrl', function($scope,$translate) {

    //get lang set up from
    $scope.lang =  getLangSetString();

    // **************************** method ************************
    $scope.translate = function(lang){
        $translate.use(lang);
    }

});

//*****************************Util***********************************

String.prototype.startWith=function(str){
    var reg=new RegExp("^"+str);
    return reg.test(this);
}

String.prototype.endWith=function(str){
    var reg=new RegExp(str+"$");
    return reg.test(this);
}

var getLangSetString = function(){
    return  navigator.languages[0]
        || navigator.language || navigator.browserLanguage
        || navigator.systemLanguage|| navigator.userLanguage;
}
