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
MINUTE_MODE=true
```


## Installation

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