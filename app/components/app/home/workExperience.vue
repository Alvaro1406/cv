<template>
  <div class="w-full">
    <p class="text-[36px] font-bold">
      {{ $t("workExperience.title").split(" ")[0] }}
      <span class="text-primary">
        {{ $t("workExperience.title").split(" ")[1] }}
      </span>
    </p>
    <UAccordion :items="workExperience" class="w-full" :multiple="true">
      <template #body="{ item }">
        <div class="flex items-center gap-2">
          <calendarIcon class="h-5 w-5" />
          <span>
            {{ formatDateAndTime(item.startDate) }}
          </span>
          -
          <span>
            {{ formatDateAndTime(item.endDate) }}
          </span>
        </div>
        <div class="flex items-center gap-2 mt-2">
          <locationIcon class="h-5 w-5" />
          <span>{{ item.location }}</span>
          -
          <span>{{ item.position }}</span>
        </div>
        <p class="text-md leading-7 text-muted-foreground mt-2">
          {{ item.description[locale] }}
        </p>

        <UTimeline
          :items="item.projects"
          size="xs"
          :ui="{
            date: 'float-end ms-1',
            description:
              'px-3 py-2 ring ring-default mt-2 rounded-md text-default',
          }"
          class="sm:w-96 mt-4"
          :default-value="6"
        >
          <template #indicator="{ item }"> {{ item.number }} </template>
          <template #title="{ item }">
            <span>{{ item.name }}</span>
          </template>
          <template #description="{ item }">
            <span>{{ item.description[locale] }}</span>
          </template>
        </UTimeline>
      </template>
    </UAccordion>
  </div>
</template>

<script setup lang="ts">
// Import icons
import calendarIcon from "~/assets/icons/calendar.vue";
import locationIcon from "~/assets/icons/location.vue";
import { formatDateAndTime } from "~/utils/formatDate";

// I18n
const { locale } = useI18n();

// Composables
const { workExperience, getWorkExperience } = useWorkExperience();

async function fetchWorkExperience() {
  await getWorkExperience();
}

// Hooks
onBeforeMount(async () => {
  await fetchWorkExperience();
});
</script>
