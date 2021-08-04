<template>
  <aside v-show="isAsideVisible" class="aside is-placed-left is-expanded logo-section">
    <aside-tools :is-main-menu="true">
      <span slot="label" class="logo-img"> <img src="../assets/logo.png" alt=""> <span> eAccess  Telemedics  </span>  </span>
    </aside-tools>
    <p class="form-heading"> PRE ANESTHESIA CHECKUP </p>
    <div class="menu is-menu-main">
      <template v-for="(menuGroup, index) in menu">
        <p v-if="typeof menuGroup === 'string'" :key="index" class="menu-label">
          {{ menuGroup }}
        </p>
        <aside-menu-list
          v-else
          :key="index"
          :menu="menuGroup"
          @menu-click="menuClick"
        />
      </template>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import AsideTools from '@/components/AsideTools'
import AsideMenuList from '@/components/AsideMenuList'
import ('../css/custom.css')

export default {
  name: 'AsideMenu',
  components: { AsideTools, AsideMenuList },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState(['isAsideVisible'])
  },
  methods: {
    menuClick (item) {
      //
    }
  }
}
</script>
