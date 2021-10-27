create table valid_color (id serial not null primary key, color_name text, count integer);

insert into valid_color(color_name) VALUES ('Orange'), ('Purple'), ('Lime');

create table invalid_color (id serial not null primary key, color_name text, count integer);