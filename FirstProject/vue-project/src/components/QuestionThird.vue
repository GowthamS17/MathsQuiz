<template>
    <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span><h2>Questions for You....</h2></span>
          </div>
        </template>
        <div  >
            <label id="21">21. Who discovered Geometry ? </label>
            <input type="radio" v-model="answerSet3.ans21" value="euclid" name="answer21" />
            <label for="Euclid">Euclid</label>
            <input type="radio" v-model="answerSet3.ans21" value="aryabhatta" name="answer21" />
            <label for="aryabhatta">Aryabhatta</label>
            <br /><br />
            <!-- <h2>{{ set3.answer21 }}</h2> -->
    
            <label id="22">22. The value of (5*4) is </label>
            <el-input-number v-model="answerSet3.ans22" :step="1" :min="10" :max="20" step-strictly/><br /><br />
            <!-- <h2>{{ set3.answer22 }}</h2> -->
    
            <label id="23">23. What is the average of the first 100 natural numbers? </label>
            <input type="Number" v-model="answerSet3.ans23"/><br /><br />
            <!-- <h2>{{ set3.answer23 }}</h2> -->
    
            <el-form-item label="24. Value of cos 360 Degree">
          <el-select v-model="answerSet3.ans24" >
        <el-option label="1" value="1" v-model="answerSet3.ans24" />
        <el-option label="0" value="0" v-model="answerSet3.ans24"/>
        <el-option label="-1" value="-1" v-model="answerSet3.ans24"/>
        <el-option label="360" value="360" v-model="answerSet3.ans24"/>
      </el-select>
     </el-form-item>
    
        <!-- <h1>{{ set3.answer24 }}</h1> -->
    
            <label id="25">25. What is the next prime number after 7 ? </label>
            <input type="radio" v-model="answerSet3.ans25" value="13" name="answer25" />
            <label for="13">13</label>
            <input type="radio" v-model="answerSet3.ans25" value="11" name="answer25"/>
            <label for="11">11</label>
            <input type="radio" v-model="answerSet3.ans25" value="9" name="answer25"/>
            <label for="9">9</label>
            <br /><br />
            <!-- <h2>{{ set3.answer25 }}</h2> -->
    
            <el-form-item  id ="26" label="26. How many Zeros in One lakh?">
          <el-select v-model="answerSet3.ans26" placeholder="Select Your Answer">
            <el-option label="6" value="6" />
            <el-option label="5" value="5" />
            <el-option label="4" value="4" />
          </el-select>
         </el-form-item>
         <!-- <h2>{{ set3.answer26 }}</h2> -->
    
    
           <label id="27">27. How many years are there in a decade ? </label>
            <input type="radio" v-model="answerSet3.ans27" value="5" name="answer27"/>
            <label for="5">5</label>
            <input type="radio" v-model="answerSet3.ans27" value="10" name="answer27" />
            <label for="10">10</label>
            <input type="radio" v-model="answerSet3.ans27" value="50" name="answer27" />
            <label for="50">50</label>
           <br /><br />
            <!-- <h2>{{ set3.answer27 }}</h2> -->
    
            <label id="28"></label>
            <label for="answer28">28. 6-5 = 5-6 </label>
             <el-switch
             v-model="answerSet3.ans28"
             class="ml-2"
             style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
             /><br /><br />
            <!-- <h2>{{ set3.answer28 }}</h2> -->
    
            <label id="29">29. 50 + 25=  </label>
            <div class="slider-demo-block">
            <span class="demonstration"></span><br/>
            <el-slider v-model="answerSet3.ans29"/>
            </div><br />
            <!-- <h2>{{ set3.answer29 }}</h2> -->
    
            <el-form-item  id ="30" label="30. Feedback about maths Quiz..">
              <el-rate
                   v-model="answerSet3.ans30"
                  :answer30="['oops', 'disappointed', 'normal', 'good', 'great']"
                   show-text
                />
         </el-form-item><br />
        </div>
      </el-card>
    </template>
<script>
import { ref } from 'vue'
    export default {
      name:"QuestionThird",
        data(){
            return {
            answer21:null,
            answer22:null,
            answer23:null,
            answer24:[],
            answer25:null,
            answer26:null,
            answer27:null,
            answer28:ref(true),
            answer29:ref(),
            answer30:ref()
         }         
      },
      props:{
          answerSet3:{},
  }
}
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.box-card{
  margin-left: 33%;
  margin-right: 30%;
  background-color:rgb(138, 224, 250)
}
</style>
