/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import "firebase/remote-config"
import "firebase/analytics"
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider