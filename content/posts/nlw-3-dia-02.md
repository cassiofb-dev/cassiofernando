---
path: "/blog/nlw-3-dia-02"
date: "2020-10-13"
language: "pt-BR"
author: "Cássio Fernando"
title: "NLW 3 | Dia 2 da Next Level Week 3"
description: "Resumo do segundo dia da terceira edição da Next Level Week"
metaImage: "https://i.imgur.com/ysQ4tgL.jpg"
tags: ["nlw", "typescript"]
---
# Dia 2

 1. Rotas, parâmetros e métodos HTTP
 2. Banco de dados
 3. Criando tabelas no banco de dados
 4. Orfanato Controller
 5. Trabalhando com views
 6. Validação de dados
 7. Lidando com exceções
 8. Árvore de arquivos
 9. Resultado

## Rotas, parâmetros e métodos HTTP 

Para construirmos o nosso backend precisamos entender alguns conceitos de rede. Esse é apenas um resumo básico, para entender mais e se aprofundar recomendo o [RFC 7231](https://tools.ietf.org/html/rfc7231).

### Rotas

Um conjunto de funcionalidade/instruções do backend. Abaixo coloquei um exemplo de um app bem simples com apenas uma rota:

```ts
import express from  'express';

const app = express();

app.use(express.json());

app.get('/users/:id', (request, response) => {

  console.log({
    "query params":  request.query,
    "route params":  request.params,
    "body":  request.body,
  });

  return  response.json({
    message:  'hello world',
  });
});

app.listen(3333);
```

Se executada uma request com a URL:
```http://localhost:3333/users/teste?testequery=testando```

E o body:
```js
{
  "name": "teste",
  "value": "testando"
}
```
A saída no console será:
```shell
{
  'query params': { testequery: 'testando' },
  'route params': { id: 'teste' },
  body: { name: 'teste', value: 'testando' }
}
```

### Recurso

Dado que será criado, buscado, deletado ou modificado. No caso do exemplo, ```users``` é o nosso recurso.

### Parâmetros

URL exemplo: ```http://localhost:3333/users/teste?testequery=testando```

Informações enviadas através de uma HTTP request através das seguintes formas:

 1. Query Params
 Parâmetros enviados através da URL. No exemplo, o query param é ```testequery``` e o seu valor é ```testando```.
 2. Route Params
 Também enviado através da URL, porém utilizado para identificar o recurso. No exemplo o route param é ```users```
 3. Body
 Enviado através do corpo da requisição. Utilizado para transferência de dados extensos ou complexos.

### Métodos HTTP

Conjunto de métodos para identificar como será resolvida a requisição de um recurso. No exemplo, ```GET``` é o nosso método.

Os principais métodos HTTP são:

 1. GET - Requisita dados em um servidor. Geralmente associado à listagem de um recurso. Segundo ao  [RFC 7231](https://tools.ietf.org/html/rfc7231):
	> Transfer a current representation of the target resource.
 2. POST - Envia dados para um servidor. Geralmente relacionado à criação de um recurso. Segundo ao  [RFC 7231](https://tools.ietf.org/html/rfc7231):
	> Perform resource-specific processing on the request payload.
 3. PUT - Envia dados para um servidor. Geralmente relacionado à atualização de um recurso existente. Segundo ao  [RFC 7231](https://tools.ietf.org/html/rfc7231):
	> Replace all current representations of the target resource with the request payload.
 4. DELETE - Requisita o apagamento de um determinado recurso. Segundo ao  [RFC 7231](https://tools.ietf.org/html/rfc7231):
	> Remove all current representations of the target resource.

## Banco de dados

Podemos configurar o banco de dados de diversas formas no Node:

 1. Driver Nativo - Queries podem ser executadas diretamento no Node, porém sem nenhuma abstração. Ex: [SQLite](https://www.sqlite.org/index.html).
 2. Query Builder - Queries são escritas através do próprio JavaScript e depois são construidas pelo query builder. Ex: [Knext.js](http://knexjs.org/).
 3. ORM - Maior nível de abstração. Tabelas do banco de dados são representadas através de classes. Registros de cada tabela são representados como instâncias das classes correspondentes. Ex: [TypeORM](https://typeorm.io/#/).

## Criando tabelas no banco de dados

Você pode procurar o lugar dor arquivo no código ou simplesmente visualizar a [árvore de arquivos](#%C3%A1rvore-de-arquivos).

Configure o ```package.json```:

```js
{
  "name": "happy-backend",
  "version": "1.0.0",
  "description": "Happy app backend server source code",
  "main": "index.js",
  "repository": "git",
  "author": "cassiofb-dev",
  "license": "MIT",
  "private": false,
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "multer": "^1.4.2",
    "sqlite3": "^5.0.0",
    "typeorm": "^0.2.28",
    "yup": "^0.29.3"
  },
  "scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
    "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
  },
  "devDependencies": {
    "@types/cors": "^2.8.8",
    "@types/express": "^4.17.8",
    "@types/multer": "^1.4.4",
    "@types/yup": "^0.29.8",
    "ts-node-dev": "^1.0.0-pre.63",
    "typescript": "^4.0.3"
  }
}

```

Configure o arquivo ```ormconfig.json```:

```js
{
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "entities": [
    "./src/models/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}

```

Execute o comando:

```shell
yarn typeorm migration:create -n <nome da sua tabela>
```
## Orfanato Controller

O controller é uma abstração do método [MVC](https://pt.wikipedia.org/wiki/MVC), o link para leitura está disponível irei focar apenas no exemplo resumido e prático.

Exemplo de controller:

```ts
// OrphanagesController.ts

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanages from '../models/Orphanage';
import OrphanageView from '../views/orphanage_view';

import * as Yup from 'yup';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    response.json(OrphanageView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(OrphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
  
    const orphanagesRepository = getRepository(Orphanages);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => ({ path: image.filename}) );

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required(),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    })
  
    const orphanage = orphanagesRepository.create(data);
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json(orphanage);
  },
};

```

## Trabalhando com Views

Uma analogia simples de View:

> Views são como uma camada entre o backend e o cliente que filtra e controla o fluxo de dados que serão consumidos pelo cliente.

A baixo segue os views utilizados

```ts
// orphanage_view.ts

import Orphanage from '../models/Orphanage'
import ImageView from './image_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: ImageView.renderMany(orphanage.images),
    }
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
};

```


```ts
// image_view.ts

import Image from '../models/Image'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    }
  },

  renderMany(image: Image[]) {
    return image.map(image => this.render(image));
  }
};

```

## Validação dos dados

Na validação dos dados será utilizado o validador de esquemas [Yup](https://github.com/jquense/yup).

No controller dado acima, a validação se encontra nessa parte:

```ts
const schema = Yup.object().shape({
  name: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  about: Yup.string().required(),
  instructions: Yup.string().required(),
  opening_hours: Yup.string().required(),
  open_on_weekends: Yup.string().required(),
  images: Yup.array(
    Yup.object().shape({
      path: Yup.string().required(),
    })
  ),
});

await schema.validate(data, {
  abortEarly: false,
})
```

## Lidando com exceções

Por padrão o express não trata os erros ```async```. Para isso precisamos utilizar o pacote ```express-async-errors``` e construir nosso ```errorHandler```:

```ts
import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation Fails', errors })
  }

  console.error(error);

  return response.status(500).json({ message: 'internal server error'} );
};

export default errorHandler;

```

## Árvore de arquivos Backend

No final desse dia sua árvore de arquivo ficará similar a essa:

```
📦src  
 ┣ 📂config  
 ┃ ┗ 📜upload.ts  
 ┣ 📂controllers  
 ┃ ┗ 📜OrphanagesController.ts  
 ┣ 📂database  
 ┃ ┣ 📂migrations  
 ┃ ┃ ┣ 📜1602604062694-create_orphanages.ts  
 ┃ ┃ ┗ 📜1602619431968-create_images.ts  
 ┃ ┣ 📜connection.ts  
 ┃ ┗ 📜database.sqlite  
 ┣ 📂errors  
 ┃ ┗ 📜handler.ts  
 ┣ 📂models  
 ┃ ┣ 📜Image.ts  
 ┃ ┗ 📜Orphanage.ts  
 ┣ 📂views  
 ┃ ┣ 📜image_view.ts  
 ┃ ┗ 📜orphanage_view.ts  
 ┣ 📜routes.ts  
 ┗ 📜server.ts
```
