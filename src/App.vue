<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </nav> -->

  <nav>
    <div class="leftNav">
      <div class="topNav">
        <img
          class="niHireLogo"
          src="./assets/nihire-icon-font.png"
          alt="ni-hire-logo"
        />

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
      </div>

      <div class="miniNav">
        <div class="iconAndNavText">
          <router-link to="/">Home</router-link>
        </div>
      </div>

      <div class="miniNav">
        <div class="iconAndNavText">
          <router-link to="/discover">Discover</router-link>
        </div>
      </div>

      <div class="miniNav">
        <div class="iconAndNavText">
          <router-link to="/post-service">Post service</router-link>
        </div>
      </div>

      <div class="miniNav">
        <div class="iconAndNavText">
          <router-link to="/saved-items">Saved items</router-link>
        </div>
      </div>

      <div class="miniNav">
        <div class="iconAndNavText">
          <router-link to="/settings">Settings</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Nunito&display=swap");

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #42b983;
  font-weight: 800;
}

.niHireLogo {
  margin: 20px 0;
}

.leftNav {
  width: 20%;
  background: rgb(28, 28, 28);
  height: 100%;
  position: fixed;
  box-shadow: rgb(238, 238, 238) 5px 5px 5px;
  padding: 20px;
}

.topNav {
  background: rgb(50, 50, 50);
  border-radius: 10px;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 20px;
  border: solid 1px rgb(72, 72, 72);
}

.toProfileDiv {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
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
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px rgb(74, 74, 74);
  cursor: pointer;
  padding: 20px 0;
}

.nameAndTitle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.iconAndNavText p {
  font-weight: 700;
  color: white;
}

.name {
  font-weight: 800;
  color: white;
}

.title {
  color: #c3c3c3;
  font-size: 12px;
}
</style>
