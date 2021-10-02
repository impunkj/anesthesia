<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Reflux">
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
   <p class="mb-4"> <b>"Prescribe H2 / PPI / Metoclopramide Warning Rapid Sequence No LMA."
 </b> </p>
</div>
  <b-button type="sbmt-btn" native-type="submit">Submit</b-button>
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
  import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
  import * as rules from 'vee-validate/dist/rules';
  Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
  });
  export default {
    name: 'Reflux',
    components: {
        CardComponent,
        ValidationProvider,
        ValidationObserver
    },
    data() {
      return {
        checked :false,
        radio: 'default',
        isLoading: false,
        form: { },
        departments: ['Business Development', 'Marketing', 'Sales']
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
        this.form.reflux = 'yes';
        var baseURL = this.$store.state.siteURL + 'api/hepatic_refluxes';
        this.form.patientNo = localStorage.getItem('patientID');
        axios.post(baseURL, this.form).then((r) => {
          loadingComponent.close();
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
      }
    }
  }


</script>
