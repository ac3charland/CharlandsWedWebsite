import fs from 'fs'
import { google } from 'googleapis'
// Google API wrapperz
import readline from 'readline'

const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID
const accessToken = process.env.REACT_APP_ACCESS_TOKEN
const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const redirectUri = process.env.REACT_APP_REDIRECT_URI

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json'

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
// function authorize(callback) {
//     const oAuth2Client = new google.auth.OAuth2(
//         clientId, clientSecret, redirectUri)

//     // Check if we have previously stored a token.
//     fs.readFile(TOKEN_PATH, (err, token) => {
//         if (err) return getNewToken(oAuth2Client, callback)
//         oAuth2Client.setCredentials(JSON.parse(token))
//         callback(oAuth2Client)
//     })
// }

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
// function getNewToken(oAuth2Client, callback) {
//     const authUrl = oAuth2Client.generateAuthUrl({
//         access_type: 'offline',
//         scope: SCOPES,
//     })
//     console.log('Authorize this app by visiting this url:', authUrl)
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     })
//     rl.question('Enter the code from that page here: ', (code) => {
//         rl.close()
//         oAuth2Client.getToken(code, (err, token) => {
//             if (err) return console.error('Error while trying to retrieve access token', err)
//             oAuth2Client.setCredentials(token)
//             // Store the token to disk for later program executions
//             fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
//                 if (err) return console.error(err)
//                 console.log('Token stored to', TOKEN_PATH)
//             })
//             callback(oAuth2Client)
//         })
//     })
// }

export const getSheetData = async () => {
    let response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?ranges=Sheet1!A2:A`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response.json()
}

export const writeRSVPData = (index, numberAttending, names) => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            requests: [
                {
                    // Set has responded to true
                    repeatCell: {
                        range: {
                            startColumnIndex: 1,
                            endColumnIndex: 2,
                            startRowIndex: index,
                            endRowIndex: index + 1,
                            sheetId: 0,
                        },
                        cell: {
                            userEnteredValue: {
                                boolValue: true
                            }
                        },
                        fields: '*'
                    },
                },
                {
                    // Set number attending
                    repeatCell: {
                        range: {
                            startColumnIndex: 2,
                            endColumnIndex: 3,
                            startRowIndex: index,
                            endRowIndex: index + 1,
                            sheetId: 0,
                        },
                        cell: {
                            userEnteredValue: {
                                numberValue: numberAttending
                            }
                        },
                        fields: '*'
                    },
                },
                {
                    // Set number attending
                    repeatCell: {
                        range: {
                            startColumnIndex: 3,
                            endColumnIndex: 4,
                            startRowIndex: index,
                            endRowIndex: index + 1,
                            sheetId: 0,
                        },
                        cell: {
                            userEnteredValue: {
                                stringValue: names
                            }
                        },
                        fields: '*'
                    },
                }
            ]
        })
    })
}