<template>
   <el-container style="padding-left: 5%;">
   <el-card class="box-card" >
    <template #header style="background-color: blue ">
      <div class="card-header">
        <span><h2>Questions for You....</h2></span>
      </div>
    </template>
    <div>
  <!-- {{ ansSet.ans2 }} -->

        <label >1. Who is the father of maths ? </label>
        <input type="radio" v-model="answerSet1.ans1" value="archimedes" name="answer1" id="correct1"/>
        <label for="archimedes">Archimedes</label>
        <input type="radio" v-model="answerSet1.ans1" value="aryabhatta" name="answer1" />
        <label for="aryabhatta">Aryabhatta</label>
        <br /><br />

        <!-- <h2>{{ ans1.answer1 }}</h2> <h2>{{ answer1 }}</h2> -->
        <!-- {{ answerSet1.ans1 }} -->

        <label id="2"></label>
            <label for="answer2">2. 6-5 != 5-6 True or False ?  </label>
             <el-switch
             v-model="answerSet1.ans2"
             ans2="ans2.answer2"
             class="ml-2"
             style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
             /><br /><br />
            <!-- <h2>{{ ans2.answer2 }}</h2> -->

        <label id="3">3. What is the average of the first 50 natural numbers? </label>
        <input type="Number" v-model="answerSet1.ans3"  /><br /><br />
        <!-- <h2>{{ set1.answer3 }}</h2> -->

      <el-form-item label="4. Select number between 10 to 20">
      <input type="radio" v-model="answerSet1.ans4" value=17 />
      <label for="17">17</label>
      <input type="radio" v-model="answerSet1.ans4" value=27 />
      <label for="37">27</label>
      <input type="radio" v-model="answerSet1.ans4" value=37 />
      <label for="37">37</label>
      <input type="radio" v-model="answerSet1.ans4" value=07 />
      <label for="07">07</label> 
    </el-form-item>
    <!-- <h1>{{ set1.answer4 }}</h1> -->

        <label id="5">5. 60 Times of 8 Equals to </label>
        <input type="Number" v-model="answerSet1.ans5" /><br /><br />
        <!-- <h2>{{ set1.answer5 }}</h2> -->

        <el-form-item label="6. How many Zeros in One Billion?">
      <el-select v-model="answerSet1.ans6"  placeholder="Select Your Answer">
        <el-option label="11" value="11" v-model="answerSet1.ans6"/>
        <el-option label="10" value="10" v-model="answerSet1.ans6"/>
        <el-option label="9" value="9" v-model="answerSet1.ans6" id="correct6"/>
      </el-select>
     </el-form-item>
     <!-- <h2>{{ set1.answer6 }}</h2> -->


    <label>7. Who discovered Number line concept in maths ? </label>
         <input type="radio" v-model="answerSet1.ans7" value="John Wallis" name="answer7" id="correct7"/>
        <label for="John Wallis">John Wallis</label>
        <input type="radio" v-model="answerSet1.ans7" value="aryabhatta" name="answer7"/>
        <label for="aryabhatta">Aryabhatta</label><br /><br />
        <!-- <h2>{{ set1.answer7 }}</h2> -->

        <label id="8">8. Roman Number of 50? </label>
        <input type="text" v-model="answerSet1.ans8" /><br /><br />
        <!-- <h2>{{ set1.answer8 }}</h2> -->

        <label id="9">9. (9+5)-1 is </label>
        <input type="Number" v-model="answerSet1.ans9" /><br /><br />
        <!-- <h2>{{ set1.answer9 }}</h2> -->

        <el-form-item label="10. Total number of dots on a dice?">
      <el-select v-model="answerSet1.ans10" >
        <el-option label="21" value="21" v-model="answerSet1.ans10" id="correct10"/>
        <el-option label="10" value="10" v-model="answerSet1.ans10"/>
        <el-option label="9" value="9" v-model="answerSet1.ans10"/>
      </el-select>
     </el-form-item>
    </div>
</el-card>
  </el-container>
</template>
<script>
import { ref } from 'vue'
export default {
  name:"QuestionFirst",
    data(){
        return {
            answer1:'',
            answer2:ref(),
            answer3:'',
            answer4:[],
            answer5:'',
            answer6:'',
            answer7:'',
            answer8:'',
            answer9:'',
            answer10:''
        }
      },
      props:{
        answerSet1:{},
      }
    }

</script>
<style>
.box-card{
  margin-left: 36%;
  margin-right: 28%;
  background-color:rgb(138, 224, 250)
}
</style>