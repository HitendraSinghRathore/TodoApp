<template>
<div>
    <div class="card w-full sm:w-4/5 bg-white shadow shadow-lg rounded mx-auto mb-5 p-4 ">
    <h4 class="text-center text-xl mb-4">Sign Up</h4>
    <form>
        <div class="mb-4">
            <label class="block text-gray-800 mb-2 text-md" for="displayName">Name</label>
            <input type="text" name="displayName" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 text-gray-700 focus:border-none" placeholder="John Smith"/>

        </div>
        <div class="mb-4">
             <label class="block text-gray-800 mb-2 text-md" for="username">Username</label>
            <input type="text" name="username" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 text-gray-700 focus:border-none" placeholder="john@smith.com"/>

        </div>
        <div class="mb-4">
             <label class="block text-gray-800 mb-2 text-md" for="password"> Choose a password</label>
            <input type="password" name="password" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 text-gray-700 focus:border-none" placeholder="*************"/>

        </div>
        <div class="mb-6">
             <label class="block text-gray-800 mb-2 text-md" for="rePassword">Confirm password</label>
            <input type="password" name="rePassword" class="rounded shadow-md w-full py-2 px-3 border border-indigo-800 text-gray-700 focus:border-none" placeholder="*************"/>

        </div>
        <div class="sm:flex items-center sm:justify-between mb-4">
            <button class="bg-indigo-800 rounded py-2 px-4 hover:bg-indigo-900 text-white font-bold shadow-lg">Sign Up</button>
            <router-link to="/"><a class=" block mt-2 sm:inline-block font-bold text-indigo-900 text-md hover:text-indigo-800">Already have an account?</a></router-link>
        </div>
    </form>
    </div>
</div>
    
</template>
<script>
export default {
    name:'signup'
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
</style>

