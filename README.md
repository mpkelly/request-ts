## Basic Web API client 

If you only need call one or two REST endpoints then a smaller client like this one helps keep your build size down. It ships with typescript declarations and is promise based. If you need something more sophisticated then try [superagent](https://github.com/visionmedia/superagent).


This project is not in NPM but can be added to a NPM-based project like so: 

```
npm install react-style-helpers:https://github.com/mpkelly/request-ts.git

```

or by adding the following to your package.json "dependencies" section

``` 
"dependencies" {
  ...
  "react-style-helpers": "git+https://github.com/mpkelly/react-style-helpers.git"
}
```

and then run:

```
npm install
```

You can use the library like so 

```

import { makeRequest } from "request-ts";

const url = "http://rest-api.com/?";

class Respone {
  name: string;
  age: number;
}

export const query = <Response>(param1: string, param2: string): Promise<Response> => {  
  const method = "get";
  const params = {
    param1: param1,
    param2: param2,
  };
  return makeRequest<Response>({url, method, params});
};
```
