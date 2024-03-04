<p align="center">
<svg
   width="40.515404mm"
   height="40.515404mm"
   viewBox="0 0 40.515404 40.515404"
   version="1.1"
   id="svg5"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="0.74920735"
     inkscape:cx="-203.54846"
     inkscape:cy="283.6331"
     inkscape:window-width="1920"
     inkscape:window-height="1018"
     inkscape:window-x="0"
     inkscape:window-y="30"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(-67.923035,-70.986298)">
    <rect
       style="fill:#c3aa7e;fill-opacity:0.997725;stroke:#ffffff;stroke-width:0.0264583"
       id="rect2296"
       width="40.488945"
       height="40.488945"
       x="67.936264"
       y="70.999527"
       rx="1.6026071"
       ry="1.6026071" />
    <text
       xml:space="preserve"
       style="font-style:italic;font-weight:bold;font-size:12.7px;font-family:'TeX Gyre Chorus';-inkscape-font-specification:'TeX Gyre Chorus Bold Italic';fill:#0000ff;fill-opacity:0.997725;stroke:#ffffff;stroke-width:0.0264583"
       x="74.844757"
       y="96.754684"
       id="text2242"><tspan
         sodipodi:role="line"
         id="tspan2240"
         style="fill:#0000ff;stroke-width:0.0264583"
         x="74.844757"
         y="96.754684">UMS</tspan></text>
  </g>
</svg>
</p>

## Description

A nest js backend

## The .env file
```
USER_LIST_URL="https://randomuser.me/api/?results=10"
MONGO_URI='mongodb://localhost/ums'
REDIS_HOST='localhost'
REDIS_PORT=6379
MINUTE_MODE=false
```
We can adjust the user data count by changing `results`'s Rvalue value at url.
Here I've mentioned all the configuration required to run this application as of now. *If the database requires a password configure it accourdingly.*

The keyword MINUTE_MODE will run the userfetch action at the start of every minute. **Don't set this as ```true``` in production**

The Three and half hour cron is processed by the epoch time. So this routine will continue till the JS max safe integer which is ```Number.MAX_SAFE_INTEGER```
```const isnow = Math.floor(new Date().getTime() / 60000) % 210 == 0;```
* In the above operation, intially removed the values till seconds, so that we can process from the minutes(by getting integer value from floor operation).
* Now the epoch time is in minutes. If the division with 210 (210 minutes = 3 hours 30 minutes) results remaining of 0 => it is the right time ```isnow = true``` to process data since the cron is executed every minutes with above condition( _result is in boolean_ ).  

#### We don't need controller for the application anymore. we can remove it later. To reduce lack of difficulty ( ease ) intefacing purpose it is available now.

## Installation

This application requires the installation of nest cli tool globally.

```bash
npm i -g @nestjs/cli
```
The requirement/dependency enviroinment I've used here is, 
_node v21.6.1_ (via nvm)
_redis-server_
_mongo-org_

make sure these project dependency is installed and service is running in local or remote accesible server.

```bash
# either service or systemctl (some linux standards may not have service)
$ sudo service mongod status
# if service not running start the service
$ sudo service mongod start
# if it not enabled/available in service units
$ sudo systemctl enable mongod && sudo systemctl start mongod
```
**similarly operations we have to ensure with redis service daemon also
```bash
# pre required service dependency
$ sudo apt-get install mongodb-org redis-server
# make sure that right working version of nodejs( and npm) installed before.
# nest global installatio
$ npm i -g @nestjs/cli
```
change directory (cd) to the ums directory
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```