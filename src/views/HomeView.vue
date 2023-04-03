<template>
  <!-- <main>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit officiis, dolore adipisci delectus esse harum
    voluptate, fuga debitis sit nisi quis, itaque corrupti. Ratione quis illum eum, ut molestiae nam.
    Rerum facere eligendi enim alias dolores quia inventore, exercitationem ex pariatur, deserunt tenetur. Delectus error
    minima reprehenderit rerum, veniam iste, aliquid dolore eos praesentium porro molestiae itaque distinctio maxime
    recusandae!
    Itaque officiis tempora quibusdam odit fugit facere, officia magnam quo vel vitae aperiam ipsam harum eum assumenda
    atque, iusto voluptates sint. Tenetur itaque in reiciendis perspiciatis porro at provident ipsam.
    Velit recusandae cumque perferendis sed molestiae libero repellat delectus voluptatum, commodi sunt fugiat magni,
    mollitia a cum facere et sint quidem iure. Ex, ipsam animi reiciendis necessitatibus ullam officia deleniti.
    Atque cum id magnam corporis pariatur, ab repudiandae dignissimos maxime, quibusdam nostrum aperiam quos veniam unde
    eligendi earum vel exercitationem ad eos quaerat quo facere dolore temporibus aspernatur? Reiciendis, totam!
    Fuga accusantium optio expedita enim ducimus, modi odit temporibus consequuntur harum excepturi, molestias placeat
    minus minima iure ea totam ratione impedit odio consectetur distinctio obcaecati id tenetur perspiciatis amet. Sunt.
    Explicabo id, alias quia corrupti atque nulla error temporibus, omnis quod, cumque ad eum mollitia commodi pariatur
    quaerat vitae. Molestias ullam ex aspernatur, ipsa perferendis praesentium temporibus soluta enim unde.
    Officiis voluptatem repellendus totam porro veritatis repellat suscipit sint itaque nesciunt fugit nihil cumque alias,
    ullam molestiae quisquam dolore doloribus quas pariatur! Perspiciatis odio beatae velit tenetur dicta non libero.
    Debitis blanditiis, aspernatur vel itaque voluptate sit laborum. Quam culpa praesentium ab ad molestias? Aut, corporis
    cumque. Aliquid temporibus impedit accusantium mollitia, in, commodi ipsam, reprehenderit alias odio cumque harum!
    In, iure? Non vitae sunt quasi eum aliquid incidunt nesciunt debitis similique quae nam laboriosam architecto minima
    excepturi quod illum officia quam, unde neque quis necessitatibus veniam minus! Ducimus, impedit.
  </main> -->
  <div class="album wrapper">
    <div class="left">
      <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => !(idx % 2))" :key="idx" alt="just a photo">
      <!-- <div v-for="(url, idx) in photosURL.filter((_, idx) => !(idx % 2))" :key="idx" class="photo">
        <img :src="url" alt="just a photo">
      </div> -->
    </div>
    <div class="right">
      <!-- <div v-for="(url, idx) in photosURL.filter((_, idx) => idx % 2)" :key="idx" class="photo">
        <img :src="url" alt="just a photo">
      </div> -->
      <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => idx % 2)" :key="idx" alt="just a photo">

    </div>

  </div>
</template>

<script setup>
import { photosURL } from '../config';

</script>

<style scoped>
main {
  /*background-color: aquamarine;*/
  height: min-content;
  width: 100px;
}

.album {
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.photo {
  height: min-content;
}

img {
  width: 100%;
}
</style>
