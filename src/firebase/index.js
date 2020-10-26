import firebase from "gatsby-plugin-firebase"

firebase.analytics();

export const remoteConfig = firebase.remoteConfig();

export default firebase;
