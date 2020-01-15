class Details {
    constructor() {
        this.$wrap = $('.center_name article');
        this.$sid = location.search.substring(1).split('=')[1];
        this.$xt = $('.center_name .xt img');//小图img
        this.$spic = $('.center_name .xt')//小图
        this.$xf = $('.center_name .xf');//小放
        this.$bpic = $('#dt')//大图
        this.$df = $('.center_name .df');//大放
        this.$title = $('.right .title');//标题
        this.$num = $('.right .num input');//数量
        this.$butLeft = $('.butLeft')//左边按钮
        this.$butRight = $('.butRight')//右边按钮
        this.$price = $('.right .price span')//价格
        this.$lbt = $('.lbt');//下面小图列表
    }
    init() {
        $.ajax({

            url: 'http://localhost/TMALL1912/php/getsid.php?sid=' + this.$sid,
            data: {
                sid: this.$sid
            },
            dataType: 'json'
        }).done((data) => {
            this.$title.html(data.title);//标题
            this.$price.html('￥' + (data.price));//价格
            this.$xt.attr('src', data.url);//小图
            this.$bpic.attr('src', data.url);//大图
            //下面小图标列表
            let lbtst = data.urls.split(',');
            let $lbtHtml = '<ul><span>&lt;</span>'
            $.each(lbtst, function (index, value) {
                $lbtHtml += `
                    <li><img src="${value}"></li>
                `
            });
            $lbtHtml += '<span>&gt;</span></ul>'
            this.$lbt.html($lbtHtml);
        });
        this.butNum();
        this.Fdj();
        this.addcart();
    }
    //input数量数字的改变（累加累减）
    butNum() {
        let $num1 = this.$num.val();
        this.$butLeft.on('click', () => {
            $num1--;
            this.$num.val($num1)
        })
        this.$butRight.on('click', () => {
            $num1++;
            this.$num.val($num1)
        })
    }
    Fdj() {
        //1鼠标移入小图显示大放，移除大放消失
        this.$spic.hover(() => {
            this.$df.css('display', 'block');
            this.$xf.css('display', 'block');
            //3.鼠标移出，小放跟随
            this.$spic.on('mousemove', (ev) => {
                this.spicmove(ev);
            })
        }, () => {
            this.$df.css('display', 'none');
            this.$xf.css('display', 'none');
        });
        //2求小放的尺寸
        this.$xf.css({
            width: this.$spic.width() * this.$df.width() / this.$bpic.width(),
            height: this.$spic.height() * this.$df.height() / this.$bpic.height(),
        });
        //4.求比例
        this.bili = this.$bpic.width() / this.$spic.width();

        //5.给下面的列表li添加点击事件
        this.$lbt.on('click','img',(e)=> {
            let $imgurl = $(e.target).attr('src');
            this.$spic.find('img').attr('src', $imgurl);
            this.$bpic.attr('src', $imgurl);
            this.$xf.css({
            width: this.$spic.width() * this.$df.width() / this.$bpic.width(),
            height: this.$spic.height() * this.$df.height() / this.$bpic.height(),
            });
            this.bili = this.$bpic.width() / this.$spic.width();
        });
    }
    spicmove(ev) {
        let l = ev.pageX - this.$wrap.offset().left - this.$xf.width() / 2;
        let t = ev.pageY - this.$wrap.offset().top - this.$xf.height() / 2;
        if (l < 0) {
            l = 0;
        } else if (l >= this.$spic.width() - this.$xf.width()) {
            l = this.$spic.width() - this.$xf.width();
        }
        if (t < 0) {
            t = 0;
        } else if (t >= this.$spic.height() - this.$xf.height()) {
            t = this.$spic.height() - this.$xf.height();
        }

        this.$xf.css({
            left: l,
            top: t
        });

        this.$bpic.css({
            left: -l * this.bili,
            top: -t * this.bili
        });
    }





    addcart() {
        let goodsnum = []; //商品的数量
        let goodsid = []; //商品的编号
        console.log(this.$num.val())
        //cartnum  cartsid:本地存储的key值
        function getcookie() {
            if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                goodsnum = localStorage.getItem('cartnum').split(',');
                goodsid = localStorage.getItem('cartsid').split(',');
            }
        }
        $('.close a').on('click',()=>{
            getcookie();
            if($.inArray(this.$sid,goodsid)===-1){
                goodsid.push(this.$sid);
                localStorage.setItem('cartsid',goodsid);
                goodsnum.push(this.$num.val());
                localStorage.setItem('cartnum',goodsnum);
            }else{
                let index=$.inArray(this.$sid,goodsid);
                let newnum=parseInt(goodsnum[index])+ parseInt(this.$num.val()); 
                goodsnum[index] = newnum; //新的数量
                localStorage.setItem('cartnum', goodsnum); //存入数量
            }
        })
    }
}

define([], function () {
    return {
        init: function () {
            new Details().init();
        }
    }
})