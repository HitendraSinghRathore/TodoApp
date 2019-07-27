<template>
    <div class="background w-full h-full m-0 absolute  ">
        <div class="absolute top-0 left-0 text-l sm:text-2xl font-extrabold text-indigo-800 py-2 px-4 logo">TO DO APP</div>
        <div class="card mx-auto sm:w-1/2 md:w-1/3 w-3/4 shadow-xl rounded-lg   bg-white mt-10 ">
        <div class="header w-full p-2 " style=" font-family: 'Quattrocento Sans', sans-serif;">
            <div class="nav flex pt-2">
                <div class=" w-1/2  pt-2 ">
               <div v-if="$route.path == '/tasks'">
                <button v-on:click="logout" class=" modal-open text-white font-bold rounded bg-indigo-800 hover:bg-indigo-900 px-4 py-2">Log out</button>
                 </div>
                 <div v-if="$route.path == '/tasks/add'">
               <router-link to="/tasks">
                <button  class="text-white font-bold rounded bg-red-800 hover:bg-red-700 px-4 py-2">Back</button>
               </router-link>
                 </div>
                 </div>
                
                <div class=" w-1/2  flex ">
                <span class="mr-2 py-2 font-md w-3/4 text-right">Hi {{userName}}</span>
                <img src="../assets/user.jpg" class="h-10 w-10 rounded-full ">
                
                </div>
                
                
            </div>
          
        </div>
        <div class="content w-full p-2 ">
            <router-view></router-view>
        </div>
        <div class="footer w-full p-2 px-4 h-16 ">
            
            <div v-if="$route.path == '/tasks'"><router-link to="/tasks/add"><button class="btn shadow-lg rounded px-4 py-2 bg-indigo-800  hover:bg-indigo-900 w-full text-white font-bold">Add Task </button>
           
            </router-link>
             </div>
             
        </div>
        
        </div>

    </div>
    
</template>
<script>

export default {
    name:'tasks',
    mounted:function(){
        if(localStorage.id==undefined)
         this.$router.push({path:"/"})
    },
    data:function(){
        return{
            userName:localStorage.displayName
        }
    },
    methods:{
        logout:function(){
            localStorage.clear();
            this.$router.push({path:'/'})
        }
    }
    
}
</script>
<style scoped>
.background{
    background-image: url("../assets/back.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.card{
   
    height:600px;
 
}
.content{
    height:460px;
}
.logo{
 font-family: 'Fredoka One', cursive;
}
@media (max-width:320px) {
    .card{
        height:400px;
    }
    .content{
        height: 250px;
    }


}

.bg-indigo-800{
    background-color:#0e0e54;
}
.bg-indigo-900{
    background-color:#2D2D8A;
}

</style>

