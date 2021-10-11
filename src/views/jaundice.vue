<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Jaundice">


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
      <ValidationObserver  v-slot="{ handleSubmit }" ref="form">
          <form  method="post" @submit.prevent="submit">
        <b-field label="When?">
          </b-field>
          <div class="columns mb-3">

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY" v-model="form.whyy"  maxlength="2">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM" v-model="form.whmm"  maxlength="2" >
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD" v-model="form.whdd"  maxlength="2" >
                </b-input>
              </b-field>
            </div>

          </div>

            <b-field class="checkOut" >
            <b-checkbox v-model="form.needHospital" type="is-info"> Needed hospitalisation </b-checkbox>
        </b-field>

 <div  v-if="form.needHospital">
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

          <div class="columns mb-4">
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
              <b-button type="sbmt-btn"   @click="handleSubmit(submit)"  >Submit</b-button>


        </form>
        </ValidationObserver>

           </div>
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
    name: 'Forms',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
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
      mounted(){
         this.getJaundiceData();
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
           this.updateJaundiceData();
        }else {
          this.createJaundiceData();
        }
        loadingComponent.close();
      },
      createJaundiceData(){
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
        var baseURL = this.$store.state.siteURL + 'api/hepatic_jaundices';
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
      updateJaundiceData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/hepatic_jaundices/' + ID;
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
      getJaundiceData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/hepatic_jaundices/' + patientID;
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
