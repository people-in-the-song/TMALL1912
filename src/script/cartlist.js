class CartList {
    constructor() {
        this.$content=$('.content');
        this.$img = $('.content .img_name');//图片
        this.$title = $('.content .title');//标题
        this.$univalence = $('.content .univalence');//单价
    }
    init() {
        if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
            let csid = localStorage.getItem('cartsid').split(','); //sid
            let cnum = localStorage.getItem('cartnum').split(','); //数量
            console.log(localStorage.getItem('cartsid').split(','));
            console.log(localStorage.getItem('cartnum').split(','));
            for (let i = 0; i < csid.length; i++) {
                this.render(csid[i], cnum[i]);
            }
        }
        // this.render();
        
    }
    render(sid, num) {
    $.ajax({
        url: 'http://localhost/TMALL1912/php/adddata.php',
        dataType: 'json'
    }).done((data) => {
        console.log(1)
        console.log(sid)
        
        $.each(data, (index, value) => {
           if(sid==value.sid){
            console.log(sid)
            let $clonebox = $('.content:hidden').clone(true, true);
            $clonebox.find('.content img').attr('src', value.url);
            $clonebox.show();
            console.log(1)
           }
        });

    });
    }
}

export{
    CartList
}
