<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Anaesthetic History">
        <form @submit.prevent="submit">
          <div class="columns mb-3">
            <div class="column is-half">
              <b-field label="Past Anaesthetic History">
                <b-input maxlength="300" type="textarea" v-model="form.preAnaesthHistory"></b-input>
              </b-field>
            </div>
          </div>
          <b-button type="sbmt-btn" native-type="submit" >Submit</b-button>
        </form>
      </card-component>

      <!-- Neck Modal -->

      <!-- Neck modal end -->


      <!-- Teeth Modal -->


    </section>
  </div>

</template>

<script>
  import axios from "axios";
  import mapValues from 'lodash/mapValues'
  import CardComponent from '@/components/CardComponent'
  export default {
    name: 'Ahistory',
    components: {
         CardComponent
    },
    data() {
      return {
        isTeethModal: false,
        isNeckModal: false,
        isPupilsModal: false,
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
         this.getAnesThesiaData();
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
           this.updateAhistoryData();
        }else {
          this.createAhistoryData();
        }
        loadingComponent.close();
      },
      createAhistoryData(){
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
        var baseURL = this.$store.state.siteURL + 'api/anaesthetichistories';
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
      updateAhistoryData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/anaesthetichistories/' + ID;
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
      getAnesThesiaData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/anaesthetichistories/' + patientID;
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