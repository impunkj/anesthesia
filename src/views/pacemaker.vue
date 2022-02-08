<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Pacemaker">
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
          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Why">
                <b-input maxlength="300" type="textarea" v-model="form.why"></b-input>
              </b-field>
            </div>
            <div class="column is-half">
              <b-field label="Pacemaker make / Type?">
                <b-input maxlength="300" type="textarea" v-model="form.pacemakerType"   required></b-input>
              </b-field>
            </div>
          </div>
          <b-field label="When" class=""> </b-field>
            <div class="columns">
            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY"   maxlength="2" v-model="form.whyy">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM"   maxlength="2" v-model="form.whmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD"  maxlength="2" v-model="form.whdd">
                </b-input>
              </b-field>
            </div>
          </div>


          <b-field class="checkOut">
            <b-checkbox type="is-info" v-model="ckpaperwork" native-value="1"  name="ckpaperwork">Check paperwork / Card / Chest xRay</b-checkbox>
          </b-field>

          <div  v-if="checkboxClick" class="mt-2 mb-5">
            <b>"Needs Cardiology Evaluation"</b>
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
    name: 'Forms',
    components: {
      CardComponent
    },
    data() {
      return {
        checkboxClick : false,
        ckpaperwork: false,
        radio: 'default',
        checked: false,
        checkboxGroup: ['Flint'],
        isLoading: false,
        form: {},
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        }
      }
    },
     mounted(){
         this.getPaceMakerData();
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
           this.updatePaceMakerData();
        }else {
          this.createPaceMakerData();
        }
        loadingComponent.close();
      },
      createPaceMakerData(){
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
        var baseURL = this.$store.state.siteURL + 'api/cvs_pacemakers';
        if(this.ckpaperwork == true){
          this.form.ckpaperwork = 1;  
        }else{
            this.form.ckpaperwork = 0;   
        }
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
      updatePaceMakerData(){
   
        if(this.ckpaperwork == true){
          this.form.ckpaperwork = 1;  
        }else{
            this.form.ckpaperwork = 0;   
        }   
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/cvs_pacemakers/' + ID;
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
       getPaceMakerData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/cvs_pacemakers/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            if(r.data.success){
              this.checked = 'yes';
              if(r.data.data.ckpaperwork == 1){
                this.ckpaperwork = true;
              }
            }
          });
          loadingComponent.close();
      },
    }
  }

</script>