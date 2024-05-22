const {v4:uuidv4} = require('uuid')
const {categorias} = require ('./categoriaController')
const {validateDataAposta} = require('../model/apostaModel')

const fs = require('fs')

//GET
function getApostasPromise()
{
    return new Promise((resolve, reject) => {        
        fs.readFile('../backend/model/apostas.json', 'utf8', (err, data) => {
          if (err) {
            reject(err)
          } 
          else {            
            let apostas = JSON.parse(data)            
            resolve(apostas)
          }
        })
    })
}
const getApostas = (req,res)=>{
    getApostasPromise()
    .then(apostas => res.status(200).json(apostas))
    .catch(err => res.status(500).send(err.message));
}  

//POST
function addApostasPromise(aposta) 
{
  return new Promise((resolve, reject) => {      
    fs.readFile('../backend/model/apostas.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } 
      else {    
                
        let apostas = JSON.parse(data)   

        if(apostas.some(e=>e.email===aposta.email))
        {
            reject(new Error('Email already exists'))                  
        }

        const id = uuidv4()         
        const apostaNew = { id, ...aposta }  
        
        apostas.push(apostaNew)  
        
        fs.writeFile('../backend/model/apostas.json', JSON.stringify(apostas), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(apostaNew);
          }
        })
      }
    })
  })
}

const addApostas = (req,res)=>{
    const aposta = req.body

    const validResult = validateDataAposta(aposta)
       
    if(!validResult.valid)
    {
      return res.status(400).json({message:'Invalid aposta Data', errors : validResult.errors})
    }

    addApostasPromise(aposta)
    .then(apostaNew => res.status(200).json(apostaNew))
    .catch(err => res.status(500).send(err.message))
}  


//PUT/PATCH
function updateApostasPromise(id,aposta) 
{
  return new Promise((resolve, reject) => {      
    fs.readFile('../backend/model/apostas.json', 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        
        let apostas = JSON.parse(data)  
        
        const index = apostas.findIndex((e) => e.id === id)

        if (index === -1) {
          reject(new Error('Aposta not found'))
        } 
        else 
        {
          
          const apostaUpdate = { ...apostas[index], ...aposta, email: apostas[index].email }  
          
          apostas[index] = apostaUpdate  
          
          fs.writeFile('../backend/model/apostas.json', JSON.stringify(apostas), (err) => {
            if (err) {
              reject(err)
            } else {
              resolve(apostaUpdate)
            }
          })
        }
      }
    })
  })
}
  
const updateApostas = (req,res) =>{
  const id = req.params.id
  const aposta = req.body
  updateApostasPromise(id,aposta) 
  .then(apostaUpdate => res.status(200).json(apostaUpdate))
  .catch(err => res.status(500).send(err.message))

}

//DELETE
function removeApostasPromise(id) 
{
  return new Promise((resolve, reject) => {
    fs.readFile('../backend/model/apostas.json', 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } 
      else {
        
          const apostas = JSON.parse(data)
          
          const index = apostas.findIndex(e => e.id === id)

          if (index === -1) {
            reject(new Error('Aposta not found'))
          } 
          else {
            
            apostas.splice(index, 1)
            
            fs.writeFile('../backend/model/apostas.json', JSON.stringify(apostas), err => {
              if (err) {
                reject(err)
              } else {
                resolve()
              }
            })
          }       
      }
    })
  })
}

const removeApostas = (req,res)=>{      
    const id = req.params.id
    removeApostasPromise(id)
    .then(() => res.status(200).json({message:'Aposta Deleted'}))
    .catch(err => res.status(500).send(err.message))
}


module.exports = {getApostas,addApostas,updateApostas, removeApostas}