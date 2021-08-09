<template>
  <div>

    <section class="section is-main-section">
      <card-component title="Thyroid">
        <form @submit.prevent="submit">

<div>
   <p class="mb-4"> <b> "Either check TSH / t 3 / t4 if needed physician consult."
 </b> </p>
</div>

<div class="columns">
            <div class="column is-half">
              <b-field label="Hyper">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>

            <div class="column is-half">
              <b-field label="Hypo">
                <b-input maxlength="300" type="textarea"></b-input>
              </b-field>
            </div>
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
