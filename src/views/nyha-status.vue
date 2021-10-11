<template>
  <section class="section is-main-section">
    <card-component title="NYHA Status">
       <form @submit.prevent="submit">
      <div class="columns">
        <div class="column is-full  cstm-radio-btn">
          <div class="block">
            <b-field label="NYHA Class (Patients with Cardiac Disease (Description of HF Related Symptoms)">
              <b-radio v-model="form.Nclass" name="mild" native-value="1" type="is-info">
                Class I (Mild)
              </b-radio>
              <b-radio v-model="form.Nclass" name="mild" native-value="2" type="is-info">
                Class II (Mild)
              </b-radio>
              <b-radio v-model="form.Nclass" name="mild" native-value="3" type="is-info">
                Class III (Moderate)
              </b-radio>
              <b-radio v-model="form.Nclass" name="mild" native-value="4" type="is-info">
                Class IV (Severe)
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>


      <div class="columns mt-3 mb-0">
        <div class="column is-full">
          <ul class="cstm-ul-li">
            <li> <b> Class I (Mild) </b> Patients with cardiac disease but without resulting in limitation of physical
              activity. Ordinary physical activity does not cause undue fatigue, palpitation (rapid or pounding heart
              beat), dyspnea (shortness of breath), or anginal pain (chest pain). </li>
            <li> <b> Class II (Mild) </b> Patients with cardiac disease resulting in slight limitation of physical
              activity. They are comfortable at rest. Ordinary physical activity results in fatigue, palpitation,
              dyspnea, or anginal pain.</li>
            <li> <b> Class III (Moderate) </b> Patients with cardiac disease resulting in marked limitation of physical
              activity. They are comfortable at rest. Less than ordinary activity causes fatigue, palpitation, dyspnea,
              or anginal pain.</li>
            <li> <b> Class IV (Severe) </b> Patients with cardiac disease resulting in the inability to carry on any
              physical activity without discomfort. Symptoms of heart failure or the anginal syndrome may be present
              even at rest. If any physical activity is undertaken, discomfort is increased.</li>
          </ul>
        </div>

      </div>
        <p class="mb-4"><b> "Cardiology Referral" </b></p>
          <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>
      </form>
    </card-component>
  </section>
</template>


<script>
  import axios from "axios";
  import mapValues from 'lodash/mapValues'
  import CardComponent from '@/components/CardComponent'
  export default {
    name: 'PaceMaker',
    components: {
      CardComponent,
    },
    data() {
      return {
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
        }
      }
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
           this.updateNyhaData();
        }else {
          this.createNyhaData();
        }
        loadingComponent.close();
      },
      createNyhaData(){
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
        var baseURL = this.$store.state.siteURL + 'api/cvs_nyhas';
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
      updateNyhaData(){
        var ID = this.form.id;
        var baseURL = this.$store.state.siteURL + 'api/cvs_nyhas/' + ID;
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
         getNyhaData(){
        var patientID = localStorage.getItem('patientID');
        if(!patientID){
          return;
        }
        const loadingComponent = this.$buefy.loading.open({
                    container: this.isFullPage
        })
        var patientID =  localStorage.getItem('patientID');
        var urlTohit = this.$store.state.siteURL + 'api/cvs_nyhas/' + patientID;
        axios
          .get(urlTohit)
          .then(r => {
            this.form = r.data.data;
            if(r.data.success){
              this.checked = 'yes';
            }
          });
          loadingComponent.close();
      },
    }
  }

</script>
