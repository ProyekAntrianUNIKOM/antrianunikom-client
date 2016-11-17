-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2016 at 07:00 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `antrianunikom`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`) VALUES
(1, 'bani123', '$2y$10$8r7a3W8xCu8QK7wRydZbbudEhvpiK6b93vBY61vV5tvnVP0DWMUGi');

-- --------------------------------------------------------

--
-- Table structure for table `antrian`
--

CREATE TABLE `antrian` (
  `id_antrian` int(11) NOT NULL,
  `no_antrian` varchar(10) NOT NULL,
  `no_rfid` varchar(80) NOT NULL,
  `id_pelayanan` int(11) NOT NULL,
  `tanggal_antrian` date NOT NULL,
  `waktu_antrian` time NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `antrian`
--

INSERT INTO `antrian` (`id_antrian`, `no_antrian`, `no_rfid`, `id_pelayanan`, `tanggal_antrian`, `waktu_antrian`, `status`) VALUES
(66, '001', '0002163786', 1, '2016-11-17', '03:43:42', 1),
(67, '002', '0002163786', 1, '2016-11-17', '04:24:48', 1),
(68, '003', '0002163786', 1, '2016-11-17', '04:33:31', 1),
(69, '004', '0002163786', 1, '2016-11-17', '04:33:36', 1),
(70, '005', '0002163786', 1, '2016-11-17', '04:49:32', 1),
(71, '006', '0002163786', 1, '2016-11-17', '04:49:38', 1);

-- --------------------------------------------------------

--
-- Table structure for table `antrian_terlayani`
--

CREATE TABLE `antrian_terlayani` (
  `id` int(11) NOT NULL,
  `id_antrian` int(11) NOT NULL,
  `operator` int(11) NOT NULL,
  `tanggal_pelayanan` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `antrian_terlayani`
--

INSERT INTO `antrian_terlayani` (`id`, `id_antrian`, `operator`, `tanggal_pelayanan`) VALUES
(457, 66, 1, '2016-11-17 04:07:33'),
(458, 67, 1, '2016-11-17 04:39:56'),
(459, 68, 2, '2016-11-17 04:41:46'),
(460, 69, 2, '2016-11-17 04:47:22'),
(461, 70, 2, '2016-11-17 04:49:42'),
(462, 71, 1, '2016-11-17 04:49:49');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id_banner` int(11) NOT NULL,
  `judul` varchar(40) NOT NULL,
  `banner_img` varchar(100) NOT NULL,
  `tgl_posting` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id_banner`, `judul`, `banner_img`, `tgl_posting`) VALUES
(8, 'THE WINNER MICROSOFT IMAGINE CUP 2015', '434969-304501-slider_imagine.png', '2016-09-28'),
(9, 'GEDUNG BARU UNIKOM', '711803-bg-img.jpg', '2016-09-28'),
(10, 'PERESMIAN GEDUNG BARU UNIKOM', '412556-20160830_123303.jpg', '2016-09-28');

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id_berita` int(11) NOT NULL,
  `judul` varchar(80) NOT NULL,
  `isi` text NOT NULL,
  `foto` varchar(100) NOT NULL,
  `tgl_posting` varchar(20) NOT NULL,
  `tgl_expire` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id_berita`, `judul`, `isi`, `foto`, `tgl_posting`, `tgl_expire`) VALUES
(39, 'Aher: Kita Dorong Kampus Swasta Jadi World Class University', '<div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">BANDUNG-Gubernur Jawa Barat Ahmad Heryawan (Aher) meresmikan gedung kampus baru Universitas Komputer Indonesia (Unikom) di Jl. Dipati Ukur Kota Bandung, Selasa (30/8/16). Sebelum meresmikan kampus baru ini, dalam sambutannya Aher mengatakan bahwa dengan hadirnya kampus baru tersebut menjadi tanda bahwa Unikom menjadi salah satu perguruan tinggi swasta yang maju di Jawa Barat.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">"Saya atas nama Pemerintah Provinsi Jawa Barat menyambut sangat baik kampus Unikom baru ini, kalau kampus sudah berani membangun kampus baru seperti 17 lantai ini maka ini secara kasat mata menandakan bahwa kampus ini sudah maju," kata Aher dalam sambutannya.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">Untuk itu, Aher pun mengatakan bahwa pihaknya akan terus mendorong kampus swasta di Jawa Barat agar bisa terus berkembang serta menghasilkan Sumber Daya Manusia (SDM) dengan kualitas unggul. Karena menurut Aher, kampus swasta telah memberikan kontribusi besar dalam menyelamatkan generasi bangsa untuk bisa mengenyam pendidikan tinggi dan meningkatkan Angka Partisipasi Kasar (APK) Perguruan Tinggi masyarakat Jawa Barat hingga 17,47%, dimana pada tahun 2007 hanya sebesar 9,5%.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">"Perguruan Tinggi Swasta harus dikelola dengan baik, karena hanya 25 persen mahasiswa di Indonesia bersekolah di PTN dan sisanya yaitu 75 persen masyarakat memilih PTS menjadi pilihan. Dan dari data tersebut membuktikan kampus swasta sudah mewakili negara kita dalam bidang pendidikan," lanjut Aher.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">Kampus baru Unikom dengan jumlah 17 lantai ini memakan waktu pembangunan selama delapan tahun dan menelan biaya hingga Rp 200 Miliar. Rektor Unikom Eddy Soeryanto Soegoto mengatakan bahwa pembangunan kampus baru ini bertujuan untuk memenuhi sarana dan prasarana pendidikan tinggi dan diharapkan bisa memberikan kontribusi besar bagi pembangunan SDM di Indonesia.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">"Sudah 16 tahun Unikom berkontribusi terhadap pendidikan hingga sampai saat ini berhasil maju menjadi lebih baik," ujar Eddy dalam sambutannya.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">"Pembangunan kampus ini akan dapat memenuhi sarana dan prasarana, juga membangun sumber daya manusia. Tepat hari ini menjadi hari yang ditunggu-tunggu oleh para Civitas Akademika Unikom," tambah Eddy.</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">Sumber:http://www.jabarprov.go.id/index.php/news/18905/2016/08/30/Aher-Kita-Dorong-Kampus-Swasta-Jadi-World-Class-University</div><div id="cke_pastebin" style="font-family: sans-serif; font-size: medium;">&nbsp;</div>', '895080-Aher-Kita-Dorong-Kampus-Swasta-Jadi-World-Class-University.jpg', '2016-09-26', '2016-10-20'),
(40, 'Tim Robotika Unikom Raih 8 Medali di The 12th Annual Robogames 2016', '<p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">BANDUNG-Tim Robotika Universitas Komputer Indonesia (Unikom) berjaya di The 12th Annual Robogames 2016 yang digelar di Alameda County Fairgrounds-Pleasanton, California, Amerika Serikat, 8-10 April 2016. Robot-robot yang dikembangkan divisi robotika itu membawa pulang delapan medal.</p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">Prestasi tersebut semakin memperkuat kepercayaan diri Unikom untuk menjalin kerja sama dengan industri. Rektor Unikom Eddy Soegoto mengatakan, sejumlah kerja sama tengah dikerjakan dengan memanfaatkan robot.</p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">"Kami ingin ada lebih banyak kerja sama dengan industri," kata Eddy seusai konferensi pers kemenangan Tim Robotika di Unikom, Jalan Dipati Ukur, Selasa 12 April 2016.</p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">Ketua Divisi Robotika Unikom Rodi Hartono mengatakan, kemenangan Unikom dalam kompetisi robot itu telah membuktikan bahwa hasil riset mereka dapat diandalkan. Itu sebabnya, semakin banyak pihak yang menawarkan kerja sama. "Saat ini, sudah ada sejumlah projek yang kami kerjakan," ucapnya.</p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">Untuk sementara, jumlah proyek dibatasi dulu karena keterbatasan personel. Keterbatasan personel itu yang menjadi kendala dalam kompetisi.</p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);"><span style="line-height: 22.8571px;">Dalam kompetisi itu, Unikom menyiapkan delapan robot dalam delapan kategori pertandingan. Kategori yang diikuti terdiri dari Open Fire Fighting Robot, Autonomous Robomagellan, Autonomous Nat Car, Open Ribbon Climber, Open Table Top Navigation, Beam Photovore, Beam Speeder, dan Open Line Follower Category. Sedangkan untuk mengoperasikan robot dalam satu tim hanya lima orang termasuk dosen pembimbing.&nbsp;</span></p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">&nbsp;</p><p style="font-size: 16px; color: rgb(51, 51, 51); font-family: Georgia, &quot;Times New Roman&quot;, Times, serif; line-height: 22.8571px; background-color: rgb(249, 249, 249);">sumber:http://www.pikiran-rakyat.com/pendidikan/2016/04/19/tim-robotika-unikom-raih-8-medali-di-12th-annual-robogames-2016-367122</p>', '990292-Tim-Robotika-Unikom-Raih-8-Medali-di-The-12th-Annual-Robogames-2016.jpg', '2016-09-26', '2016-10-20'),
(41, 'UNIKOM TOP 100 Asia Repository Webometrics 2016', '<div style="font-size: medium; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; color: rgb(51, 51, 51); font-family: arial, tahoma, sans-serif; line-height: 15.6px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;">Pemeringkatan Repository Webometrics ini bertujuan untuk menakar aksesibilitas dan komitmen perguruan tinggi atau institusi untuk berbagi dan mempublikasikan pengetahuan dan karya-karya ilmiah yang telah dihasilkan oleh perguruan tinggi tersebut ke seluruh dunia secara terbuka (fulltext open access).</div><div style="font-size: medium; margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; color: rgb(51, 51, 51); font-family: arial, tahoma, sans-serif; line-height: 15.6px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;"><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">Dan yang lebih penting lagi dari sistem pemeringkatan ini adalah untuk mengukur seberapa besar manfaat (impact) yang didapat dari hasil penelitian perguruan tinggi tersebut &nbsp;di mata masyarakat dunia.</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">Indikator dan Bobot Penilaian</div><ol style="margin: 10px 0px 0px 20px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><li style="margin: 0px; padding: 0px 0px 5px 5px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><strong><em>Size</em></strong>&nbsp;adalah jumlah halaman website (html) yang tertangkap oleh mesin pencari (Google), tetapi tidak termasuk rich files. (10%)</li><li style="margin: 0px; padding: 0px 0px 5px 5px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><strong><em>Visibility</em></strong>&nbsp;merupakan jumlah external inlinks yang unik (jumlah backlinks) dan jumlah Referred Domains atau domain asal yang backlink yang diterima oleh domain web universitas dan terindeks di Majestic SEO. Visibility ini menyiratkan besarnya impact terhadap sebuah website/repositori. (25%)</li><li style="margin: 0px; padding: 0px 0px 5px 5px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><strong><em>Rich Files</em></strong>&nbsp;merupakan jumlah file dokumen (Adobe Acrobat (.pdf), Adobe PostScript (.ps, .eps), Microsoft Word (.doc,.docx) and Microsoft Powerpoint (.ppt, .pptx) yang online di bawah domain website universitas yang tertangkap oleh mesin pencari (Google) (10%)</li><li style="margin: 0px; padding: 0px 0px 5px 5px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><strong><em>Scholar</em></strong>&nbsp;merupakan jumlah semua artikel-artikel ilmiah yang terindeks di Google Scholar (bobot 30%) dan jumlah artikel-artikel ilmiah lima tahun terakhir di Google Scholar (2010-2014).</li><li style="margin: 0px; padding: 0px 0px 5px 5px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><strong><em>Altmetrics</em></strong>. Sumber lainnya yang berasal dari : Academia, Facebook, LinkedIn, Mendeley, ResearchGATE, Slideshare, Twitter, Wikipedia (semua edisi), Wikipedia (edisi bahasa Inggris); YouTube &amp; Scribd (baru dalam edisi ini). Bobot: 25% (dikombinasikan dengan Visibilitas di tabel)</li></ol><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">&nbsp;</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><strong>Berikut Tabel Hasil Pemeringkatan Repository Webometrics 2016</strong></div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">Unikom Menempati Rangking 12 Untuk Indonesia, dan 550 Dunia, sedangkan Untuk Asia berada di urutan 76 dan di&nbsp; Asia Tenggara di Posisi 23</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">&nbsp;</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><img src="http://kampus.unikom.ac.id/c/m/myspace/u/taryana/n/L2svcmVwb3MuanBn/ms/400/repos.jpg" style="cursor: default;"></div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">&nbsp;</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">&nbsp;</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">&nbsp;</div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;"><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; line-height: 20px; text-align: justify; background: rgb(244, 244, 237);">&nbsp;</div></div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">Sumber:&nbsp;<a href="http://repositories.webometrics.info/" style="color: rgb(51, 85, 119);">http://repositories.webometrics.info/</a></div><div style="margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: baseline; word-wrap: break-word; background: transparent;">&nbsp;</div></div></div>', '941311-UNIKOM-TOP-100-Asia-Repository-Webometrics-2016.jpg', '2016-10-11', '2016-10-20'),
(42, 'MAHASISWA UNIKOM MENJADI PEMENANG MOJANG JAJAKA 2015', '<p>lorem</p>', '374845-MAHASISWA-UNIKOM-MENJADI-PEMENANG-MOJANG-JAJAKA-2015.jpg', '2016-10-17', '2016-10-20');

-- --------------------------------------------------------

--
-- Table structure for table `loket`
--

CREATE TABLE `loket` (
  `no_loket` int(11) NOT NULL,
  `id_pelayanan` int(11) NOT NULL,
  `keterangan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loket`
--

INSERT INTO `loket` (`no_loket`, `id_pelayanan`, `keterangan`) VALUES
(1, 1, ''),
(2, 1, ''),
(3, 2, ''),
(4, 2, ''),
(5, 3, ''),
(6, 4, ''),
(7, 5, ''),
(8, 6, '');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `no_rfid` varchar(80) NOT NULL,
  `nim` varchar(10) NOT NULL,
  `nama` varchar(80) NOT NULL,
  `prodi` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`no_rfid`, `nim`, `nama`, `prodi`) VALUES
('0001957136', '10115518', 'Daniyal Ahmad Rizaldhi', 'Teknik Informatika'),
('0002163786', '10115246', 'Ramdhan Rizki', 'Teknik Informatika'),
('0009292619', '10116014', 'Fathia Azzahra', 'Teknik Informatika');

-- --------------------------------------------------------

--
-- Table structure for table `operator`
--

CREATE TABLE `operator` (
  `id_operator` int(11) NOT NULL,
  `no_loket` int(11) NOT NULL,
  `nama` varchar(60) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `operator`
--

INSERT INTO `operator` (`id_operator`, `no_loket`, `nama`, `username`, `password`) VALUES
(1, 1, 'Faizal Zebua', 'operator1', '$2y$10$8r7a3W8xCu8QK7wRydZbbudEhvpiK6b93vBY61vV5tvnVP0DWMUGi'),
(2, 2, 'Tioreza', 'operator2', '$2y$10$8r7a3W8xCu8QK7wRydZbbudEhvpiK6b93vBY61vV5tvnVP0DWMUGi'),
(3, 3, 'Ramdhan', 'operator3', '$2y$10$8r7a3W8xCu8QK7wRydZbbudEhvpiK6b93vBY61vV5tvnVP0DWMUGi'),
(4, 4, 'Ramdhan', 'operator4', '$2y$10$8r7a3W8xCu8QK7wRydZbbudEhvpiK6b93vBY61vV5tvnVP0DWMUGi');

-- --------------------------------------------------------

--
-- Table structure for table `pelayanan`
--

CREATE TABLE `pelayanan` (
  `id_pelayanan` int(11) NOT NULL,
  `nama_pelayanan` varchar(80) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pelayanan`
--

INSERT INTO `pelayanan` (`id_pelayanan`, `nama_pelayanan`, `keterangan`) VALUES
(1, 'Pindah Jurusan', 'Pelayanan Akademik UNIKOM'),
(2, 'Cuti Akademik ', 'Pelayanan Administrasi Unikom'),
(3, 'Sanksi Akademik ', ''),
(4, 'Pengunduran Diri ', ''),
(5, 'Aktif Kembali Kuliah', ''),
(6, 'Tidak Aktif Kuliah', '');

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `id` int(11) NOT NULL,
  `id_antrian` int(11) NOT NULL,
  `no_loket` int(11) DEFAULT NULL,
  `no_antrian` varchar(11) DEFAULT NULL,
  `nim` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`id`, `id_antrian`, `no_loket`, `no_antrian`, `nim`, `nama`) VALUES
(1, 71, 1, '006', '10115246', 'Ramdhan Rizki'),
(2, 70, 2, '005', '10115246', 'Ramdhan Rizki'),
(3, 0, 3, '-', '', ''),
(4, 0, 4, '-', '', ''),
(5, 0, 5, '-', ' ', ' '),
(6, 0, 6, '-', '', ''),
(7, 0, 7, '-', '', ''),
(8, 0, 8, '-', '', ''),
(9, 71, 9, '006', '10115246', 'Ramdhan Rizki');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id_video` int(11) NOT NULL,
  `judul` varchar(80) NOT NULL,
  `video` varchar(100) NOT NULL,
  `tgl_posting` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `antrian`
--
ALTER TABLE `antrian`
  ADD PRIMARY KEY (`id_antrian`),
  ADD KEY `no_rfid` (`no_rfid`),
  ADD KEY `no_loket` (`id_pelayanan`);

--
-- Indexes for table `antrian_terlayani`
--
ALTER TABLE `antrian_terlayani`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_antrian` (`id_antrian`),
  ADD KEY `operator` (`operator`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id_banner`);

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id_berita`);

--
-- Indexes for table `loket`
--
ALTER TABLE `loket`
  ADD PRIMARY KEY (`no_loket`),
  ADD KEY `id_pelayanan` (`id_pelayanan`),
  ADD KEY `id_pelayanan_2` (`id_pelayanan`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`no_rfid`);

--
-- Indexes for table `operator`
--
ALTER TABLE `operator`
  ADD PRIMARY KEY (`id_operator`),
  ADD KEY `no_loket` (`no_loket`);

--
-- Indexes for table `pelayanan`
--
ALTER TABLE `pelayanan`
  ADD PRIMARY KEY (`id_pelayanan`);

--
-- Indexes for table `temp`
--
ALTER TABLE `temp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id_video`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `antrian`
--
ALTER TABLE `antrian`
  MODIFY `id_antrian` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `antrian_terlayani`
--
ALTER TABLE `antrian_terlayani`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=463;
--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id_banner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id_berita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `operator`
--
ALTER TABLE `operator`
  MODIFY `id_operator` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pelayanan`
--
ALTER TABLE `pelayanan`
  MODIFY `id_pelayanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `temp`
--
ALTER TABLE `temp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id_video` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `antrian`
--
ALTER TABLE `antrian`
  ADD CONSTRAINT `antrian_ibfk_1` FOREIGN KEY (`no_rfid`) REFERENCES `mahasiswa` (`no_rfid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `antrian_ibfk_2` FOREIGN KEY (`id_pelayanan`) REFERENCES `loket` (`no_loket`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
