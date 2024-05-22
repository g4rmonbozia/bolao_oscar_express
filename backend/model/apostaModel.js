const {Validator} = require('jsonschema')
const validator = new Validator()

const apostaSchema = {    
    type: "object",
    properties: {
        id: {type: 'string'},
        nome: {type: 'string'},
        email: {type:'string'}          
    },
    "required": ['nome','email']
  }

  const validateDataAposta = (e)=>{
    return validator.validate(e,apostaSchema)
  }

  module.exports= {validateDataAposta}
