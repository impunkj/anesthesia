<template>
  <section class="section is-main-section">
    <card-component title="Diabetes">

      <div class="columns">
        <div class="column is-full cstm-radio-btn">
          <div class="block">
            <b-field label="">
              <b-radio v-model="checked" name="checkVal" native-value="yes" type="is-info">
                Yes
              </b-radio>
              <b-radio v-model="checked" name="checkVal" native-value="no" type="is-info">
                No
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>

      <div v-if="checked === 'yes'">
      <ValidationObserver  v-slot="{ handleSubmit }" ref="form">
        <form  method="post" @submit.prevent="submit">
        <div class="columns">
          <div class="column is-full  cstm-radio-btn">
            <div class="block">
              <b-field label="">
                <b-radio v-model="form.typeOfD" name="mild" native-value="type1" type="is-info">
                  Type 1
                </b-radio>
                <b-radio v-model="form.typeOfD" name="mild" native-value="type2" type="is-info">
                  Type 2
                </b-radio>
              </b-field>
            </div>
          </div>
        </div>

        <div class="columns mb-3"  v-if="form.typeOfD">
             <div class="column is-6">
              <b-field label="Rx?">
                <b-select placeholder="Select Value" expanded v-model="form.rxtreat">
                  <option value="Insulin">Insulin</option>
                  <option value="OHA">OHA</option>
                  <option value="Both">Both</option>
                </b-select>
              </b-field>
            </div>
        </div>

     <div class="columns">
            <div class="column is-12">
              <b-field label="How much ?">
                <b-input  v-model="form.howmuch">
                </b-input>
              </b-field>
            </div>

          </div>




        <div class="columns mb-3">
          <div class="column is-full">
            <b-field label="What treatment" class="d-inline-block"> </b-field>
            <b-field>
              <b-input maxlength="300" type="textarea" v-model="form.whatTreatment"></b-input>
            </b-field>
          </div>
        </div>


        <div class="columns">



           <div class="column is-6 cstm-radio-btn">
              <div class="block">
                <b-field label="Complications" >
                  <b-checkbox  v-model="form.complications"  name="complications" native-value="vascular" type="is-info" >
                    Vascular
                  </b-checkbox>
                  <b-checkbox  v-model="form.complications" name="complications" native-value="eyes" type="is-info" >
                    Eyes
                  </b-checkbox>
                  <b-checkbox  v-model="form.complications" name="complications" native-value="kidney" type="is-info" >
                    kidney
                  </b-checkbox>
                </b-field>
              </div>
            </div>
              <div class="column  cstm-radio-btn">
              <div class="block">
                <b-field label="Diet">
                    <b-checkbox   type="is-info"  native-value="1"  name="dietcontrol" v-model="form.dietcontrol"   >
                      Diet control
                    </b-checkbox>
                 </b-field>
              </div>
            </div>
        </div>

        <div class="columns mb-3">
          <div class="column is-full  cstm-radio-btn">
            <div class="block">
              <b-field label="Sugar check at home">
                <b-radio v-model="form.sugarCheckHome" name="sugerCheck" native-value="Yes" type="is-info">
                  Yes
                </b-radio>
                <b-radio v-model="form.sugarCheckHome" name="sugerCheck" native-value="No" type="is-info">
                  No
                </b-radio>
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
    name: 'Diabetes',
    components: {
      CardComponent,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        checked: false,
        checked2: false,
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
          question: null,
          dietcontrol: null,
          complications:[]
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
         this.getDiabetesData();
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
           this.updateDiabetesData();
        }else {
          this.createDiabetesData();
        }
        loadingComponent.close();
      },
      createDiabetesData(){
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
        this.form.complications  =  this.form.complications.toString();
        var baseURL = this.$store.state.siteURL + 'api/diabetes';
        this.form.patientNo = patientID;
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
          this.form = r.data.data;
          this.getDiabetesData();
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },
      updateDiabetesData(){
        var ID = this.form.id;
        this.form.complications  =  this.form.complications.toString();
        var baseURL = this.$store.state.siteURL + 'api/diabetes/' + ID;
        this.form.patientNo = localStorage.getItem('patientID');
        axios.put(baseURL, this.form).then((r) => {
          this.getDiabetesData();
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
      getDiabetesData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/diabetes/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            this.form.complications = r.data.data.complications.split(',');
            if(r.data.data.dietcontrol == 1){
              this.form.dietcontrol = true;
            }

            if(r.data.success){
              this.checked = 'yes';
            }
          });
          loadingComponent.close();
      }, /// GetpatientInfo
    }
  }

</script>