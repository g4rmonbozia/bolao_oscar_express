const fs = require('fs')

//GET
function getIndicadosPromise()
{
    return new Promise((resolve, reject) => {        
        fs.readFile('../backend/model/indicados.json', 'utf8', (err, data) => {
          if (err) {
            reject(err)
          } 
          else {            
            let indicados = JSON.parse(data)            
            resolve(indicados)
          }
        })
    })
}
const getIndicados = (req,res)=>{
    getIndicadosPromise()
    .then(indicados => res.status(200).json(indicados))
    .catch(err => res.status(500).send(err.message));
}  

module.exports = {getIndicados}