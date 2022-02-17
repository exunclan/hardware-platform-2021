# Hardware Platform 2021

Using [_Laravel Inertia REact TypeScript_](https://github.com/dotangad/liret) made by [@dotangad](https://github.com/dotangad)

## Setup
- Clone the repository
```sh
git clone https://github.com/exunclan/hardware-platform-2021.git
```
- Install dependencies
```sh
composer install && npm i
```
- Fill out .env
```sh
cp .env.example .env
```
- Run the app
  - Using Docker (Sail)
  ```sh
  ./vendor/bin/sail up -d
  ./vendor/bin/sail artisan websockets:serve # FOR REALTIME PRICE CHANGES
  ```
  - Using Laravel Valet
    - Follow [the docs](https://laravel.com/docs/8.x/valet)
    - Run Websockets
    ```sh
    php artisan websockets:serve
    ```
- Watch for frontend changes
```sh
npm run watch
```
