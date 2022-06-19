# Pet Shop <img height="50px" src="./assets/img/pets.png">

<h3> Projeto de "DoguitoPetShop" trabalhado em duas páginas principais de login de usuário em conta, em que o código em JS faz a validação dos dados como CPF, números de senha, data de maior, etc... </h3>

# 
## Começando pela validação da Data:

**Depois de assim conseguir fazer com que seja ideal nosso valor de date no nosso HTML, faremos com que a nossa data seja válida. Partindo do aspecto de que nosso cliente cadastrado deve ter no mínimo 18 anos e assim tendo que uma regra ele dê uma mensagem de erro do que está acontecendo.**


Começaremos a partir de uma função que somente faça isso, crie uma data a partir do momento a digitou ela no campo, (objeto já definido e conhecido no JS, `new = Date()`) Ela em si, já consegue fazer por si só dizer em que data estamos, então não nos preocuparemos com isso. E logo depois uma simples validação de um campo condicional a partir de uma variável ainda imaginária e sem valor chamada de than18.**

Sendo que assim, a data recebida for maior que 18, colocaremos a mensagem a dizer que o usuário deve ser maior que 18 para se cadastrar. Sendo assim, conseguimos todo o corpo principal da nossa função:
```jsx
function dateVale(input) {
  const date = new Date(input.value);
  let message = "";

  if (!than18(recepDate)) {
    message = "Você deve ter maior que 18 anos para se cadastrar :(";
  }

  input.setCustomValidity(message);
}
```

Começaremos a partir que uma função de than18 que tem a função que recebe como parâmetro uma data, essa data foi aquela atribuída anteriormente dentro do campo input, certo?

Primeiro adicionamos uma data atual de hoje, objeto `Date()`. Nisso, poderemos fazer uma variável, que classifica uma variável que será suposta do valor de uma data específica que terá um ano completo atual, + 18 anos! Fazendo com que assim se torne totalmente viável a validação de uma data de nascimento de uma pessoa que tem mais de 18 anos.

```jsx

function than18(date) {
  const todayDate = new Date();
  const datethan18 = new Date(
    date.getUTCFullYear() + 18,
    date.getUTCMonth(),
    data.getUTCDate()
  );

  return dateThan18 <= todayDate;
};
```
# 

## Validação de senha:

**A senha, podemos ainda fazer algumas requisições. Com que ela tenha um método simples de variáveis aceitáveis. Exemplo: Você se vê muito em sites que quando iremos adicionar uma senha qualquer, ele diretamente nos dá uma mensagem parecida com...**
<aside>
🧾 "Sua senha precisa ter no mínimo 6 caracteres; Sua senha deve ter no mínimo 1 número, uma letra, e um caractere especial;"
</aside>

Então assim, usaremos uma nova sintaxe dentro do nosso HTML, chamada de REGEX. Ela faz com que usaremos um atributo do nosso HTML sejas privado de caracteres especiais usados no nosso campo de senha. Isso faremos com que podemos além de privá-los de caracteres padrões, podemos escolher quais são eles... Nesse sentido, usamos o seguinte código:

```js
pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
```

# 
## Personalização de mensagens de erro:

**Dentro dos componentes JSON, existem basicamente variáveis que guardam tipos de informações em que fazem esses erros se separar em tipos diferentes de erro, dentre esses erros vamos destacar principalmente os casos “esquecer de digitar” ou ainda “campo não digitado”. Além da própria mensagem customizada, que é utilizada em situações específicas de input, que ainda não é definida no JSON...**

```jsx
const mensagensErro = {
    nome: {
        valueMissing: "Este campo não pode estar vazio!"
    },

    email: {
        valueMissing: "Este campo não pode estar vazio!",
        typeMismatch: "O campo digitado não é valido!"
    },

    senha: {
        valueMissing: "Este campo não pode estar vazio!",
        patternMissmatch: "O campo deve ter de 6 a 12 caracteres, números válidos!"
    },
    dataNascrimento: {
        valueMissing: "Este campo não pode estar vazio!",
        customError: "Você deve ser maior de 18 anos para se cadastrar!"
    }

}
```

```jsx
// Array com todos os tipos de erros:

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMissmatch",
    "customError"
];

//função da mensagem de erro:

function mostraMensagemErro(tipoDeInput, input){
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensErro[tipoDeInput][erro];
        };
    });
    let mensagem = "";
    return mensagem;
};
```

### 1° passo:

**Definimos um array, colocamos todos os tipos de erros, em strings de um array padrão do JS! Para que ele logo depois seja comparado ao próprio objeto de erro, com as mensagens existentes no JSON...**

### 2° passo:

**Faremos uma função que usará de parâmetro o tipo de input que estamos colocando, que foi colocado um dataset dentro de um input de HTML. E ainda colocamos o próprio input, já que precisamos do erro em si.**

### 3° passo:

**Para começar a validação das mensagens de erro, precisaremos passar uma função que passe por todos os elementos do nosso array de tipos de erros a função forEach, assim para que ele cheque através de uma condicional, quais tipos? Ele irá impor através desse tipo de erro, e  colocar na mensagem de acordo com o tipo de erro, e assim ele imprime o erro na mensagem, que já faz feito através daquele mesmo objeto com todos os elementos do JSON.**
#
