<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Stones">
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

          <div class="columns">

            <div class="column is-one-half">
              <b-field label="Present">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-half">
              <b-field label="Passed">
                <b-input>
                </b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column cstm-radio-btn">
              <div class="block">
                <b-field label="Surgery needed">
                  <b-radio v-model="radio" name="surgeryNeeded" native-value="surgeryNeededYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="surgeryNeeded" native-value="surgeryNeededNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>

          <div class="columns mb-3">
            <div class="column is-full">
              <b-field label="What surgery">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>
           </div>

          <b-button type="sbmt-btn">Submit</b-button>


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
        checked: false,
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
