<template>
  <div>

    <section class="section is-main-section">

      <card-component title="Laboratory Data" icon="filter" >
        <ValidationObserver  v-slot="{ handleSubmit }" ref="form">
        <form @submit.prevent="submit">


          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="Total Bil">
                <b-input v-model="form.totalBill">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Dir. Bil">
                <b-input v-model="form.dirBill">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Alk Phos" >
                <b-input v-model="form.alkPhos">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="SGOT" >
                <b-input  v-model="form.sgot"> </b-input>
                </b-field>
            </div>
            <div class="column is-one-fifth">
              <b-field label="SGPT">
                <b-input v-model="form.sgpt"> </b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="LDH">
                <b-input v-model="form.Ldh">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Urea">
                <b-input v-model="form.Urea">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Creatine">
                <b-input v-model="form.Creatine">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Na">
                <b-input v-model="form.Na">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="K">
                <b-input v-model="form.K">
                </b-input>
              </b-field>
            </div>


          </div>



          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="Ca" >
                <b-input  v-model="form.Ca">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Mg">
                <b-input v-model="form.Mg">
                </b-input>
              </b-field>
            </div>



            <div class="column is-one-fifth">
              <b-field label="Hb">
                <b-input v-model="form.Hb">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="WBC">
                <b-input v-model="form.WBC">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="Platelets">
                <b-input v-model="form.Platelets">
                </b-input>
              </b-field>
            </div>

          </div>


          <div class="columns">

            <div class="column is-one-fifth">
              <b-field label="PCV">
                <b-input v-model="form.Pcv">
                </b-input>
              </b-field>
            </div>



            <div class="column is-one-fifth">
              <b-field label="Alb">
                <b-input v-model="form.Alb">
                </b-input>
              </b-field>
            </div>


            <div class="column is-one-fifth">
              <b-field label="Protein" >
                <b-input v-model="form.Protein">
                </b-input>
              </b-field>
            </div>


  <div class="column is-one-fifth">
              <b-field label="APTT">
                <b-input v-model="form.APTT">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-fifth">
              <b-field label="PT">
                <b-input v-model="form.PT">
                </b-input>
              </b-field>
            </div>


          </div>


          <div class="columns">




            <div class="column is-one-fifth">
              <b-field label="INR">
                <b-input v-model="form.INR">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="RBS">
                <b-input v-model="form.Rbs">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="PPBS">
                <b-input v-model="form.Ppbs">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="HbA1c">
                <b-input v-model="form.Hba">
                </b-input>
              </b-field>
            </div>
              <div class="column is-one-fifth">
              <b-field label="ECG">
                <b-input v-model="form.Ecg">
                </b-input>
              </b-field>
            </div>

          </div>



          <!--  -->

  <div class="columns">
            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="HIV">
                  <b-radio v-model="form.HIV" name="name" native-value="1" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HIV" name="name" native-value="0" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="HBS Ag">
                  <b-radio v-model="form.HBSAg" name="hbs" native-value="1" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HBSAg" name="hbs" native-value="0" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="HCV">
                  <b-radio v-model="form.HCV" name="hcv" native-value="1" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.HCV" name="hcv" native-value="0" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
            <div class="column is-one-fifth cstm-radio-btn">
              <div class="block">
                <b-field label="RTPCR">
                  <b-radio v-model="form.rtpcr" name="rtpcr" native-value="1" type="is-info">
                    +ve
                  </b-radio>
                  <b-radio v-model="form.rtpcr" name="rtpcr" native-value="0" type="is-info">
                    -ve
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>

   <div class="columns">




            <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.other1">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.other2">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.other3">
                </b-input>
              </b-field>
            </div>

              <div class="column is-one-fifth">
              <b-field label="Other">
                <b-input v-model="form.other4">
                </b-input>
              </b-field>
            </div>
          </div>


       <div class="columns">
            <div class="column is-6">
              <b-field label="Cardiac echo ">
                <b-input maxlength="300" v-model="form.cardiacEcho" type="textarea"></b-input>
              </b-field>
            </div>

             <div class="column is-6">
              <b-field label="Chest X-Ray">
                <b-input maxlength="300" v-model="form.ChestXray" type="textarea"></b-input>
              </b-field>
            </div>
          </div>

          <div class="columns">

          </div>

 <div class="columns">
            <div class="column is-full">
              <b-field label="Other">
                <b-input maxlength="300" v-model="form.Other" type="textarea"></b-input>
              </b-field>
            </div>
          </div>
          <b-button type="sbmt-btn"   @click="handleSubmit(submit)"  >Submit</b-button>
          <b-button class="ml-10" type="primary" @click="reset()">Reset</b-button>
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
    name: 'Forms',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      // console.log(JSON.parse(localStorage.getItem("patientName")));
      return {
        radio: 'default',
        isLoading: false,
        form: {},
        patientName :  localStorage.getItem("patientName"),
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
      var patientName = localStorage.getItem("patientName");
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
        var baseURL = this.$store.state.siteURL + 'api/laboratorydatas';
        this.form.patientNo = localStorage.getItem('patientID');
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
      }
    }
  }

</script>
