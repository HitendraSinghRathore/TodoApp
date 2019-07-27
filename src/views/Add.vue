<template>
    <div class="w-full h-auto px-4">
        <div v-if="!loading">
        <h3 class="text-center text-lg mb-8 border-b-2 border-gray-800 ">Add New Task</h3>
        
        <div class="mb-2 mt-16">
            <label class="block text-gray-800 mb-2 text-md ">Description</label>
            <textarea type="textarea" v-model="description" focus class="rounded shadow-md w-full py-2 px-3 border-2 border-indigo-800 leading-tight focus:border-none" placeholder="Something like: Buy Milk " rows="5" cols="50" style="resize:none"></textarea>
        </div>
        <div v-if="errorMessage" class="mt-4 mb-4 text-red-600 text-md ">{{errorMessage}}</div>
        <div v-if="description!=''"><button class="btn shadow-lg rounded px-4 py-2 bg-indigo-800  hover:bg-indigo-900 w-full text-white font-bold" v-on:click="submitTask">Submit </button>
             </div>
        </div>
        <div v-if="loading" class="w-full text-center">
             <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import URL from '../var';
export default {
    name:'add',
    data:function(){
        return{
            loading:false,
            description:"",
            errorMessage:null
        }

    },
    methods:{
        submitTask:function(){
            this.loading = true;
            let apiUrl = URL.path + "tasks/addTask";
            let userId = localStorage.id;
            let task = {
                user: userId,
                description: this.description,

            };
            axios.post(apiUrl,{
                taskObj:task
            })
            .then((response)=>{
                this.loading = false;
                this.$router.push({path:'/tasks'})
            }).catch((error)=>{
                this.loading = false;
                this.errorMessage = error.data.message

            })
        }

    }
}
</script>
