
//¶¥²¿µã»÷Ëõ·Å
(function(){

    var oShrink=document.querySelector('.nav-left-btn');
    var oLogo=document.querySelector('.logo');
    var oUser=document.querySelector('.user-panel');
    var oDiv=oUser.querySelector('.info');
    var oImg=oUser.querySelector('img');
    var oForm=document.querySelector('.aside-form');
    var oBox=document.getElementById('accordion');
    var oHeader=oBox.querySelector('.header');
    var oUl1=document.getElementById('collapseOne');
    var oUl2=document.getElementById('two');
    var aLi=oBox.querySelectorAll('.aside-mains');
    var aText=document.querySelectorAll('.aside-mains-text');
    var oSidebar=document.querySelector('.lte-sidebar');
    var oContent=document.querySelector('.main-content');
    var oNav=document.querySelector('.lte-main-nav');

    var op=0;
    oShrink.onclick=function(){

        if(op==0){
            oLogo.innerHTML='ATL';
            oDiv.style.display='none';
            oImg.style.width=30+'px';
            oImg.style.height=30+'px';
            oForm.style.display='none';
            oHeader.style.display='none';
            oUl1.style.display='none';
            oUl2.style.display='none';
            oSidebar.style.width=50+'px';

            oContent.style.marginLeft='50px';
            oNav.style.marginLeft='50px';

            for(var i=0;i<aLi.length;i++){
                aText[i].style.display='none'
            }
            op=1
        }else{
            oLogo.innerHTML='AdminLTE';
            oDiv.style.display='block';
            oImg.style.width=45+'px';
            oImg.style.height=45+'px';
            oHeader.style.display='block';
            oUl1.style.display='block';
            oUl2.style.display='block';
            oSidebar.style.width=230+'px';
            oContent.style.marginLeft='230px';
            oNav.style.marginLeft='230px';

            for(var i=0;i<aLi.length;i++){
                aText[i].style.display='inline'
            }
            op=0
        }
    };


    //if(document.documentElement.clientWidth<768){
    //    oContent.style.marginLeft='0px';
    //    oNav.style.marginLeft='0px';
    //}


})();


//ÁôÑÔ°åÒþ²ØÄÚÈÝ
(function(){
    var oYun=document.querySelector('.yun');
    var oBox2=document.querySelector('.m-box-body2');
    var op=0;
    oYun.onclick=function(){
        if(op==0){
            oBox2.style.right=0;
            op=1
        }else{
            oBox2.style.right=-720+'px';
            op=0
        }
    };
})();

