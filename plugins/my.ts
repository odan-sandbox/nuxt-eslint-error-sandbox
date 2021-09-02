import { Plugin } from '@nuxt/types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { PropType } from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $myInjectedFunction(message: string): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $myInjectedFunction(message: string): void
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $myInjectedFunction(message: string): void
  }
}

const myPlugin: Plugin = (_, inject) => {
  inject('myInjectedFunction', (message: string) => console.log(message))
}

export default myPlugin
