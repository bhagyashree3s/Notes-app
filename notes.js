const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=>
{
    return "your Notes ..."
}
const addNote = (title,body)=>{
  const notes = loadNotes()
  const duplicateNotes= notes.filter( (note)=> note.title==title)
  debugger
  if(duplicateNotes.length===0)
  {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.inverse.green('new note ahead'))
  }
  else
  {
      console.log(chalk.red.inverse('title already in use'))
  }
}
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note)=>{
        console.log(note.title)
    })
        
   
}
const removeNote = (title)=>
{
  notes =loadNotes()
  const filtered = notes.filter((note)=>note.title!==title)
  if(filtered.length!==notes.length)
  {
      console.log(chalk.inverse.green('Note removed!'))
      saveNotes(filtered)
  }
  else{
      console.log(chalk.red.inverse('No Note found'))
  }
 
}
const saveNotes = (notes)=>
{
    const data =JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}
const loadNotes = ()=>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
    const data = dataBuffer.toString()
    const dataParse= JSON.parse(data)
    return dataParse

    }catch(e)
    {
             return []
    }
    
}
const readNote = (title)=>{
    const notes = loadNotes()
    const noteF=notes.find((note)=>note.title==title)
    if(noteF)
    {console.log(chalk.inverse(noteF.title))
    console.log(noteF.body)}
    else
    {
        console.log(chalk.inverse.red('Note not found!'))
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}