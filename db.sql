
-- USER

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

-- LookUp
-- Week day
CREATE TABLE if not exists days 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.days ADD code varchar NOT NULL;
ALTER TABLE takana.days ADD "name" varchar NULL;
ALTER TABLE takana.days ADD COLUMN day_of_week smallint CHECK (day_of_week BETWEEN 0 AND 6) NULL;
ALTER TABLE takana.days ADD holiday date NULL;
ALTER TABLE takana.days ADD custom_day date NULL;
ALTER TABLE takana.days ADD CONSTRAINT code_days_un UNIQUE (code);
ALTER TABLE takana.days
ADD CONSTRAINT only_one_field_not_null
CHECK (
    (day_of_week IS NULL AND holiday IS NULL AND custom_day IS NULL) OR
    (day_of_week IS NOT NULL AND holiday IS NULL AND custom_day IS NULL) OR
    (day_of_week IS NULL AND holiday IS NOT NULL AND custom_day IS NULL) OR
    (day_of_week IS NULL AND holiday IS NULL AND custom_day IS NOT NULL)
);

-- Tag for dishes or other
CREATE TABLE if not exists tags 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.tags ADD code varchar NOT NULL;
ALTER TABLE takana.tags ADD "name" varchar NULL;
ALTER TABLE takana.tags ADD CONSTRAINT code_tags_un UNIQUE (code);

-- Tag for dishes or other
CREATE TABLE if not exists categories 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.categories ADD code varchar NOT NULL;
ALTER TABLE takana.categories ADD "name" varchar NULL;
ALTER TABLE takana.categories ADD CONSTRAINT code_category_un UNIQUE (code);

-- The place/items on menu - also drinks and sauces
CREATE TABLE if not exists dishes
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.dishes ADD code varchar NOT NULL;
ALTER TABLE takana.dishes ADD "name" varchar NULL;
ALTER TABLE takana.dishes ADD "description" varchar NULL;
ALTER TABLE takana.dishes ADD note varchar NULL;
ALTER TABLE takana.dishes ADD price decimal NOT NULL DEFAULT 0.0;
ALTER TABLE takana.dishes ADD CONSTRAINT code_dishes_un UNIQUE (code);

-- Added for order item's
CREATE TABLE if not exists extras
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.extras ADD code varchar NOT NULL;
ALTER TABLE takana.extras ADD "name" varchar NULL;
ALTER TABLE takana.extras ADD price decimal NOT NULL DEFAULT 0.0;
ALTER TABLE takana.extras ADD CONSTRAINT code_extras_un UNIQUE (code);

-- Discounts applicable to products in the cart
CREATE TABLE if not exists discounts
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.discounts ADD code varchar NOT NULL;
ALTER TABLE takana.discounts ADD "name" varchar NULL;
ALTER TABLE takana.discounts ADD value decimal DEFAULT 0.0;
ALTER TABLE takana.discounts ADD percentage decimal DEFAULT 0.0;
ALTER TABLE takana.discounts ADD CONSTRAINT code_discount_un UNIQUE (code);

-- Trucks available
CREATE TABLE if not exists trucks
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.trucks ADD code varchar NOT NULL;
ALTER TABLE takana.trucks ADD "name" varchar NULL;
ALTER TABLE takana.trucks ADD note varchar NULL;
ALTER TABLE takana.trucks ADD CONSTRAINT code_trucks_un UNIQUE (code);

-- Sites where the trucks are
CREATE TABLE if not exists sites
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.sites ADD code varchar NOT NULL;
ALTER TABLE takana.sites ADD "name" varchar NULL;
ALTER TABLE takana.sites ADD address varchar NULL;

-- State order: Accepted, Reject, Delay, ....
CREATE TABLE if not exists state_orders 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.state_orders ADD code varchar NOT NULL;
ALTER TABLE takana.state_orders ADD "name" varchar NULL;
ALTER TABLE takana.state_orders ADD CONSTRAINT code_states_un UNIQUE (code);

-- Group
--- Order / Comanda 
CREATE TABLE if not exists orders 
(
    id  SERIAL PRIMARY KEY 
);
ALTER TABLE takana.orders ADD created_at timestamp NOT NULL;
ALTER TABLE takana.orders ADD modify_at timestamp NULL;
ALTER TABLE takana.orders ADD user_id      serial NOT NULL;
ALTER TABLE takana.orders ADD truck_id      serial NOT NULL;
ALTER TABLE takana.orders ADD state_order_id      serial NOT NULL;

--- Calendar and site of truck in the week
CREATE TABLE if not exists truck_calendars
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.truck_calendars ADD truck_id      serial NOT NULL;
ALTER TABLE takana.truck_calendars ADD day_id      serial NOT NULL;
ALTER TABLE takana.truck_calendars ADD site_id      serial NOT NULL;
ALTER TABLE takana.truck_calendars ADD start_at time NULL;
ALTER TABLE takana.truck_calendars ADD end_at time NULL;

--- Dishes can added to order
CREATE TABLE if not exists orders_items
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.orders_items ADD order_id      serial NOT NULL;
ALTER TABLE takana.orders_items ADD dish_id      serial NOT NULL;
ALTER TABLE takana.orders_items ADD note varchar NULL;


-- Multi to Multi

CREATE TABLE if not exists dishes_categories
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.dishes_categories ADD dish_id      serial NOT NULL;
ALTER TABLE takana.dishes_categories ADD category_id      serial NOT NULL;

CREATE TABLE if not exists dishes_tags
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.dishes_tags ADD dish_id      serial NOT NULL;
ALTER TABLE takana.dishes_tags ADD tag_id      serial NOT NULL;

CREATE TABLE if not exists extras_order_items
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.extras_order_items ADD order_item_id      serial NOT NULL;
ALTER TABLE takana.extras_order_items ADD extra_id      serial NOT NULL;

CREATE TABLE if not exists discounts_order_items
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.discounts_order_items ADD dish_item_id      serial NOT NULL;
ALTER TABLE takana.discounts_order_items ADD discount_id      serial NOT NULL;

CREATE TABLE if not exists users_trucks
(
    id           SERIAL PRIMARY KEY
);
ALTER TABLE takana.users_trucks ADD truck_id      serial NOT NULL;
ALTER TABLE takana.users_trucks ADD user_id      serial NOT NULL;


-- users fk
ALTER TABLE takana.users ADD CONSTRAINT fk_role_users FOREIGN KEY (role_id) REFERENCES takana.roles(id);

-- orders fk
ALTER TABLE takana.orders ADD CONSTRAINT fk_user_orders FOREIGN KEY (user_id) REFERENCES takana.users(id);
ALTER TABLE takana.orders ADD CONSTRAINT fk_truck_orders FOREIGN KEY (truck_id) REFERENCES takana.trucks(id);
ALTER TABLE takana.orders ADD CONSTRAINT fk_state_order_orders FOREIGN KEY (state_order_id) REFERENCES takana.state_orders(id);

-- users truck_days fk
ALTER TABLE takana.truck_calendars ADD CONSTRAINT fk_truck_truck_calendar FOREIGN KEY (truck_id) REFERENCES takana.trucks(id);
ALTER TABLE takana.truck_calendars ADD CONSTRAINT fk_day_truck_calendar FOREIGN KEY (day_id) REFERENCES takana.days(id);
ALTER TABLE takana.truck_calendars ADD CONSTRAINT fk_site_truck_calendar FOREIGN KEY (site_id) REFERENCES takana.sites(id);

-- users orders_items fk
ALTER TABLE takana.orders_items ADD CONSTRAINT fk_order_order_items FOREIGN KEY (order_id) REFERENCES takana.orders(id);
ALTER TABLE takana.orders_items ADD CONSTRAINT fk_dish_order_items FOREIGN KEY (dish_id) REFERENCES takana.dishes(id);

-- users dishes_categories fk
ALTER TABLE takana.dishes_categories ADD CONSTRAINT fk_dish_dish_category FOREIGN KEY (dish_id) REFERENCES takana.dishes(id);
ALTER TABLE takana.dishes_categories ADD CONSTRAINT fk_category_dish_category FOREIGN KEY (category_id) REFERENCES takana.categories(id);

-- users dishes_tags fk
ALTER TABLE takana.dishes_tags ADD CONSTRAINT fk_dish_dish_tags FOREIGN KEY (dish_id) REFERENCES takana.dishes(id);
ALTER TABLE takana.dishes_tags ADD CONSTRAINT fk_tag_dish_tags FOREIGN KEY (tag_id) REFERENCES takana.tags(id);

-- users extras_order_items fk
ALTER TABLE takana.extras_order_items ADD CONSTRAINT fk_dish_item_extras_order_items FOREIGN KEY (order_item_id) REFERENCES takana.orders_items(id);
ALTER TABLE takana.extras_order_items ADD CONSTRAINT fk_extra_extras_order_items FOREIGN KEY (extra_id) REFERENCES takana.extras(id);

-- users discounts_order_items fk
ALTER TABLE takana.discounts_order_items ADD CONSTRAINT fk_order_items_discount_order_items FOREIGN KEY (dish_item_id) REFERENCES takana.orders_items(id);
ALTER TABLE takana.discounts_order_items ADD CONSTRAINT fk_discount_discount_order_items FOREIGN KEY (discount_id) REFERENCES takana.discounts(id);


-- users users_trucks fk
ALTER TABLE takana.users_trucks ADD CONSTRAINT fk_truck_users_truks FOREIGN KEY (truck_id) REFERENCES takana.trucks(id);
ALTER TABLE takana.users_trucks ADD CONSTRAINT fk_user_users_truks FOREIGN KEY (user_id) REFERENCES takana.users(id);
