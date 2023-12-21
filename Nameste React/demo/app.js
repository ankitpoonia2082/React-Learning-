import React from "react";
import ReactDOM from "react-dom/client";

/*** Note:  Parcel
 * Parcel reloads  -> HMR : Hot Module Replacment.
 * Keep looking for changes ->  File watcher alogorithm (C++).
 * .parcel-cache : This dir is used by parcel (Space of Parcel).
 * dist : This dir is where parcel is making files production ready.
 *        This is the dir where all minified code is kept along with react and React-DOM.
 * 
 */

const heading1 = React.createElement('h1',{id:"heading1",key:"heading1"},"Heading 1")
const heading2 = React.createElement('h2',{id:"heading2",key:"heading2"},"Heading 2")
const heading3 = React.createElement('h3',{id:"heading3",key:"heading3"},"Heading 3")
const container = React.createElement('div',{id:"container"},[heading1,heading2,heading3])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container);

