## Usage

`npm install -g sequelize-cli`

`yarn install` and then `yarn start`

## Migration

To run a migration just run `sequelize db:migrate`

### Create a new model

```
sequelize model:create --name User --attributes email:string,username:string,password:string
```

## Create a database and a user

You can use the below settings or use your own. Important part is to change the file `config/development.js`.

```
CREATE DATABASE api_db;
CREATE USER api_user WITH ENCRYPTED PASSWORD 'jduwmxzow723ksg92y1';
GRANT CONNECT ON DATABASE api_db to api_user;

GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO api_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO api_user;
```

## Dump database

`pg_dump -U api_user --dbname=api_db > api_db_dump.sql`
`pg_dump -U api_user --dbname=api_db --table '"Links"' > dumps/api_db_dump_links.sql`

## Import database

`psql api_db < dumps/api_db_dump.sql`
