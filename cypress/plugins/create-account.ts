import nodemailer from "nodemailer"

export const createAccount = async () => {
    const testAccount = await nodemailer.createTestAccount()
    console.log("created new email account %s", testAccount.user)
    console.log("for debugging, the password is %s", testAccount.pass)

    return testAccount
}