<template>
  <div class="dropdown">
    <button @click="dropFunction()" class="dropbtn">NAME</button>
      <div id="myDropdown" class="dropdown-content" @click="handleChange">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/resume">Resume</router-link>
      </div>
  </div>
</template>

// refereced: https://www.w3schools.com/howto/howto_js_dropdown.asp

<script>
  export default {
    name: 'NavBar',
    methods: {
      dropFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }, 
      handleClick(e) {
        if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    }
  }
</script>

<style>
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
  text-align: left;
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