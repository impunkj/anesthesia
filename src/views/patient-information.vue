<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Patient Information" icon="account">
        <form @submit.prevent="submit">
          <div class="columns is-tablet">

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Date">
                    <b-datepicker v-model="form.dateOfAdmission">
                    </b-datepicker>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="Time">
                    <b-timepicker v-model="form.timeOfAdmission">
                    </b-timepicker>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-one-third ">
              <b-field label="Hospital Name">
                <b-input v-model="form.hospitalName">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="Pincode">
                <b-input v-model="form.pincode"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third ">
              <b-field label="Name">
                <b-input v-model="form.name">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="DOB">
                <b-datepicker placeholder="DOB" v-model="form.dateOfBirth">
                </b-datepicker>
              </b-field>
            </div>

            <div class="column is-one-third cstm-radio-btn ">
              <div class="block">
                <b-field label="Sex">
                  <b-radio v-model="form.gender" name="name" native-value="male" type="is-info">
                    Male
                  </b-radio>
                  <b-radio v-model="form.gender" name="name" native-value="female" type="is-info">
                    Female
                  </b-radio>
                  <b-radio v-model="form.gender" name="name" native-value="other" type="is-info">
                    Other
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns ">
            <div class="column is-one-third ">
              <b-field label="Registration No.">
                <b-input maxlength="300" type="textarea" v-model="form.registrationNo"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="Proposed Operation">
                <b-input maxlength="300" type="textarea" v-model="form.proposedOperation"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third ">
              <b-field label="Pre-Operative Diagnosis">
                <b-input maxlength="300" v-model="form.preOperativeDiagnosis" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="BP">
                    <b-input v-model="form.BP">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half ">
                  <b-field label="HR">
                    <b-input v-model="form.HR">
                    </b-input>
                  </b-field>
                </div>


              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="SaO2">
                    <b-input v-model="form.sao2">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="Height(cm)">
                    <b-input v-model="form.height">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Weight (kg)">
                    <b-input v-model="form.weight">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="BMI">
                    <b-input v-model="form.BMI">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </div>

          <div class="columns ">
            <div class="column ">
              <b-field label="Allergies">
                <b-input maxlength="300" type="textarea" v-model="form.allergies"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column is-full cstm-radio-btn asa-physical">
              <div class="block">
                <b-field label="ASA Physical Status">
                  <b-radio v-model="form.ASAPhysicalStatus" name="name" native-value="one" type="is-info">
                    1
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="name" native-value="two" type="is-info">
                    2
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="name" native-value="three" type="is-info">
                    3
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="name" native-value="four" type="is-info">
                    4
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="name" native-value="five" type="is-info">
                    5
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatusE" name="nameE" native-value="six" type="is-info">
                    E
                  </b-radio>
                </b-field>

              </div>
            </div>
          </div>

          <b-button type="sbmt-btn" @click="submit">Submit</b-button>

        </form>
      </card-component>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
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
      submit() {
        var baseURL = this.$store.state.siteURL + 'api/patient_informations';
        axios.post(baseURL, this.form).then((r) => {
          console.log(r);
          console.log(r.data.data.id);
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
          localStorage.setItem('patientID', r.data.data.id);
        })
      },
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
