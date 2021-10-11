<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Thyroid">
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
      <p class="mb-4"> <b> "Either check TSH / t 3 / t4 if needed physician consult."
    </b> </p>
    </div>


 <div class="columns">

             <div class="column cstm-radio-btn is-full">
              <div class="block">
                <b-field label="">
                  <b-radio  v-model="form.typeOf"  name="Hyper" native-value="Hyper" type="is-info">
                    Hyper
                  </b-radio>
                  <b-radio  v-model="form.typeOf"  name="Hyper" native-value="Hypo" type="is-info">
                    Hypo
                  </b-radio>
                </b-field>
              </div>
            </div>
            </div>

 <div class="columns mb-3 ">
            <div class="column is-full">
              <b-field label="What treatment">
                <b-input   v-model="form.wha" maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>
           <b-button type="sbmt-btn "  native-type="submit" >Submit</b-button>
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
    name: 'Thyroid',
    components: {
      CardComponent
    },
    data() {
      return {
        checked : false,
        radio: 'default',
        isLoading: false,
        form: {
        },
        departments: ['Business Development', 'Marketing', 'Sales']
      }
    },
     mounted(){
         this.getThyroidData();
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
           this.updateThyroidData();
        }else {
          this.createThyroidData();
        }
        loadingComponent.close();
      },
      createThyroidData(){
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
        var baseURL = this.$store.state.siteURL + 'api/thyroids';
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
      updateThyroidData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/thyroids/' + ID;
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
      getThyroidData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/thyroids/' + patientID;
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
