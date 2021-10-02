<template>
  <div>

    <section class="section is-main-section">
      <card-component title="MI">
             <ValidationObserver  v-slot="{ handleSubmit }" ref="form">
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
            <div class="column is-one-third">
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YY"  maxlength="2" v-model="form.whyy">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM" maxlength="2"  v-model="form.whmm">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD" maxlength="2" v-model="form.whdd">
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>


            <div class="column is-one-third medicalrx">
              <b-field label="Medical ">
                <b-input v-model="form.medical">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Stented">
                  <b-radio  name="stented" native-value="Yes" type="is-info" v-model="form.stented">
                    Yes
                  </b-radio>
                  <b-radio  name="stented" native-value="No" type="is-info" v-model="form.stented">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns mb-0">
            <div class="column is-full">
              <b-field label="Treatment" class="d-inline-block">  </b-field> <!-- <img class="align-middle" src="../assets/rx.png" alt=""> -->
              <b-field >
                <b-input maxlength="300" type="textarea" v-model="form.treatMent"></b-input>
              </b-field>
            </div>
          </div>



          <div class="columns">
           <div class="column is-one-third">
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YY" v-model="form.twhyy">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM" v-model="form.twhmm">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD" v-model="form.twhdd">
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>

           <!--  <div class="column is-one-third">
              <b-field label="What medication ">
                <b-input>
                </b-input>
              </b-field>
            </div> -->

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block" >
                <b-field label="Stopped Antiplatelet" >
                  <b-radio  v-model="form.stoppedAntiplatelet" name="antiplatelet" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio  v-model="form.stoppedAntiplatelet" name="antiplatelet" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns ">
            <div class="column is-full " @click="isCardModalActive = true">
              <b-field label="What treatment">
                <b-input maxlength="300" type="textarea" v-model="form.whatTreatment.whatTreatment"></b-input>
              </b-field>
            </div>
          </div>


          <div class="columns">
            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Symptoms Improved">
                  <b-radio  name="symptomsImp" native-value="Yes" type="is-info" v-model="form.symptomsImproved">
                    Yes
                  </b-radio>
                  <b-radio  name="symptomsImp" native-value="No" type="is-info" v-model="form.symptomsImproved">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="CABG">
                  <b-radio v-model="form.cabg" name="cabg" native-value="Yes" type="is-info">
                    Yes
                  </b-radio>
                  <b-radio v-model="form.cabg"  name="cabg" native-value="No" type="is-info">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

             <div class="column is-one-third">
              <b-field label="When" class="mb-0"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input  placeholder="YY" maxlength="2"  >
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="MM"   maxlength="2">
                    </b-input>
                  </b-field>
                </div>

                <div class="column is-one-third">
                  <b-field label=" ">
                    <b-input placeholder="DD" maxlength="2" >
                    </b-input>
                  </b-field>
                </div>

              </div>
            </div>
          </div>


          <div class="columns">


            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Symptoms improved">
                  <b-radio  name="symptoms" native-value="Yes" type="is-info" >
                    Yes
                  </b-radio>
                  <b-radio  name="symptoms" native-value="No" type="is-info" >
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-one-third  cstm-radio-btn">
              <div class="block">
                <b-field label="Both Stented and CABG">
                  <b-radio name="stendedCabg" native-value="Yes" type="is-info" v-model="form.BStentedCABG">
                    Yes
                  </b-radio>
                  <b-radio name="stendedCabg" native-value="No" type="is-info" v-model="form.BStentedCABG">
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>


          <div class="columns">
            <div class="column is-full">
              <b-field label="Type of Graft">
                <b-input maxlength="300" type="textarea" v-model="form.typeofGraft"></b-input>
              </b-field>
            </div>
          </div>



          <div class="columns mb-3">
             <div class="column is-full ">
              <b-field label="Repeat CAG">
                <b-input v-model="form.repeatCag">
                </b-input>
              </b-field>
            </div>
          </div>
          <b-button type="sbmt-btn"   @click="handleSubmit(submit)"  >Submit</b-button>
</div>


        </form>
                  </ValidationObserver>
      </card-component>



      <b-modal v-model="isCardModalActive" :width="640">
        <div class="card">
          <h3 class="popup-heading"> Treatment </h3>
          <div class="card-content">


            <div class="columns">
              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antiplatelet">
                    <b-radio v-model="form.whatTreatment.antiplatelet" name="antiplatelet" native-value="antiplateletYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="form.whatTreatment.antiplatelet" name="antiplatelet" native-value="antiplateletNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>

              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Antianginals">
                    <b-radio v-model="form.whatTreatment.antianginals" name="antianginals" native-value="antianginalsYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="form.whatTreatment.antianginals" name="antianginals" native-value="antianginalsNo" type="is-info">
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
                    <b-radio v-model="form.whatTreatment.statins" name="statins" native-value="statinsYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="form.whatTreatment.statins" name="statins" native-value="statinsNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>

              <div class="column is-half  cstm-radio-btn">
                <div class="block">
                  <b-field label="Anticoagulant">
                    <b-radio v-model="form.whatTreatment.anticoagulant" name="anticoagulant" native-value="anticoagulantYes" type="is-info">
                      Yes
                    </b-radio>
                    <b-radio v-model="form.whatTreatment.anticoagulant" name="anticoagulant" native-value="anticoagulantNo" type="is-info">
                      No
                    </b-radio>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="columns mb-0">
              <div class="column is-full">
                <b-field label="What Treatment">
                  <b-input maxlength="300" v-model="form.whatTreatment.whatTreatment" type="textarea"></b-input>
                </b-field>
              </div>
            </div>


            <div class="columns mb-0">
              <div class="column is-full">
                <b-field label="Other">
                  <b-input maxlength="300"  v-model="form.whatTreatment.other"   type="textarea"></b-input>
                </b-field>
              </div>
            </div>


            <b-button type="sbmt-btn"  @click="submitWhatTreatment()">Submit</b-button>

          </div>
        </div>
      </b-modal>




     <!-- Stpped modal start-->

     <!-- stopped modal end -->


     <!-- cABG modal start-->
     <b-modal  v-model="isCardModalActive3" :width="640">
        <div class="card">
          <h3 class="popup-heading"> CABG </h3>
          <div class="card-content">


            <b-field label="When" class=""> </b-field>
          <div class="columns">
            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="HH">
                </b-input>
              </b-field>
            </div>
          </div>

            <b-button type="sbmt-btn">Submit</b-button>

          </div>
        </div>
      </b-modal>
     <!-- cABG modal end -->






    </section>
  </div>
</template>

<script>
 import axios from "axios";
  import mapValues from 'lodash/mapValues'
  import CardComponent from '@/components/CardComponent'
  import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
  import * as rules from 'vee-validate/dist/rules';
  Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
  });
  export default {
    name: 'CVSMI',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
         checked: false,
        isImageModalActive: false,
        isCardModalActive: false,
        isCardModalActive2: false,
        isCardModalActive3: false,
        radio: 'default',
        isLoading: false,
        form: {
          name: null,
          email: null,
          phone: null,
          department: null,
          subject: null,
          question: null,
          whatTreatment:{
            antiplatelet: "",
            antianginals: "",
            statins:"",
            anticoagulant:"",
            anticoagulant:"",
            whatTreatment:"",
            other:""
          }
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
    submit(){
      const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var baseURL = this.$store.state.siteURL + 'api/cvs_mis';
        this.form.patientNo = localStorage.getItem('patientID');
        this.form.whatTreatment = JSON.stringify(this.form.whatTreatment);
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
            this.$buefy.snackbar.open({
              message: r.data.message,
              queue: false
            });
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
      },
      submitWhatTreatment(){
        this.isCardModalActive = false;
      }
    }
  }

</script>
