<template>
    <div>
       <div class="card  w-full sm:w-4/5 bg-white rounded shadow-xl m-auto p-4">
            <h4 class="text-center text-xl mb-4"> Login</h4>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-800 mb-2 text-md" for="username">Username</label>
                    <input type="text" name="username" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 text-gray-700 leading-tight   focus:boder-none" placeholder="abc@test.com">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-800 mb-2 text-md" for="password">Password</label>
                    <input type="password" name="password" placeholder="********" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 text-gray-700 focus:border-none">

                </div>
                <div class="mb-4 flex justify-between items-center">
                    <button class="bg-indigo-800 py-2 px-4 text-white text-bold shadow-lg rounded hover:bg-indigo-900 ">Login</button>
                    <router-link to=""><span class="inline-block font-bold text-indigo-900 text-md hover:text-indigo-800 ">New user? Sign up.</span></router-link>
                    
                </div>
            </form>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'login'
}
</script>
<style scoped>
    
    .card{
        margin-top:25vh;

    }
    h4{
        font-family: 'Zilla Slab', serif;
    }
</style>

