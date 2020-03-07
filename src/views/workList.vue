<template>
  <div class="work">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 xs6 v-for="(work, i) in works" :key="i" name>
          <v-card width="180" height="600" class="mx-2 mb-4">
            <v-img width="180" height="150">画像入れる</v-img>
            <v-card-title>{{ work.title }}</v-card-title>
            <v-divider/>
            <v-card-subtitle>朝ごはん</v-card-subtitle>
            <v-divider/>
            <v-card-text>あああああああああああああああああああああああああ</v-card-text>
            <v-divider/>
            <v-card-text>Like:200  View:200</v-card-text>
            <v-divider/>
            <v-card-text>油絵</v-card-text>
            <v-divider/>
            <span>
              <v-layout>
                <v-img width="40" height="40"></v-img>
                  <v-card-text>asagohandaisuki</v-card-text>
              </v-layout>
            </span>
            <v-card-text>ああああああああああああああ</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
      <v-layout justify-center class="mt-10">
        <v-btn to="/work-add" x-large color="white">Add</v-btn>
      </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    works() {
      return this.$store.getters.works
    }
  }
}
</script>

//https://vuetifyjs.com/en/components/toolbarsを参考にしてv-rowの中にworkの内容を全部書いて内容変更の部分はvuexのdataに書いてv-forで回転させる
