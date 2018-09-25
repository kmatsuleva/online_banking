import history from '../../../../../history'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values) => {
  return sleep(1000) 
    .then(() => {
      if (values.username !== "admin" || values.password !=="admin" ) {
        throw { password: 'Incorrect username or password' }
      }

      if (values.username === "admin" && values.password === "admin" ) {
        return  history.push('/accounts')
       }
       return ;
    })
}

export default asyncValidate

