**DEPRECATED** use Fetch API

## Basic Web API client 

If you only need to call one or two REST endpoints then a smaller client like this one helps keep your build size down. It ships with typescript declarations and is promise based. If you need something more sophisticated then try [superagent](https://github.com/visionmedia/superagent).


This project is not in NPM but can be added to a NPM-based project like so: 

```
npm install request-ts:https://github.com/mpkelly/request-ts.git

```

or by adding the following to your package.json "dependencies" section

``` 
"dependencies" {
  ...
  "request-ts": "git+https://github.com/mpkelly/request-ts.git"
}
```

and then run:

```
npm install
```

You can use the library like so 

```Typescript

import { makeRequest } from "request-ts";

const url = "http://rest-api.com/?";

class Respone {
  name: string;
  age: number;
}

export const query = <Response>(param1: string, param2: string): Promise<Response> => {  
  const method = "get";
  const params = {
    param1,
    param2,
  };
  return makeRequest<Response>({url, method, params});
};

// Use it 

query(...)
.then((response: Response) => {
  // handle response
})
.catch((error: any)=> {
  // handle error
});

```
