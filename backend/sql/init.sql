CREATE DATABASE suloskaja
DEFAULT CHARACTER SET utf8
COLLATE utf8_hungarian_ci;

CREATE TABLE kaja (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nev VARCHAR(255) NOT NULL,
    ar INT NOT NULL,
    finom BOOLEAN NOT NULL,
    lejarat DATE NOT NULL,
    mennyiseg INT NOT NULL
)

INSERT INTO kaja (nev, ar, finom, lejarat, mennyiseg) VALUES
('Pizza', 1500, true, '2024-12-31', 10),
('Hamburger', 1200, true, '2024-11-30', 20),
('Saláta', 800, false, '2024-10-15', 15),
('Tészta', 1000, true, '2024-09-30', 25),
('Sütemény', 500, false, '2024-08-31', 30),
('Leves', 700, true, '2024-07-31', 12),
('Szendvics', 900, false, '2024-06-30', 18),
('Gyümölcs', 600, true, '2024-05-31', 22),
('Joghurt', 400, false, '2024-04-30', 28),
('Fagylalt', 300, true, '2024-03-31', 35);
