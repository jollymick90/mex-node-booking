
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
ALTER TABLE takana.orders ADD user_id      serial NOT NULL;
ALTER TABLE takana.orders ADD truck_id      serial NOT NULL;
ALTER TABLE takana.orders ADD state_order_id      serial NOT NULL;


CREATE TABLE if not exists order_items
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.order_items ADD order_id      serial NOT NULL;
ALTER TABLE takana.order_items ADD dish_id      serial NOT NULL;

CREATE TABLE if not exists user_trucks
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.user_trucks ADD truck_id      serial NOT NULL;
ALTER TABLE takana.user_trucks ADD user_id      serial NOT NULL;

CREATE TABLE if not exists truck_days
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.truck_days ADD truck_id      serial NOT NULL;
ALTER TABLE takana.truck_days ADD day_id      serial NOT NULL;

CREATE TABLE if not exists dish_types
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.dish_types ADD dish_id      serial NOT NULL;
ALTER TABLE takana.dish_types ADD type_id      serial NOT NULL;

CREATE TABLE if not exists extra_dishes
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.extra_dishes ADD dish_item_id      serial NOT NULL;
ALTER TABLE takana.extra_dishes ADD extra_id      serial NOT NULL;

CREATE TABLE if not exists discount_order_items
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.discount_order_items ADD dish_item_id      serial NOT NULL;
ALTER TABLE takana.discount_order_items ADD discount_id      serial NOT NULL;

-- users fk
ALTER TABLE takana.users ADD CONSTRAINT fk_role_users FOREIGN KEY (role_id) REFERENCES takana.roles(id);

-- orders fk
ALTER TABLE takana.orders ADD CONSTRAINT fk_user_orders FOREIGN KEY (user_id) REFERENCES takana.users(id);
ALTER TABLE takana.orders ADD CONSTRAINT fk_truck_orders FOREIGN KEY (truck_id) REFERENCES takana.trucks(id);
ALTER TABLE takana.orders ADD CONSTRAINT fk_state_order_orders FOREIGN KEY (state_order_id) REFERENCES takana.state_orders(id);


-- users order_items fk
ALTER TABLE takana.order_items ADD CONSTRAINT fk_order_order_items FOREIGN KEY (order_id) REFERENCES takana.orders(id);
ALTER TABLE takana.order_items ADD CONSTRAINT fk_dish_order_items FOREIGN KEY (dish_id) REFERENCES takana.dishes(id);

-- users users_truks fk
ALTER TABLE takana.user_trucks ADD CONSTRAINT fk_truck_users_truks FOREIGN KEY (truck_id) REFERENCES takana.trucks(id);
ALTER TABLE takana.user_trucks ADD CONSTRAINT fk_user_users_truks FOREIGN KEY (user_id) REFERENCES takana.users(id);

-- users truck_days fk
ALTER TABLE takana.truck_days ADD CONSTRAINT fk_truck_truck_days FOREIGN KEY (truck_id) REFERENCES takana.trucks(id);
ALTER TABLE takana.truck_days ADD CONSTRAINT fk_day_truck_days FOREIGN KEY (day_id) REFERENCES takana.days(id);

-- users dish_types fk
ALTER TABLE takana.dish_types ADD CONSTRAINT fk_dish_dish_types FOREIGN KEY (dish_id) REFERENCES takana.dishes(id);
ALTER TABLE takana.dish_types ADD CONSTRAINT fk_type_dish_types FOREIGN KEY (type_id) REFERENCES takana.types(id);

-- users extra_dishes fk
ALTER TABLE takana.extra_dishes ADD CONSTRAINT fk_dish_item_extra_dishes FOREIGN KEY (dish_item_id) REFERENCES takana.order_items(id);
ALTER TABLE takana.extra_dishes ADD CONSTRAINT fk_extra_extra_dishes FOREIGN KEY (extra_id) REFERENCES takana.extras(id);

-- users discount_order_items fk
ALTER TABLE takana.discount_order_items ADD CONSTRAINT fk_order_items_discount_order_items FOREIGN KEY (dish_item_id) REFERENCES takana.order_items(id);
ALTER TABLE takana.discount_order_items ADD CONSTRAINT fk_discount_discount_order_items FOREIGN KEY (discount_id) REFERENCES takana.discounts(id);
