-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Jan 07. 17:19
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `csapat01`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `questionType` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `answer1` text NOT NULL,
  `answer2` text NOT NULL,
  `answer3` text NOT NULL,
  `answer4` text NOT NULL,
  `correctAnswer` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `quiz`
--

INSERT INTO `quiz` (`id`, `questionType`, `question`, `answer1`, `answer2`, `answer3`, `answer4`, `correctAnswer`, `active`) VALUES
(1, 'földrajz', 'Mi Franciaország fővárosa?', 'Berlin', 'Madrid', 'Párizs', 'Róma', 3, 0),
(2, 'élet', 'Mi az élet értelme?', '40', '42', '43', '44', 2, 0),
(3, 'tudomány', 'Hány éves a kapitány?', '40', '42', '43', '44', 2, 0),
(4, 'zene', 'Ki a híres magyar zeneszerző, aki megalkotta a „Magyar rapszódiákat”?', 'Kodály Zoltán', 'Liszt Ferenc', 'Bartók Béla', 'Erkel Ferenc', 2, 0),
(5, 'fizika', 'Ki fedezte fel a gravitáció törvényét?', 'Albert Einstein', 'Nikola Tesla', 'Isaac Newton', 'Galileo Galilei', 3, 0),
(6, 'kémia', 'Milyen elem jele a „Fe”?', 'Kén', 'Fluor', 'Foszfor', 'Vas', 4, 0),
(7, 'mozi', 'Melyik film nyerte az első Oscar-díjat legjobb film kategóriában?', 'Titanic', 'Casablanca', 'Szárnyak', 'Elfújta a szél', 1, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
