SWAGGER_FILE=https://al-todo-api.herokuapp.com/docs-json
npx @openapitools/openapi-generator-cli generate -i $SWAGGER_FILE -g typescript-axios -o ./src/generated-api