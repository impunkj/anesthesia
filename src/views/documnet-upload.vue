<template>
  <section class="section is-main-section">
    <card-component title="Document Upload">

      <div class="columns">
        <div class="column is-4">
          <b-field>
            <b-upload v-model="dropFiles" expanded multiple drag-drop>
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large">
                    </b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>

          <div class="tags">
            <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
              {{file.name}}
              <button class="delete is-small" type="button" @click="deleteDropFile(index)">
              </button>
            </span>
          </div>
        </div>

        <div class="column is-4">
          <b-field>
            <b-upload v-model="dropFiles2" expanded multiple drag-drop>
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large">
                    </b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>

          <div class="tags">
            <span v-for="(file, index) in dropFiles2" :key="index" class="tag is-primary">
              {{file.name}}
              <button class="delete is-small" type="button" @click="deleteDropFile2(index)">
              </button>
            </span>
          </div>
        </div>


    <div class="column is-4">
          <b-field>
            <b-upload v-model="dropFiles3" expanded multiple drag-drop>
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large">
                    </b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>

          <div class="tags">
            <span v-for="(file, index) in dropFiles3" :key="index" class="tag is-primary">
              {{file.name}}
              <button class="delete is-small" type="button" @click="deleteDropFile3(index)">
              </button>
            </span>
          </div>
        </div>


      </div>

  <b-button class="" type="sbmt-btn">Submit</b-button>
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
        dropFiles: [],
         dropFiles2: [],
          dropFiles3: []
      }
    },
    methods: {
      deleteDropFile(index) {
        this.dropFiles.splice(index, 1)
      },
      deleteDropFile2(index) {
        this.dropFiles2.splice(index, 1)
      },
       deleteDropFile3(index) {
        this.dropFiles3.splice(index, 1)
      }
    }
  }

</script>
