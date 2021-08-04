<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Patient Information" icon="account">
        <form @submit.prevent="submit">
          <div class="columns">
            <div class="column is-one-third">
              <b-field label="Date">
                <b-datepicker>
                </b-datepicker>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="Time">
                <b-timepicker>
                </b-timepicker>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third ">
              <b-field label="Name">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="DOB">
                <b-datepicker placeholder="DOB">
                </b-datepicker>
              </b-field>
            </div>

            <div class="column is-one-third cstm-radio-btn">
              <div class="block">
                <b-field label="Sex">
                  <b-radio v-model="radio" name="name" native-value="male" type="is-info">
                    Male
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="female" type="is-info">
                    Female
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="other" type="is-info">
                    Other
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-one-third ">
              <b-field label="IP">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="Proposed Operation">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="Pre-Operative Diagnosis">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="BP">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half ">
                  <b-field label="HR">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>


              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Sao2">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="Height(cm)">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Weight (kg)">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="BMI">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </div>

<div>
             <div class="column is-full cstm-radio-btn">
              <div class="block">
                <b-field label="ASA Physical Status">
                  <b-radio v-model="radio" name="name" native-value="zero" type="is-info">
                    0
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="one" type="is-info">
                    1
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="two" type="is-info">
                    2
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="two" type="is-info">
                    3
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="two" type="is-info">
                    4
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="two" type="is-info">
                    5
                  </b-radio>
                  <b-radio v-model="radio" name="name" native-value="two" type="is-info">
                    E
                  </b-radio>
                </b-field>
              </div>
            </div>
            </div>


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
