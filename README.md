<h1 align="left">I.S.A React</h1>

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
        <a href="README-EN.md">English</a>
      </strong>
    </td>
  </tr>
</table>

O React I.S.A é uma arquitetura para React que separa o código em três camadas: Interface (I), Estados (S) e Ações (A)

Com isso, se torna mais fácil a organização do código e sua manutenção. Vamos explicar um pouco mais sobre cada camada (apesar de ser bem intuitivo):

<h4>Interface</h4>

A camada <strong>Interface</strong> é responsável por renderizar a interface do usuário (UI). Sendo composta por tudo que representa os elementos visuais da aplicação.

<h4>Estados</h4>

A camada <strong>Estados</strong> é responsável por armazenar os dados da aplicação. Sendo composto por classes React ou estados gerenciados via Context API, Reducers e bibliotecas como o Zustand.

<h4>Ações</h4>

A camada <strong>Ações</strong> é responsável por realizar as alterações nos estados da aplicação. Ela é basicamente composta por funções que fazem algo: disparam eventos, validam formulários, alteram o valor de um estado, etc.

<h3>Por que o React I.S.A?</h3>

Usar essa arquitetura lhe oferece algumas vantagens, como:

- Organização: Por se tratar de uma arquitetura em camadas, o código se torna mais organizado e fácil de entender, pois cada camada é responsável por uma função específica.

- Manutenção: O código fica mais fácil de manter, pois é mais fácil de rastrear os efeitos que uma camada exerce na outra.

- Testabilidade: O código fica mais fácil de testar, pois cada camada pode ser testada separadamente.

<h4>Usando o React I.S.A</h4>

Consulte os exemplos presentes na pasta [examples](/src/examples/)!

Sumario:

- `posts/`: Jeito convencional de se criar um componente
- `posts-isa/`: Utilizando a arquitetura I.S.A e apenas ferramentas presentes no próprio React
- `posts-zustand/`: Utilizando a arquitetura I.S.A junto da ferramenta Zustand

<h4>Uma dose de realidade</h4>

A verdade é que aplicar essa arquitetura em um código simples pode deixa-lô bastante complicado sem necessidades, portanto essa arquitetura é pensada e recomendada para features maiores e mais robustas.

Além disso, é recomendável aplicar essa arquitetura junto da arquitetura [bulletproof-react](https://github.com/alan2207/bulletproof-react)