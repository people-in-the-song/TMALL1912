class Lunbo {
    constructor() {
        this.Imgs = document.querySelectorAll('#slideshow .BG img');
        this.list = document.querySelectorAll('#slideshow ul li');
        this.index = 0;
        this.tamer = null
    }
    init() {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].onmouseover = () => {
                //利用索引思维
                this.index = i;//索引存储下来了
                this.tabswitch();

            }

        }
        this.autoplay();
    }
    tabswitch() {
        for (let j = 0; j < this.list.length; j++) {
            this.list[j].className = '';
            this.Imgs[j].className = '';
        }
        this.list[this.index].className = ' active ';
        this.Imgs[this.index].className = ' show ';
    }

    autoplay() {
        this.timer = setInterval(() => {
            //每隔2s自动点击右键。
            this.index++;
            this.tabswitch();

            if (this.index > 4) {
                this.index = -1;
            }
        }, 6000);
    }
}

//http://10.31.152.36/TMALL1912/php/adddata.php
//天猫超市渲染
class renderTmallsurp {
    constructor() {
        this.$div_name = $('.div_name01');
    }
    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<6){

                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//天猫国际
class renderTmallHK {
    constructor() {
        this.$div_name = $('.div_name02');
    }

    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<7){

                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//美丽人生
class renderBeauty {
    constructor() {
        this.$div_name = $('.div_name03');
    }

    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){

                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//潮店酷玩
class renderDamp {
    constructor() {
        this.$div_name = $('.div_name04');
    }
    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//居家生活
class renderFamily  {
    constructor() {
        this.$div_name = $('.div_name05');
    }
    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//打造爱巢
class renderLove  {
    constructor() {
        this.$div_name = $('.div_name06');
    }
    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//户外出行
class renderOutdoors  {
    constructor() {
        this.$div_name = $('.div_name07');
    }
    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
class renderGuess  {
    constructor() {
        this.$div_name = $('.div_name08');
    }
    init() {
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<65){
                    $strhtml += `
                    <a href="" class="a_name">
                    <img src="${value.url}">
                    <p>${value.title}</p>
                    <p>￥${value.price}</p>
                    </a>
                `; 
                }else{
                    return false;
                }
                
            });
            $strhtml += '</article>';
            this.$div_name.html($strhtml);
        });
    }
}
//悬浮搜索框
class Location{
    constructor(){
    }
    init(){
        $(window).on('scroll', function () {
            let $top = $(window).scrollTop();
            if ($top >= 1000) {
                $('#location').stop(true).animate({
                    top: 0
                });
            } else {
                $('#location').stop(true).animate({
                    top: -50
                });
            }
        });
    }
}
define([], function () {
    return {
        init: function () {
            new Lunbo().init();
            new renderTmallsurp().init();
            new renderTmallHK().init();
            new renderBeauty().init();
            new renderDamp().init();
            new renderFamily().init();
            new renderLove().init();
            new renderOutdoors().init();
            new renderGuess().init();
            new Location().init();
        }
    }
});
