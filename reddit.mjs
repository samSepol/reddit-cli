#! /usr/bin/env node

import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'


// path to node interpreter and path to the cli
const {argv} = yargs(process.argv)

// fetch reddit api

const res=await fetch('https://www.reddit.com/.json')
const data=await res.json()
const children=data.data.children
const randomPost=children[Math.floor(Math.random() * children.length)]
const link=`https://reddit.com${randomPost.data.permalink}`


// argv is print open in cli
if(argv.print){
    console.log(`
    title:${randomPost.data.title}
    link:${link}
    `)
}
else{
    open(link)
}