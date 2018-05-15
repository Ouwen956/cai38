// 测试改变皮肤
setInterval(function () {

  var skinC = localStorage.getItem("color");
  // 获取需要改变皮肤的元素
  var skinbody = document.querySelector('.iframe-body')
  // 如果local有皮肤信息的话
  var curColor = skinbody.classList[1]

  if (skinC && skinC != curColor) {
    skinbody.classList.remove('skin_red')
    skinbody.classList.remove('skin_blue')
    // 点击改变肤色的时候给元素改变
    skinbody.classList.add(skinC)
  }
}, 100)
// 给元素添加鼠标进入和离开事件
var box = document.querySelector('.cont-col3')
var td = box.querySelectorAll('td')
function GetAttrElement(attr,val){
  var e= document.querySelectorAll('td')
  var a= new Array();
  for(var i=0;i<e.length;i++){
  if(e[i].getAttribute(attr)==val){
  a.push(e[i])
  }
  }
  return a;
  }
  td.forEach(function(val){
    val.addEventListener('mouseenter',function(){
      if(val.classList.value){
        var id = this.attributes[0].value
        var tdArray = GetAttrElement('data-id',id)
        tdArray.forEach(function(val){
          val.classList.add('hover')
        })
      }
    })
    val.addEventListener('mouseleave',function(){
      if(val.classList.value){
        var id = this.attributes[0].value
        var tdArray = GetAttrElement('data-id',id)
        tdArray.forEach(function(val){
          val.classList.remove('hover')
        })
      }
    })
    val.addEventListener('click',function(){
      if(val.classList.value){
        if(val.classList.contains('bg_yellow')){
          var id = this.attributes[0].value
          var tdArray = GetAttrElement('data-id',id)
          tdArray.forEach(function(val){
            val.classList.remove('bg_yellow')
          })
        }else{
          var id = this.attributes[0].value
          var tdArray = GetAttrElement('data-id',id)
          tdArray.forEach(function(val){
            val.classList.add('bg_yellow')
          })
        }
      }
    })
  })