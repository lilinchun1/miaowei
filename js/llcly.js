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

    //background:url() red... ������ʽ(��Ҫ��ȡ)
    //backgroundColor         ��һ��ʽ����Ҫ�������жϣ�
    //��Ҫ�пո�
    //��Ҫ��ȡδ���ú����ʽ��������

}