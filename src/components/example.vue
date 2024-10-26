<script setup lang="ts">
import type { DateRange } from 'radix-vue'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end,
}) as Ref<DateRange>
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <h1 class="text-5xl font-bold text-white mb-4">Under Construction 🚧</h1>
      <p class="text-xl text-white mb-8">More content coming soon!</p>
    </div>
</template>