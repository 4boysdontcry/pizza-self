/*************** 글로벌 설정 *****************/
$('.monavi-wrap').slideUp(0)


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.monavi-bars').on('mouseover', onNaviOver)
$('.header-wrapper').on('mouseleave', onNaviLeave)


/*************** 이벤트 콜백 *****************/
function onNaviOver(){
    $('.header-wrapper').find('.monavi-wrap').slideDown(300)
}

function onNaviLeave(){
    $(this).find('.monavi-wrap').slideUp(300)
}