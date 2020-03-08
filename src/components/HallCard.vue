<template>
  <section class="card">
    <img class="img" v-bind:src="hallImage" alt="" />
    <div class="card-content">
      <h1 class="title">{{ hallTitle }}</h1>
      <p class="name">{{ ownerName }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    //各データはどう用意する？
    "hallImage",
    "hallTitle",
    "ownerName"
  ]
};
</script>

<style>
.card {
  width: 300px;
  background: #fff;
}
.img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.title {
  font-size: 14px;
  color: #333;
}
.name {
  color: #777;
  font-size: 12px;
  line-height: 1.5;
}
</style>
