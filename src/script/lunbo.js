class Lunbo{
    constructor(){
        this.Imgs=document.querySelectorAll('#slideshow .BG img');
        this.list=document.querySelectorAll('#slideshow ul li');
        this.index=0;
        this.tamer=null
    }
    init(){
        console.log(this.list)
        console.log(this.Imgs)
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].onmouseover = () =>{
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

    autoplay(){
        this.timer=setInterval(()=>{
            console.log(1)
            //每隔2s自动点击右键。
            this.index++;
            this.tabswitch();
            
            if(this.index>4){
                this.index=-1;
            }
        },6000);
    }
}
new Lunbo().init();
