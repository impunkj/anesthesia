<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Jaundice">
        <form @submit.prevent="submit">

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

        <b-field label="When?">
          </b-field>
          <div class="columns mb-3">

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YYYY" v-model="form.whyy">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM" v-model="form.whmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD" v-model="form.whdd">
                </b-input>
              </b-field>
            </div>

          </div>

            <b-field class="checkOut" >
            <b-checkbox v-model="checkboxClick" type="is-info"> Needed hospitalisation </b-checkbox>
        </b-field>

 <div  v-if="checkboxClick">
          <div class="columns">
            <div class="column is-half">
              <b-field label="Cause">
                <b-input maxlength="300" type="textarea" v-model="form.cause"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Viral status">
                <b-input maxlength="300" type="textarea" v-model="form.viralStatus"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
               <div class="column is-half">
              <b-field label="Child criteria">
                <b-input maxlength="300" type="textarea" v-model="form.childCriteria"></b-input>
              </b-field>
            </div>

              <div class="column is-half">
              <b-field label="I.N.R">
                <b-input maxlength="300" type="textarea" v-model="form.INR"></b-input>
              </b-field>
            </div>
          </div>
          </div>

           </div>



          <b-button type="sbmt-btn mt-5">Submit</b-button>

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
        checkboxClick : false,
        checked: false,
        radio: 'default',
         checkboxGroup: ['Flint'],
        isLoading: false,
        form: {
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
        },
        departments: ['Business Development', 'Marketing', 'Sales']
      }
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {
      submit() {},
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
