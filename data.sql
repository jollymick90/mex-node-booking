-- Insert Data
-- Roles
INSERT INTO takana.roles (code, "name") VALUES('CUSTOMER', 'customer');
INSERT INTO takana.roles (code, "name") VALUES('TRUCK', 'truck');
INSERT INTO takana.roles (code, "name") VALUES('ADMIN', 'admin');

-- Trucks
INSERT INTO takana.trucks (code, "name") VALUES('TRUCK_1', 'Taco Magico');
INSERT INTO takana.trucks (code, "name") VALUES('TRUCK_2', 'Nacho Volante');

-- Sites
INSERT INTO takana.sites (code, "name", address) VALUES('SITE_1', 'Camposampiero', '');
INSERT INTO takana.sites (code, "name", address) VALUES('SITE_2', 'San Vito di Altivole', '');
INSERT INTO takana.sites (code, "name", address) VALUES('SITE_3', 'Montebelluna', '');
INSERT INTO takana.sites (code, "name", address) VALUES('SITE_4', 'Valdobiadene', '');
INSERT INTO takana.sites (code, "name", address) VALUES('SITE_5', 'Volpago del Montello', '');
INSERT INTO takana.sites (code, "name", address) VALUES('SITE_6', 'Castelfranco', '');

-- Days
INSERT INTO takana.days (code, "name") VALUES('MON', 'monday');
INSERT INTO takana.days (code, "name") VALUES('TUE', 'tuesday');
INSERT INTO takana.days (code, "name") VALUES('WED', 'wednesday');
INSERT INTO takana.days (code, "name") VALUES('THU', 'thursday');
INSERT INTO takana.days (code, "name") VALUES('FRI', 'friday');
INSERT INTO takana.days (code, "name") VALUES('SAT', 'saturday');
INSERT INTO takana.days (code, "name") VALUES('SUN', 'sunday');

-- Tags
INSERT INTO takana.tags (code, "name") VALUES('NEWS', 'news');
INSERT INTO takana.tags (code, "name") VALUES('SPECIAL', 'special');
INSERT INTO takana.tags (code, "name") VALUES('SPICE', 'spice');
INSERT INTO takana.tags (code, "name") VALUES('VEGETARIAN', 'vegetarian');
INSERT INTO takana.tags (code, "name") VALUES('GLUTEN', 'glutine');
INSERT INTO takana.tags (code, "name") VALUES('FRUTTA_SECCA', 'frutta_secca');

-- Categories
INSERT INTO takana.categories (code, "name") VALUES('FOOD', 'food');
INSERT INTO takana.categories (code, "name") VALUES('DRINK', 'drink');
INSERT INTO takana.categories (code, "name") VALUES('BURRITO', 'burrito');
INSERT INTO takana.categories (code, "name") VALUES('TACOS', 'tacos');
INSERT INTO takana.categories (code, "name") VALUES('DOS_TACOS', 'dos tacos');
INSERT INTO takana.categories (code, "name") VALUES('PANINI', 'panini');
INSERT INTO takana.categories (code, "name") VALUES('PIATTI_TIPICI', 'panini');

-- Dishes
INSERT INTO takana.dishes (code, "name", "description", "note", "price") VALUES('BURR_BORR', 'Burrito Borracho', 'Straccetti di pollo marinati', '', 9);
INSERT INTO takana.dishes (code, "name", "description", "note", "price") VALUES('NACH_QUES', 'Nachos Queso', 'Chips di mais serviti con salsa di formaggi e jalapenos', '', 5);
INSERT INTO takana.dishes (code, "name", "description", "note", "price") VALUES('BANDITO', 'Bandito', 'Pane, pulled pork, pomodoro', '', 9);


-- Extras
INSERT INTO takana.extras (code, "name", price) VALUES('KETCHUP', 'panini', 0.5);

-- Discount
INSERT INTO takana.discounts (code, "name", "value", "percentage") VALUES('FAMILY', 'family', 5, null);
INSERT INTO takana.discounts (code, "name", "value", "percentage") VALUES('DRINK3x2', 'family', null, 100);
