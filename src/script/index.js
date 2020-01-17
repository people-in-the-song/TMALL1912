class Index {
    constructor() {
        this.Imgs = document.querySelectorAll('#slideshow .BG img');
        this.list = document.querySelectorAll('#slideshow ul li');
        this.index = 0;
        this.tamer = null

        //天猫超市渲染
        this.$div_name = $('.div_name01');
        //天猫国际
        this.$div_name2 = $('.div_name02');
        //美丽人生
        this.$div_name3 = $('.div_name03');
        //潮店酷玩
        this.$div_name4 = $('.div_name04');
        //居家生活
        this.$div_name5 = $('.div_name05');
        //打造爱巢
        this.$div_name6 = $('.div_name06');
        //户外出行
        this.$div_name7 = $('.div_name07');
        //猜你喜欢
        this.$div_name8 = $('.div_name08');
        //楼梯效果
        this.$stairs=$('#stairs a');//
        this.$a3=$('#stairs .a3');//回到顶部按钮


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
        this.random_shopping();
        this.random_TmallHK();
        this.random_Beauty();
        this.random_Damp();
        this.random_Family();
        this.random_Love();
        this.random_Outdoors();
        this.random_Guess();
        this.random_Location();
        this.random_stairs();
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

    random_shopping(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<6){

                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
    //天猫国际
    random_TmallHK(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<7){

                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name2.html($strhtml);
        });
    }
    //美丽人生
    random_Beauty(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){

                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name3.html($strhtml);
        });
    }
    //潮店酷玩
    random_Damp(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name4.html($strhtml);
        });
    }
    //居家生活
    random_Family(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name5.html($strhtml);
        });
    }
    //打造爱巢
    random_Love(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name6.html($strhtml);
        });
    }
    //户外出行
    random_Outdoors(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<8){
                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name7.html($strhtml);
        });
    }
    //猜你喜欢
    random_Guess(){
        $.ajax({
            url: 'http://localhost/TMALL1912/php/adddata.php',
            dataType: 'json',
            data: 'post'
        }).done((data) => {
            let $strhtml = '<article>'

            $.each(data, function (index, value) {
                if(index<65){
                    $strhtml += `
                    <a class="a_name" href="http://localhost/TMALL1912/src/details.html?sid=${value.sid}">
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
            this.$div_name8.html($strhtml);
        });
    }
    //悬浮搜索框
    random_Location(){
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
    random_stairs(){
        $('#stairs a').not('.a3,.a1').on('click',function(){
            let $top = $('.louceng').eq($(this).index()-1).offset().top-100; //和楼梯对应的楼层的top值。
            $('html').animate({
                scrollTop: $top
            });
        })
        this.$a3.on('click',()=>{
            $('html').animate({
                scrollTop:0
            })
        });
        let $top=$(window).scrollTop();
        $(window).on('scroll',()=>{
            let $top=$(window).scrollTop();
            if($top>=600){
                $('#stairs').show();
            }else{
                $('#stairs').hide();
            }
            if($top>1800&&$top<=2500){
                $('#stairs .a2_name').css('background','lightgreen');
            }else{
                $('#stairs .a2_name').css('background','#666');
            }
            if($top>2500&&$top<=3200){
                $('#stairs .a3_name').css('background','#000')
            }else{
                $('#stairs .a3_name').css('background','#666');
            }
            if($top>3200&&$top<=4000){
                $('#stairs .a4_name').css('background','pink')
            }else{
                $('#stairs .a4_name').css('background','#666');
            }
            if($top>4000&&$top<=4700){
                $('#stairs .a5_name').css('background','#0AA6E8')
            }else{
                $('#stairs .a5_name').css('background','#666');
            }
            if($top>4700&&$top<=5500){
                $('#stairs .a6_name').css('background','lightgreen')
            }else{
                $('#stairs .a6_name').css('background','#666');
            }
            if($top>5500&&$top<=6200){
                $('#stairs .a7_name').css('background','#000')
            }else{
                $('#stairs .a7_name').css('background','#666');
            }
            if($top>6200&&$top<=7000){
                $('#stairs .a8_name').css('background','pink')
            }else{
                $('#stairs .a8_name').css('background','#666');
            }
            if($top>7000){
                $('#stairs .a9_name').css('background','#0AA6E8')
            }else{
                $('#stairs .a9_name').css('background','#666');
            }
        })
       

    }
}
export{
    Index,
}

