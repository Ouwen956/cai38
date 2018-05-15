window.onload =function(){
  // 进入网页获取local存储的皮肤信息
  var skinC =localStorage.getItem("color");
  // 获取需要改变皮肤的元素
  var skinbody =document.querySelector('.skinBody')
  // 如果local有皮肤信息的话
  if(skinC){
    skinbody.classList.remove('skin_red')
    skinbody.classList.remove('skin_blue')
    // 点击改变肤色的时候给元素改变
    skinbody.classList.add(skinC)
  }
  // 更换皮肤逻辑
  // 1.获取元素
  var skp = document.querySelector('#skinPanel')
  var skUl = document.querySelector('.skinPanelUl')
  // 鼠标进入离开事件
  skp.addEventListener('mouseenter',function(){
    skUl.style.display = 'block'
  })

  skp.addEventListener('mouseleave',function(){
    skUl.style.display = 'none'
  })

  // 获取改变颜色元素 并添加点击事件
  var redBtn = document.querySelector('.redBtn_')
  var blueBtn = document.querySelector('.blueBtn_')
  // 使用localStorage保存用户改变存储的皮肤信息
  function skinColor(val){
    localStorage.setItem('color', val);
    // 删除以前的属性
    skinbody.classList.remove('skin_red')
    skinbody.classList.remove('skin_blue')
    // 点击改变肤色的时候给元素改变
    skinbody.classList.add(val)
  }
  // 点击更改颜色 调用skinColor方法
  redBtn.addEventListener('click',function(){
    skinColor('skin_red')
  })
  blueBtn.addEventListener('click',function(){
    skinColor('skin_blue')
  })


  // 更多游戏显示与隐藏
  var btn = document.querySelector('.more-game')
  var moreGame = document.querySelector('.more-game-drop')
  btn.addEventListener('mouseenter',function(){
    moreGame.style.display = "block"
  })
  btn.addEventListener('mouseleave',function(){
    moreGame.style.display = "none"
  })

  // cate_menu
  var cate_menuBox = document.querySelector('.cate_menu')
  var cate_menuA = cate_menuBox.children
  for(let i = 0; i<cate_menuA.length ; i++){
    cate_menuA[i].addEventListener('click',function(){
      for(let j = 0; j<cate_menuA.length; j++){
        cate_menuA[j].classList.remove('selected')
      }
      this.classList.add('selected')
    })
  }
}
