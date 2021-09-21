<template>
  <div>

    <section class="section is-main-section">
      <card-component title="HTN (Hypertension)">
        <form @submit.prevent="submit">

          <div class="columns">

            <div class="column is-8">
              <b-field label="How long"> </b-field>
              <div class="columns">
                <div class="column is-4">
                  <b-field label="">
                    <b-input  maxlength="2" v-model="form.whyy" placeholder="YY">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-4 ">
                  <b-field label="">
                    <b-input maxlength="2" v-model="form.whmm" placeholder="MM">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-4 ">
                  <b-field label="">
                    <b-input maxlength="2" placeholder="DD">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <b-field label="Stress/Angio"> </b-field>
              <div class="columns">
                <div class="column is-full  cstm-radio-btn">
                  <div class="block">
                    <b-field label="">
                      <b-radio v-model="radio" name="strees" native-value="stressYes" type="is-info">
                        Yes
                      </b-radio>
                      <b-radio v-model="radio" name="strees" native-value="stressNo" type="is-info">
                        No
                      </b-radio>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>


          </div>


          <div class="columns">
            <div class="column is-12">
              <b-field label="Treatment">
                <b-input maxlength="500" type="textarea"></b-input>
              </b-field>
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
