<template>
<div>
    <div class="card w-full sm:w-4/5 bg-white shadow shadow-lg rounded mx-auto mb-5 p-4 ">
    <h4 class="text-center text-xl mb-4">Sign Up</h4>
    <form onsubmit="return false" novalidate>
        <div class="mb-4">
            <label class="block text-gray-800 mb-2 text-md" for="displayName">Name</label>
            <input type="text" name="displayName" v-model="displayName" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800  focus:border-none" placeholder="John Smith" required/>

        </div>
        <div class="mb-4">
             <label class="block text-gray-800 mb-2 text-md" for="username">Username</label>
            <input type="text" name="username" v-model="userName" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800  focus:border-none" placeholder="johnSmith1" required/>

        </div>
        <div class="mb-4">
             <label class="block text-gray-800 mb-2 text-md" for="password"> Choose a password</label>
            <input type="password" name="password" v-model="password" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800  focus:border-none" placeholder="*************" required/>

        </div>
        <div class="mb-4">
             <label class="block text-gray-800 mb-2 text-md" for="rePassword">Confirm password</label>
            <input type="password" name="rePassword" v-model="rePassword" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800  focus:border-none" placeholder="*************" required/>

        </div>
        <div v-if="message" v-bind:class="{'text-green-600':!error,'text-red-600':error}" class="text-center mb-1 text-bold">{{message}}</div>
        <div class="sm:flex items-center sm:justify-between mb-4">
            <button v-on:click="signIn" class="bg-indigo-800 rounded py-2 px-4 hover:bg-indigo-900 text-white font-bold shadow-lg">Sign Up</button>
            <router-link to="/"><a class=" block mt-2 sm:inline-block font-bold text-indigo-900 text-md hover:text-indigo-800">Already have an account?</a></router-link>
        </div>
    </form>
    </div>
</div>
    
</template>
<script>
import URL from '../var';
import axios from 'axios';
export default {
    name:'signup',
    data: function(){
        return {
            displayName: null,
            userName: null,
            password:null,
            rePassword:null,
            message:null,
            error:false
        }
    },
    methods:{
        signIn: function(){
            if(!this.displayName||!this.userName||!this.password){
                this.error = true;
                this.message = "Please fill all mandatory fields."
            }
            else if(this.password!=this.rePassword){
                this.error = true;
                this.message = "Password does not match.";
            }
            else{
                let url = URL.path+"login/addUser/";
                console.log(url)
                let userObj = {
                    userName: this.userName,
                    displayName:this.displayName,
                    password:this.password
                }
                
                axios.post(url,userObj)
                .then((response)=>{
                    this.message = "User Added successfully.";
                    this.error = false;
                    this.displayName = null;
                    this.userName = null;
                    this.rePassword = null;
                    this.password = null;
                }).catch((error)=>{
                    this.message = error.response.data.message;
                    this.error = true;
                    this.displayName = null;
                    this.userName = null;
                    this.rePassword = null;
                    this.password = null;
                })
            }

        }
    }
}
</script>
<style scoped>
.card{
        margin-top:10vh;
        

    }
    @media(max-width:640px){
        .card{
            margin-top:10vh;

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

