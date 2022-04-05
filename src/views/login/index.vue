<template>
  <div class="main-continer">
    <div class="top">
      <span>X</span>
      <span>注册</span>
    </div>
    <div class="main">
      <div>
《斗破苍穹手游》龙游大陆，名传太古，全新职业太虚古龙将于10月29日版本上线。太虚古龙族乃斗气大陆魔兽界最强种族，拥有恐怖实力的斗者；化外之境，忘却修行之苦，静享人间之乐；全新玩法“苍穹纪事”斗兄斗帝，其乐无穷；全新时装“凤羽凰衣”上架，红光耀天，彩霞降临，宛若仙凰附身于上；福利多多，假日好礼、龙炎之灵新副本、珍宝斋满载福利等你开启全新斗气大陆。版本内容：1、【全新职业】-太虚古龙降世斗气大陆超然物外的魔兽王者家族，在唯一能与之抗衡的远古天凰族消失后，太虚古龙族成为了无可争议的魔兽界最强种族。战斗定位为一个中远程物理系输出核心，同时拥有近乎绝对的战场控制能力，攻防控全能陷阵战士。2、【全新时装】-凤羽凰衣远古天凰进阶后褪下的本命彩羽，由奇巧之能人于天险处偶然得之，系于彩纱之上辅以珍贵绸缎编织而成。出世时，红光耀天，彩霞降临，宛若仙凰附身于上。3、【魔兽系统】魔兽上阵惊天秘闻，魔兽将开启多个出战位，战斗中可轮替出战，实现更稳定的驻场效果。4、【新系统】-化外之境有一斗圣强者自号“云游圣人”，平生所好便是追寻新奇有趣的各种玩法，在纵情欢乐中以玩入道，自诩“趣圣”。趣圣将毕生所见所闻均记于其所创空间“化外之境”当中，欲让这天下斗者忘却修行之苦，静享人间之乐。5、【新玩法】苍穹纪事以“苍穹纪事”的卡牌游戏来纪念“炎帝”萧炎生平事迹。卡牌分为“天地玄黄”四种类型，卡牌之上皆为炎帝生平所识之人，所去之地，所见之物。
      </div>
    </div>
    <div class="tooter">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  mounted () {
  }
}
</script>

<style scoped>
.main{
height: 200px;
overflow-y: scroll;
word-wrap: normal;
/* white-space: pre-wrap; */
color: #ff9700;
}
.main::-webkit-scrollbar-track{
background: red;
border-radius: 6px;
}
.main::-webkit-scrollbar{
width: 6px;
}
.main::-webkit-scrollbar-thumb{
background: yellowgreen;
border-radius: 6px;
}
.top{
  height: 48px;
  width: 100%;
  position: relative;
  color: #bfa;
}
.top span:nth-child(1){
  position: absolute;
  left: 20px;
  top: 20px;
}
.top span:nth-child(2){
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 14px;
}
.tooter{
  width: 100%;
  height: 48px;
}
.main-continer{
width: 793px;
height: 528px;
background: url('../../assets/images/bg.png') no-repeat;
background-size: 100% 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translateX(-50%) translateY(-50%);
}
</style>
