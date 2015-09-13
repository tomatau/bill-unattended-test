### Node Version

This project uses node version 4.0.0

To run commands locally it is suggested that you use a 4.0.0 node environment or a version manager.

```
nvm use
```

## Development

To run the developer environment:

```
npm run dev [-- --config==staging]
```

`npm run dev` defaults to development configuration file.

## Integration Tests

To run the integration tests there is one global dependency:

```
npm i -g cypress
cypress install
```

Then, you must first build the project locally.
Then you will need to serve the application on `localhost:9999`. You can do this with `npm run gulp -- serve.dist`.
Finally run the cypress test suite.

```
npm run gulp -- build
npm run gulp -- serve.dist &
cypress ci 59323be9-33ed-40e5-aeac-0f097c299dc6
kill %1
```