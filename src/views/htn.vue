<template>
  <div>

    <section class="section is-main-section">
      <card-component title="HTN (Hypertension)">
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
<div class="wrapcompo"  v-if="checked === 'yes'">
          <div class="columns"  >

            <div class="column is-8">
              <b-field label="How long"> </b-field>
              <div class="columns">
                <div class="column is-4">
                <ValidationProvider
                  rules="required|numeric"
                  vid="hlyy"
                  name="How Long in Years"
                  v-slot="{ errors, valid }"
                  >
                  <b-field label=""  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors"  >
                    <b-input  maxlength="2" v-model="form.hlyy" placeholder="YY">
                    </b-input>
                  </b-field>
                </ValidationProvider>
                </div>

                <div class="column is-4 ">
                  <b-field label="">
                    <b-input maxlength="2" v-model="form.hlmm" placeholder="MM">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-4 ">
                  <b-field label="">
                    <b-input placeholder="DD" v-model="form.hldd">

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
                  <ValidationProvider
                      rules="required"
                      vid="stress"
                      name="Stress"
                      v-slot="{ errors, valid }"
                      >
                    <b-field label=""  :type="{ 'is-danger': errors[0],  'is-success': valid }"  :message="errors"  >
                      <b-radio v-model="form.stress" name="strees" native-value="1" type="is-info">
                        Yes
                      </b-radio>
                      <b-radio v-model="form.stress" name="strees" native-value="2" type="is-info">
                        No
                      </b-radio>
                    </b-field>
                  </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <b-field label="Treatment">
                <b-input maxlength="300" type="textarea" v-model="form.treatment"></b-input>
              </b-field>
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
    name: 'HTN',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        radio: 'default',
        isLoading: false,
        checked: false,
        form: { },
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        }
      }
    },
   mounted(){
         this.gethtnData();
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
           this.updateHtnData();
        }else {
          this.createHtnData();
        }
        loadingComponent.close();
      },
      createHtnData(){
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
        var baseURL = this.$store.state.siteURL + 'api/cvs_htns';
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
      updateHtnData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/cvs_htns/' + ID;
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
      gethtnData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/cvs_htns/' + patientID;
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
