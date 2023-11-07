<script>
import { RouterLink } from "vue-router";

</script>
<template>
   <div class="container">
    <div class="login-box">
        <div class="credentials">
            <h1>Register UserName</h1>
        <input type="text" placeholder="Enter UserName">
        <h1>Register Password</h1>
        <input type="text" placeholder="Enter Your Password">
        </div>
        <div class="submit">
            <router-link to="/">Register</router-link>
        </div>
        
    </div>
   </div>
</template>

<style scoped>
.credentials input{
    background-color: aquamarine;
    height: 40px;
    
}
.login-box{
    margin-top:200px;
    margin-left: 280px;
   height: 400px;
   width: 400px;
   background-color: aliceblue;
   align-items: center;
   border: 2px solid black;
}
.submit{
    margin-top: 10px;
    margin-left:180px;
    color:black;
    background-color: aqua;
    border:1px solid black;
    width:60px;
}
.credentials{
    margin-left:130px;
    margin-top:100px;
    justify-content: center;
    color: black;
    font-size: 8px;
}
</style>