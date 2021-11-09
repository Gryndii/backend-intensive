# Backend Intensive

#### Boilerplate repository for Lectrum Backend Intensive.

#### Перед запуском проекта:

1. Создать в корне проекта (на одном уровне с package.json) файл с именем `.env`
2. Добавить в файл следующий код
3. Имя базы данных выбираем следующее → первая буква имени и фамилия латиницей, в нижнем регистре

```
# Debug
DEBUG='server:*,router:*,db'

# Server
PORT=3000

# Session
PASSWORD='Very_strong_pa$$word_is%123456789'

# DB → https://account.mongodb.com/account/login
DB_URL='some mongo atlas connection string'
```

#### Документация по проекту

[Swagger доки](https://lab.lectrum.io/school/docs/).
