- Iniciando o sequelize
npx sequelize-cli init --force

- Criando um model:
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

- Rodando Migrations
npx sequelize-cli db:migrate

- Criando um seed
npx sequelize-cli seed:generate --name demo-pessoa

- Rodando todos os seeds para alimentar o banco 
npx sequelize-cli db:seed:all

- Criando Model e Seeds das tabelas restantess
npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
npx sequelize-cli model:create --name Matriculas --attributes status:string
npx sequelize-cli seed:generate --name demo-nivel
npx sequelize-cli seed:generate --name demo-turmas
npx sequelize-cli seed:generate --name demo-matriculas
npx sequelize-cli db:seed:all


