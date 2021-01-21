<template>
     <div>
         this in index
         {{name}}
         <div>
             <el-input class="inp" v-model="input" placeholder="请输入内容"></el-input>
         </div>
     </div>
</template>

<script>
export default {
   data(){
       return {
           name:'aaa',
           input: ''
       }
   }
}
</script>

<style scoped>
.inp{
    width: 300px;

}
</style>