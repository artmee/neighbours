create table if not exists users(
    user_id integer not null primary key,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    middle_name varchar(100) null,
    city varchar(100) not null,
    street varchar(100) not null,
    house_number integer not null,
    login varchar(100) not null,
    password varchar(100) not null
);

create table if not exists bulletins(
    bulletin_id integer not null primary key,
    title varchar(300) not null,
    text varchar(2000) not null,
    publication_date date not null,
    user_id integer not null references users(user_id) on delete cascade
);

create sequence if not exists users_id_seq increment 1 start 1;
create sequence if not exists bulletins_id_seq increment 1 start 1;