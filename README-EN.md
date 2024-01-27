<h1 align="left">I.S.A React</h1>

<!-- 
  If you want to replicate the feature of multi language, simply create a new README file on the root of repository and link to the main README.
 -->
<table align="right">
  <tr>
    <td>
      <strong>
        <a href="README.md">Portuguese</a>
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

The React I.S.A is an architecture for React that separates the code into three layers: Interface (I), States (S), and Actions (A).

This makes it easier to organize and maintain the code. Let's explain a little more about each layer (although it is very intuitive):

### Interface

The **Interface** layer is responsible for rendering the user interface (UI). It is composed of everything that represents the visual elements of the application.

### States

The **States** layer is responsible for storing the application data. It is composed of React classes or states managed via Context API, Reducers, and libraries such as Zustand.

### Actions

The **Actions** layer is responsible for making changes to the application states. It is basically composed of functions that do something: trigger events, validate forms, change the value of a state, etc.

### Why React I.S.A?

Using this architecture offers you some advantages, such as:

- Organization: Because it is a layered architecture, the code becomes more organized and easier to understand, as each layer is responsible for a specific function.

- Maintenance: The code is easier to maintain because it is easier to track the effects that one layer has on another.

- Testability: The code is easier to test because each layer can be tested separately.

### Using React I.S.A

Check out the examples in the [examples](/src/examples/) folder!

Summary:

- `normal/`: Conventional way of creating a component
- `isa-with-context/`: Using the I.S.A architecture and only tools present in React itself (Context API)
- `isa-with-context-and-reducer/`: Using the I.S.A architecture and only tools present in React itself (Context API + useReducer)
- `isa-with-zustand`: Utilizing the I.S.A architecture and the [Zustand](https://zustand-demo.pmnd.rs/) library

### A dose of reality

The truth is that applying this architecture to simple code can make it quite complicated unnecessarily, so this architecture is designed and recommended for larger and more robust features.

Additionally, it is advisable to apply this architecture along with the [bulletproof-react](https://github.com/alan2207/bulletproof-react) architecture.