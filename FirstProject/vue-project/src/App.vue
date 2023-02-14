<template >
  <div  style="text-align:center width:100%">
  <h1 class="heading"><i>Welcome to Maths Quiz</i></h1><br />
</div>
<div v-if="openFirst" style="text-align:center, width:100%">
  <QuestionFirst  :answerSet1 = "answerSet1"
  /><br />
  <el-button type="primary" class="button1" @click.prevent="checkValidate1()" >Next</el-button>
  </div>
  <div v-if="openSecond">
  <QuestionSecond :answerSet2="answerSet2" /><br />
  <el-button type="primary" class="button2" @click.prevent="checkValidate4()">Previous</el-button>
  <el-button type="primary" class="button3" @click.prevent="checkValidate2()" >Next</el-button>
  </div>
  <div v-if="openThird">
  <QuestionThird :answerSet3="answerSet3"/><br />

  <el-button type="primary" class="button2" @click.prevent="checkValidate3()" >Previous</el-button>
  <el-button class="button4" @click="open1(),checkAnswer(),submitAnswer(),dialogVisible=true">Finish</el-button>
  </div>
  <el-dialog
    class="dia"
    v-model="dialogVisible"
    title="CONGRAGULATIONS ... You have successfully completed the Maths Quiz"
    background-color=" grey"
    width="35%"
  >
    <span style="color: red;"><h1>Your Score is '{{ count }}' out of 30</h1></span>
    <template #footer >
      <span >
        <el-button type="primary" @click="dialogVisible = false">
          OK
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- {{ answerList }} -->
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus'
import QuestionFirst from './components/QuestionFirst.vue'
import QuestionSecond from './components/QuestionSecond.vue'
import QuestionThird from './components/QuestionThird.vue'
export default{
  name:"App",
  components:{
     QuestionFirst,
     QuestionSecond,
     QuestionThird,
  },
  data(){
    return{
      // answerList:[],
      openFirst:true,
      openSecond:false,
      openThird:false,
      openLast:true,
      textfirst:false,
      testSecond:false,
      testThird:false,
      dialogVisible : ref(false),
      count:0,
      answerSet1:{
        "ans1":"",
        "ans2":"",
        "ans3":"",
        "ans4":"",
        "ans5":"",
        "ans6":"",
        "ans7":"",
        "ans8":"",
        "ans9":"",
        "ans10":""
      },
      answerSet2:{
        "ans11":"",
        "ans12":"",
        "ans13":"",
        "ans14":"",
        "ans15":"",
        "ans16":"",
        "ans17":"",
        "ans18":"",
        "ans19":"",
        "ans20":""
      },
      answerSet3:{
        "ans21":"",
        "ans22":"",
        "ans23":"",
        "ans24":"",
        "ans25":"",
        "ans26":"",
        "ans27":"",
        "ans28":"",
        "ans29":"",
        "ans30":""
      },
  }
},
methods:{    
    submitAnswer(){  
          // this.answerList.push(this.answerSet1),
          // this.answerList.push(this.answerSet2),
          // this.answerList.push(this.answerSet3),
    // this.openLast=true
    // alert('hi')
      axios.post('http://localhost:4000/answer',this.answerSet1).then((response) => {
        console.log(this.answerSet1,this.answerSet2,this.answerSet3);
      })
      .catch((error)=>{
        console.log(error)
      })
      axios.post('http://localhost:4000/answer',this.answerSet2).then((response) => {
        // console.log(this.answerSet1,this.answerSet2,this.answerSet3);
      })
      .catch((error)=>{
        console.log(error)
      }),
      axios.post('http://localhost:4000/answer',this.answerSet3).then((response) => {
        // console.log(this.answerSet1,this.answerSet2,this.answerSet3);
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    open1(){
  ElMessage({
    message: 'Your answers has been submitted',
    type: 'success',
  })
},
  open2(){
  ElNotification({
    title: 'Warning',
    message: 'Please enter all the answer..',
    type: 'warning',
  })
},
open3(){
  ElMessage({
    message: 'You have moved to next section',
    type: 'success',
  })
},
    checkAnswer(){
 this.count=0
      if(this.answerSet1.ans1 === "archimedes"){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet1.ans2 === false){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet1.ans3 === "25"){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet1.ans4 === "17"){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet1.ans5 === "480" ){
         this.count++
        console.log(this.count)
      }
      if(this.answerSet1.ans6 === "11"){
        this.count++
        console.log(this.count)
     }
     if(this.answerSet1.ans7 === "John Wallis"){
        this.count++
        console.log(this.count)
    }
    if(this.answerSet1.ans8 === "L"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet1.ans9 === "13"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet1.ans10 === "21"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans11 === "victor"){
      this.count++
        console.log(this.count)
      }
      if(this.answerSet2.ans12 === 2){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet2.ans13 === "13"){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet2.ans14 == "Sat Dec 01 2012 00:00:00 GMT-0800 (Pacific Standard Time)"){
        this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans15 === "india"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans16 === "6"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans17 == "Sat Dec 22 1877 00:00:00 GMT-0752 (Pacific Standard Time)"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans18 === "XL"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans19 === 3.140){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet2.ans20 === "6"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans21 === "euclid"){
      this.count++
        console.log(this.count)
      }
      if(this.answerSet3.ans22 === 20){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet3.ans23 === "50.5"){
        this.count++
        console.log(this.count)
      }
      if(this.answerSet3.ans24 === "1"){
        this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans25 === "11"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans26 === "5"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans27 === "10"){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans28 === false){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans29 === 75){
      this.count++
        console.log(this.count)
    }
    if(this.answerSet3.ans30 === 5){
      this.count++
        console.log(this.count)
    }
  },
  checkValidate1(){
    if(this.answerSet1.ans1.length != 0 && this.answerSet1.ans2.length != 0 && this.answerSet1.ans3.length != 0 && this.answerSet1.ans4.length != 0 && this.answerSet1.ans5.length != 0 && this.answerSet1.ans6.length != 0 && this.answerSet1.ans7.length != 0 && this.answerSet1.ans8.length != 0 && this.answerSet1.ans9.length != 0 && this.answerSet1.ans10.length != 0){
    this.openFirst=false,
    this.openSecond=true,
    this.openThird=false
    // alert('Successfully Completed this Session')
    this.open3()
    }else
    this.open2()

  },
  checkValidate2(){
    if(this.answerSet2.ans11.length != 0 && this.answerSet2.ans12.length != 0 && this.answerSet2.ans13.length != 0 && this.answerSet2.ans14.length != 0 && this.answerSet2.ans15.length != 0 && this.answerSet2.ans16.length != 0 && this.answerSet2.ans17.length != 0 && this.answerSet2.ans18.length != 0 && this.answerSet2.ans19.length != 0 && this.answerSet2.ans20.length != 0){
      this.openSecond=false,
      this.openThird=true,
      this.openFirst=false
      // alert('Successfully Completed this Session')
      this.open3()
    }else
    this.open2()
  },
  checkValidate3(){
    if(this.answerSet3.ans21.length != 0 && this.answerSet3.ans22.length != 0 && this.answerSet3.ans23.length != 0 && this.answerSet3.ans24.length != 0 && this.answerSet3.ans25.length != 0 && this.answerSet3.ans26.length != 0 && this.answerSet3.ans27.length != 0 && this.answerSet3.ans28.length != 0 && this.answerSet3.ans29.length != 0 && this.answerSet3.ans30.length != 0){
      this.openSecond=true,
      this.openFirst=false,
      this.openThird=false
      // alert('Successfully Completed this Session')
      this.open3()
    }else
    this.open2()
  },
  checkValidate4(){
    if(this.answerSet2.ans11.length != 0 && this.answerSet2.ans12.length != 0 && this.answerSet2.ans13.length != 0 && this.answerSet2.ans14.length != 0 && this.answerSet2.ans15.length != 0 && this.answerSet2.ans16.length != 0 && this.answerSet2.ans17.length != 0 && this.answerSet2.ans18.length != 0 && this.answerSet2.ans19.length != 0 && this.answerSet2.ans20.length != 0){
      this.openFirst=true,
      this.openSecond=false,
      this.openThird=false
      this.open3()
    }else
    this.open2()
  }
}
}
</script>

<style>
.heading{
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  text-align:center;
  background-color: rgb(250, 249, 247);
}
.button1{
  margin-left:58%
}
.button2{
  margin-left:46%
}
.button3{
  margin-left:100%
}
.button4{
    margin-left:100%;
    background-color: #ff6372;
    font-size: 14px;
    color: #fff;
}
.dia{
  background-color:rgb(255, 255, 255)
}
.dialog-footer{
  background-color: #ff6372;
}

</style>

