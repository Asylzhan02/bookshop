<script setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import { useShopStore } from "../stores/shop";

const shop = useShopStore();
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <RouterLink class="text-3xl" to="/">Книжный магазин</RouterLink>
    </div>
    <RouterLink
      class="flex items-center gap-2 text-green-500 hover:text-green py-4 px-8"
      to="/cart"
    >
      <ShoppingBagIcon class="h-6 w-6" />
      <span class="text-black">{{ shop.cartQuantity }}</span>
    </RouterLink>
  </div>
</template>
