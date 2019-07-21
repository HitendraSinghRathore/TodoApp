<template>
    <div>
       <div class="card  w-full sm:w-4/5 bg-white rounded shadow-xl mx-auto mb-5 p-4">
            <h4 class="text-center text-xl mb-4"> Login</h4>
            
                <div class="mb-4">
                    <label class="block text-gray-800 mb-2 text-md" for="username">Username</label>
                    <input type="text"  v-model="userName" name="username" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800  leading-tight   focus:boder-none" required placeholder="johnSmith1">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-800 mb-2 text-md" for="password">Password</label>
                    <input type="password" v-model="password" name="password"  placeholder="********" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 focus:border-none" required>

                </div>
                <div v-if="message" class="text-red-600 text-center mb-1 text-bold " >{{message}}</div>
                <div class="mb-4 sm:flex sm:justify-between items-center">
                    <button class="bg-indigo-800 py-2 px-4 text-white font-bold shadow-lg rounded hover:bg-indigo-900 " v-on:click="loginUser">Login</button>
                    <router-link to="sign"><span class=" block mt-2 sm:inline-block font-bold text-indigo-900 text-md hover:text-indigo-800 ">New user? Sign up.</span></router-link>
                    
                </div>
            
        </div> 
    </div>
</template>
<script>
import axios from 'axios';
import URL from '../var';
export default {
    name: 'login',
   data: function(){
       return {
           
               userName:null,
               password:null,        
                message : null
       }
   },
   mounted : function(){
      
   }
   ,
    methods :{
        loginUser : function(){
           if(this.userName==null||this.userName ==""||this.password==null||this.password==""){
               this.message = "Please fill all the details required."

           }
           else{
               let userObj = {
                   userName : this.userName,
                   password: this.password
               };
               const url = URL.path+"login";
               axios.post(url,userObj)
               .then((response) =>{
                   
                   let userData = response.data;
                   
                 
                       this.message = null;
                       localStorage.id = userData.data._id;
                       localStorage.userName = userData.data.userName;
                       localStorage.displayName = userData.data.displayName;
                       this.$router.push({path:'/tasks'});
                       
                   
               }).catch((error) =>{
                   let errorObj = error.response.data;
                    this.message = errorObj.message;
                    this.userName = null;
                    this.password = null; 
                   
               })
           }
        }
    }
}
</script>
<style scoped>
    
    .card{
        margin-top:25vh;
        
    }
    @media(max-width:640px){
        .card{
            margin-top:15vh;

        }
    }
    h4{
        font-family: 'Zilla Slab', serif;
    }
    .bg-indigo-800{
    background-color:#0e0e54;
}
.bg-indigo-900{
    background-color:#2D2D8A;
}
</style>

