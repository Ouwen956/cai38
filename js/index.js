$(function () {
    var lis = $(".quick-tab-list").children()
    for (var i = 0; i < lis.length; i++) {
      $(lis[i]).mouseenter(function () {
        $(lis).removeClass("active")
        $(this).addClass("active")
      })
    }
    /*页面左右广告栏添加样式  */
    $(".fixed_left_box").addClass('active')
    $(".fixed_right_box").addClass('active')
    
    /* 最新中奖滚动 */
    window.onload = function () {
      var maxY = $(".news_slide_Box").height() /* 197 */
      var liH = $(".news_slide").children().height()
      var ul = $(".news_slide")[0]
      var ulH = $(".news_slide").children().length * liH /* 300 */
      var box = $(".news_slide_Box")[0]

      var fun1 = function () {
        maxY--
        if (maxY < -ulH) {
          maxY = $(".news_slide_Box").height()
        }
        ul.style.transform = `translateY(${maxY}px)`
      }
      set = setInterval(fun1, 30)
      box.onmouseenter = function () {
        clearInterval(set)
      }
      box.onmouseleave = function () {
        set = setInterval(fun1, 30)
      }
    }
    /* Swiper */
    var swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });

    $(".off").click(function () {
      $(this).parent().hide(200)
    })

    let latestWinData = [
      {user:'h4***',txt:'喜中',type:'重庆时时彩',winMoney:'284.00元'},
      {user:'f5***',txt:'喜中',type:'幸运六合彩',winMoney:'392.00元'},
      {user:'09***',txt:'喜中',type:'幸运六合彩',winMoney:'5211.00元'},
      {user:'ad***',txt:'喜中',type:'秒速时时彩',winMoney:'244.00元'},
      {user:'qs***',txt:'喜中',type:'PC蛋蛋',winMoney:'544.00元'},
      {user:'of***',txt:'喜中',type:'幸运蛋蛋',winMoney:'199.00元'},
      {user:'jd***',txt:'喜中',type:'秒速飞艇',winMoney:'192.50元'},
      {user:'ls***',txt:'喜中',type:'重庆时时彩',winMoney:'111.00元'},
      {user:'op***',txt:'喜中',type:'北京快乐8',winMoney:'99.00元'},
      {user:'ju***',txt:'喜中',type:'重庆时时彩',winMoney:'544.00元'},
      {user:'ff***',txt:'喜中',type:'PC蛋蛋',winMoney:'655.00元'},
      {user:'ky***',txt:'喜中',type:'秒速赛车',winMoney:'1265.00元'},
      {user:'r1***',txt:'喜中',type:'重庆时时彩',winMoney:'152.00元'},
      {user:'xs***',txt:'喜中',type:'北京快乐8',winMoney:'319.00元'},
    ]
    
    var html = template('WinMoney', {data:latestWinData});
    document.querySelector('.news_slide').innerHTML = html;

     // 彩票tab栏 
  const parentA = document.querySelector('.quick-tab-list')
  const As = parentA.children
  const lotteryBox = document.querySelectorAll('.lotteryBox')
  for(let i = 0 ; i < As.length; i++) {
    As[i].addEventListener('mouseenter',function(){
      for(let j = 0 ; j < As.length; j++) {
        lotteryBox[j].style.display = 'none'
      }
       lotteryBox[i].style.display = "block"
    })
  }
  })