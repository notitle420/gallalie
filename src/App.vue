<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-flex xs12>
          <v-toolbar dark>
            <v-toolbar-title class="headline text-uppercase">
                <span>Ocean's</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
              <v-btn to="/" x-small>Home</v-btn>
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn x-small v-on="on">Search▼</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in items"
                    :key="index" text
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn to="/" x-small>About</v-btn>
              <v-btn to="/" x-small>MyPage</v-btn>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-card>
    <workList/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import workList from '@/views/workList.vue';
export default {
  name: 'App',
  components: {
    workList
  },
  data: () => ({
    items: [
      { title: 'Art' },
      { title: 'Artist' },
      { title: 'Place' }
    ]
  })
};
</script>
