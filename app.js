const validator = require('validator')
const chalk=require('chalk')
const yargs = require('yargs')

const Notes= require('./notes.js')
const { string } = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add a new note!',
    builder:{
          title:{
              describe: 'note title',
              demandOption: true,
              type: 'string',
          },
          body: {
              describe: 'body of note',
              demandOption: true,
              type: 'string'
          }

    },
    handler(argv) {
       Notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note!',
    builder: {
        title:{
            describe: 'note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'read notes',
    builder:{
      title:{
          describe:'title of note to read',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv){
        Notes.readNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        Notes.listNotes()
    }
})
yargs.parse()

