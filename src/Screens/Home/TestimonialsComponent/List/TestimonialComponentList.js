import { Col } from 'react-bootstrap';
import React from 'react';

import {
  ExampleCardPersonBlue,
  ExampleCardPersonWhite
} from '../TestimonialsComponent.component';
import {
  AfiyaMaritzaImages,
  AkmiliaAswariniImages,
  AyuDewilestariNapitupuluImages,
  BeatrixMarendengImages,
  FachriAkbarImages,
  FandiAfianataDarmawanImages,
  MuhammadHafizhAsadImages,
  NahlaJovialImages,
  PutriAyuditaImages,
  RifkaCharmelitaImages,
  SyahzamiPutraImages
} from '../../../../Assets/Images/testimonials';

export const PutriAyudita = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="Program Academic Writing dari INGGO sangat terstruktur, logis, dan fokus kepada skill siswa yang butuh diperbaiki. Metode pembelajaran seperti idea structuring dan paraphrasing sangat cocok untuk yang sedang mengambil S2. Tutor saya sangat flexible walaupun ada perbedaan waktu antara Indonesia dan Belanda. Aku ngerasa terbantu banget karena sempat kesulitan lulus salah satu mata kuliah karena keterbatasan linguistik untuk membangun argumen di law examku dan dengan bantuan tutorku, Disa, akhirnya aku bisa lulus dan mendapat gelar Masters of Law. Aku sangat merekomendasikan INGGO untuk program Academic Writing."
      person="Putri Ayudita"
      source="Master of Law, University of Amsterdam"
      images={PutriAyuditaImages}
      programs="Academic Writing"
    />
  </Col>
);

export const NahlaJovial = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="Sebelum les di INGGO, saya sudah les IELTS dimana-mana menghabiskan berjuta-juta yang mungkin hingga sampai puluhan, bahkan hingga di lembaga yang terkenal dengan pengajar native speaker. Namun setelah belajar dengan INGGO, kemampuan IELTS saya meningkat pesat. Setelah saya kuliah, saya mengikuti program Academic Writing yang sangat membantu saya memahami cara penulisan yang kritis. Sukses selalu buat INGGO!"
      person="Nahla Jovial"
      source="Master of Arts in Social Policy for Development, Erasmus University of Rotterdam"
      images={NahlaJovialImages}
      programs="IELTS & Academic Writing"
    />
  </Col>
);

export const BeatrixMarendeng = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="Bimbingan Academic Writing dari INGGO benar-benar membantu saya menghadapi tantangan selama berkuliah di luar negeri. Karena saya tidak pernah mendapatkan ilmu tentang academic writing, saya sangat butuh bimbingan yang hanya bisa saya percayakan kepada INGGO. Selama bimbingan, tutor saya benar-benar tahu kebutuhan saya. Bimbingannya juga menggunakan metode yang sangat sederhana dan mudah saya ikuti dan pahami. Alhasil nilai tugas saya yang pertama adalah “Pass with Distinction!” Can’t thank you enough, INGGO!"
      person="Beatrix Marendeng"
      source="Master of Public Health, University of Glasgow"
      images={BeatrixMarendengImages}
      programs="Academic Writing"
    />
  </Col>
);

export const SyahzamiPutra = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="NGGO banyak berjasa kepada saya dalam proses persiapan sekolah hingga proses kuliah saya sekarang. Saya berhutang budi kepada para pengajar di INGGO karena berhasil mengantarkan saya meraih nilai IELTS yang saya butuhkan utk meraih beasiswa dan kuliah di Jepang. Selain itu saya mendapatkan bekal Academic Writing juga sehingga saya dapat meraih nilai yang sangat baik selama saya kuliah. Saya selalu merekomendasikan INGGO kepada rekan kantor saya dan teman-teman lainnya yang ingin persiapan sekolah ke luar negeri, konsultasi, IELTS, maupun kursus Academic Writing yang sangat dibutuhkan dalam pembuatan paper, tugas, maupun tesis."
      person="Syahzami Putra"
      source="Master of Law, Kobe University"
      images={SyahzamiPutraImages}
      programs="Academic Writing"
    />
  </Col>
);

export const AkmiliaAswarini = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="Setelah mengikuti kelas Business English di INGGO, saya jadi bisa lebih banyak mengerti dan berbicara dengan Bahasa Inggris terutama menggunakan istilah-istilah bisnis yang akan berguna untuk karir saya. Yang diajarkan tidak hanya terkait Bahasa tapi juga do's and don'ts. saat berinteraksi dengan rekan bisnis. Tutor saya juga sangat baik dan mendengar kebutuhan saya. Saya selalu top up kelas karena selalu ada insight baru yang saya dapat. Saya pasti akan merekomendasikan INGGO kepada teman-teman saya."
      person="Akmilia Aswarini"
      images={AkmiliaAswariniImages}
      programs="Business English"
    />
  </Col>
);

export const AyuDewilestariNapitupulu = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="INGGO adalah tempat yang paling tepat untuk belajar Business English. Awalnya saya agak ragu karena akan belajar online tapi ternyata sangat efektif. Materi yang disampaikan cukup beragam dan terstruktur, penyampaian tutor juga sangat jelas. Suasana kelas juga sangat komunikatif yang membuat saya makin percaya diri. Sebelum kelas dimulai, tutornya biasanya mengulang kembali materi pelajaran di pertemuan sebelumnya. Les di INGGO, buat saya, adalah pengalaman dan kesempatan yang bagus!"
      person="Ayu Dewilestari Napitupulu"
      images={AyuDewilestariNapitupuluImages}
      programs="Business English"
    />
  </Col>
);

export const AfiyaMaritza = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonBlue
      description="Kelas TOEFL INGGO sangat bagus! Tutor saya sangat sabar dalam mengajar dan juga memberikan banyak pengetahuan baru bagi saya. Pengajaran tutor saya juga sangat interaktif sehingga saya semakin paham materi yang disampaikan."
      images={AfiyaMaritzaImages}
      programs="TOEFL"
      person="Afiya Maritza"
    />
  </Col>
);

export const FachriAkbar = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonWhite
      description="Belajar TOEFL di INGGO seru karena di setiap penyampaian materinya ada intermezzo berupa games atau fun fact jadi suasana kelas ngga membosankan walaupun secara daring. Materi dan tips-tips structure, listening, writing, dan reading yang disampaikan juga bermanfaat banget buat ngerjain soal-soal tes TOEFL."
      images={FachriAkbarImages}
      programs="TOEFL"
      person="Fachri Akbar"
    />
  </Col>
);

export const FandiAfianataDarmawan = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonWhite
      description="Kelas General English di INGGO sangat menyenangkan. Penyampaian materi tutor saya sangat bagus dan pastinya dia sangat sabar menghadapi aku yang banyak banget pertanyaannya. Setiap pertemuan juga sangat seru sehingga lesnya tidak berasa membosankan sama sekali."
      images={FandiAfianataDarmawanImages}
      programs="General English"
      person="Fandi Afianata Darmawan"
    />
  </Col>
);
export const MuhammadHafizhAsad = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonWhite
      description="Paket komplit belajar TOEFL benar-benar hanya ada di INGGO. Materinya sangat to the point, penyampaian tutornya asik banget untuk dan pengajarnya enak diajak diskusi. Pokoknya ga nyesel pernah belajar di INGGO karena ga ngebosenin sama sekali! "
      images={MuhammadHafizhAsadImages}
      programs="TOEFL"
      person="Muhammad Hafizh Asad"
    />
  </Col>
);

export const RifkaCharmelita = () => (
  <Col md={4} xl={4} className="mb-4">
    <ExampleCardPersonWhite
      description="Senang sekali bisa belajar TOEFL di INGGO. Tutorku sangat sabar menjawab pertanyaan-pertanyaanku dan selalu mendorongku untuk berbicara dalam bahasa Inggris walaupun kadang masih terbata-bata. Penyampaian materi juga dikemas dengan seru sehingga waktu belajar 2 jam tidak terasa."
      images={RifkaCharmelitaImages}
      programs="TOEFL"
      person="Rifka Charmelita"
    />
  </Col>
);
