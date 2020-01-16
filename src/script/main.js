
import "../stylesheets/index.css";
import "../stylesheets/cartlist.css";
import "../stylesheets/details.css";
import "../stylesheets/login.css";
import "../stylesheets/registry.css";
import "jquery";
import{
    Index,
}from'./index.js';
// import{
//     Cartlist,
// }from'./cartlist.js';

import{
    Lunbo,
}from'./lunbo.js';
import{
    Details,
}from'./details.js';

// new CartList().init();//使用渲染模块
new Index().init();//使用渲染模块
new Details().init();