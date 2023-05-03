<script setup>
import { RouterLink } from "vue-router";
import { useShopStore } from "../stores/shop";

const shop = useShopStore();
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-items-center"
  >
    <RouterLink
      class="w-52 flex flex-col gap-2"
      v-for="item in shop.forSale"
      :to="`/item/${item.id}`"
      :key="item.id"
    >
      <img
        class="rounded-md bg-beige"
        :src="item.photo"
        alt="150 by 250 pixel placeholder"
      />
      <div class="flex justify-between">
        <div>{{ item.title }}</div>
        <div class="font-bold">${{ item.price / 100 }}</div>
      </div>
    </RouterLink>
  </div>
</template>
