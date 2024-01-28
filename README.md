<h1 align="left">React I.S.A</h1>

<!--
  Se você quiser replicar a funcionalidade de trocar de idioma, basta criar um novo README na raíz do repositório e linkar no README principal.
 -->
<table align="right">
  <tr>
    <td>
      <strong>
        <a href="README.md">Português</a>
      </strong>
    </td>
  </tr>
  <tr>
    <td>
      <strong>
        <a href="README-EN.md">Inglês</a>
      </strong>
    </td>
  </tr>
</table>

O React I.S.A é uma arquitetura para React que separa o código em três camadas: Interface (I), Estados (S) e Ações (A)

Com isso, se torna mais fácil a organização do código e sua manutenção. Vamos explicar um pouco mais sobre cada camada (apesar de ser bem intuitivo):

### Interface

A camada **Interface** é responsável por renderizar a interface do usuário (UI). Sendo composta por tudo que representa os elementos visuais da aplicação.

### Estados

A camada **Estados** é responsável por armazenar os dados da aplicação. Sendo composto por classes React ou estados gerenciados via Context API, Reducers e bibliotecas como o Zustand.

### Ações

A camada **Ações** é responsável por realizar as alterações nos estados da aplicação. Ela é basicamente composta por funções que fazem algo: disparam eventos, validam formulários, alteram o valor de um estado, etc.

## Por que o React I.S.A?

Usar essa arquitetura lhe oferece algumas vantagens, como:

- Organização: Por se tratar de uma arquitetura em camadas, o código se torna mais organizado e fácil de entender, pois cada camada é responsável por uma função específica.

- Manutenção: O código fica mais fácil de manter, pois é mais fácil de rastrear os efeitos que uma camada exerce na outra.

- Testabilidade: O código fica mais fácil de testar, pois cada camada pode ser testada separadamente.

### Usando o React I.S.A

Consulte os exemplos presentes na pasta [examples](/src/examples/)!

Exemplos:

- `normal/`: Jeito convencional de se criar um componente
- `isa-with-context/`: Utilizando a arquitetura I.S.A e apenas ferramentas presentes no próprio React (Context API)
- `isa-with-context-and-reducer/`: Utilizando a arquitetura I.S.A e apenas ferramentas presentes no próprio React (Context API + useReducer)
- `isa-with-zustand`: Usando a arquitetura I.S.A junto da biblitoeca [Zustand](https://zustand-demo.pmnd.rs/)

## Uma dose de realidade

A verdade é que aplicar essa arquitetura em um código simples pode deixa-lô bastante complicado sem necessidades, portanto essa arquitetura é pensada e recomendada para features maiores e mais robustas.

Além disso, é recomendável aplicar essa arquitetura junto da arquitetura [bulletproof-react](https://github.com/alan2207/bulletproof-react)

## Contribuindo

Tem alguma contribuição para o projeto? Só criar uma PR com ela: Seja alguma melhoria no código, novo exemplo a ser adicionado e afins.

É necessário 2 *approves* além de uma review de um *code owner* para o PR ser mergeado.