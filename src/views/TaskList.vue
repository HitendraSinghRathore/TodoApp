<template>
    <div class="w-full h-auto px-4 list">
        <h3 class="text-center text-lg">My Tasks</h3>
        <div class="progress-bar">
           
            <progress-bar size="small" val="50" bar-color="#0e0e54" font-size="16" text-position="top" text="3 out of 6" class=" pt-3"></progress-bar>
        </div>
        <div class="taskList mt-4">
            <div class="tasks">
                <div class="shadow-md mx-auto mb-2 w-7/8 flex py-1">
                <div class="checkbox w-auto mx-2 mt-2 ">
				    <input type="checkbox" id="check1" >
				    <label for="check1"></label>
				</div>
                <div class="font-thin my-auto">Test Txt</div>
                </div>
            </div>
             <div class="tasks">
                <div class="shadow-md mx-auto mb-2 w-7/8 flex py-1">
                <div class="checkbox w-auto mx-2 mt-2 ">
				    <input type="checkbox" id="check1" >
				    <label for="check1"></label>
				</div>
                <div class="font-thin my-auto">Test Txt</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import ProgressBar from 'vue-simple-progress'
export default {
    name:'taskList',
    components: {
    ProgressBar
  }
}
</script>
<style scoped>
.list{
  font-family: 'Roboto', sans-serif;
}
.checkbox {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 12px;
}

.checkbox input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
}

.checkbox label {
    position: relative;
    cursor: pointer;
    margin: 0;
}

.checkbox label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #0e0e54;
    
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
}

.checkbox input:checked + label:before {
    background-color: #0e0e54;
}

.checkbox input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

</style>

