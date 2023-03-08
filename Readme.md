
# HookCaller Application

An application which can call the scheduled apis.



## Installation

Install HookCaller with npm

```bash
  yarn install 
  yarn docker:up
  yarn dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV` development or production

`PORT` for running api, In .env.example 8000

`POSTGRES_DATABASE` database name default is mangroves_dev

`POSTGRES_HOST` default is localhost

`POSTGRES_PORT` default is 5432

`POSTGRES_PASSWORD` default is admin

`POSTGRES_USERNAME` default is postgres



## API Reference

#### Create item

```http
  POST /api/v1/hooks-caller
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `hours`      | `number` | **Required**. hours for create item also it can be 0 |
| `minutes`      | `number` | **Required**. minutes for create item also it can be 0 |
| `seconds`      | `number` | **Required**. seconds for create item also it can be 0 |
| `webhookUrl`      | `string` | **Required**. webhookUrl it must be link|

#### Get all items

```http
  GET /api/v1/hooks-caller
```

#### Get item

```http
  GET /api/v1/hooks-caller/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Tech Stack

Node, Express, sequelize, pg, inversify, node-cron

