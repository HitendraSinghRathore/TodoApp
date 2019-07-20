<template>
    <div class="background w-full h-full m-0 absolute  ">
        <div class="card mx-auto sm:w-1/2 md:w-1/3 w-3/4 shadow-xl rounded-lg   bg-white mt-6 ">
        <div class="header w-full p-2 " style=" font-family: 'Quattrocento Sans', sans-serif;">
            <div class="nav flex pt-2">
                <div class=" w-1/2 md:w-1/3 pt-2 ">
               <router-link to="/">
                <button class="text-white bg-indigo-800 hover:bg-indigo-900 px-2 py-1">Logout</button>
                </router-link> </div>
                <div class=" w-0 md:w-1/3">
                
                </div>
                <div class=" w-1/2 md:w-1/3 flex ">
                <span class="mr-1 py-2">Hello Test!</span>
                <img src="../assets/user.jpg" class="h-8 w-8 rounded-full ">
                
                </div>
                
                
            </div>
          
        </div>
        <div class="content w-full p-2 ">
            <router-view></router-view>
        </div>
        <div class="footer w-full p-2 h-16 ">Footer</div>
        
        </div>

    </div>
</template>
<script>

export default {
    name:'tasks',
    
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
    background-color:#0e0e80;
}
</style>

