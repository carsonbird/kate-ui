<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list-item>
          <v-list-item-avatar color="primary" size="48">
            CB
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title">
              Carson Bird
            </v-list-item-title>
            <v-list-item-subtitle>
              Champion
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list shaped>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template v-slot:append>

          <v-divider></v-divider>

          <v-list-item dense>
            <v-list-item-content>
              Version 0.0.1
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Inbox</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tab" fixed-tabs>
            <v-tabs-slider></v-tabs-slider>

            <v-tab v-for="tab in tabs" :key="tab">
              <v-icon>{{ tab }}</v-icon>
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-main>
        <v-list-item-group two-line>
          <v-subheader>Urgent</v-subheader>
          <swipe-out v-for="item in urgent" :key="item">
            <template>
              <v-list-item>
                <v-list-item-avatar color="red">
                  {{ item.avatar }}
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.senders.join(', ') }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon size="16">
                      {{ item.icon }}
                    </v-icon>
                    {{ item.subject }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text v-text="item.duration"></v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </template>
            <template v-slot:left="{}">
                <v-btn elevation="0" tile dark color="primary" fab class="my-auto">
                  <v-icon dark>mdi-eye</v-icon>
                </v-btn>
            </template>
            <template v-slot:right="{ }">
              <v-btn elevation="0" tile dark color="grey" fab class="my-auto">
                <v-icon dark>mdi-reply</v-icon>
              </v-btn>
              <v-btn elevation="0" tile dark color="grey" fab class="my-auto">
                <v-icon dark>mdi-share</v-icon>
              </v-btn>
              <v-btn elevation="0" tile dark color="primary" fab class="my-auto">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn elevation="0" tile dark color="green" fab class="my-auto">
                <v-icon dark>mdi-heart</v-icon>
              </v-btn>
              <v-btn elevation="0" tile dark color="red" fab class="my-auto">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </swipe-out>
        </v-list-item-group>

        <v-list-item-group two-line>
          <v-subheader>Not Urgent</v-subheader>
          <v-list-item v-for="item in noturgent" :key="item">
            <v-list-item-avatar color="green">
              {{ item.avatar }}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.senders.join(', ') }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-icon size="16">
                  {{ item.icon }}
                </v-icon>
                {{ item.subject }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="item.duration"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
        <v-fab-transition>
          <v-btn fab large dark bottom right fixed color="primary">
            <v-badge
              color="grey"
              content="draft"
              left
              bottom
            >
            <v-icon>mdi-microphone</v-icon>
            </v-badge>
          </v-btn>
      </v-fab-transition>
      </v-main>
      <v-footer>
        <Drawer ref="swipeableBottomSheet">
        <v-card tile>
        <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>

        <v-list>
          <v-list-item dense>
            <v-list-item-content>
              <v-list-item-title>Sender 1, Sender 2</v-list-item-title>
              <v-list-item-subtitle>
                <v-icon size="16">mdi-forum</v-icon>
                subtitle of message, potentially really long
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn icon>
                <v-icon>mdi-restore</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
              <v-btn icon color="primary">
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon class="ml-0" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              @click="isFullscreen = !isFullscreen">
              <v-btn icon>
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
      </Drawer>
      </v-footer>
    </v-app>
    <v-bottom-sheet inset hide-overlay :retain-focus="False" :fullscreen="isFullscreen">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" dark v-bind="attrs" v-on="on">
          Open Player
        </v-btn>
      </template>
      <v-card tile>
        <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>

        <v-list>
          <v-list-item dense>
            <v-list-item-content>
              <v-list-item-title>Sender 1, Sender 2</v-list-item-title>
              <v-list-item-subtitle>
                <v-icon size="16">mdi-forum</v-icon>
                subtitle of message, potentially really long
              </v-list-item-subtitle>
            </v-list-item-content>

            <!-- <v-list-item-avatar tile color="primary">
              TJ
            </v-list-item-avatar> -->

            <v-list-item-icon>
              <v-btn icon>
                <v-icon>mdi-restore</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
              <v-btn icon color="primary">
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon class="ml-0" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              @click="isFullscreen = !isFullscreen">
              <v-btn icon>
                <v-icon>mdi-chevron-up</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-bottom-sheet>
    <!-- <div>
      <h1>Vue Swipeable Bottom Sheet</h1>
      <button @click="open">Open</button>
      <button @click="half">Half</button>
      <button @click="close">Close</button>
    </div> -->
  </div>
</template>

<script>
  import 'vue-swipe-actions/dist/vue-swipe-actions.css';

  export default {
    data: () => ({
      drawer: null,
      selectedItem: 0,
      items: [
          { title: 'Listen', icon: 'mdi-volume-high' },
          { title: 'Record', icon: 'mdi-microphone' },
          { title: 'Contacts', icon: 'mdi-contacts' }, 
          { title: 'Tags', icon: 'mdi-tag' },
          { title: 'Settings', icon: 'mdi-cog' }, 
      ],
      right: null,
      tab: null,
      tabs: [
        'mdi-inbox',
        'mdi-view-list',
        'mdi-heart',
        'mdi-delete'
      ],
      urgent: [
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true,
        },
        {
          senders: ['Sender One'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
      ],
      noturgent: [
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true,
        },
        {
          senders: ['Sender One'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true,
        },
        {
          senders: ['Sender One'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true,
        },
        {
          senders: ['Sender One'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
        {
          senders: ['Sender One', 'Sender Two'],
          subject: "this is potentiall a really long subject yotta yotta",
          avatar: "AH",
          icon: "mdi-help-circle",
          duration: "2:48",
          unread: true
        },
      ],
      isFullscreen: false
    }),
    methods: {
      half () {
        this.$refs.swipeableBottomSheet.setState("half")
      },
      open () {
        this.$refs.swipeableBottomSheet.setState("open")
      },
      close () {
        this.$refs.swipeableBottomSheet.setState("close")
      },
    },
  }
</script>