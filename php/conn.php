<?php
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');//主机 或者 127.0.0.1
define('USERNAME','root');//用户名
define('PASSWORD','');//密码
define('DBNAME','tmall');//数据库名称
$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//连接数据库
//@:容错处理，错误信息不显示。
if($conn->connect_error){//如果存在错误，输出错误。
    die('数据库连接错误,错误信息：'.$conn->connect_error);
}

$conn->query('SET NAMES UTF-8');


?>