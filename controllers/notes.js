
const knex = require('../model/knex') 


async function addNote(content){
    const data = await knex('notes').insert(content)
    return data
}

async function getUID (id){
    const uid = await knex('notes')
    .select('uid')
    .where({id})
    return uid
}
async function getAllNote(){

   const data = await knex('notes').select('contenu','url')
   return data
}

async function getNote(id){

    const data = await knex('notes')
    .select('contenu','url')
    .where({id})
    return data

}
async function updateNote(id , content){
    const data = await knex('notes')
    .where({id})
    .update(content)

    return data
}

async function deleteNote(id){
    const data = await knex('notes')
    .where({id})
    .del()
}

module.exports = {
    addNote, 
    getAllNote, 
    getNote, 
    updateNote, 
    deleteNote, 
    getUID
}