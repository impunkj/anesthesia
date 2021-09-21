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
              <div class="columns">
                <div class="column is-6">
                   <b-field label="Age">
                <b-input required v-model="form.age"></b-input>
              </b-field>
                </div>
                <div class="column is-6">
                   <b-field label="Pincode">
                <b-input v-model="form.pincode"></b-input>
              </b-field>
                </div>
              </div>


            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third ">
              <b-field label="Name">
                <b-input  required v-model="form.name">
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
                  <b-radio v-model="form.gender" name="gender" required  native-value="male" type="is-info">
                    Male
                  </b-radio>
                  <b-radio v-model="form.gender" name="gender"  native-value="female" type="is-info">
                    Female
                  </b-radio>
                  <b-radio v-model="form.gender"  name="gender" native-value="other" type="is-info">
                    Other
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns ">
            <div class="column is-one-third ">
              <b-field label="Registration No.">
                <b-input maxlength="300" type="textarea" v-model="form.registerNumber"></b-input>
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
                    <b-input required v-model="form.BP">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-half ">
                  <b-field label="HR">
                    <b-input required v-model="form.HR">
                    </b-input>
                  </b-field>
                </div>


              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="SaO2">
                    <b-input  required v-model="form.sao2">
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
                    <b-input  required v-model="form.weight"  @input="calculateBMI()" >
                    </b-input>
                  </b-field>

                </div>
                <div class="column is-half">
              <b-tooltip
                 label="BMI calculate based on height and weight"
                  multilined>
                  <b-field label="BMI">
                    <b-input v-model="form.BMI">
                    </b-input>
                  </b-field>
                     </b-tooltip>
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
                  <b-radio v-model="form.ASAPhysicalStatus"  name="ASAPhysicalStatus"  required native-value="1" type="is-info">
                    1
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus"  name="ASAPhysicalStatus" native-value="2" type="is-info">
                    2
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="ASAPhysicalStatus" native-value="3" type="is-info">
                    3
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="ASAPhysicalStatus" native-value="4" type="is-info">
                    4
                  </b-radio>
                  <b-radio v-model="form.ASAPhysicalStatus" name="ASAPhysicalStatus" native-value="5" type="is-info">
                    5
                  </b-radio>
                  <b-radio v-model="form.isemergency" name="nameE" native-value="1" type="is-info">
                    E
                  </b-radio>
                </b-field>

              </div>
            </div>
          </div>

          <b-button type="sbmt-btn" native-type="submit">Submit</b-button>

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
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var baseURL = this.$store.state.siteURL + 'api/patient_informations';
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
          console.log(r);
          console.log(r.data.data.id);
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
          localStorage.setItem('patientID', r.data.data.id);
        }).catch(error => {
           console.log(error.data.error.message);
           console.log(error.response);
      });
      },
      calculateBMI(){
        console.log(this.form.weight);
        console.log(this.form.height);
          let bmivalue = 0;
          if(this.form.height){
            bmivalue = this.form.weight / (this.form.height * this.form.height)
          }
          this.form.BMI = (bmivalue * 10000).toFixed(2);
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
