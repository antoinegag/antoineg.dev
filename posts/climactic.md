## [Short demo (Click me!)](https://www.youtube.com/watch?v=FZ1Q37gA1m8)

## Goal

Collect environmental data wirelessly in a slave-master system enabling as many nodes as wanted.

## How?

Using an ESP8266 as a node and a Raspberry Pi as a master server, we are able to connect many devices called "Stations" that will be used to collect environmental data from different sensors attached to it.

### Stations

Stations are network enabled devices that provide environmental data.

You can have as many stations as you want and assign them names.

Stations currently measure 3 different environmental data

- Temperature
- Humidity
- Pressure

## Current features

#### Station Auto-pairing

Stations are able to automatically find a master server on the network and request connection to it

#### Web interface to manage devices

Add, Remove, Edit stations from an easy to use web page on your computer or smartphone

<img src="./assets/climactic.png" />

_Climactic station management page_

## Planned features

#### Data collection

Climactic will be able to automatically collect data from a selected set of stations connected to it

#### Statistic generation

#### Data visualization (graphs, etc)
