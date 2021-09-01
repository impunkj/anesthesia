<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Pacemaker">
        <form @submit.prevent="submit">



          <div class="columns mb-0">
            <div class="column is-half">
              <b-field label="Why">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Pacemaker make / Type?">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
          </div>


<b-field label="When" class=""> </b-field>
          <div class="columns">
            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="YY">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="MM">
                </b-input>
              </b-field>
            </div>

            <div class="column is-one-third">
              <b-field label="">
                <b-input placeholder="DD">
                </b-input>
              </b-field>
            </div>
          </div>


          <b-field class="checkOut">
            <b-checkbox type="is-info" v-model="checkboxClick">Check paperwork / Card / Chest xRay</b-checkbox>
          </b-field>

          <div  v-if="checkboxClick" class="mt-2 mb-5">
            <b>"Needs Cardiology Evaluation"</b>
          </div>




          <b-button type="sbmt-btn">Submit</b-button>

        </form>
      </card-component>

    </section>
  </div>
</template>

<script>
  import mapValues from 'lodash/mapValues'
  import TitleBar from '@/components/TitleBar'
  import CardComponent from '@/components/CardComponent'
  import CheckboxPicker from '@/components/CheckboxPicker'
  import RadioPicker from '@/components/RadioPicker'
  import FilePicker from '@/components/FilePicker'
  import HeroBar from '@/components/HeroBar'
  export default {
    name: 'Forms',
    components: {
      HeroBar,
      FilePicker,
      RadioPicker,
      CheckboxPicker,
      CardComponent,
      TitleBar
    },
    data() {
      return {
        checkboxClick : false,
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
    computed: {
      titleStack() {
        return ['Admin', 'Forms']
      }
    },
    methods: {
      submit() {},
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
