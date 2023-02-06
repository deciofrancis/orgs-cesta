# ⚛️ React Native: Começando do Zero

Projeto do curso **Começando do Zero** da **Formação React Native** na [Alura](https://www.alura.com.br/).

## 📱 Projeto

O projeto tem intuito impletar a tela de detalhes de uma cesta de verduras de um e-commerce chamado *orgs*. Nesta tela são mostrados uma imagem, dados estáticos do nome da cesta, fazenda, preço e itens da cesta.

![Screen Recording orgs cesta](https://user-images.githubusercontent.com/5674710/217076985-906d7f6f-f331-4741-85a3-305021db8f4c.gif)

## 📲 Executando o projeto

Precisar instalar o Node.js e o npm.

```
sudo apt install nodejs
node --version
npm install -g npm
npm -v
```

Instalar o Expo.

```
npm install --global expo-cli
expo --version
```

### 🐙 Clonando o projeto

```
git clone https://github.com/deciofrancis/orgs-cesta
```

## 📱 App Expo Go

Instalar no celular o app Expo Go.

### ▶️ Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```
npm install
```

Então podemos rodar o projeto:
```
npm start
```

Uma guia no navegador irá abrir, geralmente [neste endereço](http://localhost:19002/).
Caso estiver com o celular abrar o Expo Go, **escaneie o QR code com o aplicativo do Expo** ou a câmera.
Se seu celular estiver em outra rede diferente do computador, troque a "CONNECTION" para "Tunnel", que o app será transmitido via internet.

# :muscle: Desafio: Aplicando Eject

o Expo permite gerar os arquivos nativos que faltavam para executar no react native puro.

Esse processo é chamado de eject, e você pode acessar a [documentação oficial clicando aqui](https://docs.expo.dev/expokit/eject/) . É importante que você leia a documentação para entender se você realmente precisa fazer isso.

Instalar o expo-cli

```
npm install -g expo-cli
```

Verificar as configurações do app.json, conforme a documentação.

Execute o comando expo eject dentro do projeto e siga o passo a passo no terminal, se houver.

Instale o ambiente nativo de Android ou iOS. [Tutorial configurar ambiente React Native](https://www.alura.com.br/artigos/configurando-o-ambiente-react-native)

Agora, vamos rodar a aplicação com o React Native CLI! Mas antes, precisamos baixar todas as bibliotecas do projeto, então, digite o código no seu terminal (dentro da pasta do projeto):

```
npm install
```

Para iniciar o bundle do React Native (esse terminal irá se manter aberto rodando até ser cancelado com Ctrl+C):

```
npx react-native start
```

Para rodar a aplicação na plataforma desejada:

```
npx react-native run-android
npx react-native run-ios
```

## 🚫 Para encontrar erros no React Native

Caso aparecer erros rode o comenado:

```
nix react-native doctor
```

