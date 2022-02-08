<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Advisory">
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


<div>
   <p class="mb-4">  <b-field class="checkOut">
            <b-checkbox  v-model="form.supplement" value="yes" type="is-info" native-value="yes" > <b> Supplement Steroid pre-op  </b>  </b-checkbox>
        </b-field>
</p>
</div>
  <b-button type="sbmt-btn" native-type="submit" >Submit</b-button>
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
    name: 'Advisory',
    components: {
         CardComponent
    },
    data() {
      return {
        checked :false,
        radio: 'default',
        isLoading: false,
        form: {
        },
        departments: ['Business Development', 'Marketing', 'Sales']
      }
    },
    mounted(){
         this.getAdvisoryData();
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
           this.updateAdvisoryData();
        }else {
          this.createAdvisoryData();
        }
        loadingComponent.close();
      },
      createAdvisoryData(){
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        if(this.form.supplement == true){
              this.form.supplement = 'yes';
        }else{
           this.form.supplement = 'no';
        }        
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
           this.$buefy.snackbar.open({
            message: 'Please saved a patient Information first.',
            queue: false
          });
          return;
        }
        var baseURL = this.$store.state.siteURL + 'api/steroids';
        this.form.patientNo = patientID;
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
          this.getAdvisoryData();
          this.form = r.data.data;
          this.$buefy.snackbar.open({
            message: r.data.message,
            queue: false
          });
        })
      },
      updateAdvisoryData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/steroids/' + ID;
        if(this.form.supplement == true){
              this.form.supplement = 'yes';
        }else{
           this.form.supplement = 'no';
        }
        this.form.patientNo = localStorage.getItem('patientID');
        axios.put(baseURL, this.form).then((r) => {
          this.getAdvisoryData();
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
      getAdvisoryData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/steroids/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            if(r.data.success){
              this.checked = 'yes';
              if(r.data.data.supplement == 'yes'){
                this.form.supplement = true;
              }else{
                this.form.supplement = false;
              }
            }
          });
          loadingComponent.close();
      }, /// GetpatientInfo
    }
  }


</script>