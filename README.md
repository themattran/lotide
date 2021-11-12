# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @themattran/lotide`

**Require it:**

`const _ = require('@themattran/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns first element of array
* `tail(...)`: returns all elements of array except the first element
* `middle(...)`: returns the middle elements of an array (1 element for odd || 2 elements for even # arrays )
* `assertEqual(...)`: compares two values and returns boolean
* `assertArraysEqual(...)`: compares two arrays and returns boolean
* `eqArrays(...)`: compares two arrays and returns boolean
* `assertObjectsEqual(...)`: compares object instances
* `countLetters(...)`: counts letters of string
* `countOnly(...)`: count only strings within parameter
* `eqObjects(...)`: compares objects
* `findKeyByValue(...)`: finds key by value within obhect
* `findKey(...)`: finds key within object
* `flatten(...)`: flattens matrix into singular array 
* `letterPositions(...)`: finds and tracks positions of letters within string 
* `map(...)`: returns first index of each element from given string 
