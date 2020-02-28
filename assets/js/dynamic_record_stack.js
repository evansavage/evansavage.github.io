// Version 4.0
const pSBC=(p,c0,c1,l)=>{
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

const colorGrabber = new FastAverageColor()
$('.image-avg-target').each(function() {
    var myColor = colorGrabber.getColor($(this)['context']);
    var myColorDarker = pSBC(-0.4, myColor['hex']);
    var myBorderDarker = pSBC(-0.6, myColor['hex']);
    console.log(myColorDarker);
    // console.log(myColor['hex'])
    $(this).next().css('background', myColorDarker);
    $(this).next().css('border', "1px solid " + myBorderDarker);
    $(this).next().next().css('background', myColorDarker);
    $(this).next().next().css('border', "1px solid " + myBorderDarker);
    $(this).parent().next().css('color', myBorderDarker);
});

const img_range = $('.music-image-container').children().length;
var i = 100;
var j = 400;
let boxTop = 84
const container_height = $('.music-image-container').height();
console.log(container_height);
var vert_offset = container_height / img_range / 1.5;
let top_coord = 0;
console.log(vert_offset, top_coord);

$('.music-image-container').children().each(function() {
    let img_object = $(this).find('.music-image');
    let hover_div = document.createElement('div');
    hover_div.classList.add("hover-zone")
    img_object.parent().prepend(hover_div);
    // coord = top;
    console.log(top_coord + 'px');
    img_object.css('top', top_coord + 'px');
    img_object.css('z-index', i);
    hover_div.style.top = top_coord + boxTop + 'px';
    hover_div.style.zIndex = j;
    top_coord += vert_offset;
    i -= 1;
    // j += 1;

    // console.log($(this));
});

(function($) {
    $('.music-image .music-title').hide();

    $('.hover-zone').hover(function() {
        $(this).next().find('.music-title').fadeIn(800);
    }, function () {
        $(this).next().find('.music-title').fadeOut(400);
    });

    // $('.music-image').mouseout(function() {
    //     $(this).find('.music-title').fadeOut();
    // });
    //
    // $('ol.sub-menu').mouseover(function() {
    //     $(this).find('ol.sub-sub-menu').show();
    //     $(this).children().children('.li_options').show();
    // }).mouseout(function() {
    //     $(this).find('ol.sub-sub-menu').hide();
    //     $(this).children().children('.li_options').hide();
    // });


})(jQuery);
