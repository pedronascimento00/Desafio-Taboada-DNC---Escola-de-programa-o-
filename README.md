## 🔢 Projeto Tabuada Simples

Este é um projeto simples e direto de um **Gerador de Tabuada** desenvolvido com HTML, CSS e JavaScript. A ferramenta permite ao usuário inserir um número e um limite máximo para gerar e exibir a tabuada completa daquele número.

O design é baseado em um layout minimalista, com tema escuro e uma caixa de cálculo centralizada para uma experiência de usuário limpa.

### ⚙️ Tecnologias Utilizadas

  * **HTML5:** Estrutura básica da página e do formulário.
  * **CSS3:** Estilização do tema escuro e layout responsivo.
  * **JavaScript:** Lógica de cálculo, validação de input e exibição da tabuada.

### ✨ Funcionalidades

  * **Entrada Dupla:** O usuário define qual tabuada calcular (o *multiplicando*) e até qual número a tabuada deve ir (o *multiplicador máximo*).
  * **Cálculo Dinâmico:** Gera a tabuada completa usando um loop simples em JavaScript.
  * **Validação de Input:** Verifica se os campos estão preenchidos com números válidos e positivos, fornecendo feedback ao usuário.
  * **Exibição Clara:** O resultado é formatado de maneira legível em uma seção separada da caixa de cálculo.

### 🚀 Como Rodar o Projeto

Siga estes passos simples para ter o projeto funcionando localmente:

1.  **Clone o repositório** (se estiver em um, ou baixe os arquivos):
    ```bash
    git clone [LINK DO SEU REPOSITÓRIO]
    # OU baixe os arquivos index.html, style.css e script.js
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd nome-da-pasta-do-projeto
    ```
3.  **Abra o arquivo `index.html`** no seu navegador de preferência (Chrome, Firefox, Edge, etc.). Você pode simplesmente dar um duplo clique no arquivo.

### 📚 Estrutura de Arquivos

```
/tabuada-simples
├── index.html       # Estrutura e layout (HTML)
├── style.css        # Estilização e tema escuro (CSS)
├── script.js        # Lógica de cálculo e validação (JavaScript)
└── README.md        # Este arquivo
```

### 🧑‍💻 Código Principal (JavaScript)

A lógica central da aplicação está na função `calcularTabuada()` no arquivo `script.js`:

```javascript
function calcularTabuada() {
    const multiplicando = parseInt(document.getElementById('multiplicando').value);
    const multiplicadorMax = parseInt(document.getElementById('multiplicadorMax').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(multiplicando) || isNaN(multiplicadorMax) || multiplicando <= 0 || multiplicadorMax <= 0) {
        // Lógica de validação...
        return;
    }

    let resultadoHTML = `<strong>Tabuada do ${multiplicando}:</strong>\n`;

    for (let i = 1; i <= multiplicadorMax; i++) {
        const resultado = multiplicando * i;
        resultadoHTML += `${multiplicando} x ${i} = ${resultado}\n`;
    }

    resultadoDiv.textContent = resultadoHTML;
}
```

-----

### 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) (se você criar um) para mais detalhes.

