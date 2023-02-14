<template>
  <container >
<el-card class="box-card" >
    <template #header>
      <div class="card-header">
        <span><h2>Questions for You....</h2></span>
      </div>
    </template>
    <div  >
        <label id="11">11. Who is the father of Algebra ? </label>
        <input type="radio" v-model="answerSet2.ans11" value="victor" name="answer11" />
        <label for="victor">Victor</label>
        <input type="radio" v-model="answerSet2.ans11" value="khwarizmi" name="answer11"  />
        <label for="khwarizmi">Khwarizmi</label>
        <br /><br />
        <!-- <h2>{{ set2.answer11 }}</h2> -->
        
        <label>12. The value of (12-10) is  </label>
        <el-input-number v-model="answerSet2.ans12" :min="1" :max="5" @change="handleChange"
        aria-placeholder="0"/><br /><br />
        <!-- <h2>{{ set2.answer12 }}</h2> -->

        <label id="13">13. What is the average of the first 25 natural numbers? </label>
        <input type="Number" v-model="answerSet2.ans13"  /><br /><br />
        <!-- <h2>{{ set2.answer13 }}</h2> -->

        <el-form-item label="14. which month mathematics day was declared in the year 2012 ?">
        <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="answerSet2.ans14"
          type="month"
          placeholder="Pick a month"
          :value-format="MM-YYYY"
        />
      </div>
       </el-form-item>

    <!-- <h1>{{ set2.answer14 }}</h1> -->

        <label id="15">15. Where was Abacus invented ?  </label>
        <input type="radio" v-model="answerSet2.ans15" value="india" name="answer15" />
        <label for="archimedes">India</label>
        <input type="radio" v-model="answerSet2.ans15" value="china" name="answer15" />
        <label for="aryabhatta">China</label>
        <br /><br />
        <!-- <h2>{{ set2.answer15 }}</h2> -->

        <el-form-item  id ="16" label="16. How many Zeros in One Million?">
      <el-select v-model="answerSet2.ans16" placeholder="Select Your Answer" >
        <el-option label="11" value="11" />
        <el-option label="6" value="6" />
        <el-option label="9" value="9" />
      </el-select>
     </el-form-item>
     <!-- <h2>{{ set2.answer16 }}</h2> -->


    <label id="17"></label>
    <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">17. Ramanujam's Birth day ? </span>
      <el-date-picker
        v-model="answerSet2.ans17"
        type="date"
        placeholder="Pick a day"
        :size="size"
        :value-format="DD-MM-YYYY"
      />
    </div>
    </div><br />
        <!-- <h2>{{ set2.answer17 }}</h2> -->

        <label id="18">18. Roman Number of 60? </label>
        <input type="radio" v-model="answerSet2.ans18" value="L" name="answer18"/>
        <label for="L">L</label>
        <input type="radio" v-model="answerSet2.ans18" value="X" name="answer18"  />
        <label for="X">X</label>
        <input type="radio" v-model="answerSet2.ans18" value="LX" name="answer18" />
        <label for="LX">LX</label>
        <br /><br />
        <!-- <h2>{{ set2.answer18 }}</h2> -->

        <label id="19">19. Value of Pi is </label>
        <el-input-number v-model="answerSet2.ans19" :precision="3" :step="0.1" :max="4" :min="2"/><br /><br />
        <!-- <h2>{{ set2.answer19 }}</h2> -->

        <el-form-item  id ="20" label="20. How many sides present in a dice?">
      <el-select v-model="answerSet2.ans20" >
        <el-option label="6" value="6" />
        <el-option label="5" value="5" />
        <el-option label="7" value="7" />
      </el-select>
     
     </el-form-item>
    </div>
  </el-card>
</container>
</template>
<script>
import { ElContainer } from 'element-plus';

export default {
    name: "QuestionSecond",
    components: { ElContainer },
    props:{
      answerSet2:{},
    }
}
</script>
<style>
.box-card{
  margin-left: 30%;
  margin-right: 30%;
  background-color:rgb(138, 224, 250);
}
</style>