<template>
  <div>

    <section class="section is-main-section">
      <card-component title="UTI">
      <ValidationObserver  v-slot="{ handleSubmit }" ref="form">
        <form  method="post" @submit.prevent="getUtiFormData">

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
<!-- <form> -->
  <b-field label="When" class=""> </b-field>
          <div class="columns">
            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY" v-model="form.whyy"  maxlength="2" >
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM"  v-model="form.whmm"  maxlength="2" >
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD"  v-model="form.whdd"  maxlength="2" >
                </b-input>
              </b-field>
            </div>
          </div>

                <div class="columns">
                    <div class="column is-full cstm-radio-btn"  >
                              <div class="block">
                                <b-field label="Treated">
                                    <b-radio v-model="checked2" name="checkVal2" native-value="yes" type="is-info">
                                      Yes
                                    </b-radio>
                                    <b-radio  v-model="checked2"   name="checkVal2" native-value="no" type="is-info">
                                      No
                                    </b-radio>
                                </b-field>
                              </div>
                      </div>
                </div>

 <div  v-if="checked2 === 'yes'">

          <div class="columns mb-4">
            <div class="column is-one-third">
              <b-field label="Treated">
                <b-input maxlength="300" type="textarea" v-model="form.treated"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="CUE">
                <b-input maxlength="300" type="textarea" v-model="form.cue"></b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="What drugs">
                <b-input maxlength="300" type="textarea" v-model="form.whatdrugs"></b-input>
              </b-field>
            </div>
          </div>
          </div>
   <b-button type="sbmt-btn"   @click="handleSubmit(submit)"  >Submit</b-button>
 </div>


<!-- v-on:click="getUtiFormData" -->
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
    name: 'UTI',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        checked: false,
        checked2: false,
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

      }
    },
     mounted(){
         this.getUtiData();
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
           this.updateUtiData();
        }else {
          this.createUtiData();
        }
        loadingComponent.close();
      },
      createUtiData(){
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
        var baseURL = this.$store.state.siteURL + 'api/renal_utis';
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
      updateUtiData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/renal_utis/' + ID;
        this.form.patientNo = localStorage.getItem('patientID');
        axios.put(baseURL, this.form).then((r) => {
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },

      getUtiFormData () {
        // console.log("Data", this.utiForm);
        Axios.post("", this.utiForm).then((response) => {
            console.log(response.data)
        })
      },

      // submit() {},
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
      getUtiData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/renal_utis/' + patientID;
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
