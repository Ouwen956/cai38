window.onload = function(){
// 测试改变皮肤
setInterval(function(){

  var skinC =localStorage.getItem("color");
  // 获取需要改变皮肤的元素
  var skinbody =document.querySelector('.iframe-body')
  // 如果local有皮肤信息的话
  var curColor = skinbody.classList[1]

  if(skinC && skinC != curColor){
    skinbody.classList.remove('skin_red')
    skinbody.classList.remove('skin_blue')
    // 点击改变肤色的时候给元素改变
    skinbody.classList.add(skinC)
  }
},100)

var box = document.querySelector('.cont-col3')
var td = box.querySelectorAll('td')
td.forEach(function (val) {
  if (val.id) {
    // 给元素添加鼠标进入事件
    val.addEventListener('mouseenter', function () {
      var id = val.id.split('_')[2]
      var play_name = 'play_name_' + id
      var play_odds = 'play_odds_' + id
      var play_text = 'play_text_' + id
      var play_desc = 'play_desc_' + id
      document.getElementById(play_name).classList.add('hover')
      document.getElementById(play_odds).classList.add('hover')
      document.getElementById(play_text).classList.add('hover')
      if(document.getElementById(play_desc)){
        document.getElementById(play_desc).classList.add('hover')
      }
    })
    // 给元素添加鼠标离开事件
    val.addEventListener('mouseleave', function () {
      var id = val.id.split('_')[2]
      var play_name = 'play_name_' + id
      var play_odds = 'play_odds_' + id
      var play_text = 'play_text_' + id
      var play_desc = 'play_desc_' + id
      document.getElementById(play_name).classList.remove('hover')
      document.getElementById(play_odds).classList.remove('hover')
      document.getElementById(play_text).classList.remove('hover')
      if(document.getElementById(play_desc)){
        document.getElementById(play_desc).classList.remove('hover')
      }
    })
    // 给元素添加点击事件
    val.addEventListener('click', function () {
      if (val.classList.contains('yellow')) {
        var id = val.id.split('_')[2]
        var play_name = 'play_name_' + id
        var play_odds = 'play_odds_' + id
        var play_text = 'play_text_' + id
        var play_desc = 'play_desc_' + id
        document.getElementById(play_name).classList.remove('yellow')
        document.getElementById(play_odds).classList.remove('yellow')
        document.getElementById(play_text).classList.remove('yellow')
        if(document.getElementById(play_desc)){
          document.getElementById(play_desc).classList.remove('yellow')
        }
      } else {
        var id = val.id.split('_')[2]
        var play_name = 'play_name_' + id
        var play_odds = 'play_odds_' + id
        var play_text = 'play_text_' + id
        var play_desc = 'play_desc_' + id
        document.getElementById(play_name).classList.add('yellow')
        document.getElementById(play_odds).classList.add('yellow')
        document.getElementById(play_text).classList.add('yellow')
        if(document.getElementById(play_desc)){
          document.getElementById(play_desc).classList.add('yellow')
        }
      }
    })
  }
})

// 特码
 if(document.querySelector('#tm_tabs')){
  var tm_liChild = document.querySelector('#tm_tabs').children
  for(let i = 0 ; i < tm_liChild.length; i++){
    tm_liChild[i].addEventListener('click',function(){
      for(let j = 0 ; j < tm_liChild.length ; j++){
        tm_liChild[j].classList.remove('on')
      }
      this.classList.add('on')
    })
  }
 }

}
 
