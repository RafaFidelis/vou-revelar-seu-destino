# ANOTAÇÕES

# Comandos:
- !+enter = gerar estrutura HTML
- alt = seleciona e move uma linha
- "#" = selecionar por id


# HTML = HyperText Makeup Language
Tags HTML:
- div = não tem significado específico, é uma caixa vazia;
- h = título (h1, h2, h3...);
- p = parágrafo;
- input = recebe textos, não tem conteúdo, fecha em si mesma, sempre fechar com />.
  * placeholder = autoexplicativo;
- img = trazer uma imagem por meio de uma URL;
  * scr = source = o link com a imagem em si;
  * alt = alternative = texto para caso a imagem não apareça.
- button = adicionar o esqueleto de um botão na página;
- Propriedade id= identificador único para uma tag.

# CSS
- Seletor das tags HTML;
- Propriedade e valor dentro das {};
- Aplicação do efeito em ordem de cascata;
- Especificidade tem maior valor que o efeito cascata;

* Princípio Box Model: todas as tags são como caixas que possuem várias dimensões:
  - margens= margin-top, margin-right and left, margin-bottom;
  - altura= height;
  - largura= width;
  - bordas= border;
  - padding= preenchimento interno;
  - margin-inline = direita e esquerda juntas;
  
# JAVA SCRIPT
- Usado na web, desktop, e mobile (react native), instagram, google, netflix, etc;
- linguagem moderna e viva;
- Não use caracteres especiais nem acentos ao nomear variáveis, o primeiro caractere do nome não pode ser um número, para separar palavras use a técnica camelcase (letra maiúscula nas próximas palavras do nome);
  * concatenar = colocar ao lado, ex: ("abc" + 2) = abc2;

  1. Variáveis
   - let = pode ter seu valor alterado posteriormente;
   - const = não pode ser alterada posteriormente;

  2. Tipos de dados
   - string = dados de texto, dentro de aspas e aspas duplas;
   - number = podem ser números inteiros (integer) ou quebrados/flutuantes (float);
   - boolean = true(1) or false(0);

  3. Operadores
   - Atribuição = o sinal de igual atribui valor, leia "recebe";
   - Aritméticos = +, -, *, /
   - comparação = <, >, ==, >=;
 
  4. Condicional (if, else)
    exemplo:

    const idade = 17
    const maiorDeDezoito = idade >= 18

    if(maiorDeDezoito) {
      alert("pode tirar carteira")
    } else {
      alert("não pode tirar carteira")
    }

  5. Estrutura de dados
   - array = vetor = lista
     possui índice que inicia em 0, usa []
                            0     1   2
     const temperaturas = [23.2, 27, 15.8]
   
   - Objeto - const com chaves {} para abrigar vários valores;
     console.log(nomeDoObjeto.dado[índice])

  6. Function - Função
   - Criação da Função
     function nomeDaFuncao() { }

   - Execução 
     nomeDaFuncao()
  
   - Parâmetros
     function soma(a+b) {   * a+b são argumentos que só existem dentro dessa Função.
     }
     soma(25+35)
     - 60

   - Retorno (para fora da Função)
     function soma(a, b) {
       return a + b
     }
     const multiplica = soma(2, 2) * 4
     console.log(multiplica)
     - 16

  7. Extensões da linguagem
   - Math.random() - gera um número decimal aleatório, entre 0 e 1;
   - Math.floor()  - arredonda um número para baixo;
   - Math.ceil()   - arredonda um número para cima;
   
  8. DOM Document Object Model
   - window
     window.alert("alerta")
   - Document
     document.write("texto")
     document.documentElement.style.background = "white" 
                 HTML
                 









