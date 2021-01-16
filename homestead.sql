-- Adminer 4.7.8 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `langs`;
CREATE TABLE `langs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `en` varchar(100) NOT NULL,
  `ro` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `langs` (`id`, `en`, `ro`) VALUES
(1,	'Search products',	'Cauta produse'),
(2,	'List products',	'Listeaza produse'),
(3,	'RO',	'EN'),
(4,	'Ascending price',	'Pret crescator'),
(5,	'Descending price',	'Pret descrescator'),
(6,	'Products list',	'Lista produse'),
(7,	'Search',	'Cauta'),
(8,	'View details',	'Vezi detalii'),
(9,	'Change language',	'Schimba Limba'),
(10,	'Please type a product name',	'Tasteza numele unui produs'),
(11,	'Viewed products',	'Produse vizualizate'),
(12,	'No special characters allowed',	'Caracterele speciale nu sunt permise'),
(13,	'Error',	'Eroare'),
(14,	'Close',	'Inchide');

DROP TABLE IF EXISTS `main_categories`;
CREATE TABLE `main_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `main_categories` (`id`, `name`, `slug`) VALUES
(10,	'Hoodies & Sweatshirts',	'hoodies-and-sweatshirts-24'),
(36,	'Eco Friendly',	'eco-friendly-36');

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `base_price` float NOT NULL,
  `price` float NOT NULL,
  `sku` varchar(100) NOT NULL,
  `visibility` int(50) NOT NULL,
  `status` int(50) NOT NULL,
  `categories` varchar(100) NOT NULL,
  `tax_class` int(50) NOT NULL,
  `main_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `products` (`id`, `name`, `description`, `slug`, `base_price`, `price`, `sku`, `visibility`, `status`, `categories`, `tax_class`, `main_image`) VALUES
(1167,	'Ariel Roll Sleeve Sweatshirt',	'<p>Soft, sleek and subtle, the Ariel Roll Sleeve Sweatshirt is a nuanced fitness garment for all occasions. It works equally well as a workout piece or in a casual social setting.</p>\\n<p>&bull; Purple two-tone lightweight hoodie. <br />&bull; 100% cotton.<br />&bull; Adjustable roll sleeves for Long-Sleeve or 3/4 sleeve.<br />&bull; Casual, comfy piece for running errands or weekend activities.</p>',	'ariel-roll-sleeve-sweatshirt-1167',	39,	47.97,	'WH09',	2,	1,	'10,36',	1,	'https://placehold.it/500x500'),
(1353,	'Nadia Elements Shell',	'<p>Protect yourself from wind and rain in the stylish Nadia Elements Shell. It repels water using hydro-resistant fabric, with fleece lining that adds a touch of warmth. It\'s finished with bold contrast zippers, adjustable cuffs and a hood.</p>\\n<p>&bull; Zippered front. <br />&bull; Zippered side pockets. <br />&bull; Drawstring-adjustable waist and hood. <br />&bull; Machine wash/line dry.<br />&bull; Light blue 1/4 zip pullover.</p>',	'nadia-elements-shell-1353',	69,	84.87,	'WH10',	4,	1,	'10',	1,	'https://placehold.it/500x500'),
(1353,	'Artemis Running Short',	'<p>Discover smooth jogging and chic comfort each time you slip into the Artemis Running Short. A unique maritime-inspired design and oolor theme features a stretchy drawstring waist.</p>\\n<p>&bull; Black rouched shorts with mint waist. <br />&bull; Soft, lightweight construction.<br />&bull; LumaTech&trade; wicking technology.<br />&bull; Semi-fitted.</p>',	'artemis-running-short-1972',	45,	55.35,	'WH11',	4,	1,	'10',	1,	'https://placehold.it/500x500'),
(1769,	'Chloe Compete Tank',	'<p>You\'ve earned your figure, so stay cool and let it do all the talking in the form-fitted, sleek racerback Chloe Compete Tank. Designed for total range of motion and performance, the Nona is made with highly breathable mesh fabric.</p>\\r\\n<p>&bull; Royal blue tank top - nylon/spandex.<br />&bull; Flatlock stitching.<br />&bull; Moisture-wicking fabric. <br />&bull; Ergonomic seaming. <br />&bull; Machine wash/dry.</p>',	'chloe-compete-tank-1769',	39,	47.97,	'WH12',	4,	1,	'36',	1,	'https://placehold.it/500x500'),
(1081,	'Autumn Pullie',	'<p>With ultra-soft fleece fabric and an athletic design, our short-sleeve Autumn Pullie delivers a comfortable fit that makes it an everyday essential. A luxurious roll neck protects you from elements.</p>\\n<p>&bull; Cayenne Short-Sleeve roll neck sweatshirt. <br />&bull; Relaxed fit. <br />&bull; Short-Sleeves. <br />&bull; Machine wash/dry.</p>',	'autumn-pullie-1081',	57,	70.11,	'WH13',	4,	1,	'36',	1,	'https://placehold.it/500x500'),
(1097,	'Miko Pullover Hoodie',	'<p>Enjoy a sleek, slendering look in new Silvia Capri. Its engineer-designed support fabric feels great and gives the illusion of a slimmer fit.</p>\\n<p>&bull; Green striped capri.<br />&bull; Strategic side seam<br />&bull; Comfort gusset with lining.<br />&bull; Flat seaming.<br />&bull; Wide waistband.<br />&bull; Moisture wicking.</p>',	'miko-pullover-hoodie-1097',	69,	84.87,	'WH14',	3,	1,	'36, 10',	1,	'https://placehold.it/500x500'),
(1894,	'Miko Pullover Hoodie 2',	'<p>Enjoy a sleek, slendering look in new Silvia Capri. Its engineer-designed support fabric feels great and gives the illusion of a slimmer fit.</p>\\n<p>&bull; Green striped capri.<br />&bull; Strategic side seam<br />&bull; Comfort gusset with lining.<br />&bull; Flat seaming.<br />&bull; Wide waistband.<br />&bull; Moisture wicking.</p>',	'sylvia-capri-1894',	42,	51.66,	'WH15',	4,	1,	'36',	1,	'https://placehold.it/500x500'),
(1801,	'Antonia Racer Tank',	'<p>You won\'t know what you like best about the Antonia Racer Tank: soft, stretchy, lightweight fabric? Super-cute colorblocked details? Whatever it is, this piece is sure to quickly move to the top of your workout rotation.</p>\\n<p>&bull; Machine wash.<br />&bull; Line dry.</p>',	'antonia-racer-tank-1801',	34,	41.82,	'WH16',	4,	1,	'10',	1,	'https://placehold.it/500x500'),
(1737,	'Nona Fitness Tank',	'<p>It doesn\'t matter if your goal is 5 miles or an hour of Vinyasa, because our Nona Fitness Tank does it all. You don\'t have to sacrifice either -- this v-neck top features smooth, chafe-free seams and a breathable mesh back insert. Cute, too.</p>\\n<p>&bull; Blue/white striped mesh tank.<br />&bull; Relaxed fit. <br />&bull; Chafe-resistant trim around armholes and collar. <br />&bull; Machine wash/dry.</p>',	'nona-fitness-tank-1737',	39,	47.97,	'WH18',	3,	1,	'10',	1,	'https://placehold.it/500x500');

-- 2021-01-16 11:19:55
