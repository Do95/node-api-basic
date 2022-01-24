const bcrypt = require('bcrypt');

async function hashPassword(password){
  const hash = await bcrypt.hash(password,10);
  return hash
}

async function passwordVerify(hash,password){
  const result = await bcrypt.compare(password, hash);
  console.log(result)
}

passwordVerify(hashPassword('admin124'),'admin124')

