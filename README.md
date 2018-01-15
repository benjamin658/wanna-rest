# Wanna Rest

Create a mock RESTful api by command line interface.

## Installation

`npm install wanna-rest -g`

## How to use

### Create your own configuration file. Using the format shown below

```JSON
{
  "apis": [
    {
      "path": "/users",
      "method": "GET",
      "withParam": true,
      "data": [
        {
          "id": 1,
          "name": "Ben"
        },
        {
          "id": 2,
          "name": "KiKi"
        },
        {
          "id": 3,
          "name": "Kai"
        }
      ]
    },
    {
      "path": "/posts",
      "method": "GET",
      "withParam": true,
      "data": [
        {
          "id": 1,
          "title": "Ben's post",
          "content": "Hello world",
          "userId": 1
        },
        {
          "id": 2,
          "title": "KiKi's post",
          "content": "Hello world",
          "userId": 2
        }
      ]
    }
  ]
}

```

#### Configuration description

* path: API pathname.

* method: HTTP method, currently only supports GET.

* withParam: If set to true, it will create a route with parameter automatically, for example, `/users/:id`.

* data: The response data.

### Start the API server

`wanna-rest -c ./config.json -p 3000 -k`

### Browse to the API endpoints

`http://localhost:3000/users`

or withParam = true

`http://localhost:3000/users/1`

or use public link if the ngrok option is set

`https://4d1135cb.ngrok.io/users`

## CLI usage

```
  Usage: wanna-rest [options]


  Options:

    -V, --version    output the version number
    --port <n>       [Required] API server listening port.
    --config <path>  [Required] API configuration file path.
    --prefix         [Option] API pathname prefix, for example /api.
    --ngrok          [Option] Use ngrok to expose a local server behind a NAT or firewall to the internet.
    -h, --help       output usage information
```

## TODO List
* [ ] Support more http methods.
* [ ] Add unit test.

## License

```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


```