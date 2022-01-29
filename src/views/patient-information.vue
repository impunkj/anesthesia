<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Patient Information" icon="account">
    <ValidationObserver  v-slot="{ handleSubmit }" ref="form">
        <form @submit.prevent="submit">
          <div class="columns is-tablet">

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                  <b-field label="Date">
                    <b-datepicker   v-model="form.dateOfAdmission">
                    </b-datepicker>
                  </b-field>
                </div>

                <div class="column is-half">
                  <b-field label="Time">
                    <b-timepicker   locale="en-IN"  v-model="form.timeOfAdmission">
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
                <ValidationProvider
                  rules="required|numeric|max:2"
                  vid="age"
                  name="Age"
                  v-slot="{ errors , valid}"
                  >
                  <b-field label="Age"  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors" >
                    <b-input   v-model="form.age" @keypress.native="isNumber($event)" ></b-input>
                  </b-field>
                </ValidationProvider>
                </div>
                <div class="column is-6">
                <ValidationProvider
                  rules="required|numeric|max:6"
                  vid="pincode"
                  name="Pincode"
                  v-slot="{ errors, valid }" >
                <b-field label="Pincode"  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors" >
                      <b-input v-model="form.pincode"  @keypress.native="isNumber($event)" ></b-input>
                </b-field>
                </ValidationProvider>

                </div>
              </div>


            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third ">
                <ValidationProvider
                  rules="required"
                  vid="name"
                  name="name"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label="Name"   :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors">
                    <b-input  name="name"  v-model="form.name"   >
                    </b-input>
                  </b-field>
                </ValidationProvider>
            </div>

            <div class="column is-one-third ">
              <b-field label="DOB">
                <b-datepicker placeholder="DOB" v-model="form.dateOfBirth">
                </b-datepicker>
              </b-field>
            </div>

            <div class="column is-one-third cstm-radio-btn ">
              <div class="block">
                <ValidationProvider
                  rules="required"
                  vid="gender"
                  name="gender"
                  v-slot="{ errors , valid}"
                  >
                  <b-field label="Sex"  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors" >
                    <b-radio v-model="form.gender" name="gender"   native-value="male" type="is-info">
                      Male
                    </b-radio>
                    <b-radio v-model="form.gender" name="gender"  native-value="female" type="is-info">
                      Female
                    </b-radio>
                    <b-radio v-model="form.gender"  name="gender" native-value="other" type="is-info">
                      Other
                    </b-radio>
                  </b-field>
                  </ValidationProvider>
              </div>
            </div>
          </div>


          <div class="columns ">
            <div class="column is-one-fourth ">
              <b-field label="Registration No.">
                <b-input maxlength="300" type="textarea" v-model="form.registerNumber"></b-input>
              </b-field>
            </div>
           <div class="column is-one-fourth ">
               <ValidationProvider
                  rules="required"
                  vid="proposedOperation"
                  name="proposedOperation"
                  v-slot="{ errors, valid }"
                  >
              <b-field label="Proposed Operation"  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors"  >
                <b-input maxlength="300" type="textarea" v-model="form.proposedOperation"></b-input>
              </b-field>
                 </ValidationProvider>
            </div>

            <div class="column is-one-fourth ">
                <ValidationProvider
                  rules="required"
                  vid="side"
                  name="Side Operations"
                  v-slot="{ errors, valid }"
                  >
              <b-field label="Side" :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors"   >
                <div class="select is-normal w-100" >
                  <select  class="w-100"   v-model="form.side" expanded>
                    <option value="">Side</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="none" >None</option>
                  </select>
                </div>
                 </b-field>
                </ValidationProvider>
            </div>



            <div class="column is-one-fourth ">
              <b-field label="Pre-Operative Diagnosis">
                <b-input maxlength="300" v-model="form.preOperativeDiagnosis" type="textarea"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                <ValidationProvider
                  rules="required"
                  vid="BP"
                  name="BP"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label="BP" :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors" >
                    <b-input  v-model="form.BP"   @input=repla()  @keypress.native="isNumber($event)" >
                    </b-input>
                  </b-field>
                      </ValidationProvider>
                </div>

                <div class="column is-half ">
                 <ValidationProvider
                  rules="required"
                  vid="HR"
                  name="HR"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label="HR" :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors"  >
                    <b-input  v-model="form.HR" @keypress.native="isNumber($event)" >
                    </b-input>
                  </b-field>
                      </ValidationProvider>
                </div>


              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                 <ValidationProvider
                  rules="required"
                  vid="sao2"
                  name="Sao2"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label="SaO2"  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors" >
                    <b-input   v-model="form.sao2"  @keypress.native="isNumber($event)" >
                    </b-input>
                  </b-field>
                      </ValidationProvider>
                </div>

                <div class="column is-half">
                 <ValidationProvider
                  rules="required"
                  vid="height"
                  name="Height"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label="Height(cm)"    :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors"   >
                    <b-input v-model="form.height"  @keypress.native="isNumber($event)" >
                    </b-input>
                  </b-field>
                  </ValidationProvider>
                </div>
              </div>
            </div>

            <div class="column is-one-third ">
              <div class="columns">
                <div class="column is-half">
                 <ValidationProvider
                  rules="required"
                  vid="weight"
                  name="Weight"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label="Weight (kg)" :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors" >
                    <b-input   v-model="form.weight" @keypress.native="isNumber($event)"   @input="calculateBMI()" >
                    </b-input>
                  </b-field>
                </ValidationProvider>

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
                  <b-radio v-model="form.ASAPhysicalStatus"  name="ASAPhysicalStatus"   native-value="1" type="is-info">
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

          <b-button type="sbmt-btn"   @click="handleSubmit(submit)"  >Submit</b-button>

        </form>
         </ValidationObserver>
      </card-component>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import dayjs from 'dayjs'
  import mapValues from 'lodash/mapValues'
  import CardComponent from '@/components/CardComponent'
  import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
  import * as rules from 'vee-validate/dist/rules';
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
  export default {
    name: 'Forms',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      const min = new Date();
      return {
        radio: 'default',
        isLoading: false,
        form: this.getClearFormObject(),
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        },
        test:[],
        departments: ['Business Development', 'Marketing', 'Sales']
      }
    },
     mounted(){
         this.getPatientInfo();
    },
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {
      repla(){
          if(this.form.BP.length == 3){
              this.form.BP = this.form.BP + '/';
          }
          console.log(new Date());
      },
      submit() {
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        localStorage.setItem("patientName", this.form.name);
        var baseURL = this.$store.state.siteURL + 'api/patient_informations';

        var $patientID = localStorage.getItem('patientID');
          if($patientID){
                this.updatePatientInfo();
          }else{
                this.createPatientInfo();
          }
           loadingComponent.close();
      },
      createPatientInfo(){
           var baseURL = this.$store.state.siteURL + 'api/patient_informations';
            axios.post(baseURL, this.form).then((r) => {
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
      updatePatientInfo(){
            var patientID =  localStorage.getItem('patientID');
            var baseURL = this.$store.state.siteURL + 'api/patient_informations/' + patientID;
            this.form.patientID = patientID;
            axios.put(baseURL, this.form).then((r) => {
            console.log(r);
            console.log(r.data.data.id);
            this.$buefy.snackbar.open({
              message: r.data.message,
              queue: false
            });
            localStorage.setItem('patientID', r.data.data.id);
            //  console.log(localStorage.getItem(JSON.stringify('patientID'), "name"))

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
      },
      //// get patientInfo
      getPatientInfo(){
       var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/patient_informations/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            console.log('XXXXXXXXXx');
            this.form = r.data.data;
            this.form.dateOfAdmission =  new Date(r.data.data.dateOfAdmission);
            this.form.timeOfAdmission =  new Date(r.data.data.timeOfAdmission);
            this.form.dateOfBirth =  new Date(r.data.data.dateOfBirth);
          }).catch(error => {
              console.log('error.response.data.error');
              this.form.timeOfAdmission =  new Date();
          });
      }, /// GetpatientInfo
    isNumber(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))  && charCode !== 46  && charCode !== 47){
          evt.preventDefault();
      }
      return true;
    }, 
      getClearFormObject () {
          return {

          }
      }
    }
  }

</script>