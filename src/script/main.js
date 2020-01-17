
import "../stylesheets/index.css";
import "../stylesheets/cartlist.css";
import "../stylesheets/details.css";
import "../stylesheets/login.css";
import "../stylesheets/registry.css";
import "jquery";
import{
    Index,
}from'./index.js';
import{
    Details,
}from'./details.js';
import{
    Cartlist
}from'./cartlist.js';


let currentPage = $('#current');
if(currentPage.attr('page') === 'index'){
    new Index().init();//首页
}else if(currentPage.attr('page') === 'detail'){
    new Details().init();//详情页
}else if(currentPage.attr('page')==='cartlist'){
    new CartList().init();//购物车
}
