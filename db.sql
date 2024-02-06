
CREATE TABLE if not exists roles 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.roles ADD code varchar NOT NULL;
ALTER TABLE takana.roles ADD "name" varchar NULL;

CREATE TABLE if not exists users 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.users ADD role_id      serial NOT NULL;
ALTER TABLE takana.users ADD email        varchar NOT NULL;
ALTER TABLE takana.users ADD "password"   varchar NOT NULL;
ALTER TABLE takana.users ADD telephone    varchar NOT NULL;
ALTER TABLE takana.users ADD "name"       varchar NULL;
ALTER TABLE takana.users ADD CONSTRAINT users_un UNIQUE (email);
ALTER TABLE takana.users ADD CONSTRAINT users_fk FOREIGN KEY (role_id) REFERENCES takana.roles(id);


CREATE TABLE if not exists days 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.days ADD code varchar NOT NULL;
ALTER TABLE takana.days ADD "name" varchar NULL;
ALTER TABLE takana.days ADD CONSTRAINT code_days_un UNIQUE (code);

CREATE TABLE if not exists state_orders 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.state_orders ADD code varchar NOT NULL;
ALTER TABLE takana.state_orders ADD "name" varchar NULL;
ALTER TABLE takana.state_orders ADD CONSTRAINT code_states_un UNIQUE (code);

CREATE TABLE if not exists types 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.types ADD code varchar NOT NULL;
ALTER TABLE takana.types ADD "name" varchar NULL;
ALTER TABLE takana.types ADD CONSTRAINT code_types_un UNIQUE (code);

CREATE TABLE if not exists extras
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.extras ADD code varchar NOT NULL;
ALTER TABLE takana.extras ADD "name" varchar NULL;
ALTER TABLE takana.extras ADD CONSTRAINT code_extras_un UNIQUE (code);

CREATE TABLE if not exists dishes
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.dishes ADD code varchar NOT NULL;
ALTER TABLE takana.dishes ADD "name" varchar NULL;
ALTER TABLE takana.dishes ADD price decimal NOT NULL DEFAULT 0.0;
ALTER TABLE takana.dishes ADD CONSTRAINT code_dishes_un UNIQUE (code);


CREATE TABLE if not exists discounts
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.discounts ADD code varchar NOT NULL;
ALTER TABLE takana.discounts ADD "name" varchar NULL;
ALTER TABLE takana.discounts ADD value decimal NOT NULL DEFAULT 0.0;
ALTER TABLE takana.discounts ADD percentage decimal NOT NULL DEFAULT 0.0;

ALTER TABLE takana.discounts ADD CONSTRAINT code_discount_un UNIQUE (code);

CREATE TABLE if not exists trucks
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.trucks ADD code varchar NOT NULL;
ALTER TABLE takana.trucks ADD "name" varchar NULL;
ALTER TABLE takana.trucks ADD CONSTRAINT code_trucks_un UNIQUE (code);

CREATE TABLE if not exists orders 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.orders ADD created_at timestamp NOT NULL;
ALTER TABLE takana.orders ADD modify_at timestamp NULL;


CREATE TABLE if not exists dish_items
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.dish_items ADD order_id      serial NOT NULL;
ALTER TABLE takana.dish_items ADD dish_id      serial NOT NULL;

CREATE TABLE if not exists user_trucks
(
    id           SERIAL PRIMARY KEY
);

CREATE TABLE if not exists truck_days
(
    id           SERIAL PRIMARY KEY
);

CREATE TABLE if not exists dish_types
(
    id           SERIAL PRIMARY KEY
);

CREATE TABLE if not exists extra_dishes
(
    id           SERIAL PRIMARY KEY
);
CREATE TABLE if not exists discount_dish_items
(
    id           SERIAL PRIMARY KEY
);