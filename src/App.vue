<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <div class="leftNav">
    <h1>niHire</h1>

    <div class="toProfileDiv">
      <img
        src="https://www.adobe.com/express/create/media_127540366421d3d5bfcaf8202527ca7d37741fd5d.jpeg?width=400&format=jpeg&optimize=medium"
        alt=""
      />
      <div class="nameAndTitle">
        <p class="name">Ducovic Dimitri</p>
        <p class="title">Software developer</p>
      </div>
    </div>

    <div class="miniNav">
      <div class="iconAndNavText">
        <p>Home</p>
      </div>
    </div>

    <div class="miniNav">
      <div class="iconAndNavText">
        <p>Discover</p>
      </div>
    </div>

    <div class="miniNav">
      <div class="iconAndNavText">
        <p>Post service</p>
      </div>
    </div>

    <div class="miniNav">
      <div class="iconAndNavText">
        <p>Settings</p>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.leftNav {
  width: 20%;
  background: rgb(243, 253, 255);
  height: 100%;
  position: fixed;
  box-shadow: rgb(238, 238, 238) 5px 5px 5px;
  padding: 20px;
}

.toProfileDiv {
  height: 100px;
  background: rgb(218, 239, 255);
  border-radius: 10px;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.toProfileDiv img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.line {
  border-color: #000000;
  height: 0.1px;
}
.miniNav {
  height: 80px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px rgb(237, 237, 237);
  cursor: pointer;
}
.nameAndTitle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.iconAndNavText p {
  font-weight: 700;
}
.name {
  font-weight: 800;
}
.title {
  color: #5c5c5c;
  font-size: 12px;
}
</style>
