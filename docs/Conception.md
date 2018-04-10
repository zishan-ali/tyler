---
id: Conception
title: How'd this come about?
sidebar_label: Conception
---

## Motivation

This package was concieved whilst developing generic, React.js components following [Brad Frost's atomic design patterns](http://bradfrost.com/blog/post/atomic-web-design/). It quickly became apparent when developing components as such that we could quite easily break down each atomic level to have it's own definition of what the component consists of and then generate that to reduce having to manually write boilerplate to supplement each component.

The creator has now succeeded this concept into generating files that supplement these components such as **actions**, **reducers** and **selectors** etc. in complete isolation, and going forwards will be used to develop all levels of components and functions used within React.js applications.

## Basic Concepts

The creator tool works off the concept of having **templates** which dictate the definition of each atomic level. It is at this point that the creator tool becaomes opinionated. For **organism** level components, for example, we implement state - though this may not always be the case dependent on the context you're using it within. Similarly, atoms and molecules are also generated to be stateless and functional.

## The Name?

Why [**tyler?**](https://en.wikipedia.org/wiki/Tyler,_the_Creator)

