// 设置img宽高
var windowHeight = $(window).height()
var windowWidth =$(window).width()
$('#images img').css({
    width:windowWidth+'px',
    height:windowHeight+'px',   
})
// 点击轮播
var allButtons=$('#btnBox button')

for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var distance = index * -windowHeight
        $('#images').css({
            transform:'translateY('+ distance+'px)',
        })
        n=index
        activeBtn(allButtons.eq(n))
    })
}
// 自动滚动
var n=0;
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
var timerId = setTimer()

// 鼠标移动上停止，离开开始
$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
    timerId = setTimer()
})


// 添加class函数
function activeBtn($button){
    $button
    .addClass('active-on')
    .siblings('.active-on').removeClass('active-on')
}
// 自动轮播函数
function setTimer(){
    return setInterval(()=>{
    n+=1;
    allButtons.eq(n%size).trigger('click')
},2500)
}
