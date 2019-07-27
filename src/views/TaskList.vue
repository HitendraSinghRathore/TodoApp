<template>
    <div class="w-full h-auto px-4 list">
        <div v-if="!loading">
        <h3 class="text-center text-lg">My Tasks</h3>
        <div class="progress-bar">
           
            <progress-bar size="small" v-bind:val="taskPercentage" bar-color="#0e0e54" v-bind:text="taskPercentageString" text-position="top"  class=" pt-3"></progress-bar>
        </div>
        <div class="taskList mt-4">
            <div class="tasks" v-for="task in taskList" v-bind:key="task._id">
                <div class="shadow mx-auto mb-2 w-7/8 flex py-1">
                <div class="checkbox w-auto mx-2 mt-2  ">
				    <input type="checkbox" v-bind:id="task._id" v-bind:checked="task.status=='done'" v-on:click="finishTask(task._id)" v-bind:disabled="task.status=='done'">
				    <label v-bind:for="task._id" ></label>
				</div>
                <div class="font-thin my-auto w-3/4" v-bind:class="{taskDone:task.status == 'done'}">{{task.description}}</div>
                <div v-if="task.status=='done'" class="my-auto align-right ">
                    <button class="btn bg-white-800 py-2 px-3 border-b-4 border-red-600 m-1 shadow rounded hover:bg-red-300 text-white" v-on:click="deleteTask(task._id)"> <img  src="../assets/trash.svg" alt="" height="16px" width="16px"></button>
                        
                    
                </div>
                </div>
            </div>
             
        </div>

    </div>
    <div v-if="loading" class="w-full text-center"> 
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    </div>
</template>
<script>
import ProgressBar from 'vue-simple-progress';
import axios from 'axios';
import URL from '../var';
export default {
    name:'taskList',
    components: {
    ProgressBar
  },
  data :function(){
      return {
          taskPercentage :null,
          taskPercentageString:null,
          taskList: [],
          errorMessage: null,
          loading:false
      }

  },
  mounted: function(){    
    this.getTasks();  
  },
  methods:{
      getTasks : function(){
          this.loading= true;
          let userId = localStorage.id;     
      let taskUrl = URL.path + "tasks/getTasks/"+userId;
      let percentage = 0;
       axios.get(taskUrl)
       .then((response) =>{
           this.loading = false;
           
           this.taskList = response.data.tasksList;
           
          let finishedTasks = this.taskList.filter((task)=>{
              return task.status == "done";
          });
          if(this.taskList.length == 0)
          percentage = 0;
          else
          percentage = (finishedTasks.length/this.taskList.length)*100;
          this.taskPercentage = Math.round(percentage);
          this.taskPercentageString = this.taskPercentage + "% Completed";
         
       })
       .catch((error) =>{
           this.loading = false;
           this.errorMessage = error.message;
           this.taskList = [];
           this.taskPercentage = 0;
           this.taskPercentageString = "0% Completed"

       })

      },
      finishTask: function(taskId){
          this.loading = true;
          let apiUrl = URL.path+ "tasks/updateTask";
          let task = {
              _id: taskId,
              status:'done'
          };
          axios.put(apiUrl,{taskObj:task})
          .then((response)=>{
              this.getTasks();
          })
          .catch((error) =>{
              this.loading = false;
              this.errorMessage = error.data.message;
          })

          
      },
       deleteTask : function(taskId){
       let apiUrl = URL.path+ "tasks/deleteTask/"+taskId;
      
       axios.delete(apiUrl)
       .then((response)=>{
           
           console.log(response);
           this.getTasks();
           
       }).catch((error) =>{
           this.getTasks();
           
           
       })

    
  }

  },

 
}
</script>
<style scoped>

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

.taskDone{
    text-decoration:line-through;
    color:rgba(0,0,0,0.5);
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

