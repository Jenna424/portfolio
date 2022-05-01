<template>
  <dialog class="dropdown-container">
    <button @click="dropFunction" class="dropbtn">NAME</button>
    <div class="dropdown" v-if="isListOpen" id="myDropdown"  @click="handleClick">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/resume">Resume</router-link>
    </div>

    
  </dialog>
</template>

// refereced: https://www.w3schools.com/howto/howto_js_dropdown.asp

<script>
  export default {
    name: 'NavBar',
    data: () => ({
        isListOpen: false
    }),
    methods: {
        dropFunction() {
            this.isListOpen = !this.isListOpen
        }
    }
  
  }
</script>

<style>

.dropdown-container {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  text-align: left;
  border: 0;
}
.dropbtn {
  color: rgb(208, 155, 155);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #c5d7e1;
}

.dropdown {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-self: flex-start;
  z-index: 2;
}

.drop-down-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: rgb(243, 220, 220);}

.show {display: block;}
</style>