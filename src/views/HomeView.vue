<template>
  <div class="usersContainer">
    <div class="searchContainer">
      <input type="text" placeholder="Search a service" />
    </div>

    <div class="topText">
      <p class="subTitleText">Top service providers</p>
      <p class="viewAllText">View all</p>
    </div>

    <div class="topUsers">
      <div
        v-for="premiumUser in premiumUsers"
        :key="premiumUser._id"
        class="featUser"
      >
        <img
          :src="
            premiumUser.profilePicture ? premiumUser.profilePicture : noImage
          "
          alt="premium service providers"
        />

        <div class="premiumUsersTextContainer">
          <p class="userNameText">{{ premiumUser.firstName }}</p>
          <p class="titleText">{{ premiumUser.generalPromotedTitle }}</p>
        </div>
      </div>
    </div>

    <div class="topText">
      <p class="subTitleText">Categories</p>
    </div>

    <div class="categoriesContainer">
      <div
        v-for="category in categories"
        :key="category.categoryID"
        class="categoriesItem"
      >
        <p>{{ category.categoryName }}</p>
      </div>
    </div>

    <div class="topText">
      <p class="subTitleText">Top dawgs</p>
      <p class="viewAllText">View all</p>
    </div>

    <div class="topDawgsSection">
      <div
        v-for="featuredServiceProvider in featuredServiceProviders"
        :key="featuredServiceProvider._id"
        class="topDawgItem"
      >
        <img
          :src="
            featuredServiceProvider.image1
              ? featuredServiceProvider.image1
              : noImage
          "
          alt="nihire featured services"
          class="topDawgIMG"
        />

        <div class="rightItems">
          <div class="nameAndStars">
            <p>{{ featuredServiceProvider.provider.firstName }}</p>
          </div>

          <p class="serviceNameText">
            {{
              featuredServiceProvider.service.serviceName.length <= 20
                ? capitalize(featuredServiceProvider.service.serviceName)
                : capitalize(
                    featuredServiceProvider.service.serviceName.slice(0, 19) +
                      "..."
                  )
            }}
          </p>
          <p class="smallText">{{ featuredServiceProvider.description }}</p>

          <div class="locationAndPrice">
            <p class="smallText locationText">
              {{ featuredServiceProvider.provider.location }}
            </p>
            <p class="smallText rateText">{{ featuredServiceProvider.rate }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="topText">
      <p class="subTitleText">Recently viewed</p>
      <p class="viewAllText">View all</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      premiumUsers: [],
      categories: [],
      featuredServiceProviders: [],
      noImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    };
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  mounted() {
    //get premium users
    fetch("https://ni-hire-backend.herokuapp.com/user/featured-users")
      .then((res) => res.json())
      .then((data) => {
        this.premiumUsers = data;
      })
      .catch((err) => console.log(err));

    //get all categories
    fetch(
      "https://ni-hire-backend.herokuapp.com/app/service/get-all-categories"
    )
      .then((res) => res.json())
      .then((data) => {
        this.categories = data.categories;
      })
      .catch((err) => console.log(err));

    //get featured service providers
    fetch(
      "https://ni-hire-backend.herokuapp.com/app/service-provider/get-featured"
    )
      .then((res) => res.json())
      .then((data) => {
        this.featuredServiceProviders = data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.searchContainer {
  margin: 40px 0;
}
.searchContainer input {
  height: 50px;
  width: 95%;
  border-radius: 10px;
  padding: 0 20px;
}
.usersContainer {
  width: 70%;
  /* background: gray; */
  float: right;
  margin: 0 20px 0 0;
}
.topText {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px 20px 0;
}
.subTitleText {
  font-weight: 800;
}
.viewAllText {
  font-weight: 800;
  color: tomato;
  text-decoration-line: underline;
}
.topUsers {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 20px 0 0;
  overflow-y: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  position: relative;
}
.featUser {
  width: 200px;
  background: white;
  border-radius: 20px 20px 0 0;
  margin: 0 20px 20px 0;
  height: 260px;
  box-shadow: rgb(224, 224, 224) 5px 5px 5px;
  cursor: pointer;
}
.featUser img {
  width: 200px;
  height: 200px;
  border-radius: 20px 20px 0 0;
}
.premiumUsersTextContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0 0 10px;
}
.userNameText {
  font-weight: 800;
}
.titleText {
  font-weight: 700;
  color: rgb(146, 146, 146);
  font-size: 12px;
}
.categoriesContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.categoriesItem {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(225, 225, 225);
  margin: 0 20px 20px 0;
  border-radius: 10px;
  box-shadow: rgb(236, 236, 236) 5px 5px 5px;
  cursor: pointer;
}
.categoriesItem p {
  font-size: 12px;
  font-weight: 800;
}
.topDawgsSection {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.topDawgItem {
  height: 180px;
  width: 420px;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: white;
  margin: 0 20px 20px 0;
  box-shadow: rgb(223, 223, 223) 5px 5px 5px;
  cursor: pointer;
}
.topDawgIMG {
  height: 100%;
  width: 180px;
}
.smallText {
  font-size: 12px;
  text-align: left;
  margin: 10px 0 0 0;
  color: rgb(115, 115, 115);
}
.rightItems {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
}
.locationAndPrice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
/* .nameAndStars {
} */
.locationText {
  color: rgb(0, 164, 164);
  font-weight: 800;
}
.rateText {
  color: rgb(255, 123, 0);
  font-weight: 800;
}
.serviceNameText {
  font-weight: 700;
  font-size: 14px;
  margin: 10px 0 0 0;
}
.nameAndStars p {
  font-weight: 800;
}
</style>

