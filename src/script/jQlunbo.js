class Lunbo {
    constructor() {
        this.Imgs = $('#slideshow .BG img');
        this.list = $('#slideshow ul li');
        this.num = 0;
        this.tamer = null
    }
    init() {
        this.list.on('mouseover',() => {
            this.num = $(this).index();//索引存储下来了
            console.log($(this).index())
            this.tabswitch();
        })
        // this.autoplay();
    }
    tabswitch() {
       this.list.eq(this.num).addClass('active').siblings().removeClass('active');
       this.Imgs.removeClass('show');
       this.Imgs.eq(this.num).addClass('show');
    }

    autoplay() {
        this.timer = setInterval(() => {
            this.num++;
            this.tabswitch();

            if (this.num > 4) {
                // this.num = -1;
            }
        }, 1000);
    }
}