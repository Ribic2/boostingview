<template>
  <v-app>
    <v-navigation-drawer
        v-model="toggle"
        app
        right
    >
      <v-list>
        <v-list-item>
            <v-btn
                rounded
                block
                :elevation="false"
                @click="$router.push({name: 'prices'})"
            >
              Our prices
            </v-btn>
        </v-list-item>

        <v-list-item>
            <v-btn
                rounded
                block
                :elevation="false"
                @click="$router.push({name: 'contact'})"
            >
              Contact us
            </v-btn>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>

      <v-toolbar-title
           id="title"
          @click="$router.push({name: 'Home'})">
        Boosting site</v-toolbar-title>
      <v-spacer>

      </v-spacer>

      <!-- Breaks when viewport is mobile -->
      <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.xs"
          @click="toggle = !toggle"
      ></v-app-bar-nav-icon>

      <!-- Displayed if viewport is not mobile-->
      <div v-else>
        <v-btn
            rounded
            :elevation="false"
            @click="$router.push({name: 'prices'})"
          >
          Our prices
        </v-btn>

        <v-btn
            rounded
            :elevation="false"
            @click="$router.push({name: 'contact'})"
        >
          Contact us
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    toggle: false
  }),
};
</script>

<style>
  #title:hover{
    cursor: pointer;
  }
</style>
