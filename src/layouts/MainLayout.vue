<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          The Social Formula App
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          outlined
          icon-right="account_circle"
          label="Login"
          class="q-pa-sm"
        />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          outlined
          icon-right="account_circle"
          label="Logout"
          class="q-pa-sm"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list v-if="loggedIn">
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-list v-else>
        <q-item-label header class="text-grey-8">
          More information
        </q-item-label>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://thesocialformula.net"
        >
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Website</q-item-label>
            <q-item-label>Find out more</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapState, mapActions } from "vuex";

const linksData = [
  {
    title: "Home page",
    caption: "Explore your business",
    icon: "public",
    link: "home"
  },
  {
    title: "Google",
    caption: "Analytics",
    icon: "trending_up",
    link: "google"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  },
  methods: {
    ...mapActions("Auth", ["logoutUser"])
  },
  computed: {
    ...mapState("Auth", ["loggedIn"])
  }
};
</script>
