// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let script = 'Hi'

let check = (typeof script)

let message = check == 'string'? "É uma string" : "Não é uma string"

alert(message)