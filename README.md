## Try @pika/web

Not wworking at the moment

What I do

* Clone the repository and cd into it
* npm i
* npx @pika/web

Result: no web_modules created

It seems to be related to the fact our imports are initially `import Map from '/web_modules/ol/Map.js';`
whereas `import { createElement, Component } from "preact";` works (tried for troubleshooting although not in the repository code here)


