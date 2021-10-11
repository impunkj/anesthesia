<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Failure">
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
            <div class="column is-one-half">
              <b-field label="Urea">
                <b-input  v-model="form.urea">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-half">
              <b-field label="Creatinine">
                <b-input v-model="form.creatinine" >
                </b-input>
              </b-field>
              <p> <b> "Start Renal Questionnaire" </b> </p>
            </div>
          </div>

          <b-field>
            <b-checkbox  v-model="checkboxClick2"  native-value="yes" type="is-info">Dialysis</b-checkbox>
          </b-field>
      <div v-if="checkboxClick2">
          <b-field>
            <b-checkbox v-model="hemoCheck" type="is-info">Hemo</b-checkbox>
          </b-field>
          <div class="columns" v-if="hemoCheck">
            <div class="column is-one-half">
              <b-field>
                <b-select placeholder="Frequency" v-model="form.hemo"  expanded>
                  <option value="flint">Ony Once</option>
                  <option value="silver">Everyday</option>
                  <option value="silver">Times in a week</option>
                </b-select>
              </b-field>
            </div>

            <div class="column is-one-half">
              <b-field label="">
                <b-input v-model="form.hemoValue"  >
                </b-input>
              </b-field>
            </div>
          </div>


          <b-field>
            <b-checkbox type="is-info" v-model="checkboxClick4">Peritoneal</b-checkbox>
          </b-field>

<div v-if="checkboxClick4">

          <div class="columns mb-3" >

            <div class="column is-6">
              <b-field>
                <b-select placeholder="Frequency"  v-model="form.peritoneal" expanded>
                  <option value="once">Ony Once</option>
                  <option value="everyday">Everyday</option>
                  <option value="timesinweek">Times in a week</option>
                </b-select>
              </b-field>
            </div>

             <div class="column is-6">
              <b-field label="">
                <b-input  v-model="form.peritonealValue">
                </b-input>
              </b-field>
            </div>
          </div>
          </div>

           <b-field class="mb-4">
            <b-checkbox v-model="form.fistual" native-value="Yes" type="is-info">Fistual</b-checkbox>
          </b-field>

          <div class="columns" v-if="checkboxClick3">
            <div class="column is-full">
              <b-field label="Site">
                <b-input v-model="form.fistualValue" >
                </b-input>
              </b-field>
              <p class="mb-4"> <b> "Protect Fistula Site No BP Recording From That Arm" </b> </p>
            </div>
          </div>


</div>
   <b-button type="sbmt-btn"   @click="handleSubmit(submit)"  >Submit</b-button>
 </div>
        </form>
        </ValidationObserver>
      </card-component>

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
    name: 'renalFailure',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        checked:false,
        DialysisTrue : false,
        checkboxClick2 : false,
        checkboxClick3 : false,
        checkboxClick4 : false,
        hemoCheck : false,
        radio: 'default',
        isLoading: false,
        form: {
          name: null
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
     mounted(){
         this.getRenlFailureData();
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
        if(this.form.id){
           this.updateRenlFailureData();
        }else {
          this.createRenlFailureData();
        }
        loadingComponent.close();
      },
      createRenlFailureData(){
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
           this.$buefy.snackbar.open({
            message: 'Please saved a patient Information first.',
            queue: false
          });
          return;
        }
        var baseURL = this.$store.state.siteURL + 'api/renal_failures';
        this.form.patientNo = patientID;
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
          this.form = r.data.data;
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },
      updateRenlFailureData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/renal_failures/' + ID;
        this.form.patientNo = localStorage.getItem('patientID');
        axios.put(baseURL, this.form).then((r) => {
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
      getRenlFailureData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/renal_failures/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            if(r.data.success){
              this.checked = 'yes';
            }
          });
          loadingComponent.close();
      }, /// GetpatientInfo
    }
  }

</script>
