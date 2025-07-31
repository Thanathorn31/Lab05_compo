
<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
// import  EventCategory from '@/components/EventCategory.vue';
import {type  Event } from '@/types';
import { ref, onMounted ,computed,watchEffect} from 'vue';
import EventService from '@/services/EventService';


const events = ref<Event[] | null>(null)

const totalEvents =ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize.value);
  return totalPages > page.value;
});



const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true,
  },
})
const page = computed(() => props.page);
const pageSize = computed(() => props.pageSize)

const pageSizeOption = [2, 3, 4, 6]

onMounted(() =>{
 
watchEffect(() => {
    events.value = null
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        console.log(response.data)

        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log('There was an error!', error)
      })
  })
  })
  
</script>

<template>
   
  <!-- new element -->
  <h1>Events For Good</h1>
  
  <!-- <div class="events"> -->
    <div class="flex flex-col items-center">
    <EventCard
  v-for="event in events"
  :key="event.id"
  :event="event" 
/>
    <!-- <EventCategory v-for="event in events" :key="event.id" :event="event" /> -->
  </div>
    
  
  <div class="pagination-container">
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
        rel="prev"
        v-if="page != 1"
        class="pagination-btn prev-btn">
        <span class="btn-text">Previous</span>
      </router-link>
       
      <div class="page-info">
        <span>Page {{ page }} of {{ Math.ceil(totalEvents / pageSize) }}</span>
      </div>

      <router-link
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
        rel="next"
        v-if="hasNextPage"
        class="pagination-btn next-btn">
        <span class="btn-text">Next</span>
      </router-link>
    </div>
      
    <div class="page-size-controls">
      <span class="page-size-label">Show:</span>
      <div class="page-size-options">
        <router-link
          v-for="size in pageSizeOption"
          :key="size"
          :to="{ name: 'event-list-view', query: { page: 1, pageSize: size } }"
          :class="{ active: pageSize === size }"
          class="page-size-option">
          {{ size }}
        </router-link>
      </div>
      <span class="page-size-label">items</span>
    </div>
  </div>
    
</template>

<style scoped>
/* .evens{
  display: flex;
  justify-content: center;
  align-items: center;
} */

.pagination-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 3rem auto;
  max-width: 600px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.page-info {
  color: #666;
  font-size: 14px;
  font-weight: 500;
  padding: 0 1rem;
}

.pagination-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 16px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.2s ease;
  min-width: 90px;
  justify-content: center;
}

.pagination-btn:hover {
  background-color: #36a374;
}

.btn-icon {
  font-size: 16px;
}

.btn-text {
  font-family: inherit;
}

.page-size-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #f8f9fa;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.page-size-label {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.page-size-options {
  display: flex;
  gap: 4px;
}

.page-size-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  background-color: white;
  color: #666;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.page-size-option:hover {
  background-color: #f0f0f0;
  border-color: #42b983;
  color: #42b983;
}

.page-size-option.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}
</style>
