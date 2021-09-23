<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Cognitive Impairment">
        <form @submit.prevent="submit">
          <div class="columns">
            <div class="column">
              <b-field label="Mini-Cog Score">
                <b-input   v-model="form.MiniCogScore" maxlength="2" >
                </b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h3 class="cstm-heading mb-3"> Mini-Cog: 3 Item Recall and Clock Draw </h3>
              <h4 class="cstm-heading2"> 1. Get The Patients Attention Then Say : </h4>
              <p>"I am going to say three words that I want you to remember now and later.
                The words are <br> <b class="blue-color"> Banana, Surise, Chair </b> </p>
              <p class="mt-3 mb-4">Please say them for me now." <br>
                Give the patient 3 tries to repeat the words. if unable after 3 tries, go to next item.</p>

              <b-field label="">
                <b-select placeholder="Select Value" expanded v-model="form.PatientAten">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </b-select>
              </b-field>
            </div>
          </div>


            <div class="columns">
            <div class="column">
              <h4 class="cstm-heading2"> 2. Say All The Following Phrases in Order Indicated : </h4>
              <p> " Please draw a clock in the space below. start by drawing a large circle . Put all the numbers in the circle and set the hands to show 11:10 (10 past 11). " </p>
              <p class="mt-3 mb-4"> If subject has not finished clock drawing in 3 minutes, discontinue and ask for recall items.</p>

              <b-field label="">
                <b-select placeholder="Select Value" expanded v-model="form.PharseTest">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </b-select>
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <h4 class="cstm-heading2"> Say: "What were the three words I asked you to remember?" </h4>
              <p> <b> Interpretation of the Mini-Cog </b> </p>
              <p class="mb-4"> <b> Scoring : </b> </p>
              <div class="columns">
                  <div class="column">
                      <ul class="cstm-ul-li">
                          <li> 3 item recall (0-3 points): </li>
                          <li> Clock draw (0-2 points): </li>
                      </ul>
                  </div>

                  <div class="column">
                      <ul class="cstm-ul-li">
                          <li> 1 point for each correct word </li>
                          <li> 0 point for abnormal clock </li>
                          <li> 2 points for normal clock </li>
                      </ul>
                  </div>
              </div>

              <h4 class="cstm-heading2"> A Normal clock has all of the following elements: </h4>
              <p> All numbers 1-12, each only once, are present in the correct order and direction (clockwise) inside the circle. </p>
              <p> Two hands are present, one pointing to || and one pointing to 2. </p>

              <h4 class="cstm-heading2 mb-3"> Any clock Missing Any Of These Element Is Scored Abnormal Refusal To Draw A Clock Is Scored Abnormal.  </h4>

             <p class="blue-color"> <b> Total Score of 0, 1, or 2 suggests possible impairment. </b> </p>
             <p class="blue-color"> <b> Total Score of 3, 4, or 5 suggests no impairment. </b> </p>
              <p class="mt-3 mb-4"> If the patient has evidence of cognitive impairment on the Mini-Cog, consider a referral to a primary care physician, geriatrcian, or mental health specialist.</p>
            </div>
          </div>

          <b-button type="sbmt-btn" native-type="submit" >Submit</b-button>

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
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        },
        departments: ['Business Development', 'Marketing', 'Sales']
      }
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
            var baseURL = this.$store.state.siteURL + 'api/cns_cognitives';
            this.form.patientNo = localStorage.getItem('patientID');
            axios.post(baseURL, this.form).then((r) => {
              loadingComponent.close();
                this.$buefy.snackbar.open({
                  message: r.data.message,
                  queue: false
                });
            }).catch(error => {
                console.log("ERRRR:: ",error.response.data);
            });
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
