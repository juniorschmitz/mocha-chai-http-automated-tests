import faker from 'faker'

faker.setLocale('pt_BR')

export class Factory {
   static user() {
      return {
          nome: faker.name.firstName(),
          email: `${faker.internet.email().toLowerCase()}`,
          password: '1234',
          administrador: 'true'
      }
   }

   static invalid_user(type) {
      switch(type) {
          case 'missing_email':
              return {
                  nome: 'UmUsuarioMuitoInvalido',
                  password: '1234',
                  administrador: 'true'
              }
          case 'missing_name':
              return {
                  email: 'usuarioemailok@teste.com',
                  password: '1234',
                  administrador: 'true'
              }
          case 'missing_password':
              return {
                  nome: 'UmUsuarioMuitoInvalido',
                  email: 'usuarioemailok@teste.com',
                  administrador: 'true'
              }
          case 'administrator_non_boolean':
              return {
                  nome: 'UmUsuarioMuitoInvalido',
                  email: 'usuarioemailok@teste.com',
                  password: '1234',
                  administrador: 'batata'
              }
        }
    }
}
