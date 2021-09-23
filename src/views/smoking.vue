<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Smoking">
        <form @submit.prevent="submit">

          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="How Many">
                <b-input maxlength="300" type="textarea" v-model="form.howmany"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="When did you stop it">
                <b-input maxlength="300" type="textarea" v-model="form.whenStop"></b-input>
              </b-field>
            </div>
          </div>
          <b-field label="How Long">
          </b-field>
          <div class="columns">

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY" v-model="form.hlyy">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM" v-model="form.hlmm">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD" v-model="form.hldd">
                </b-input>
              </b-field>
            </div>

          </div>

          <b-button type="sbmt-btn"  native-type="submit">Submit</b-button>


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
    name: 'Smoking',
    components: {
      CardComponent
    },
    data() {
      return {
        radio: 'default',
        isLoading: false,
        form: {
        },
        customElementsForm: {
          checkbox: [],
          radio: null,
          switch: true,
          file: null
        },
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
        var baseURL = this.$store.state.siteURL + 'api/resp_smokings';
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
