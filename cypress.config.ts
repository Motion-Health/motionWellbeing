import { defineConfig } from "cypress";

import { getLastEmail } from './cypress/plugins/get-last-email'
import { sendEmail } from './cypress/plugins/send-email'
import { createAccount } from './cypress/plugins/create-account'
import { parseEmail } from './cypress/plugins/parse-email'

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      on('task', {
        async createAccount() {
          const testAccount = await createAccount()
          return testAccount
        },
        async getLastEmail({ user, pass }) {
          const get_Email = await getLastEmail(user, pass)
          return get_Email
        },
        async sendEmail({ user, pass, emailObject }) {
          const send_Email = await sendEmail(user, pass, emailObject)
          return send_Email
        },
        async parseEmail({ message }) {
          const parse_Email = await parseEmail(message)
          return parse_Email
        }
      })
    },
  },
});
