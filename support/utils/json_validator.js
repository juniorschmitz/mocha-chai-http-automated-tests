import Ajv from "ajv"
import fs from "fs"
import path from "path"
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

export class JsonValidator {

    static validateSchema(schema, status_code, body) {
        let contract = JSON.parse(fs.readFileSync(path.resolve(`./support/utils/schemas/${schema}_${status_code}.json`)))
        let validator = ajv.compile(contract)

        let is_valid_contract = validator(body)
        if(!is_valid_contract) {
            console.log("Error in the contract validation!")
            validator.errors.forEach(error => {
                console.log(`Field ${error.instancePath} ${error.message}`)
            });
        }
        return is_valid_contract
    }

}