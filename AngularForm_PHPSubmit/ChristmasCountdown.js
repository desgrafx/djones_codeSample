'use strict';
//LocalDev
//var url = 'http://localhost:41548/api/GenericKnotice/'
//Dev
//var url = 'http://api.dg.dev.gaprc.net/api/GenericKnotice/'
//QA
//var url = 'http://api.dg.qa.gaprc.net/api/GenericKnotice/'
//Prod
var url = 'http://api.dg.purered.net/api/GenericKnotice/';

function DayController($scope, $http) {
    $scope.ToDay = new Date;
    $scope.myDate = ($scope.ToDay.getMonth() + 1) + "/" + ($scope.ToDay.getDate()) + "/" + ($scope.ToDay.getFullYear());
    $scope.Offers = {"Offers":
    [
           
    {
           "Link": "http://www.dollargeneral.com/product/index.jsp?productId=15702686",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/8.jpg",
           "OfferDate": "12/1/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/9.jpg",
           "OfferDate": "12/2/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/product/index.jsp?productId=15703686",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/10.jpg",
           "OfferDate": "12/3/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/product/index.jsp?productId=13361512",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/11.jpg",
           "OfferDate": "12/4/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/product/index.jsp?productId=13371069",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/12.jpg",
           "OfferDate": "12/5/2013"
       },       
    {
           "Link": "http://www.dollargeneralmusic.com",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/13.jpg",
           "OfferDate": "12/13/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/category/index.jsp?categoryId=11655084",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/14.jpg",
           "OfferDate": "12/14/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/family/index.jsp?categoryId=12669500",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/15.jpg",
           "OfferDate": "12/15/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/family/index.jsp?categoryId=12669500",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/16.jpg",
           "OfferDate": "12/16/2013"
       },       
    {
           "Link": "http://www2.dollargeneral.com/In-Store-Now/Pages/familyandfriends.aspx",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/17.jpg",
           "OfferDate": "12/17/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/18.jpg",
           "OfferDate": "12/18/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/category/index.jsp?categoryId=11655084",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/19.jpg",
           "OfferDate": "12/19/2013"
       },       
    {
           "Link": "http://www.pinterest.com/mydollargeneral/dg-pet-center/",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/20.jpg",
           "OfferDate": "12/20/2013"
       },       
    {
           "Link": "http://dollargeneral.triadretail.com/easy-meals/blogger-challenge/",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/21.jpg",
           "OfferDate": "12/21/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/category/index.jsp?categoryId=11655084",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/22.jpg",
           "OfferDate": "12/22/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com/family/index.jsp?page=1&categoryId=18961386&cp=18959706",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/23.jpg",
           "OfferDate": "12/23/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/24.jpg",
           "OfferDate": "12/24/2013"
       },       
    {
           "Link": "http://www.dollargeneral.com",
           'Text':"MyOffer",
           "Offer": "http://www2.dollargeneral.com/Seasonal/Pages/images/christmas/25.jpg",
           "OfferDate": "12/25/2013"
       }
   

        ]
    };
    


}






