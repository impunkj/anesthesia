<template>
<div>
  <div class="columns">
    <div class="column pb-0">
        <p class="pt-3">  <strong> Patient Name :  {{ patientName }} </strong> </p>
    </div>

    <div class="column pb-0">
 <p class="is-flex-grow-1 has-text-right editdelte-btn">

          <router-link to="#" class="chng-patient"> <i class="far fa-user"></i>  Change Patient </router-link>
            <router-link to="#" class="new-patient">  <i class="far fa-user"></i>  New Patient </router-link>
      </p>
    </div>
  </div>
  <div class="card form-section">
    <header v-if="title" class="card-header  ">
      <div class="card-header-title">
      <p class=" is-flex-grow-1">
        <b-icon v-if="icon" :icon="icon" custom-size="default" />
        {{ title }}
      </p>

      <!-- <p class="is-flex-grow-1 ">
         Patient Name :
      </p> -->
         <p class="is-flex-grow-1 has-text-right editdelte-btn">


      </p>
      </div>
      <a
        v-if="headerIcon"
        href="#"
        class="card-header-icon"
        aria-label="more options"
        @click.prevent="headerIconClick"
      >
        <b-icon :icon="headerIcon" custom-size="default" />
      </a>
    </header>
    <div class="card-content">
      <slot />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  data(){
    return{
       patientName :  localStorage.getItem("patientName"),
    }
  },
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    headerIcon: {
      type: String,
      default: null
    }
  },
  methods: {
    headerIconClick () {
      this.$emit('header-icon-click')
    }
  }
}
</script>
