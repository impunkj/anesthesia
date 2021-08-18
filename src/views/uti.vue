<template>
  <div>

    <section class="section is-main-section">
      <card-component title="UTI">
        <form  method="post" @submit.prevent="getUtiFormData">
<!-- <form> -->
        <div class="columns">
            <div class="column is-one-third">
              <b-field label="When">
                <b-input v-model="utiForm.when">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="Months" >
                <b-input v-model="utiForm.months">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="Days">
                <b-input v-model="utiForm.days">
                </b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third">
              <b-field label="Treated">
                <b-input maxlength="300" type="textarea" v-model="utiForm.treated"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="CUE">
                <b-input maxlength="300" type="textarea" v-model="utiForm.cue"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="What drugs">
                <b-input maxlength="300" type="textarea" v-model="utiForm.drugs"></b-input>
              </b-field>
            </div>
          </div>



          <button class="sbmt-btn" type="submit" >Submit</button>
<!-- v-on:click="getUtiFormData" -->
        </form>
      </card-component>

    </section>
  </div>
</template>

<script>
  import mapValues from 'lodash/mapValues'
  import TitleBar from '@/components/TitleBar'
  import CardComponent from '@/components/CardComponent'
  import CheckboxPicker from '@/components/CheckboxPicker'
  import RadioPicker from '@/components/RadioPicker'
  import FilePicker from '@/components/FilePicker'
  import HeroBar from '@/components/HeroBar'
  import Axios from 'axios'
  import VueAxios from 'vue-axios'

  export default {
    name: 'Forms',
    components: {
      HeroBar,
      FilePicker,
      RadioPicker,
      CheckboxPicker,
      CardComponent,
      TitleBar
    },
    data() {
      return {
        utiForm : {
          when : null,
          months : null,
          days : null,
          treated : null,
          cue :  null,
          drugs : null
        },


        /* form: {
          name: null,
          email: null,
          phone: null,
          department: null,
          subject: null,
          question: null
        },
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        }, */

      }
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {

      getUtiFormData () {
        // console.log("Data", this.utiForm);


        Axios.post("", this.utiForm).then((response) => {
  console.log(response.data)
})


      },

      // submit() {},
      reset() {
        this.form = mapValues(this.form, (item) => {
          if (item && typeof item === 'object') {
            return []
          }
          return null
        })

        this.$buefy.snackbar.open({
          message: 'Reset successfully',
          queue: false
        })
      }
    }
  }


</script>
