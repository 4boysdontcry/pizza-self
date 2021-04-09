$('.monavi-wrap').slideUp(0)

$('.monavi-bars').on('mouseenter', onNaviEnter)

function onNaviEnter(){
    $(this).find('.monavi-wrap').slideDown(300)
}