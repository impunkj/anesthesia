<template>
  <div>

    <section class="section is-main-section">
      <card-component title="UTI">
        <form  method="post" @submit.prevent="getUtiFormData">

          <div class="columns">
   <div class="column is-full cstm-radio-btn"  >
              <div class="block">
                <b-field label="">
                  <b-radio v-model="checked" name="checkVal" native-value="yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  v-model="checked"   name="checkVal" native-value="no" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
      </div>
</div>

 <div  v-if="checked === 'yes'">
<!-- <form> -->
  <b-field label="When" class=""> </b-field>
          <div class="columns">
            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YYYY" v-model="form.whyy" >
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM"  v-model="form.whmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD"  v-model="form.whdd">
                </b-input>
              </b-field>
            </div>
          </div>
       <!--  <div class="columns">
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
          </div> -->

                 <div class="columns">
   <div class="column is-full cstm-radio-btn"  >
              <div class="block">
                <b-field label="Treated">
                  <b-radio v-model="checked2" name="checkVal2" native-value="yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  v-model="checked2"   name="checkVal2" native-value="no" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
      </div>
</div>

 <div  v-if="checked2 === 'yes'">

          <div class="columns mb-4">
            <div class="column is-one-third">
              <b-field label="Treated">
                <b-input maxlength="300" type="textarea" v-model="form.treated"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="CUE">
                <b-input maxlength="300" type="textarea" v-model="form.cue"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="What drugs">
                <b-input maxlength="300" type="textarea" v-model="form.whatdrugs"></b-input>
              </b-field>
            </div>
          </div>
          </div>
           <button class="sbmt-btn" type="submit" >Submit</button>
 </div>


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
        checked: false,
        checked2: false,
         radio: 'default',
        isLoading: false,
        form: {
          name: null,
          email: null,
          phone: null,
          department: null,
          subject: null,
          question: null
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
