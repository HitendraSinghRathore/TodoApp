<template>
<div>
<div class="outer sm:flex flex-row-reverse m-0 p-0">
<div class="form-element h-full sm:h-screen w-full sm:flex-none sm:w-1/3 m-0 p-5">
<router-view></router-view>
</div>
<div class="image-element bg-white sm:h-screen  w-full p-3 sm:flex-none sm:flex sm:w-2/3  m-0 ">
<img src="@/assets/art.svg" class=" art  sm:flex-1 sm:w-2/4"/>
<div class="description sm:flex-1 w-full sm:w-2/4">
<div class="m-auto  sm:mt-10 p-3">
<h3 class=" font-bold text-xl mb-2">What's It About?</h3>
<p>
  To Do App is a task tracker for the people who do alot. Simple design made with Vue and Tailwind. Working to make it better.
  The basics are to understand what the task stages can be. Please enjoy!
</p>
</div>
</div>

</div>
</div>
<div class="logo m-5 absolute text-center top-0 sm:left-0 text-white text-l sm:text-2xl font-extrabold sm:text-indigo-800">TO DO APP</div>

</div>
</template>

<script>


export default {
  name: 'home',
  
}
</script>

<style scoped>
.logo{
 font-family: 'Fredoka One', cursive;
}
.text-style{
  color:#0E0E52 !important;
}
.form-element{
  background-color: #0E0E52;
}
.art{
  margin-top:15vh;
  
 

}
h3 {
  font-family: 'Zilla Slab', serif;
  
}

.description{
  
  margin-top: 10vh
}
@media(min-width:640px){
  .art{
    max-width: 60%
  }
  .description{
    margin-top: 30vh;
  }
 
}


</style>
<style>
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>


