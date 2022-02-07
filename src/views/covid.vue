<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Covid">
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

            <div class="column is-half">
              <b-field label="When"> </b-field>
              <div class="columns">
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="YY" v-model="form.whyy">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="MM" v-model="form.whmm">
                    </b-input>
                  </b-field>
                </div>
                <div class="column is-one-third">
                  <b-field label="">
                    <b-input placeholder="DD" v-model="form.whdd">
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Where">
                  <b-radio  name="where" native-value="Home"  v-model="form.wherePlace" type="is-info" >
                    Home
                  </b-radio>
                  <b-radio  name="where"  v-model="form.wherePlace" native-value="Hospital" type="is-info" >
                    Hospital
                  </b-radio>
                  <b-radio  name="where"  v-model="form.wherePlace" native-value="ICU" type="is-info" >
                    ICU
                  </b-radio>
                </b-field>
              </div>
            </div>

          </div>


           <div class="columns mb-3">
            <div class="column is-full cstm-radio-btn">
         <div class="">
            <b-field label="Treatment">
                <b-checkbox v-model="Treatment" native-value="Steroids" type="is-info" >
                   Steroids
                </b-checkbox>

                <b-checkbox  native-value="Ventilation"  v-model="Treatment" type="is-info" >
                   Ventilation
                </b-checkbox>

                <b-checkbox  native-value="Dialysis"  v-model="Treatment" type="is-info" >
                   Dialysis
                </b-checkbox>

                <b-checkbox  native-value="Anticoag"  v-model="Treatment" type="is-info" >
                   Anticoag
                </b-checkbox>

                <b-checkbox  native-value="ECMO" v-model="Treatment" type="is-info" >
                  ECMO
                </b-checkbox>

                <b-checkbox  native-value="Tracheostomy" v-model="Treatment" type="is-info" >
                  Tracheostomy
                </b-checkbox>

                 </b-field>
              </div>
            </div>
          </div>



          <div class="columns mb-3">
            <div class="column">
              <b> POST COVID SYNDROME </b>
            </div>
          </div>

           <div class="columns">

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="RESP">
                  <b-radio  name="resp" v-model="form.resp" native-value="Yes" type="is-info" >
                    SOBOE
                  </b-radio>
                  <b-radio  name="resp"  v-model="form.resp" native-value="No" type="is-info" >
                    OXYGEN
                  </b-radio>
                </b-field>
              </div>
            </div>

            <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="CVS">
                  <b-radio  name="cvs"  v-model="form.cvs" native-value="Cardiomyopathy" type="is-info" >
                    Cardiomyopathy
                  </b-radio>
                  <b-radio  name="cvs" v-model="form.cvs"  native-value="Pulmonary Embolism" type="is-info" >
                    Pulmonary Embolism
                  </b-radio>
                </b-field>
              </div>
            </div>

          </div>


   <div class="columns mb-3">
            <div class="column is-half cstm-radio-btn">
         <div class=" field-body">
            <b-field label="RENL">
                <b-checkbox  native-value="Dialysis" v-model="form.renal"  type="is-info" >
                   Dialysis
                </b-checkbox>

                 </b-field>
              </div>
            </div>

           <div class="column is-half cstm-radio-btn">
              <div class="block">
                <b-field label="Anticoagulants Fungal">
                  <b-radio  name="anticoafungal" native-value="Yes"   v-model="form.anticoafungal" type="is-info" >
                    Yes
                  </b-radio>
                  <b-radio  name="fungal" native-value="No" v-model="form.anticoafungal"  type="is-info" >
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
          </div>

<div class="columns">
    <div class="column is-full cstm-radio-btn">
              <div class="block">
                <b-field label="Vaccinated">
                  <b-radio  name="vaccinated"  v-model="form.vaccinated" native-value="Yes" type="is-info" >
                    Yes
                  </b-radio>
                  <b-radio  name="vaccinated"  v-model="form.vaccinated" native-value="No" type="is-info" >
                    No
                  </b-radio>
                </b-field>
              </div>
            </div>
</div>


              <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>
           </div>




        </form>
      </card-component>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import mapValues from 'lodash/mapValues'
  import CardComponent from '@/components/CardComponent'
  export default {
    name: 'Covid',
    components: {
      CardComponent

    },
    data() {
      return {
        checked: false,
        radio: 'default',
        isLoading: false,
        Treatment:[],
        form: {
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
         this.getCovidData();
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
           this.updateCovidData();
        }else {
          this.createCovidData();
        }
        loadingComponent.close();
      },
      createCovidData(){
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
          var baseURL = this.$store.state.siteURL + 'api/covids';
          this.form.treatment = JSON.stringify(this.Treatment);
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
      updateCovidData(){
        var ID = this.form.id;
        this.form.treatment = JSON.stringify(this.Treatment);
        var baseURL = this.$store.state.siteURL + 'api/covids/' + ID;
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
      getCovidData(){
          var patientID = localStorage.getItem('patientID');
          if(!patientID){
            return;
          }
          const loadingComponent = this.$buefy.loading.open({
                      container: this.isFullPage
          })
          var patientID =  localStorage.getItem('patientID');
          var urlTohit = this.$store.state.siteURL + 'api/covids/' + patientID;
          axios
            .get(urlTohit)
            .then(r => {
                this.form = r.data.data;
                if(r.data.data.treatment){
                      this.Treatment = JSON.parse(r.data.data.treatment);
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