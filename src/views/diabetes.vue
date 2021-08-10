<template>
  <section class="section is-main-section">
    <card-component title="Diabetes">
      <div class="columns">
        <div class="column is-full  cstm-radio-btn">
          <div class="block">
            <b-field label="">
              <b-radio v-model="radio" name="mild" native-value="mildone" type="is-info">
                Type 1
              </b-radio>
              <b-radio v-model="radio" name="mild" native-value="mildtwo" type="is-info">
                Type 2
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-full  cstm-radio-btn">
          <div class="block">
            <b-field label="Sugar check at home">
              <b-radio v-model="radio" name="sugerCheck" native-value="sugerCheckone" type="is-info">
                Yes
              </b-radio>
              <b-radio v-model="radio" name="sugerCheck" native-value="sugerChecktwo" type="is-info">
                No
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>


          <b-button type="sbmt-btn">Submit</b-button>

    </card-component>
  </section>
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
        isImageModalActive: false,
        isCardModalActive: false,
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
