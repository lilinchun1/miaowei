/**
 * Created by llcly on 2015/5/12.
 */
function $( v ){
    if( typeof v === 'function' ){
        window.onload = v;
    } else if ( typeof v === 'string' ) {
        return document.getElementById(v);
    } else if ( typeof v === 'object' ) {
        return v;
    }
}

function getStyle(obj, attr) {
    /*if(obj.currentStyle){
     return  obj.currentStyle[attr];
     }
     else{
     return getComputedStyle(obj)[attr];
     }*/
    return  obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

    //background:url() red... 复合样式(不要获取)
    //backgroundColor         单一样式（不要用来做判断）
    //不要有空格
    //不要获取未设置后的样式：不兼容

}