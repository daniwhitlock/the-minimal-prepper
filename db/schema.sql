DROP DATABASE IF EXISTS the_minimal_prepper_db;

CREATE DATABASE the_minimal_prepper_db;

CREATE TABLE articles (
    id INTEGER PRIMARY KEY,
    header TEXT NOT NULL,
    title TEXT NOT NULL,
    article_text TEXT NOT NULL
);

USE the_minimal_prepper_db;

