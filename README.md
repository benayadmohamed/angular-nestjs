# Web Site Blog with Angular 6 and nestJs

> ### Made with 

[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Build Status](https://travis-ci.org/affilnost/angular5-example-shopping-app.svg?branch=master)](https://travis-ci.org/affilnost/angular5-example-shopping-app.svg?branch=master)


## UI Description
The app provides a possibility to maintain blog list.

- CRUD Posts
- CRUD Users



## Features
- Angular 5+
- Routing
- Material Design
- Responsive layout (flex layout module)
- RxJS/Observables
- Angular forms
- Http
- Following the best practices!
- mongoDB
- NestJs


# Getting started
You need to have `Node.js` and `npm` installed on your PC/Mac.

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally. We use [Yarn](https://yarnpkg.com) to manage the dependencies, so we strongly recommend you to use it. you can install it from [Here](https://yarnpkg.com/en/docs/install), then run `yarn install` to resolve all dependencies (might take a minute).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

![alt text](https://github.com/benayadmohamed/angular-nestjs/blob/master/images/FireShot%20Capture%20002%20-%20FrentEnd%20-%20http___localhost_4200_users.png)

![alt text](https://github.com/benayadmohamed/angular-nestjs/blob/master/images/FireShot%20Capture%20003%20-%20FrentEnd%20-%20http___localhost_4200_posts.png)

![alt text](https://github.com/benayadmohamed/angular-nestjs/blob/master/images/FireShot%20Capture%20004%20-%20FrentEnd%20-%20http___localhost_4200_posts_5c1adbadf2037926541a7e6f.png)


### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/benayadmohamed/web-site-blog.git
cd angular-app
```

### App Server

Our backend application server is a NodeJS application that relies upon some 3rd Party npm packages.  You need to install these:

* Install local dependencies (from the project root folder):

    ```
    cd backendfinal
    npm install
    cd ..
    ```

  (This will install the dependencies declared in the server/package.json file)

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js 
* Install local dependencies (from the project root folder):

    ```
    cd frentEnd
    npm install
    cd ..
    ```

  (This will install the dependencies declared in the client/package.json file)
### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Building

### Configure Server
The server stores its data in a MongoLab database.
* Edit `backendfinal\src\app.module.ts` to set your URI  of your database .

    ```
   @Module({
     imports: [
       UserModule,
       MongooseModule.forRoot('mongodb://localhost/test'),
       PostModule,
     ],
     controllers: [AppController],
     providers: [AppService, PostsService],
   })
   export class AppModule {
   }

    ```
### Configure Client

* Edit `frentEnd\src\environments\environments.js` to set your URI  of server .

    ```
   export const environment = {
     production: false,
     url: 'http://localhost:3000/'
   };

    ```

## License
MIT

Enjoy :stuck_out_tongue_winking_eye:



