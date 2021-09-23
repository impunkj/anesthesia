<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Surgery">
        <form @submit.prevent="submit">

          <div class="columns">
            <div class="column pb-0">
              <b-field class="checkOut">
            <b-checkbox type="is-info" v-model="form.brain"  native-value="1">Brain</b-checkbox>
          </b-field>
            </div>
          </div>

         <div class="columns" v-if="form.brain">
               <div class="column">
                <b-field label="What surgery?">
                  <b-input maxlength="300" type="textarea" v-model="form.brainwSurgery"></b-input>
                </b-field>
              </div>

               <div class="column ">
                <b-field label="Residual effect">
                  <b-input maxlength="300" type="textarea" v-model="form.brainREffect"></b-input>
                </b-field>
              </div>
          </div>

           <div class="columns">
            <div class="column pb-0">
              <b-field>
                <b-checkbox v-model="form.spinal" native-value="1" type="is-info">Spinal Cord</b-checkbox>
              </b-field>
            </div>
          </div>

          <div class="columns" v-if="form.spinal">
               <div class="column">
                <b-field label="What surgery?">
                  <b-input maxlength="300" type="textarea" v-model="form.spinalwSurgery"></b-input>
                </b-field>
              </div>

               <div class="column ">
                <b-field label="Residual effect">
                  <b-input maxlength="300" type="textarea" v-model="form.spinalREffect"></b-input>
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
    name: 'Forms',
    components: {
      CardComponent
    },
    data() {
      return {
         checkboxClick : false,
         checkboxClick2 : false,
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
            var baseURL = this.$store.state.siteURL + 'api/cns_surgeries';
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
