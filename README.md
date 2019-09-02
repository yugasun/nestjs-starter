# nestjs-starter

Project template for [Nest](https://github.com/nestjs/nest) framework.

## Feature

- [x] Using [Airbnb JavaScript Style * Guide](https://github.com/airbnb/javascript).  
- [ ] Normalize project folders.  
- [ ] Integrated with GraphQL.  
- [x] Integrated with Database(eg: mysql).  
- [ ] Jwt auth token.

## Installation

```bash
$ yarn install
```

## Environment

You should install `mysql` firstly, or you can use mysql docker image instead, `docker-compose.yml` had predefined the mysql environment, you can start it by `docker-compose up`;

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

[MIT licensed](LICENSE).
