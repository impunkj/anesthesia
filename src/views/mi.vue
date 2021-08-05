<template>
  <div>

    <section class="section is-main-section">
      <card-component title="MI">
        <form @submit.prevent="submit">

          <div class="columns">
            <div class="column is-one-third">
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="When">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="MM">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="DD">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>

            <div class="column is-one-third">
              <b-field label="Medical ">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Stented">
                  <b-radio v-model="radio" name="stented" native-value="stentedYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="stented" native-value="stentedNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="What treatment">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>



          <div class="columns">
            <div class="column is-one-third">
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="When">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="MM">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="DD">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>

            <div class="column is-one-third">
              <b-field label="What medication ">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Stopped Antiplatelet">
                  <b-radio v-model="radio" name="antiplatelet" native-value="antiplateletYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="antiplatelet" native-value="antiplateletNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-full " @click="isCardModalActive = true">
              <b-field label="What treatment">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Symptoms Improved">
                  <b-radio v-model="radio" name="symptomsImproved" native-value="symptomsImprovedYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="symptomsImproved" native-value="symptomsImprovedNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="CABG">
                  <b-radio v-model="radio" name="cabg" native-value="cabgYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="cabg" native-value="cabgNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-third">
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="When">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="MM">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label="DD">
                    <b-input>
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>

            <div class="column is-one-third">
              <b-field label="What medication ">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Symptoms improved">
                  <b-radio v-model="radio" name="symptoms" native-value="symptomsYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="symptoms" native-value="symptomsNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="What treatment">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Both Stented and CABG">
                  <b-radio v-model="radio" name="stendedCabg" native-value="stendedCabgYes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="radio" name="stendedCabg" native-value="stendedCabgNo" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third ">
              <b-field label="Repeat CAG">
                <b-input>
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="How many times">
                <b-input>
                </b-input>
              </b-field>
            </div>

          </div>


          <b-button type="sbmt-btn">Primary</b-button>

        </form>
      </card-component>



      <b-modal v-model="isCardModalActive" :width="640" >
        <div class="card">

          <div class="card-content">
            <h3 class="popup-heading"> Treatment </h3>

            <div class="columns">
              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antiplatelet">
                    <b-radio v-model="radio" name="antiplatelet" native-value="antiplateletYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="antiplatelet" native-value="antiplateletNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>

              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antianginals">
                    <b-radio v-model="radio" name="antianginals" native-value="antianginalsYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="antianginals" native-value="antianginalsNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>


            <div class="columns">
              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Statins">
                    <b-radio v-model="radio" name="statins" native-value="statinsYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="statins" native-value="statinsNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>

              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Anticoagulant">
                    <b-radio v-model="radio" name="anticoagulant" native-value="anticoagulantYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="radio" name="anticoagulant" native-value="anticoagulantNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="columns mb-0">
              <div class="column is-full">
                <b-field label="Other">
                  <b-input maxlength="300" type="textarea"></b-input>
                </b-field>
              </div>
            </div>


 <b-button type="sbmt-btn">Primary</b-button>

          </div>
        </div>
      </b-modal>
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
        isImageModalActive: false,
        isCardModalActive: false,
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
