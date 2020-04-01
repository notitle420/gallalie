<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-flex xs12>
          <v-toolbar dark>
            <v-toolbar-title class='headline text-uppercase'>
                <span>Ocean's</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
              <v-btn to='/' x-small>Home</v-btn>
              <v-menu open-on-hover bottom offset-y :close-on-click='closeOnClick' v-model='value'>
                <template v-slot:activator='{ on }'>
                  <v-btn x-small v-on='on'>Search▼</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for='(item, index) in items'
                    :key='index' text
                  >
                    <v-btn text :to='"/" + item.url'>{{ item.title }}</v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn to='/' x-small>About</v-btn>
              <v-btn to='/my-page' x-small>MyPage</v-btn>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-card>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Art', url: '' },
      { title: 'Artist', url: 'artist-card-list' },
      { title: 'Place' }
    ],
    value: false,
    closeOnClick: true
  }),
  watch: {
    //ページ遷移が起こったらsearchの開いていたのを強制的に閉じさせる
    '$route': function(to, from) {
      if(to.path !== from.path) {
        this.value = false
      }
    }
  }
};
</script>
